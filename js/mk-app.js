/* ============================================================
   APP MAGYAROK — parcours au format des manuels MagyarOK
   (Parcours / Vocabulaire / Grammaire / Exercices) + accès à l’« App de base Malcom ».
   Indépendant du moteur de l’app de base (js/app.js) : il n’en réutilise que playClip().
   ============================================================ */

/* ---------- état persistant ---------- */
const MK_LS = 'nyelvhid_mk_v1';
function mkLoad(){
  try{ return Object.assign({mods:{}, sets:{}, gram:{}}, JSON.parse(localStorage.getItem(MK_LS)) || {}); }
  catch(e){ return {mods:{}, sets:{}, gram:{}}; }
}
let mkState = mkLoad();
function mkSave(){ try{ localStorage.setItem(MK_LS, JSON.stringify(mkState)); }catch(e){} }

/* ---------- utilitaires ---------- */
const mkEsc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const mkNorm = s => String(s).toLowerCase().replace(/[–—−]/g,'-').replace(/[?!.,;:]/g,'').replace(/\s+/g,' ').trim();
const mkModule = id => MK_MODULES.find(m => m.id === id);
const mkShuffle = a => { const r = a.slice(); for(let i=r.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; };
function mkSay(id, text){ if(typeof playClip === 'function') playClip(id, text); }

/* ---------- navigation ---------- */
let mkCurrentTab = 'mk-home';
function mkPositionIndicator(){
  const nav = document.getElementById('mkNav');
  const active = nav && nav.querySelector('button.active');
  const ind = document.getElementById('mkIndicator');
  if(!nav || !active || !ind || !active.offsetWidth) return;
  ind.style.width = active.offsetWidth + 'px';
  ind.style.left = active.offsetLeft + 'px';
}
function mkGoto(tab){
  if(tab === 'mk-base'){ mkSetMode('base'); return; }
  mkCurrentTab = tab;
  document.querySelectorAll('#mkNav button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('section.view').forEach(s => s.classList.toggle('active', s.id === 'view-' + tab));
  ({ 'mk-home':mkRenderHome, 'mk-parcours':mkRenderParcours, 'mk-vocab':mkRenderVocab,
     'mk-gram':mkRenderGrammar, 'mk-ex':mkRenderExercises }[tab] || (()=>{}))();
  mkPositionIndicator();
  window.scrollTo({top:0});
}
function mkSetMode(mode){
  if(mode === 'base'){
    document.body.classList.remove('mode-mk');
    if(typeof goto === 'function') goto('home');
  } else {
    document.body.classList.add('mode-mk');
    document.querySelectorAll('section.view').forEach(s => s.classList.remove('active'));
    mkGoto(mkCurrentTab);
  }
}
document.getElementById('mkNav').addEventListener('click', e => {
  const b = e.target.closest('button[data-tab]');
  if(b) mkGoto(b.dataset.tab);
});
document.getElementById('baseBack').addEventListener('click', () => mkSetMode('mk'));
window.addEventListener('resize', mkPositionIndicator);

/* ---------- progression ---------- */
function mkProgress(){
  const mods = MK_MODULES.length;
  const modsDone = MK_MODULES.filter(m => mkState.mods[m.id]).length;
  const sets = MK_CHAPTERS.flatMap(c => c.exercises);
  const setsDone = sets.filter(s => mkState.sets[s.id]).length;
  const gram = MK_CHAPTERS.flatMap(c => c.grammar);
  const gramDone = gram.filter(g => mkState.gram[g.id]).length;
  const words = MK_MODULES.reduce((n, m) => n + (m.vocab ? m.vocab.length : 0), 0);
  return {mods, modsDone, sets: sets.length, setsDone, gram: gram.length, gramDone, words};
}

/* ============================================================
   EXERCICES : rendu + vérification (réutilisé par modules et cahier)
   ============================================================ */
function mkItemsHtml(block, uid){
  const t = block.type;
  if(t === 'fill'){
    return block.items.map((it, i) => `
      <div class="exo-item mk-item" data-kind="fill" data-ans="${mkEsc(it.answer)}">
        <div class="exo-prompt">${mkEsc(it.before)}<b>____</b>${mkEsc(it.after)} <span class="mk-note">(${mkEsc(it.note)})</span></div>
        <div class="exo-row">
          <input class="exo-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…">
          <button class="exo-check-btn mk-check">Vérifier</button>
        </div>
        <div class="exo-feedback"></div>
      </div>`).join('');
  }
  if(t === 'choice'){
    return block.items.map((it, i) => `
      <div class="exo-item mk-item" data-kind="choice" data-ans="${mkEsc(it.answer)}">
        <div class="exo-prompt">${mkEsc(it.q)}</div>
        <div class="mk-options">${it.options.map(o => `<button class="mk-opt" data-val="${mkEsc(o)}">${mkEsc(o)}</button>`).join('')}</div>
        <div class="exo-feedback"></div>
      </div>`).join('');
  }
  if(t === 'order'){
    return block.items.map((it, i) => `
      <div class="exo-item mk-item" data-kind="order" data-ans="${mkEsc(it.answer)}">
        <div class="exo-prompt">${mkEsc(it.ctx)}</div>
        <div class="mk-built" aria-live="polite"></div>
        <div class="mk-chips">${mkShuffle(it.words).map(w => `<button class="mk-chip" data-w="${mkEsc(w)}">${mkEsc(w)}</button>`).join('')}</div>
        <div class="exo-row">
          <button class="exo-check-btn mk-check">Vérifier</button>
          <button class="mk-reset">Recommencer</button>
        </div>
        <div class="exo-feedback"></div>
      </div>`).join('');
  }
  if(t === 'truefalse'){
    return block.items.map((it, i) => `
      <div class="exo-item mk-item" data-kind="tf" data-ans="${it.answer}" data-note="${mkEsc(it.note || '')}">
        <div class="exo-prompt">${mkEsc(it.text)}</div>
        <div class="exo-row">
          <button class="mk-opt" data-val="true">Vrai</button>
          <button class="mk-opt" data-val="false">Faux</button>
        </div>
        <div class="exo-feedback"></div>
      </div>`).join('');
  }
  if(t === 'translate'){
    return block.items.map(it => `
      <div class="exo-translate-item">
        <div class="exo-translate-fr">${mkEsc(it.fr)}</div>
        <button class="exo-reveal-btn">Voir la réponse</button>
        <div class="exo-answer">${mkEsc(it.hu)}</div>
      </div>`).join('');
  }
  return '';
}
function mkBlockHtml(block, uid){
  return `<div class="academy-section mk-block" data-type="${block.type}">
    <p class="academy-section-title">${mkEsc(block.title)}</p>
    ${mkItemsHtml(block, uid)}
  </div>`;
}

function mkMarkItem(item, ok, msg){
  item.dataset.state = ok ? 'ok' : 'bad';
  const fb = item.querySelector('.exo-feedback');
  fb.textContent = msg;
  fb.className = 'exo-feedback ' + (ok ? 'ok' : 'bad');
}

/* Branche les interactions sur un conteneur ; onChange() est appelé après chaque réponse. */
function mkWire(root, onChange){
  root.querySelectorAll('.mk-item[data-kind="fill"]').forEach(item => {
    const input = item.querySelector('.exo-input');
    const check = () => {
      const ans = item.dataset.ans;
      const ok = mkNorm(input.value) !== '' && mkNorm(input.value) === mkNorm(ans);
      input.classList.toggle('ok', ok); input.classList.toggle('bad', !ok);
      mkMarkItem(item, ok, ok ? '✓ Correct' : '✗ Réponse : ' + ans);
      onChange && onChange();
    };
    item.querySelector('.mk-check').addEventListener('click', check);
    input.addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); check(); } });
  });
  root.querySelectorAll('.mk-item[data-kind="choice"]').forEach(item => {
    item.querySelectorAll('.mk-opt').forEach(btn => btn.addEventListener('click', () => {
      if(item.dataset.state === 'ok') return;
      const ok = btn.dataset.val === item.dataset.ans;
      item.querySelectorAll('.mk-opt').forEach(b => b.classList.remove('ok','bad'));
      btn.classList.add(ok ? 'ok' : 'bad');
      mkMarkItem(item, ok, ok ? '✓ Correct' : '✗ Réessaie');
      onChange && onChange();
    }));
  });
  root.querySelectorAll('.mk-item[data-kind="tf"]').forEach(item => {
    item.querySelectorAll('.mk-opt').forEach(btn => btn.addEventListener('click', () => {
      const ok = btn.dataset.val === item.dataset.ans;
      item.querySelectorAll('.mk-opt').forEach(b => b.classList.remove('ok','bad'));
      btn.classList.add(ok ? 'ok' : 'bad');
      mkMarkItem(item, ok, (ok ? '✓ Correct' : '✗ Raté') + (item.dataset.note ? ' — ' + item.dataset.note : ''));
      onChange && onChange();
    }));
  });
  root.querySelectorAll('.mk-item[data-kind="order"]').forEach(item => {
    const built = item.querySelector('.mk-built');
    const chips = item.querySelector('.mk-chips');
    chips.addEventListener('click', e => {
      const c = e.target.closest('.mk-chip'); if(!c || c.disabled) return;
      c.disabled = true;
      const span = document.createElement('span');
      span.className = 'mk-built-word'; span.textContent = c.dataset.w; span.dataset.w = c.dataset.w;
      built.appendChild(span);
    });
    item.querySelector('.mk-reset').addEventListener('click', () => {
      built.innerHTML = ''; chips.querySelectorAll('.mk-chip').forEach(c => c.disabled = false);
      item.dataset.state = ''; const fb = item.querySelector('.exo-feedback'); fb.textContent = ''; fb.className = 'exo-feedback';
    });
    item.querySelector('.mk-check').addEventListener('click', () => {
      const val = Array.from(built.children).map(s => s.dataset.w).join(' ');
      const ok = mkNorm(val) === mkNorm(item.dataset.ans);
      mkMarkItem(item, ok, ok ? '✓ Correct : ' + item.dataset.ans : '✗ Réponse : ' + item.dataset.ans);
      onChange && onChange();
    });
  });
  root.querySelectorAll('.exo-reveal-btn').forEach(btn => btn.addEventListener('click', () => {
    const ans = btn.closest('.exo-translate-item').querySelector('.exo-answer');
    ans.classList.toggle('shown');
    btn.textContent = ans.classList.contains('shown') ? 'Masquer la réponse' : 'Voir la réponse';
  }));
  root.querySelectorAll('.mini-speak').forEach(b => b.addEventListener('click', () => mkSay(b.dataset.id, b.dataset.say)));
}

/* ============================================================
   MODULES (manuel) : rendu du corps
   ============================================================ */
function mkRuleHtml(r, mid, ri){
  const table = r.table ? `<table class="paradigm"><tr><th>hongrois</th><th>français</th></tr>${r.table.map((row, i) =>
    `<tr><td class="hu"><button class="mini-speak" data-id="mk-${mid}-r${ri}-t${i}" data-say="${mkEsc(row[0])}" title="Écouter">🔊</button> ${mkEsc(row[0])}</td><td>${mkEsc(row[1])}</td></tr>`).join('')}</table>` : '';
  const ex = r.examples ? r.examples.map((e, i) =>
    `<div class="ex-line"><button class="mini-speak" data-id="mk-${mid}-r${ri}-e${i}" data-say="${mkEsc(e[0])}" title="Écouter">🔊</button> <b>${mkEsc(e[0])}</b> — ${mkEsc(e[1])}</div>`).join('') : '';
  return `<div class="academy-rule"><b class="rt">${mkEsc(r.title)}</b><p class="lede mk-body">${mkEsc(r.body)}</p>${table}${ex}</div>`;
}
function mkModuleBody(m){
  const rules = m.rules.map((r, i) => mkRuleHtml(r, m.id, i)).join('');
  const pt = m.personTable;
  const ptHtml = pt ? `<div class="academy-section"><p class="academy-section-title">${mkEsc(pt.title)}</p>
    <p class="lede mk-body">${mkEsc(pt.body)}</p>
    <div class="person-table-wrap"><table class="paradigm"><tr><th></th>${pt.cols.map(c => `<th>${mkEsc(c)}</th>`).join('')}</tr>
    ${pt.rows.map(r => `<tr><td style="font-weight:600;white-space:nowrap;">${mkEsc(r[0])}</td><td class="hu">${mkEsc(r[1])}</td><td class="hu">${mkEsc(r[2])}</td><td>${mkEsc(r[3])}</td></tr>`).join('')}</table></div></div>` : '';
  const vocab = m.vocab ? `<div class="academy-section"><p class="academy-section-title">Vocabulaire du module</p>
    <table class="paradigm"><tr><th>hongrois</th><th>français</th></tr>${m.vocab.map((w, i) =>
      `<tr><td class="hu"><button class="mini-speak" data-id="mk-${m.id}-v${i}" data-say="${mkEsc(w[0])}" title="Écouter">🔊</button> ${mkEsc(w[0])}</td><td>${mkEsc(w[1])}${w[2] ? ` <span class="mk-note">— ${mkEsc(w[2])}</span>` : ''}</td></tr>`).join('')}</table></div>` : '';
  const ex = m.exercises.map((b, i) => mkBlockHtml(b, m.id + '-x' + i)).join('');
  return `<div class="academy-section"><p class="academy-section-title">Grammaire</p>${rules}</div>${ptHtml}${vocab}${ex}
    <div class="academy-section"><p class="academy-section-title">Dialogue</p><div id="mkDlg-${m.id}"></div></div>`;
}
const mkDlgMode = {};
function mkRenderDialogue(m){
  const mode = mkDlgMode[m.id] || 'formal';
  const box = document.getElementById('mkDlg-' + m.id);
  if(!box) return;
  box.innerHTML = `<div class="toggle2">
      <button data-mode="formal" class="${mode === 'formal' ? 'active' : ''}">Formel (Ön)</button>
      <button data-mode="informal" class="${mode === 'informal' ? 'active' : ''}">Familier (te)</button></div>
    <div class="card dialogue"><h3>${mkEsc(m.dialogue.title)}</h3>
    ${m.dialogue[mode].map((l, i) => `<div class="line"><div class="line-spk">
      <button class="mini-speak" data-id="mk-${m.id}-d${mode}${i}" data-say="${mkEsc(l[0])}" title="Écouter">🔊</button>
      <span class="hu">${mkEsc(l[0])}</span></div><span class="fr">${mkEsc(l[1])}</span></div>`).join('')}</div>`;
  box.querySelector('.toggle2').addEventListener('click', e => {
    const b = e.target.closest('button[data-mode]'); if(!b) return;
    mkDlgMode[m.id] = b.dataset.mode; mkRenderDialogue(m);
  });
  box.querySelectorAll('.mini-speak').forEach(b => b.addEventListener('click', () => mkSay(b.dataset.id, b.dataset.say)));
}

/* ============================================================
   ACCUEIL
   ============================================================ */
function mkRenderHome(){
  const p = mkProgress();
  const next = MK_MODULES.find(m => !mkState.mods[m.id]);
  document.getElementById('view-mk-home').innerHTML = `
    <div class="hero">
      <p class="eyebrow">Apprendre le hongrois depuis le français</p>
      <h1>Le parcours MagyarOK, chapitre après chapitre.</h1>
      <p class="sub">Chaque chapitre suit la méthode des manuels : un thème de la vie courante, la grammaire qui va avec, le vocabulaire, des dialogues, puis des séries d’exercices pour fixer les règles. Les textes et exercices sont écrits pour cette application.</p>
    </div>
    <div class="statrow">
      <div class="card stat"><span class="num tnum">${p.modsDone}/${p.mods}</span><span class="lab">modules terminés</span></div>
      <div class="card stat"><span class="num tnum">${p.gramDone}/${p.gram}</span><span class="lab">règles maîtrisées</span></div>
      <div class="card stat"><span class="num tnum">${p.setsDone}/${p.sets}</span><span class="lab">séries d’exercices réussies</span></div>
    </div>
    ${next ? `<p class="eyebrow">Reprendre</p>
    <div class="card navcard mk-resume" data-open="${next.id}"><span class="ic">▶</span><b>${mkEsc(next.num)} — ${mkEsc(next.title)}</b><span>Chapitre 2 · Találkozás</span></div>` : `<div class="card"><b>Bravo, tu as terminé tous les modules disponibles.</b></div>`}
    <p class="eyebrow">Explorer</p>
    <div class="navcards">
      <div class="card navcard" data-mkgo="mk-parcours"><span class="ic">◭</span><b>Parcours</b><span>Les chapitres des manuels, module par module</span></div>
      <div class="card navcard" data-mkgo="mk-vocab"><span class="ic">◈</span><b>Vocabulaire</b><span>Liste, flashcards et quiz par chapitre</span></div>
      <div class="card navcard" data-mkgo="mk-gram"><span class="ic">▤</span><b>Grammaire</b><span>Les résumés du cahier : forme et fonction</span></div>
      <div class="card navcard" data-mkgo="mk-ex"><span class="ic">✓</span><b>Exercices</b><span>Les séries du cahier, avec correction immédiate</span></div>
      <div class="card navcard" data-mkgo="mk-base"><span class="ic">★</span><b>App de base Malcom</b><span>Ton application d’origine, conservée telle quelle</span></div>
    </div>`;
  const root = document.getElementById('view-mk-home');
  root.querySelectorAll('[data-mkgo]').forEach(c => c.addEventListener('click', () => mkGoto(c.dataset.mkgo)));
  const r = root.querySelector('.mk-resume');
  if(r) r.addEventListener('click', () => mkOpenModule(r.dataset.open));
}

/* ============================================================
   PARCOURS
   ============================================================ */
let mkOpenChapter = 'a1-2';
function mkRenderParcours(){
  const root = document.getElementById('view-mk-parcours');
  const chap = MK_CHAPTERS[0];
  const done = chap.modules.filter(id => mkState.mods[id]).length;
  const roadmap = MK_ROADMAP.map(g => `
    <div class="level-group">
      <div class="level-group-head"><span class="level-group-badge">${g.level}</span><span class="level-group-count">chapitres à venir</span></div>
      <div class="academy-list">${g.items.map(c => `
        <div class="academy-module mk-locked"><div class="academy-head"><span class="academy-num">${g.level} · ${c.num}</span>
          <div class="academy-head-text"><b>${mkEsc(c.hu)}</b><span>${mkEsc(c.fr)}</span></div><span class="mk-soon">bientôt</span></div></div>`).join('')}
      </div></div>`).join('');
  root.innerHTML = `
    <p class="eyebrow">Programme</p><h1>Parcours</h1>
    <p class="lede">Les chapitres suivent l’ordre des manuels MagyarOK. Ouvre un module pour lire la grammaire, le vocabulaire, faire les exercices et écouter le dialogue.</p>
    <div class="level-groups">
      <div class="level-group">
        <div class="level-group-head"><span class="level-group-badge">A1</span><span class="level-group-count">Chapitre 2 · ${done}/${chap.modules.length} modules terminés</span></div>
        <div class="card mk-chapter-intro"><b>${mkEsc(chap.hu)} — ${mkEsc(chap.fr)}</b><p class="lede mk-body">${mkEsc(chap.intro)}</p></div>
        <div class="academy-list" id="mkModuleList">${chap.modules.map(id => {
          const m = mkModule(id);
          return `<div class="academy-module" id="mkmod-${m.id}">
            <div class="academy-head" data-toggle="${m.id}">
              <span class="academy-num">${mkEsc(m.num)}</span>
              <button class="academy-check ${mkState.mods[m.id] ? 'done' : ''}" data-check="${m.id}" title="Marquer comme terminé">✓</button>
              <div class="academy-head-text"><b>${mkEsc(m.title)}</b><span>${mkEsc(m.source)}</span></div>
              <span class="academy-caret">▸</span></div>
            <div class="academy-body"><div class="academy-body-inner" data-body="${m.id}"></div></div></div>`;
        }).join('')}</div>
      </div>
      ${roadmap}
    </div>`;
  root.querySelectorAll('.academy-head').forEach(h => h.addEventListener('click', e => {
    if(e.target.closest('.academy-check')) return;
    mkToggleModule(h.dataset.toggle);
  }));
  root.querySelectorAll('.academy-check').forEach(c => c.addEventListener('click', e => {
    e.stopPropagation();
    const id = c.dataset.check;
    mkState.mods[id] = !mkState.mods[id]; mkSave();
    c.classList.toggle('done', !!mkState.mods[id]);
    const n = chap.modules.filter(x => mkState.mods[x]).length;
    root.querySelector('.level-group-count').textContent = `Chapitre 2 · ${n}/${chap.modules.length} modules terminés`;
  }));
}
function mkToggleModule(id, forceOpen){
  const el = document.getElementById('mkmod-' + id); if(!el) return;
  const open = forceOpen !== undefined ? forceOpen : !el.classList.contains('open');
  el.classList.toggle('open', open);
  if(open){
    const body = el.querySelector('[data-body]');
    if(!body.dataset.ready){
      const m = mkModule(id);
      body.innerHTML = mkModuleBody(m);
      mkWire(body);
      mkRenderDialogue(m);
      body.dataset.ready = '1';
    }
  }
}
function mkOpenModule(id){
  mkGoto('mk-parcours');
  mkToggleModule(id, true);
  const el = document.getElementById('mkmod-' + id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

/* ============================================================
   VOCABULAIRE
   ============================================================ */
let mkVocabMode = 'list', mkVocabMod = 'all', mkFlash = null, mkQuiz = null;
function mkVocabWords(){
  const mods = mkVocabMod === 'all' ? MK_MODULES : MK_MODULES.filter(m => m.id === mkVocabMod);
  const seen = new Set(), out = [];
  mods.forEach(m => (m.vocab || []).forEach(w => {
    if(seen.has(w[0])) return; seen.add(w[0]);
    out.push({hu:w[0], fr:w[1], note:w[2] || '', mod:m.num});
  }));
  return out;
}
function mkRenderVocab(){
  const root = document.getElementById('view-mk-vocab');
  const words = mkVocabWords();
  root.innerHTML = `
    <p class="eyebrow">Chapitre 2 · Találkozás</p><h1>Vocabulaire</h1>
    <p class="lede">Le vocabulaire de chaque module du manuel. Choisis un module, puis une façon de réviser.</p>
    <div class="chiprow" id="mkVocabChips">
      <button class="chip ${mkVocabMod === 'all' ? 'active' : ''}" data-mod="all">Tous</button>
      ${MK_MODULES.map(m => `<button class="chip ${mkVocabMod === m.id ? 'active' : ''}" data-mod="${m.id}">${mkEsc(m.num)}</button>`).join('')}
    </div>
    <div class="toggle2" id="mkVocabMode">
      <button data-mode="list" class="${mkVocabMode === 'list' ? 'active' : ''}">Liste</button>
      <button data-mode="flash" class="${mkVocabMode === 'flash' ? 'active' : ''}">Flashcards</button>
      <button data-mode="quiz" class="${mkVocabMode === 'quiz' ? 'active' : ''}">Quiz</button>
    </div>
    <div id="mkVocabArea"></div>`;
  root.querySelector('#mkVocabChips').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if(!b) return;
    mkVocabMod = b.dataset.mod; mkFlash = null; mkQuiz = null; mkRenderVocab();
  });
  root.querySelector('#mkVocabMode').addEventListener('click', e => {
    const b = e.target.closest('button[data-mode]'); if(!b) return;
    mkVocabMode = b.dataset.mode; mkFlash = null; mkQuiz = null; mkRenderVocab();
  });
  const area = root.querySelector('#mkVocabArea');
  if(mkVocabMode === 'list') mkVocabList(area, words);
  else if(mkVocabMode === 'flash') mkVocabFlash(area, words);
  else mkVocabQuiz(area, words);
}
function mkVocabList(area, words){
  area.innerHTML = `<div class="card mk-vlist">${words.map((w, i) => `
    <div class="line"><div class="line-spk">
      <button class="mini-speak" data-id="mk-voc-${i}" data-say="${mkEsc(w.hu)}" title="Écouter">🔊</button>
      <span class="hu">${mkEsc(w.hu)}</span><span class="mk-tag">${mkEsc(w.mod)}</span></div>
      <span class="fr">${mkEsc(w.fr)}${w.note ? ` <span class="mk-note">— ${mkEsc(w.note)}</span>` : ''}</span></div>`).join('')}</div>`;
  area.querySelectorAll('.mini-speak').forEach(b => b.addEventListener('click', () => mkSay(b.dataset.id, b.dataset.say)));
}
function mkVocabFlash(area, words){
  if(!mkFlash) mkFlash = {deck: mkShuffle(words), i: 0, flipped: false, known: 0};
  const f = mkFlash;
  if(f.i >= f.deck.length){
    area.innerHTML = `<div class="card mk-flash-end"><b>Série terminée</b><p>${f.known} / ${f.deck.length} mots sus du premier coup.</p><button class="exo-check-btn" id="mkFlashAgain">Recommencer</button></div>`;
    area.querySelector('#mkFlashAgain').addEventListener('click', () => { mkFlash = null; mkRenderVocab(); });
    return;
  }
  const w = f.deck[f.i];
  area.innerHTML = `
    <p class="mk-count">${f.i + 1} / ${f.deck.length}</p>
    <div class="card mk-flash ${f.flipped ? 'flipped' : ''}" id="mkFlashCard">
      <div class="mk-flash-hu">${mkEsc(w.hu)}</div>
      <div class="mk-flash-fr">${f.flipped ? mkEsc(w.fr) : '<span class="mk-note">touche pour voir la traduction</span>'}</div>
      ${f.flipped && w.note ? `<div class="mk-note">${mkEsc(w.note)}</div>` : ''}
      <button class="mini-speak" id="mkFlashSay" title="Écouter">🔊</button>
    </div>
    ${f.flipped ? `<div class="exo-row mk-flash-btns"><button class="mk-opt" id="mkFlashNo">À revoir</button><button class="mk-opt ok" id="mkFlashYes">Je sais</button></div>` : ''}`;
  area.querySelector('#mkFlashCard').addEventListener('click', e => {
    if(e.target.closest('#mkFlashSay')) return;
    f.flipped = true; mkVocabFlash(area, words);
  });
  area.querySelector('#mkFlashSay').addEventListener('click', () => mkSay('mk-flash-' + f.i, w.hu));
  const next = known => { if(known && !w.retry) f.known++; if(!known){ f.deck.push(Object.assign({}, w, {retry:true})); } f.i++; f.flipped = false; mkVocabFlash(area, words); };
  const yes = area.querySelector('#mkFlashYes'), no = area.querySelector('#mkFlashNo');
  if(yes) yes.addEventListener('click', () => next(true));
  if(no) no.addEventListener('click', () => next(false));
}
function mkVocabQuiz(area, words){
  const pool = MK_MODULES.flatMap(m => (m.vocab || []).map(w => ({hu:w[0], fr:w[1]})));
  if(words.length < 1 || pool.length < 4){ area.innerHTML = '<p class="lede">Pas assez de mots pour un quiz.</p>'; return; }
  if(!mkQuiz) mkQuiz = {qs: mkShuffle(words).slice(0, 10), i: 0, score: 0, answered: false};
  const q = mkQuiz;
  if(q.i >= q.qs.length){
    area.innerHTML = `<div class="card mk-flash-end"><b>Score : ${q.score} / ${q.qs.length}</b><button class="exo-check-btn" id="mkQuizAgain">Rejouer</button></div>`;
    area.querySelector('#mkQuizAgain').addEventListener('click', () => { mkQuiz = null; mkRenderVocab(); });
    return;
  }
  const cur = q.qs[q.i];
  const others = mkShuffle(pool.filter(w => w.fr !== cur.fr)).slice(0, 3).map(w => w.fr);
  const options = mkShuffle([cur.fr, ...others]);
  area.innerHTML = `<p class="mk-count">Question ${q.i + 1} / ${q.qs.length}</p>
    <div class="card mk-flash"><div class="mk-flash-hu">${mkEsc(cur.hu)}</div><button class="mini-speak" id="mkQSay" title="Écouter">🔊</button></div>
    <div class="mk-options mk-options-col">${options.map(o => `<button class="mk-opt" data-val="${mkEsc(o)}">${mkEsc(o)}</button>`).join('')}</div>
    <div class="exo-feedback" id="mkQFb"></div>`;
  area.querySelector('#mkQSay').addEventListener('click', () => mkSay('mk-q-' + q.i, cur.hu));
  area.querySelectorAll('.mk-opt').forEach(b => b.addEventListener('click', () => {
    if(q.answered) return; q.answered = true;
    const ok = b.dataset.val === cur.fr;
    b.classList.add(ok ? 'ok' : 'bad');
    if(ok) q.score++;
    else area.querySelectorAll('.mk-opt').forEach(x => { if(x.dataset.val === cur.fr) x.classList.add('ok'); });
    const fb = area.querySelector('#mkQFb'); fb.textContent = ok ? '✓ Correct' : '✗ Réponse : ' + cur.fr; fb.className = 'exo-feedback ' + (ok ? 'ok' : 'bad');
    setTimeout(() => { q.i++; q.answered = false; mkVocabQuiz(area, words); }, 1100);
  }));
}

/* ============================================================
   GRAMMAIRE (résumés du cahier)
   ============================================================ */
function mkGridHtml(g){
  return `<div class="person-table-wrap"><table class="paradigm"><tr>${g.head.map(h => `<th>${mkEsc(h)}</th>`).join('')}</tr>
    ${g.rows.map(r => `<tr>${r.map((c, i) => `<td class="${i === 0 ? '' : 'hu'}">${mkEsc(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
}
function mkRenderGrammar(){
  const root = document.getElementById('view-mk-gram');
  const chap = MK_CHAPTERS[0];
  root.innerHTML = `
    <p class="eyebrow">Nyelvtani összefoglalók</p><h1>Grammaire</h1>
    <p class="lede">Les résumés de grammaire du cahier, chapitre par chapitre : la forme (FORMA) et l’emploi (FUNKCIÓ). Coche une règle quand tu la maîtrises.</p>
    <div class="grammar-module"><p class="grammar-module-title">A1 · Chapitre 2 — ${mkEsc(chap.hu)} (${mkEsc(chap.fr)})</p>
    ${chap.grammar.map(g => `
      <div class="grule" id="mkg-${g.id}">
        <div class="grule-head" data-toggle="${g.id}">
          <button class="grule-check ${mkState.gram[g.id] ? 'done' : ''}" data-check="${g.id}" title="Marquer comme maîtrisée">✓</button>
          <b class="grule-title">${mkEsc(g.hu)} <span class="mk-note">— ${mkEsc(g.fr)}</span></b><span class="grule-caret">▸</span></div>
        <div class="grule-body"><div class="grule-body-inner">
          <p class="lede mk-body">${mkEsc(g.body)}</p>
          ${g.grid ? `<p class="mk-sub">FORMA</p>${mkGridHtml(g.grid)}` : ''}
          ${g.funkcio ? `<p class="mk-sub">FUNKCIÓ</p><table class="paradigm"><tr><th>Kérdés</th><th>Példa</th></tr>${g.funkcio.map(r => `<tr><td>${mkEsc(r[0])}</td><td class="hu">${mkEsc(r[1])}</td></tr>`).join('')}</table>` : ''}
          ${g.examples ? `<p class="mk-sub">PÉLDÁK</p>${g.examples.map((e, i) => `<div class="ex-line"><button class="mini-speak" data-id="mk-${g.id}-e${i}" data-say="${mkEsc(e[0])}" title="Écouter">🔊</button> <b>${mkEsc(e[0])}</b> — ${mkEsc(e[1])}</div>`).join('')}` : ''}
          ${g.notes ? `<ul class="mk-notes">${g.notes.map(n => `<li>${mkEsc(n)}</li>`).join('')}</ul>` : ''}
          <button class="unit-link-btn mk-goex" data-topic="${g.id}">Faire les exercices de cette règle</button>
        </div></div></div>`).join('')}</div>`;
  root.querySelectorAll('.grule-head').forEach(h => h.addEventListener('click', e => {
    if(e.target.closest('.grule-check')) return;
    document.getElementById('mkg-' + h.dataset.toggle).classList.toggle('open');
  }));
  root.querySelectorAll('.grule-check').forEach(c => c.addEventListener('click', e => {
    e.stopPropagation();
    mkState.gram[c.dataset.check] = !mkState.gram[c.dataset.check]; mkSave();
    c.classList.toggle('done', !!mkState.gram[c.dataset.check]);
  }));
  root.querySelectorAll('.mini-speak').forEach(b => b.addEventListener('click', () => mkSay(b.dataset.id, b.dataset.say)));
  root.querySelectorAll('.mk-goex').forEach(b => b.addEventListener('click', () => {
    const set = MK_CHAPTERS[0].exercises.find(s => s.topic === b.dataset.topic);
    mkGoto('mk-ex'); if(set) mkToggleSet(set.id, true);
  }));
}

/* ============================================================
   EXERCICES (Gyakorlatok du cahier)
   ============================================================ */
function mkSetStats(setEl){
  const items = setEl.querySelectorAll('.mk-item');
  const ok = setEl.querySelectorAll('.mk-item[data-state="ok"]').length;
  return {total: items.length, ok};
}
function mkRenderExercises(){
  const root = document.getElementById('view-mk-ex');
  const chap = MK_CHAPTERS[0];
  root.innerHTML = `
    <p class="eyebrow">Gyakorlatok</p><h1>Exercices</h1>
    <p class="lede">Les séries d’exercices du cahier de grammaire : une série par règle, avec correction immédiate. Une série est validée quand toutes les réponses sont justes.</p>
    <div class="grammar-module"><p class="grammar-module-title">A1 · Chapitre 2 — ${mkEsc(chap.hu)} (${mkEsc(chap.fr)})</p>
    <div class="academy-list">${chap.exercises.map(s => `
      <div class="academy-module" id="mkset-${s.id}">
        <div class="academy-head" data-toggle="${s.id}">
          <button class="academy-check ${mkState.sets[s.id] ? 'done' : ''}" data-set="${s.id}" tabindex="-1" aria-label="Série réussie">✓</button>
          <div class="academy-head-text"><b>${mkEsc(s.hu)}</b><span>${mkEsc(s.fr)}</span></div>
          <span class="mk-score" id="mkscore-${s.id}"></span><span class="academy-caret">▸</span></div>
        <div class="academy-body"><div class="academy-body-inner" data-sbody="${s.id}"></div></div></div>`).join('')}</div></div>`;
  root.querySelectorAll('.academy-head').forEach(h => h.addEventListener('click', e => {
    if(e.target.closest('.academy-check')) return;
    mkToggleSet(h.dataset.toggle);
  }));
}
function mkToggleSet(id, forceOpen){
  const el = document.getElementById('mkset-' + id); if(!el) return;
  const open = forceOpen !== undefined ? forceOpen : !el.classList.contains('open');
  el.classList.toggle('open', open);
  if(!open) return;
  const body = el.querySelector('[data-sbody]');
  if(!body.dataset.ready){
    const s = MK_CHAPTERS[0].exercises.find(x => x.id === id);
    body.innerHTML = s.blocks.map((b, i) => mkBlockHtml(b, id + '-' + i)).join('') +
      `<p class="mk-setmsg" id="mkmsg-${id}"></p>`;
    mkWire(body, () => {
      const st = mkSetStats(body);
      document.getElementById('mkscore-' + id).textContent = `${st.ok}/${st.total}`;
      if(st.ok === st.total && st.total > 0){
        mkState.sets[id] = true; mkSave();
        el.querySelector('.academy-check').classList.add('done');
        document.getElementById('mkmsg-' + id).textContent = '🎉 Série réussie !';
      }
    });
    body.dataset.ready = '1';
  }
  el.scrollIntoView({behavior:'smooth', block:'start'});
}

/* ---------- démarrage ---------- */
mkRenderHome();
requestAnimationFrame(mkPositionIndicator);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(mkPositionIndicator);
