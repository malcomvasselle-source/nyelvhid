/* Moteur de rendu, état, interactions */

// fréquence d'usage (js/freq-data.js) — même logique de normalisation que celle
// utilisée pour générer FREQ_RANK, pour que les clés correspondent exactement.
function freqLookupKey(hu){
  let s = hu.trim();
  if(s.includes('...')) return null; // fragment de suffixe grammatical, pas un mot
  if(s.includes('/')) s = s.split('/')[0].trim();
  s = s.replace(/[?!.,;:]+$/,'').trim();
  if(/\s/.test(s)) return null; // phrase à plusieurs mots
  return s.toLowerCase();
}

// flatten with stable ids
const ALL_WORDS = [];
VOCAB.forEach(cat=>{
  cat.words.forEach((w,i)=>{
    const freqKey = freqLookupKey(w[0]);
    const freqRank = freqKey ? (FREQ_RANK[freqKey] || null) : null;
    ALL_WORDS.push({
      id:cat.id+'-'+i, cat:cat.id, catLabel:cat.label, hu:w[0], fr:w[1], note:w[2]||'', mod:w[3]||null,
      freqRank, essential: !!(freqRank && freqRank<=FREQ_BADGE_THRESHOLD)
    });
  });
});

function vocabModuleLabel(modId){
  const g = VOCAB_MODULE_GROUPS.find(x=>x.id===modId);
  return g ? `${g.level} · M${g.num} (${g.title})` : modId;
}

/* ============================================================
   STATE / STORAGE
   ============================================================ */
const LS_SRS = 'nyelvhid_srs_v1';
const LS_STREAK = 'nyelvhid_streak_v1';
const BOX_INTERVALS = [0, 1, 3, 7, 16]; // days

function loadSRS(){ try{ return JSON.parse(localStorage.getItem(LS_SRS)) || {}; }catch(e){ return {}; } }
function saveSRS(s){ try{ localStorage.setItem(LS_SRS, JSON.stringify(s)); }catch(e){} }
let srs = loadSRS();

function todayStr(){ return new Date().toISOString().slice(0,10); }
function updateStreak(){
  let s; try{ s = JSON.parse(localStorage.getItem(LS_STREAK)) || {count:0,last:null}; }catch(e){ s = {count:0,last:null}; }
  const today = todayStr();
  if(s.last === today){ /* already counted */ }
  else{
    const y = new Date(Date.now()-86400000).toISOString().slice(0,10);
    s.count = (s.last === y) ? (s.count||0)+1 : 1;
    s.last = today;
    try{ localStorage.setItem(LS_STREAK, JSON.stringify(s)); }catch(e){}
  }
  return s.count||1;
}

function wordState(id){
  return srs[id] || {box:0, due:0};
}
function isDue(id){
  return wordState(id).due <= Date.now();
}
function markWord(id, known){
  const st = wordState(id);
  let box = known ? Math.min(st.box+1, BOX_INTERVALS.length-1) : 0;
  const days = BOX_INTERVALS[box];
  srs[id] = {box, due: Date.now() + days*86400000};
  saveSRS(srs);
}
function learnedCount(){
  return Object.values(srs).filter(s=>s.box>=2).length;
}
function dueTodayCount(list){
  return list.filter(w=>isDue(w.id)).length;
}

/* ============================================================
   TIMER (temps passé par niveau CECRL)
   ============================================================ */
const LS_TIMER = 'nyelvhid_timer_v1';
function loadTimer(){
  try{ return JSON.parse(localStorage.getItem(LS_TIMER)) || {totals:{}, runningSince:null, runningLevel:null}; }
  catch(e){ return {totals:{}, runningSince:null, runningLevel:null}; }
}
function saveTimer(){ try{ localStorage.setItem(LS_TIMER, JSON.stringify(timer)); }catch(e){} }
let timer = loadTimer();

/* ============================================================
   OBJECTIF HEBDOMADAIRE (1h/jour, 5 jours/semaine = 5h/semaine)
   Journal du temps réellement passé, jour par jour, alimenté par
   le même chrono que ci-dessus — indépendant du cumul par niveau.
   ============================================================ */
const LS_DAILY_TIME = 'nyelvhid_daily_time_v1';
function loadDailyTime(){ try{ return JSON.parse(localStorage.getItem(LS_DAILY_TIME)) || {}; }catch(e){ return {}; } }
function saveDailyTime(){ try{ localStorage.setItem(LS_DAILY_TIME, JSON.stringify(dailyTime)); }catch(e){} }
let dailyTime = loadDailyTime(); // {"2026-09-11": secondes, ...}
function addDailyTimeSeconds(sec){
  if(!sec || sec<=0) return;
  const d = todayStr();
  dailyTime[d] = (dailyTime[d]||0) + sec;
  saveDailyTime();
}
const DAY_GOAL_SECONDS = 3600;      // 1h/jour
const WEEK_GOAL_DAYS = 5;
const WEEK_GOAL_SECONDS = WEEK_GOAL_DAYS * DAY_GOAL_SECONDS; // 5h/semaine
const LS_CONFETTI_WEEK = 'nyelvhid_confetti_week_v1'; // évite de refêter le même objectif hebdo plusieurs fois
function isoWeekMonday(date){
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // 0=lundi ... 6=dimanche
  d.setDate(d.getDate() - day);
  d.setHours(0,0,0,0);
  return d;
}
function weekDayKeys(){
  const monday = isoWeekMonday(new Date());
  const keys = [];
  for(let i=0;i<7;i++){
    const d = new Date(monday);
    d.setDate(monday.getDate()+i);
    keys.push(d.toISOString().slice(0,10));
  }
  return keys;
}
function weekStats(){
  const keys = weekDayKeys();
  const today = todayStr();
  let totalSec = 0, daysReached = 0;
  const days = keys.map(k=>{
    let sec = dailyTime[k] || 0;
    if(k===today && timer.runningLevel && timer.runningSince){
      sec += (Date.now() - timer.runningSince) / 1000;
    }
    totalSec += sec;
    const reached = sec >= DAY_GOAL_SECONDS;
    if(reached) daysReached++;
    return {date:k, sec, reached};
  });
  return {days, totalSec, daysReached};
}
function weekTotalsMap(){
  const map = {};
  Object.keys(dailyTime).forEach(d=>{
    const wk = isoWeekMonday(new Date(d+'T00:00:00')).toISOString().slice(0,10);
    map[wk] = (map[wk]||0) + (dailyTime[d]||0);
  });
  return map;
}
function weeklyStreak(){
  const map = weekTotalsMap();
  const thisWeekKey = isoWeekMonday(new Date()).toISOString().slice(0,10);
  let streak = (map[thisWeekKey]||0) >= WEEK_GOAL_SECONDS ? 1 : 0;
  const cursor = new Date(thisWeekKey+'T00:00:00');
  cursor.setDate(cursor.getDate()-7);
  while(true){
    const key = cursor.toISOString().slice(0,10);
    if((map[key]||0) >= WEEK_GOAL_SECONDS){ streak++; cursor.setDate(cursor.getDate()-7); }
    else break;
  }
  return streak;
}
function renderWeekGoal(){
  const fill = document.getElementById('weekGoalFill');
  const pill = document.getElementById('weekGoalPill');
  const daysBox = document.getElementById('weekGoalDays');
  const msg = document.getElementById('weekGoalMsg');
  if(!fill) return;

  const {days, totalSec, daysReached} = weekStats();
  const hours = totalSec/3600;
  const pct = Math.min(100, (totalSec/WEEK_GOAL_SECONDS)*100);
  fill.style.width = pct+'%';

  if(pill) pill.innerHTML = `<b>${hours.toLocaleString('fr-FR',{minimumFractionDigits:1,maximumFractionDigits:1})}</b> / ${WEEK_GOAL_DAYS} h`;

  const dayLabels = ['L','M','M','J','V','S','D'];
  const todayKey = todayStr();
  if(daysBox){
    daysBox.innerHTML = days.map((d,i)=>{
      const cls = d.reached ? 'done' : (d.sec>0 ? 'partial' : '');
      const isToday = d.date===todayKey;
      return `<div class="weekgoal-day ${cls} ${isToday?'is-today':''}" title="${(d.sec/3600).toLocaleString('fr-FR',{maximumFractionDigits:1})} h">
        <span class="wd-label">${dayLabels[i]}</span>
        <span class="wd-dot">${d.reached?'✓':''}</span>
      </div>`;
    }).join('');
  }
  if(msg){
    const streak = weeklyStreak();
    const streakTxt = streak>=2 ? ` · 🔥 ${streak} semaines d'affilée` : '';
    if(totalSec >= WEEK_GOAL_SECONDS){
      msg.textContent = `🏆 Objectif atteint ! ${daysReached}/${WEEK_GOAL_DAYS} jours à ≥1h cette semaine${streakTxt}.`;
      const wk = isoWeekMonday(new Date()).toISOString().slice(0,10);
      let celebrated=''; try{ celebrated = localStorage.getItem(LS_CONFETTI_WEEK)||''; }catch(e){}
      if(celebrated !== wk){
        try{ localStorage.setItem(LS_CONFETTI_WEEK, wk); }catch(e){}
        launchConfetti();
      }
    } else {
      const remaining = Math.max(0, (WEEK_GOAL_SECONDS - totalSec)/3600);
      msg.textContent = `${daysReached}/${WEEK_GOAL_DAYS} jours à ≥1h — encore ${remaining.toLocaleString('fr-FR',{maximumFractionDigits:1})} h pour atteindre l'objectif${streakTxt}.`;
    }
  }
}

const LS_ACADEMY_DONE = 'nyelvhid_academy_done_v1';
function loadAcademyDone(){ try{ return JSON.parse(localStorage.getItem(LS_ACADEMY_DONE)) || {}; }catch(e){ return {}; } }
function saveAcademyDone(){ try{ localStorage.setItem(LS_ACADEMY_DONE, JSON.stringify(academyDone)); }catch(e){} }
let academyDone = loadAcademyDone();
let academyDialogueMode = {}; // transient, per-session: {moduleId: 'formal'|'informal'}

const LS_GRAMMAR_DONE = 'nyelvhid_grammar_rules_done_v1';
function loadGrammarDone(){ try{ return JSON.parse(localStorage.getItem(LS_GRAMMAR_DONE)) || {}; }catch(e){ return {}; } }
function saveGrammarDone(){ try{ localStorage.setItem(LS_GRAMMAR_DONE, JSON.stringify(grammarDone)); }catch(e){} }
let grammarDone = loadGrammarDone(); // {"m4-r0": true, ...} — id = "<moduleId>-r<ruleIndex>"

const LS_DAILY_TEST = 'nyelvhid_daily_test_v1';
function loadDailyScores(){ try{ return JSON.parse(localStorage.getItem(LS_DAILY_TEST)) || {}; }catch(e){ return {}; } }
function saveDailyScores(){ try{ localStorage.setItem(LS_DAILY_TEST, JSON.stringify(dailyScores)); }catch(e){} }
let dailyScores = loadDailyScores(); // {"2026-09-11": {score:8, total:10}, ...}
let dailyTest = {questions:[], idx:0, score:0, misses:[], active:false};

function bankedSeconds(levelId){
  let s = timer.totals[levelId] || 0;
  if(timer.runningLevel === levelId && timer.runningSince){
    s += (Date.now() - timer.runningSince) / 1000;
  }
  return s;
}
function toggleTimer(levelId){
  if(timer.runningLevel === levelId){
    // stop / pause
    const elapsed = timer.runningSince ? (Date.now() - timer.runningSince)/1000 : 0;
    timer.totals[levelId] = bankedSeconds(levelId);
    timer.runningSince = null;
    timer.runningLevel = null;
    addDailyTimeSeconds(elapsed);
  } else {
    // switch or start: bank whatever was running for another level first
    if(timer.runningLevel){
      const elapsed = timer.runningSince ? (Date.now() - timer.runningSince)/1000 : 0;
      timer.totals[timer.runningLevel] = bankedSeconds(timer.runningLevel);
      addDailyTimeSeconds(elapsed);
    }
    timer.runningSince = Date.now();
    timer.runningLevel = levelId;
  }
  saveTimer();
  renderTimerUI();
}
function formatHMS(totalSeconds){
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = String(Math.floor(s/3600)).padStart(2,'0');
  const m = String(Math.floor((s%3600)/60)).padStart(2,'0');
  const sec = String(s%60).padStart(2,'0');
  return `${h}:${m}:${sec}`;
}
function renderTimerUI(){
  const CURRENT_LEVEL = 'a1';
  const secs = bankedSeconds(CURRENT_LEVEL);
  const hours = secs/3600;
  const level = LEVELS.find(l=>l.id===CURRENT_LEVEL);

  const readout = document.getElementById('timerReadout');
  if(readout) readout.textContent = formatHMS(secs);

  const btn = document.getElementById('timerToggle');
  if(btn){
    const running = timer.runningLevel === CURRENT_LEVEL;
    btn.textContent = running ? '⏸ Mettre en pause' : (secs>0 ? '▶ Reprendre' : '▶ Démarrer');
    btn.classList.toggle('running', running);
  }

  const fill = document.getElementById('timerProgressFill');
  const marker = document.getElementById('timerMinMarker');
  if(fill && level){
    const pct = Math.min(100, (hours/level.hoursMax)*100);
    fill.style.width = pct+'%';
    if(marker) marker.style.left = ((level.hoursMin/level.hoursMax)*100)+'%';
  }
  const doneLbl = document.getElementById('timerHoursDone');
  if(doneLbl) doneLbl.textContent = hours.toLocaleString('fr-FR',{minimumFractionDigits:1,maximumFractionDigits:1})+' h';
  const targetLbl = document.getElementById('timerHoursTarget');
  if(targetLbl && level) targetLbl.textContent = `objectif ${level.hoursMin}–${level.hoursMax} h`;

  // header badge
  const badge = document.getElementById('timerBadge');
  const badgeText = document.getElementById('timerBadgeText');
  const running = timer.runningLevel !== null;
  if(badge){
    badge.hidden = !running;
    if(running && badgeText) badgeText.textContent = formatHMS(bankedSeconds(timer.runningLevel));
  }

  renderWeekGoal();
}
setInterval(()=>{ if(timer.runningLevel) renderTimerUI(); }, 1000);
document.getElementById('timerBadge').addEventListener('click', ()=>goto('parcours'));

/* ============================================================
   SPEECH
   Every Hungarian word and sentence used in the app was pre-recorded
   offline with a real Hungarian speech engine (espeak-ng + the mbrola
   hu1 voice) and embedded above in AUDIO. This sounds right regardless
   of what's installed on the visitor's device. The browser's built-in
   speechSynthesis is only used as a last resort, and only when a
   genuine Hungarian voice is installed — never a French/English voice
   misreading Hungarian spelling rules, which is the "toute pourrie"
   result this replaces.
   ============================================================ */
let huVoice = null;
function pickVoice(){
  if(!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  huVoice = voices.find(v=>v.lang && v.lang.toLowerCase().startsWith('hu')) || null;
}
if('speechSynthesis' in window){
  pickVoice();
  window.speechSynthesis.onvoiceschanged = pickVoice;
}
function speakFallback(text){
  if(!huVoice) return; // no genuine Hungarian voice on this device: stay silent rather than butcher it
  if(!('speechSynthesis' in window)) return;
  try{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'hu-HU';
    u.voice = huVoice;
    u.rate = 0.92;
    window.speechSynthesis.speak(u);
  }catch(e){}
}
const audioPlayer = new Audio();
function playClip(id, fallbackText){
  const src = AUDIO[id];
  if(src){
    try{
      audioPlayer.pause();
      audioPlayer.src = src;
      audioPlayer.currentTime = 0;
      const p = audioPlayer.play();
      if(p && p.catch) p.catch(()=>{});
      return;
    }catch(e){}
  }
  speakFallback(fallbackText);
}

/* ============================================================
   SHADOWING — s'enregistrer pour comparer sa prononciation
   Rien n'est envoyé ni stocké : l'enregistrement reste en mémoire
   du navigateur le temps de se réécouter, puis disparaît.
   ============================================================ */
let shadowStream = null;
let shadowRecorder = null;
let shadowChunks = [];
let shadowActiveId = null;
let shadowAutoStopTimer = null;

function shadowSupported(){
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
}
function updateShadowButtons(){
  document.querySelectorAll('.shadow-btn').forEach(b=>{
    const isActive = b.dataset.shadow === shadowActiveId;
    b.classList.toggle('recording', isActive);
    b.textContent = isActive ? '⏹' : '🎙️';
    b.title = isActive ? 'Arrêter l’enregistrement' : 'S’enregistrer pour répéter';
  });
}
async function startShadowRecording(id){
  if(!shadowSupported()){
    alert('L’enregistrement audio n’est pas disponible sur ce navigateur.');
    return;
  }
  try{
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    shadowStream = stream;
    shadowChunks = [];
    shadowRecorder = new MediaRecorder(stream);
    shadowRecorder.ondataavailable = e=>{ if(e.data && e.data.size>0) shadowChunks.push(e.data); };
    shadowRecorder.onstop = ()=>{
      const blob = new Blob(shadowChunks, {type: shadowRecorder.mimeType || 'audio/webm'});
      const url = URL.createObjectURL(blob);
      renderShadowPlayback(id, url);
      if(shadowStream){ shadowStream.getTracks().forEach(t=>t.stop()); shadowStream = null; }
    };
    shadowRecorder.start();
    shadowActiveId = id;
    updateShadowButtons();
    clearTimeout(shadowAutoStopTimer);
    shadowAutoStopTimer = setTimeout(()=>{ if(shadowActiveId===id) stopShadowRecording(); }, 8000); // filet de sécurité
  }catch(e){
    alert('Impossible d’accéder au micro (autorisation refusée ou indisponible).');
  }
}
function stopShadowRecording(){
  if(shadowRecorder && shadowRecorder.state !== 'inactive') shadowRecorder.stop();
  shadowActiveId = null;
  clearTimeout(shadowAutoStopTimer);
  updateShadowButtons();
}
function renderShadowPlayback(id, url){
  const box = document.getElementById(id);
  if(!box) return;
  box.hidden = false;
  box.innerHTML = `<audio controls src="${url}"></audio><button class="shadow-clear" title="Effacer">✕</button>`;
  const audioEl = box.querySelector('audio');
  if(audioEl) audioEl.play().catch(()=>{});
  const clearBtn = box.querySelector('.shadow-clear');
  if(clearBtn) clearBtn.addEventListener('click', ()=>{ box.hidden = true; box.innerHTML=''; });
}
document.addEventListener('click', (e)=>{
  const b = e.target.closest('.shadow-btn');
  if(!b) return;
  const id = b.dataset.shadow;
  if(shadowActiveId){
    stopShadowRecording(); // un clic pendant un enregistrement l'arrête toujours (le sien ou un autre)
  } else {
    startShadowRecording(id);
  }
});

/* ============================================================
   MOTION HELPERS (compteurs animés, confettis de célébration)
   ============================================================ */
function prefersReducedMotion(){
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}
function animateCount(el, to, duration){
  if(!el) return;
  duration = duration || 650;
  if(prefersReducedMotion() || to<=0){ el.textContent = to; return; }
  const start = performance.now();
  function step(now){
    const p = Math.min(1, (now-start)/duration);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(eased*to);
    if(p<1) requestAnimationFrame(step);
    else el.textContent = to;
  }
  requestAnimationFrame(step);
}
const CONFETTI_COLORS = ['#C1622B','#A9782F','#3F7A57','#16302B','#E7ECE9'];
function launchConfetti(){
  if(prefersReducedMotion()) return;
  const layer = document.createElement('div');
  layer.className = 'confetti-layer';
  const count = 110;
  for(let i=0;i<count;i++){
    const p = document.createElement('span');
    p.className = 'confetti-piece';
    p.style.left = (Math.random()*100)+'vw';
    p.style.background = CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)];
    p.style.animationDelay = (Math.random()*0.35)+'s';
    p.style.animationDuration = (2+Math.random()*1.3)+'s';
    p.style.setProperty('--drift', Math.round(Math.random()*160-80)+'px');
    p.style.setProperty('--rot', Math.round(Math.random()*360)+'deg');
    layer.appendChild(p);
  }
  document.body.appendChild(layer);
  setTimeout(()=>layer.remove(), 3600);
}

/* ============================================================
   NAV
   ============================================================ */
function positionTabIndicator(){
  const nav = document.getElementById('tabNav');
  const active = nav && nav.querySelector('button.active');
  const indicator = document.getElementById('tabIndicator');
  if(!nav || !active || !indicator) return;
  indicator.style.width = active.offsetWidth+'px';
  indicator.style.left = active.offsetLeft+'px';
}
function goto(tab){
  const apply = ()=>{
    document.querySelectorAll('nav.tabs button').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
    document.querySelectorAll('section.view').forEach(s=>s.classList.toggle('active', s.id==='view-'+tab));
    positionTabIndicator();
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
  };
  if(document.startViewTransition && !prefersReducedMotion()){
    document.startViewTransition(apply);
  } else {
    apply();
  }
}
document.getElementById('tabNav').addEventListener('click', e=>{
  const b = e.target.closest('button[data-tab]');
  if(b) goto(b.dataset.tab);
});
document.querySelectorAll('.navcard').forEach(c=>{
  c.addEventListener('click', ()=>goto(c.dataset.goto));
});
window.addEventListener('resize', ()=>positionTabIndicator());

/* ============================================================
   THEME
   ============================================================ */
const root = document.documentElement;
function applyTheme(t){
  if(t) root.setAttribute('data-theme', t); else root.removeAttribute('data-theme');
  try{ localStorage.setItem('nyelvhid_theme', t||''); }catch(e){}
}
(function initTheme(){
  let saved=''; try{ saved = localStorage.getItem('nyelvhid_theme')||''; }catch(e){}
  if(saved) root.setAttribute('data-theme', saved);
})();
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const cur = root.getAttribute('data-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let next;
  if(!cur) next = prefersDark ? 'light':'dark';
  else if(cur==='dark') next='light';
  else next='dark';
  applyTheme(next);
});

/* ============================================================
   HOME
   ============================================================ */
function renderHome(){
  animateCount(document.getElementById('statLearned'), learnedCount());
  animateCount(document.getElementById('statDue'), dueTodayCount(ALL_WORDS));
  animateCount(document.getElementById('statStreak'), updateStreak());

  const dayIdx = Math.floor(Date.now()/86400000) % ALL_WORDS.length;
  const w = ALL_WORDS[dayIdx];
  document.getElementById('wotdHu').textContent = w.hu;
  document.getElementById('wotdFr').textContent = w.fr;
  document.getElementById('wotdSpeak').onclick = ()=>playClip(w.id, w.hu);
}

/* ============================================================
   PARCOURS (niveaux, programme A1, minuteur)
   ============================================================ */
function renderLevelLadder(){
  document.getElementById('levelLadder').innerHTML = LEVELS.map((l,i)=>{
    const state = l.id==='a1' ? 'is-active' : 'is-future';
    return `<div class="rung ${state}">
      <span class="badge">${l.label}</span>
      <div>
        <div class="rung-name">${l.name}${l.id!=='a1' ? ' <span style=\"font-weight:400;color:var(--text-muted);font-size:.8rem;\">— à venir</span>' : ''}</div>
        <div class="rung-cando">${l.cando}</div>
      </div>
      <div class="rung-hours">${l.hoursMin===l.hoursMax ? l.hoursMax+'+' : l.hoursMin+'–'+l.hoursMax} h</div>
    </div>`;
  }).join('');
}

function goToVocabCat(catId){
  goto('vocab');
  vocabView = 'theme';
  activeCat = catId;
  vocabMode = 'list';
  renderVocabViewToggle();
  renderChips();
  document.querySelectorAll('#vocabMode button').forEach(x=>x.classList.toggle('active', x.dataset.mode==='list'));
  renderVocab();
}
function goToVocabModule(modId){
  goto('vocab');
  vocabView = 'module';
  activeCat = modId;
  vocabMode = 'list';
  renderVocabViewToggle();
  renderChips();
  document.querySelectorAll('#vocabMode button').forEach(x=>x.classList.toggle('active', x.dataset.mode==='list'));
  renderVocab();
}
function goToGrammar(){ goto('gram'); }
function goToQuizPreset(catId){
  goto('quiz');
  setTimeout(()=>{
    const sel = document.getElementById('quizCat');
    if(sel){ sel.value = catId; }
  }, 60);
}
function renderParcours(){
  renderLevelLadder();
  renderAcademyLevelGroups();
  renderTimerUI();
  document.getElementById('timerToggle').onclick = ()=>toggleTimer('a1');
}

/* ============================================================
   VOCAB
   ============================================================ */
let activeCat = 'all';
let vocabView = 'theme'; // 'theme' | 'module'
let vocabMode = 'cards';
let currentCard = null;
let cardFlipped = false;

function currentWordPool(){
  if(activeCat==='all') return ALL_WORDS;
  if(vocabView==='module') return ALL_WORDS.filter(w=>w.mod===activeCat);
  return ALL_WORDS.filter(w=>w.cat===activeCat);
}

function renderVocabViewToggle(){
  const box = document.getElementById('vocabViewToggle');
  if(!box) return;
  box.innerHTML = `
    <button data-view="theme" class="${vocabView==='theme'?'active':''}">Par thème</button>
    <button data-view="module" class="${vocabView==='module'?'active':''}">Par module de l’académie</button>`;
  box.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click', ()=>{
      if(vocabView===b.dataset.view) return;
      vocabView = b.dataset.view;
      activeCat = 'all';
      currentCard = null;
      renderVocabViewToggle();
      renderChips();
      renderVocab();
    });
  });
}

function renderChips(){
  const chips = document.getElementById('vocabChips');
  const cats = vocabView==='module'
    ? [{id:'all', label:'Tous'}].concat(VOCAB_MODULE_GROUPS.map(g=>({id:g.id, label:vocabModuleLabel(g.id)})))
    : [{id:'all', label:'Tous'}].concat(VOCAB.map(c=>({id:c.id,label:c.label})));
  chips.innerHTML = cats.map(c=>`<button class="chip ${c.id===activeCat?'active':''}" data-cat="${c.id}">${c.label}</button>`).join('');
  chips.querySelectorAll('.chip').forEach(ch=>{
    ch.addEventListener('click', ()=>{ activeCat = ch.dataset.cat; currentCard=null; renderChips(); renderVocab(); });
  });
}

function pickCard(){
  const pool = currentWordPool();
  if(pool.length===0) return null;
  const due = pool.filter(w=>isDue(w.id));
  const source = due.length ? due : pool;
  return source[Math.floor(Math.random()*source.length)];
}

function renderFlashzone(){
  const zone = document.getElementById('cardsView');
  const pool = currentWordPool();
  const dueN = dueTodayCount(pool);
  document.getElementById('dueCount').innerHTML = `<b>${dueN}</b> / ${pool.length} à réviser`;

  if(!currentCard || !pool.find(w=>w.id===currentCard.id)){
    currentCard = pickCard();
    cardFlipped = false;
  }
  if(!currentCard){
    zone.innerHTML = `<div class="emptystate"><div class="big-ic">◈</div>Aucun mot dans cette catégorie.</div>`;
    return;
  }
  const w = currentCard;
  const catTag = `${w.catLabel}${w.essential?' <span class="freq-badge" title="Un des mots les plus fréquents du hongrois — à connaître en priorité">★ essentiel</span>':''}`;
  zone.innerHTML = `
    <div class="flashcard-scene">
      <div class="flashcard ${cardFlipped?'flipped':''}" id="flashcardEl">
        <div class="flashcard-face flashcard-front">
          <span class="cat-tag">${catTag}</span>
          <div class="word">${w.hu}</div>
          <span class="hint">Cliquez pour retourner la carte</span>
        </div>
        <div class="flashcard-face flashcard-back">
          <span class="cat-tag">${catTag}</span>
          <span class="back-label">Français</span>
          <div class="word" style="font-size:1.6rem">${w.fr}</div>
          ${w.note?`<div class="note">${w.note}</div>`:''}
          <span class="hint">Cliquez pour revoir le mot</span>
        </div>
      </div>
      <button class="mini-speak flashcard-speak" id="flashSpeak" title="Écouter">🔊</button>
    </div>
    <div class="flash-controls">
      <button class="no" id="btnNo">✕ Je ne savais pas</button>
      <button class="yes" id="btnYes">✓ Je savais</button>
    </div>
  `;
  document.getElementById('flashcardEl').addEventListener('click', function(){
    cardFlipped = !cardFlipped;
    this.classList.toggle('flipped', cardFlipped);
  });
  document.getElementById('flashSpeak').addEventListener('click', (e)=>{
    e.stopPropagation();
    playClip(w.id, w.hu);
  });
  playClip(w.id, w.hu);
  document.getElementById('btnNo').addEventListener('click', (e)=>{
    e.stopPropagation();
    markWord(w.id, false);
    currentCard = null; cardFlipped=false;
    renderFlashzone();
  });
  document.getElementById('btnYes').addEventListener('click', (e)=>{
    e.stopPropagation();
    markWord(w.id, true);
    currentCard = null; cardFlipped=false;
    renderFlashzone();
  });
}

function renderList(){
  const pool = currentWordPool();
  const el = document.getElementById('listView');
  if(pool.length===0){ el.innerHTML = `<div class="emptystate">Aucun mot.</div>`; return; }
  el.innerHTML = pool.map(w=>{
    const box = wordState(w.id).box;
    const dots = [0,1,2,3].map(i=>`<span class="${i<box?'on':''}"></span>`).join('');
    return `<div class="wordrow">
      <button class="mini-speak" data-id="${w.id}" data-say="${w.hu}" title="Écouter">🔊</button>
      <span class="hu">${w.hu}${w.essential?' <span class="freq-badge" title="Un des mots les plus fréquents du hongrois — à connaître en priorité">★</span>':''}</span>
      <span class="fr">${w.fr}${w.note?` <span style="opacity:.65">— ${w.note}</span>`:''}</span>
      <span class="box-ind">${dots}</span>
    </div>`;
  }).join('');
  el.querySelectorAll('.mini-speak').forEach(b=>b.addEventListener('click',()=>playClip(b.dataset.id, b.dataset.say)));
}

function renderVocab(){
  document.getElementById('cardsView').style.display = vocabMode==='cards' ? 'flex':'none';
  document.getElementById('listView').style.display = vocabMode==='list' ? 'flex':'none';
  if(vocabMode==='cards') renderFlashzone(); else renderList();
}

document.getElementById('vocabMode').addEventListener('click', e=>{
  const b = e.target.closest('button[data-mode]');
  if(!b) return;
  vocabMode = b.dataset.mode;
  document.querySelectorAll('#vocabMode button').forEach(x=>x.classList.toggle('active', x===b));
  renderVocab();
});

/* ============================================================
   GRAMMAR
   ============================================================ */
function renderGrammarAcademyRules(){
  const el = document.getElementById('grammarAcademyRules');
  if(!el) return;
  // regroupe les règles de grammaire de chaque module de l'académie, par niveau puis par module,
  // pour que toute nouvelle règle ajoutée à un module apparaisse ici automatiquement.
  const groups = [];
  ACADEMY_MODULES.forEach(m=>{
    let g = groups.find(g=>g.level===m.level && (g.course||'')===(m.course||''));
    if(!g){ g = {level:m.level, course:m.course||'', courseLabel:m.courseLabel||'', modules:[]}; groups.push(g); }
    g.modules.push(m);
  });

  el.innerHTML = groups.map(g=>`
    <div class="level-group">
      <div class="level-group-head">
        <span class="level-group-badge">${g.level}</span>
        ${g.courseLabel?`<span class="level-group-count">${g.courseLabel}</span>`:''}
      </div>
      ${g.modules.map(m=>`
        <div class="grammar-module">
          <p class="grammar-module-title">M${m.num} — ${m.title}</p>
          ${m.rules.map((r,ri)=>{
            const ruleId = `${m.id}-r${ri}`;
            const tableHtml = r.table ? `<table class="paradigm"><tr><th>hongrois</th><th>français</th></tr>${r.table.map(row=>`<tr><td class="hu">${row[0]}</td><td>${row[1]}</td></tr>`).join('')}</table>` : '';
            const exHtml = r.examples ? r.examples.map(e=>`<div class="ex-line"><b>${e[0]}</b> — ${e[1]}</div>`).join('') : '';
            return `<div class="grule" id="grule-${ruleId}">
              <div class="grule-head" data-toggle="${ruleId}">
                <button class="grule-check ${grammarDone[ruleId]?'done':''}" data-check="${ruleId}" title="Marquer comme maîtrisée">✓</button>
                <b class="grule-title">${r.title}</b>
                <span class="grule-caret">▸</span>
              </div>
              <div class="grule-body">
                <div class="grule-body-inner">
                  <p class="lede" style="font-size:.9rem;margin-bottom:8px;">${r.body}</p>
                  ${tableHtml}
                  ${exHtml}
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>`).join('')}
    </div>`).join('');

  document.querySelectorAll('.grule-head').forEach(h=>{
    h.addEventListener('click', (e)=>{
      if(e.target.closest('.grule-check')) return;
      document.getElementById('grule-'+h.dataset.toggle).classList.toggle('open');
    });
  });
  document.querySelectorAll('.grule-check').forEach(c=>{
    c.addEventListener('click', (e)=>{
      e.stopPropagation();
      const id = c.dataset.check;
      grammarDone[id] = !grammarDone[id];
      saveGrammarDone();
      c.classList.toggle('done', !!grammarDone[id]);
    });
  });
}

function renderGrammar(){
  renderGrammarAcademyRules();
}

/* ============================================================
   ACADEMY (modules de l'académie en ligne suivie par l'utilisateur)
   ============================================================ */
function renderAcademyDialogue(m){
  const mode = academyDialogueMode[m.id] || 'formal';
  const lines = m.dialogue[mode];
  const box = document.getElementById('academyDialogue-'+m.id);
  if(!box) return;
  box.innerHTML = `
    <div class="toggle2" id="academyDlgToggle-${m.id}">
      <button data-mode="formal" class="${mode==='formal'?'active':''}">Formel (Ön)</button>
      <button data-mode="informal" class="${mode==='informal'?'active':''}">Familier (te)</button>
    </div>
    <div class="card dialogue">
      <h3>${m.dialogue.title}</h3>
      <p class="shadow-hint">🎙️ Clique sur le micro pour t'enregistrer en répétant la phrase, puis réécoute-toi.</p>
      ${lines.map((l,li)=>{
        const shadowId = `shadow-${m.id}-${mode}-${li}`;
        return `
        <div class="line">
          <div class="line-spk">
            <button class="mini-speak" data-id="acad-${m.id}-${mode}-${li}" data-say="${l[0].replace(/"/g,'&quot;')}" title="Écouter">🔊</button>
            <span class="hu">${l[0]}</span>
            <button class="shadow-btn" data-shadow="${shadowId}" title="S'enregistrer pour répéter">🎙️</button>
          </div>
          <span class="fr">${l[1]}</span>
          <div class="shadow-playback" id="${shadowId}" hidden></div>
        </div>`;
      }).join('')}
    </div>`;
  box.querySelector('.toggle2').addEventListener('click', e=>{
    const b = e.target.closest('button[data-mode]');
    if(!b) return;
    academyDialogueMode[m.id] = b.dataset.mode;
    renderAcademyDialogue(m);
  });
  box.querySelectorAll('.mini-speak').forEach(b=>b.addEventListener('click', ()=>playClip(b.dataset.id, b.dataset.say)));
}

function renderAcademyModuleBody(m){
  const rulesHtml = m.rules.map(r=>{
    const tableHtml = r.table ? `<table class="paradigm"><tr><th>hongrois</th><th>français</th></tr>${r.table.map((row,i)=>`<tr><td class="hu"><button class="mini-speak" data-id="acad-${m.id}-rule-${i}" data-say="${row[0]}" title="Écouter">🔊</button> ${row[0]}</td><td>${row[1]}</td></tr>`).join('')}</table>` : '';
    const exHtml = r.examples ? r.examples.map((e,i)=>`<div class="ex-line"><button class="mini-speak" data-id="acad-${m.id}-ex-${i}" data-say="${e[0].replace(/"/g,'&quot;')}" title="Écouter">🔊</button> <b>${e[0]}</b> — ${e[1]}</div>`).join('') : '';
    return `<div class="academy-rule">
      <b class="rt">${r.title}</b>
      <p class="lede" style="font-size:.9rem;margin-bottom:8px;">${r.body}</p>
      ${tableHtml}
      ${exHtml}
    </div>`;
  }).join('');

  const pt = m.personTable;
  const personTableHtml = pt ? `
    <div class="academy-section">
      <p class="academy-section-title">${pt.title}</p>
      <p class="lede" style="font-size:.9rem;margin-bottom:10px;">${pt.body}</p>
      <div class="person-table-wrap">
      <table class="paradigm">
        <tr><th></th>${pt.cols.map(c=>`<th>${c}</th>`).join('')}</tr>
        ${pt.rows.map(row=>`<tr><td style="font-weight:600;white-space:nowrap;">${row[0]}</td><td class="hu">${row[1]}</td><td class="hu">${row[2]}</td><td class="hu">${row[3]}</td></tr>`).join('')}
      </table>
      </div>
    </div>` : '';

  const vocabBlockHtml = m.vocabCat ? `
    <div class="academy-section academy-vocab-note">
      <div>
        <p class="academy-section-title" style="margin-bottom:4px;">Vocabulaire</p>
        <p class="lede" style="margin:0;font-size:.9rem;">Métiers, nationalités et quelques phrases utiles — ajoutés à tes flashcards et à ton quiz.</p>
      </div>
      <button class="unit-link-btn" data-goto-vocab="${m.vocabCat}">Réviser ce vocabulaire</button>
    </div>` : (m.vocab ? `
    <div class="academy-section">
      <p class="academy-section-title">Vocabulaire du module</p>
      <table class="paradigm"><tr><th>hongrois</th><th>français</th></tr>${m.vocab.map((w,i)=>`<tr><td class="hu"><button class="mini-speak" data-id="acad-${m.id}-voc-${i}" data-say="${w[0].replace(/"/g,'&quot;')}" title="Écouter">🔊</button> ${w[0]}</td><td>${w[1]}${w[2]?` <span style="color:var(--text-muted);">— ${w[2]}</span>`:''}</td></tr>`).join('')}</table>
    </div>` : '');

  const exercisesHtml = m.exercises.map((ex,exi)=>{
    if(ex.type==='fill'){
      return `<div class="academy-section">
        <p class="academy-section-title">${ex.title}</p>
        ${ex.items.map((it,ii)=>`
          <div class="exo-item">
            <div class="exo-prompt">${it.before}<b>____</b>${it.after} <span style="color:var(--text-muted);font-family:var(--font-body);">(${it.note})</span></div>
            <div class="exo-row">
              <input class="exo-input" type="text" data-ans="${it.answer}" placeholder="…">
              <button class="exo-check-btn" data-mod="${m.id}" data-ex="${exi}" data-it="${ii}">Vérifier</button>
            </div>
            <div class="exo-feedback"></div>
          </div>`).join('')}
      </div>`;
    }
    if(ex.type==='truefalse'){
      return `<div class="academy-section">
        <p class="academy-section-title">${ex.title}</p>
        ${ex.items.map(it=>`
          <div class="exo-item tf-item" data-ans="${it.answer}">
            <div class="exo-prompt">${it.text}</div>
            <div class="exo-row">
              <button class="exo-check-btn tf-btn" data-val="true">Vrai</button>
              <button class="exo-check-btn tf-btn" data-val="false">Faux</button>
            </div>
            <div class="exo-feedback" data-note="${(it.note||'').replace(/"/g,'&quot;')}"></div>
          </div>`).join('')}
      </div>`;
    }
    if(ex.type==='translate'){
      return `<div class="academy-section">
        <p class="academy-section-title">${ex.title}</p>
        ${ex.items.map(it=>`
          <div class="exo-translate-item">
            <div class="exo-translate-fr">${it.fr}</div>
            <button class="exo-reveal-btn">Voir la réponse</button>
            <div class="exo-answer">${it.hu}</div>
          </div>`).join('')}
      </div>`;
    }
    return '';
  }).join('');

  return `
    <div class="academy-section">
      <p class="academy-section-title">Grammaire</p>
      ${rulesHtml}
    </div>
    ${personTableHtml}
    ${vocabBlockHtml}
    ${exercisesHtml}
    <div class="academy-section">
      <p class="academy-section-title">Dialogue</p>
      <div id="academyDialogue-${m.id}"></div>
    </div>`;
}

function renderAcademyLevelGroups(){
  // regroupe les modules par niveau (dans l'ordre d'apparition, donc l'ordre du cours)
  const groups = [];
  ACADEMY_MODULES.forEach(m=>{
    let g = groups.find(g=>g.level===m.level && (g.course||'')===(m.course||''));
    if(!g){ g = {level:m.level, course:m.course||'', courseLabel:m.courseLabel||'', modules:[]}; groups.push(g); }
    g.modules.push(m);
  });

  document.getElementById('levelGroups').innerHTML = groups.map(g=>{
    const doneCount = g.modules.filter(m=>academyDone[m.id]).length;
    return `<div class="level-group">
      <div class="level-group-head">
        <span class="level-group-badge">${g.level}</span>
        <span class="level-group-count">${g.courseLabel?g.courseLabel+' · ':''}${doneCount}/${g.modules.length} modules terminés</span>
      </div>
      <div class="academy-list">
        ${g.modules.map(m=>`
          <div class="academy-module" id="academy-${m.id}">
            <div class="academy-head" data-toggle="${m.id}">
              <span class="academy-num">M${m.num}</span>
              <button class="academy-check ${academyDone[m.id]?'done':''}" data-check="${m.id}" title="Marquer comme terminé">✓</button>
              <div class="academy-head-text"><b>${m.title}</b><span>${m.source}</span></div>
              <span class="academy-caret">▸</span>
            </div>
            <div class="academy-body"><div class="academy-body-inner">${renderAcademyModuleBody(m)}</div></div>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');

  document.querySelectorAll('.academy-head').forEach(h=>{
    h.addEventListener('click', (e)=>{
      if(e.target.closest('.academy-check')) return;
      const el = document.getElementById('academy-'+h.dataset.toggle);
      const wasOpen = el.classList.contains('open');
      el.classList.toggle('open');
      if(!wasOpen){
        const m = ACADEMY_MODULES.find(x=>x.id===h.dataset.toggle);
        renderAcademyDialogue(m);
      }
    });
  });
  document.querySelectorAll('.academy-check').forEach(c=>{
    c.addEventListener('click', (e)=>{
      e.stopPropagation();
      const id = c.dataset.check;
      academyDone[id] = !academyDone[id];
      saveAcademyDone();
      c.classList.toggle('done', !!academyDone[id]);
    });
  });
  document.querySelectorAll('[data-goto-vocab]').forEach(b=>{
    b.addEventListener('click', ()=>goToVocabModule(b.dataset.gotoVocab));
  });
  document.querySelectorAll('.tf-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.tf-item');
      const fb = item.querySelector('.exo-feedback');
      const ok = (btn.dataset.val === item.dataset.ans);
      item.querySelectorAll('.tf-btn').forEach(b=>b.classList.remove('ok','bad'));
      btn.classList.add(ok?'ok':'bad');
      fb.textContent = (ok ? '✓ Correct' : '✗ Raté') + (fb.dataset.note ? ' — ' + fb.dataset.note : '');
      fb.className = 'exo-feedback ' + (ok?'ok':'bad');
    });
  });
  document.querySelectorAll('.exo-check-btn:not(.tf-btn)').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.exo-item');
      const input = item.querySelector('.exo-input');
      const fb = item.querySelector('.exo-feedback');
      const ans = input.dataset.ans;
      const val = input.value.trim().toLowerCase();
      const ok = val.length>0 && val === ans.toLowerCase();
      input.classList.toggle('ok', ok);
      input.classList.toggle('bad', !ok);
      fb.textContent = ok ? '✓ Correct' : `✗ Réponse : ${ans}`;
      fb.className = 'exo-feedback ' + (ok?'ok':'bad');
    });
  });
  document.querySelectorAll('.exo-input').forEach(inp=>{
    inp.addEventListener('keydown', e=>{
      if(e.key==='Enter'){ e.preventDefault(); inp.closest('.exo-item').querySelector('.exo-check-btn').click(); }
    });
  });
  document.querySelectorAll('.exo-reveal-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const ans = btn.closest('.exo-translate-item').querySelector('.exo-answer');
      ans.classList.toggle('shown');
      btn.textContent = ans.classList.contains('shown') ? 'Masquer la réponse' : 'Voir la réponse';
    });
  });

  // ouvre par défaut le premier module non terminé, pour reprendre là où l'utilisateur s'était arrêté
  if(ACADEMY_MODULES.length){
    const firstTodo = ACADEMY_MODULES.find(m=>!academyDone[m.id]) || ACADEMY_MODULES[0];
    const el = document.getElementById('academy-'+firstTodo.id);
    if(el){ el.classList.add('open'); renderAcademyDialogue(firstTodo); }
  }
}

/* ============================================================
   QUIZ
   ============================================================ */
let quiz = {questions:[], idx:0, score:0, misses:[], active:false};

function buildQuestion(targetPool, distractPool, usedIds){
  let w;
  let tries=0;
  do{ w = targetPool[Math.floor(Math.random()*targetPool.length)]; tries++; }
  while(usedIds.has(w.id) && tries<40);
  usedIds.add(w.id);
  const dir = Math.random()<0.5 ? 'hu2fr' : 'fr2hu';
  const prompt = dir==='hu2fr' ? w.hu : w.fr;
  const correct = dir==='hu2fr' ? w.fr : w.hu;
  const distractCandidates = distractPool.filter(x=>x.id!==w.id);
  const shuffled = distractCandidates.slice().sort(()=>Math.random()-0.5).slice(0,3);
  const options = shuffled.map(x=> dir==='hu2fr' ? x.fr : x.hu).concat([correct]).sort(()=>Math.random()-0.5);
  return {dir, prompt, correct, options, word:w};
}

/* ============================================================
   TEST QUOTIDIEN (10 questions notées /10, tirées en priorité
   parmi les mots à réviser aujourd'hui — répétition espacée)
   ============================================================ */
function startDailyTest(){
  const TOTAL = 10;
  const due = ALL_WORDS.filter(w=>isDue(w.id));

  // "difficulté désirable" : même quand il y a assez de mots dus pour remplir
  // tout le test, on glisse volontairement 2-3 mots déjà bien maîtrisés
  // (boîte >= 3) parmi eux — les retrouver de temps en temps, mélangés à des
  // mots plus durs, consolide mieux la mémoire qu'un test 100% mots faciles à réviser.
  const known = ALL_WORDS.filter(w=>!isDue(w.id) && wordState(w.id).box>=3);
  const knownSlots = due.length > 3 ? Math.min(3, known.length) : 0;

  const duePicks = due.slice().sort(()=>Math.random()-0.5).slice(0, TOTAL - knownSlots);
  const knownPicks = known.slice().sort(()=>Math.random()-0.5).slice(0, knownSlots);
  let pool = duePicks.concat(knownPicks);

  if(pool.length < TOTAL){
    const already = new Set(pool.map(w=>w.id));
    const rest = ALL_WORDS.filter(w=>!already.has(w.id)).sort(()=>Math.random()-0.5);
    pool = pool.concat(rest);
  }
  pool = pool.slice(0, Math.min(TOTAL, pool.length)).sort(()=>Math.random()-0.5);

  const used = new Set();
  const qs = pool.map(w=>buildQuestion([w], ALL_WORDS, used));
  dailyTest = {questions:qs, idx:0, score:0, misses:[], active:true};
  renderDailyTest();
}

function finishDailyTest(){
  const today = todayStr();
  dailyScores[today] = {score:dailyTest.score, total:dailyTest.questions.length};
  saveDailyScores();
  dailyTest.active = false;
  renderDailyTest();
  const dueLbl = document.getElementById('statDue');
  if(dueLbl) dueLbl.textContent = dueTodayCount(ALL_WORDS);
  if(dailyTest.score === dailyTest.questions.length && dailyTest.questions.length>0) launchConfetti();
}

function renderDailyTest(){
  const area = document.getElementById('dailyTestBody');
  const btn = document.getElementById('dailyTestBtn');
  const titleEl = document.getElementById('dailyTestTitle');
  if(!area || !btn || !titleEl) return;

  if(dailyTest.active){
    btn.style.display = 'none';
    titleEl.textContent = 'Test en cours…';
    const q = dailyTest.questions[dailyTest.idx];
    area.innerHTML = `
      <div class="progressbar"><div style="width:${Math.round(dailyTest.idx/dailyTest.questions.length*100)}%"></div></div>
      <div class="card qcard">
        <div class="qdir">${q.dir==='hu2fr' ? 'Traduisez en français' : 'Traduisez en hongrois'}</div>
        <div class="qword">${q.prompt}</div>
        <div class="choices" id="dailyChoicesBox">
          ${q.options.map(o=>`<button class="choice-btn" data-opt="${o.replace(/"/g,'&quot;')}">${o}</button>`).join('')}
        </div>
        <div class="qfoot" style="color:var(--text-muted);font-family:var(--font-mono);font-size:.8rem;">Question ${dailyTest.idx+1} / ${dailyTest.questions.length} · Score : ${dailyTest.score}</div>
      </div>`;
    document.querySelectorAll('#dailyChoicesBox .choice-btn').forEach(bt=>{
      bt.addEventListener('click', ()=>{
        const chosen = bt.dataset.opt;
        const ok = chosen === q.correct;
        document.querySelectorAll('#dailyChoicesBox .choice-btn').forEach(b=>{
          b.disabled = true;
          if(b.dataset.opt === q.correct) b.classList.add('correct');
          else if(b===bt) b.classList.add('wrong');
        });
        if(ok) dailyTest.score++;
        else dailyTest.misses.push(q);
        markWord(q.word.id, ok); // le test quotidien alimente aussi la répétition espacée
        playClip(q.word.id, q.word.hu);
        setTimeout(()=>{
          dailyTest.idx++;
          if(dailyTest.idx < dailyTest.questions.length) renderDailyTest();
          else finishDailyTest();
        }, 850);
      });
    });
    return;
  }

  btn.style.display = '';
  const today = todayStr();
  const todayScore = dailyScores[today];
  btn.textContent = todayScore ? 'Refaire le test' : 'Commencer (10 questions)';
  titleEl.textContent = todayScore ? `Aujourd’hui : ${todayScore.score}/${todayScore.total}` : 'Prêt·e pour le test d’aujourd’hui ?';

  const days = Object.keys(dailyScores).sort().reverse().slice(0,30);
  area.innerHTML = days.length ? `
    <div class="dailytest-history">
      ${days.map(d=>{
        const s = dailyScores[d];
        const dateLabel = new Date(d+'T00:00:00').toLocaleDateString('fr-FR',{day:'2-digit',month:'short'});
        const cls = s.score>=8?'sc-good':s.score>=5?'sc-mid':'sc-low';
        return `<div class="dailytest-row"><span class="dailytest-date">${dateLabel}</span><span class="dailytest-score ${cls}">${s.score}/${s.total}</span></div>`;
      }).join('')}
    </div>` : `<p class="lede" style="margin:14px 0 0;">Fais ton premier test pour commencer ton historique.</p>`;
}
document.getElementById('dailyTestBtn').addEventListener('click', startDailyTest);

function renderQuizSetup(){
  const area = document.getElementById('quizArea');
  const catOptions = [{id:'all',label:'Tous les thèmes'}].concat(VOCAB.map(c=>({id:c.id,label:c.label})));
  area.innerHTML = `
    <div class="card quiz-setup">
      <p class="eyebrow">Configuration</p>
      <h2 style="margin-bottom:4px;">Prêt à tester votre vocabulaire ?</h2>
      <p class="lede" style="margin:0 auto 6px;">Questions à choix multiple, dans les deux sens.</p>
      <div class="grid cols-2" style="max-width:520px;margin:18px auto;">
        <div style="text-align:left;">
          <label style="font-size:.78rem;color:var(--text-muted);font-family:var(--font-mono);text-transform:uppercase;">Thème</label>
          <select id="quizCat" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text);margin-top:6px;">
            ${catOptions.map(c=>`<option value="${c.id}">${c.label}</option>`).join('')}
          </select>
        </div>
        <div style="text-align:left;">
          <label style="font-size:.78rem;color:var(--text-muted);font-family:var(--font-mono);text-transform:uppercase;">Nombre de questions</label>
          <div class="num-choice" style="justify-content:flex-start;margin-top:6px;" id="quizNum">
            ${[5,10,15].map((n,i)=>`<button class="chip ${i===0?'active':''}" data-n="${n}">${n}</button>`).join('')}
          </div>
        </div>
      </div>
      <button class="bigbtn" id="startQuiz">Commencer</button>
    </div>`;

  let numQ = 5;
  document.getElementById('quizNum').addEventListener('click', e=>{
    const b = e.target.closest('button[data-n]');
    if(!b) return;
    numQ = parseInt(b.dataset.n);
    document.querySelectorAll('#quizNum .chip').forEach(x=>x.classList.toggle('active', x===b));
  });
  document.getElementById('startQuiz').addEventListener('click', ()=>{
    const catId = document.getElementById('quizCat').value;
    const pool = catId==='all' ? ALL_WORDS : ALL_WORDS.filter(w=>w.cat===catId);
    if(pool.length<4){ alert('Ce thème n’a pas assez de mots pour un quiz.'); return; }
    const used = new Set();
    const n = Math.min(numQ, pool.length);
    const qs = [];
    for(let i=0;i<n;i++) qs.push(buildQuestion(pool, pool, used));
    quiz = {questions:qs, idx:0, score:0, misses:[], active:true};
    renderQuizQuestion();
  });
}

function renderQuizQuestion(){
  const area = document.getElementById('quizArea');
  const q = quiz.questions[quiz.idx];
  const pct = Math.round((quiz.idx)/quiz.questions.length*100);
  area.innerHTML = `
    <div class="progressbar"><div style="width:${pct}%"></div></div>
    <div class="card qcard">
      <div class="qdir">${q.dir==='hu2fr' ? 'Traduisez en français' : 'Traduisez en hongrois'}</div>
      <div class="qword">${q.prompt}</div>
      <div class="choices" id="choicesBox">
        ${q.options.map(o=>`<button class="choice-btn" data-opt="${o.replace(/"/g,'&quot;')}">${o}</button>`).join('')}
      </div>
      <div class="qfoot" style="color:var(--text-muted);font-family:var(--font-mono);font-size:.8rem;">Question ${quiz.idx+1} / ${quiz.questions.length} · Score : ${quiz.score}</div>
    </div>`;
  document.querySelectorAll('#choicesBox .choice-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const chosen = btn.dataset.opt;
      const ok = chosen === q.correct;
      document.querySelectorAll('#choicesBox .choice-btn').forEach(b=>{
        b.disabled = true;
        if(b.dataset.opt === q.correct) b.classList.add('correct');
        else if(b===btn) b.classList.add('wrong');
      });
      if(ok) quiz.score++;
      else quiz.misses.push(q);
      playClip(q.word.id, q.word.hu); // always reinforce the Hungarian pronunciation after answering
      setTimeout(()=>{
        quiz.idx++;
        if(quiz.idx < quiz.questions.length) renderQuizQuestion();
        else renderQuizResult();
      }, 850);
    });
  });
}

function renderQuizResult(){
  const area = document.getElementById('quizArea');
  const total = quiz.questions.length;
  if(quiz.score === total && total>0) launchConfetti();
  area.innerHTML = `
    <div class="card resultcard">
      <p class="eyebrow">Résultat</p>
      <div class="score tnum">${quiz.score}/${total}</div>
      <p class="lede" style="margin:10px auto 0;">${quiz.score===total ? 'Parfait — kiváló !' : quiz.score/total>=0.7 ? 'Très bien joué.' : 'Continuez, ça vient.'}</p>
      ${quiz.misses.length ? `<div class="reviewlist">
        <b style="font-family:var(--font-body);font-size:.85rem;">À revoir</b>
        ${quiz.misses.map(m=>`<div class="reviewrow"><span>${m.prompt}</span><span class="miss">${m.correct}</span></div>`).join('')}
      </div>` : ''}
      <button class="bigbtn" style="margin-top:24px;" id="retryQuiz">Nouveau quiz</button>
    </div>`;
  document.getElementById('retryQuiz').addEventListener('click', renderQuizSetup);
}

/* ============================================================
   INIT
   ============================================================ */
renderHome();
renderParcours();
renderVocabViewToggle();
renderChips();
renderVocab();
renderDailyTest();
renderGrammar();
renderQuizSetup();
positionTabIndicator();
