/* ============================================================
   /api/ask — petit assistant IA intégré à Nyelvhíd.
   Reçoit { question } en POST, interroge l'API Anthropic (Claude),
   renvoie { answer }. La clé API reste côté serveur (variable
   d'environnement Vercel ANTHROPIC_API_KEY), jamais exposée au client.
   ============================================================ */

const SYSTEM_PROMPT = `Tu es le petit assistant intégré dans Nyelvhíd, une application web qui aide un francophone à apprendre le hongrois (niveau A1 en cours).
On te pose des questions courtes du type : "comment dit-on... ?", "qu'est-ce que veut dire... ?", "comment on utilise... dans une phrase ?", ou des questions de grammaire/vocabulaire ponctuelles.

Réponds toujours en français, de façon brève (quelques lignes maximum, jamais un cours entier).
Quand on te demande une traduction ou une phrase en hongrois :
- donne la phrase ou le mot hongrois exact, avec les accents corrects,
- si utile, ajoute une très courte note entre parenthèses (prononciation, harmonie vocalique, cas grammatical, registre formel/familier),
- ne rajoute pas de longue explication théorique sauf si on te la demande explicitement.
Si la question sort du cadre de l'apprentissage du français/hongrois, réponds quand même brièvement et gentiment, sans refuser inutilement.`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée.' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "La clé API n'est pas configurée côté serveur (variable d'environnement ANTHROPIC_API_KEY manquante sur Vercel)." });
    return;
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch (e) { body = {}; }
  }
  const question = (body && body.question ? String(body.question) : '').trim().slice(0, 600);
  if (!question) {
    res.status(400).json({ error: 'Question vide.' });
    return;
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: question }]
      })
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      res.status(502).json({ error: "Erreur de l'API IA.", detail: errText.slice(0, 400) });
      return;
    }

    const data = await upstream.json();
    const answer = (data.content && data.content[0] && data.content[0].text) ? data.content[0].text.trim() : 'Pas de réponse.';
    res.status(200).json({ answer });
  } catch (e) {
    res.status(500).json({ error: 'Erreur serveur.', detail: String(e && e.message ? e.message : e).slice(0, 400) });
  }
};
