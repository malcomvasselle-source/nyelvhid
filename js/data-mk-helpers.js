/* Aides de rédaction pour les chapitres MagyarOK (données compactes). */
let _mkRot = 0;
const MKF = (before, after, answer, note) => ({before, after: after || '', answer, note: note || ''});
const MKC = (q, answer, ...wrong) => {            // answer + mauvaises réponses, ordre tourné
  const opts = [answer, ...wrong]; const k = (_mkRot++) % opts.length;
  return {q, options: opts.slice(k).concat(opts.slice(0, k)), answer};
};
const MKO = (ctx, answer) => ({ctx, words: answer.replace(/[.?!]$/, '').split(' '), answer});
const MKV = (text, answer, note) => ({text, answer, note: note || ''});
const MKT = (fr, hu) => ({fr, hu});
const MKB = (type, title, items) => ({type, title, items});
const MKX = (id, topic, hu, fr, ...blocks) => ({id, topic, hu, fr, blocks});
const MKR = (title, body, o) => Object.assign({title, body}, o || {});
const MKM = (id, num, title, o) => Object.assign({id, num, title, level: MKM.cur.level, course: MKM.cur.course,
  courseLabel: MKM.cur.label, source: MKM.cur.source}, o);
MKM.use = (level, n, hu, fr) => { MKM.cur = {level, course: 'magyarok-' + level.toLowerCase(),
  label: `MagyarOK · Chapitre ${n} — ${hu} (${fr})`, source: `Parcours MagyarOK ${level} — chapitre ${n}`}; };
const MKG = (id, hu, fr, body, o) => Object.assign({id, hu, fr, body}, o || {});
