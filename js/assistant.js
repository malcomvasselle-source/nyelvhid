/* ============================================================
   ASSISTANT — petite bulle flottante « pose ta question »
   Envoie la question à /api/ask (fonction serverless Vercel qui
   interroge Claude côté serveur) et affiche la réponse.
   Indépendant du reste de l'app : n'a besoin d'aucune donnée VOCAB.
   ============================================================ */
(function(){
  let open = false;
  let sending = false;
  const history = []; // {role:'q'|'a'|'err', text}

  function el(id){ return document.getElementById(id); }

  function render(){
    const msgsBox = el('asknyelvMsgs');
    if(!msgsBox) return;
    if(history.length === 0){
      msgsBox.innerHTML = `<div class="asknyelv-empty">Pose une question sur le hongrois — un mot qui te manque, une phrase à traduire, une règle à vérifier.<br><br><i>Ex. : « Comment dit-on ‘Le chien est blanc.’ ? »</i></div>`;
    } else {
      msgsBox.innerHTML = history.map(m=>{
        const cls = m.role==='q' ? 'q' : (m.role==='err' ? 'err' : 'a');
        const safe = m.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        return `<div class="asknyelv-msg ${cls}">${safe}</div>`;
      }).join('') + (sending ? `<div class="asknyelv-typing">L’assistant réfléchit…</div>` : '');
    }
    msgsBox.scrollTop = msgsBox.scrollHeight;
  }

  function togglePanel(forceOpen){
    open = typeof forceOpen === 'boolean' ? forceOpen : !open;
    const panel = el('asknyelvPanel');
    if(panel) panel.hidden = !open;
    if(open){
      render();
      const input = el('asknyelvInput');
      if(input) setTimeout(()=>input.focus(), 30);
    }
  }

  async function sendQuestion(){
    const input = el('asknyelvInput');
    const btn = el('asknyelvSend');
    if(!input) return;
    const question = input.value.trim();
    if(!question || sending) return;

    history.push({role:'q', text:question});
    input.value = '';
    sending = true;
    if(btn) btn.disabled = true;
    render();

    try{
      const resp = await fetch('/api/ask', {
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({question})
      });
      const data = await resp.json().catch(()=>({}));
      if(!resp.ok){
        history.push({role:'err', text: data.error || 'Une erreur est survenue.'});
      } else {
        history.push({role:'a', text: data.answer || 'Pas de réponse.'});
      }
    }catch(e){
      history.push({role:'err', text:'Impossible de contacter l’assistant. Vérifie ta connexion.'});
    }
    sending = false;
    if(btn) btn.disabled = false;
    render();
  }

  function init(){
    const fab = el('asknyelvFab');
    const closeBtn = el('asknyelvClose');
    const form = el('asknyelvForm');
    const input = el('asknyelvInput');
    if(!fab || !form || !input) return;

    fab.addEventListener('click', ()=>togglePanel());
    if(closeBtn) closeBtn.addEventListener('click', ()=>togglePanel(false));
    form.addEventListener('submit', (e)=>{ e.preventDefault(); sendQuestion(); });
    input.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault();
        sendQuestion();
      }
    });
    render();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
