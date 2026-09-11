/* Données — Académie (modules de l'académie en ligne suivie par l'utilisateur) */

const ACADEMY_MODULES = [
  {
    id:'m4', num:4,
    title:'Être — vagyok : conjugaison et négation',
    source:'Magyarize — Hungarian Mastercourse for beginners',
    vocabCat:'academie_m4',
    rules:[
      {
        title:'Le verbe « lenni » (être) au présent',
        body:'Comme dans le module Grammaire, voici la conjugaison complète — le socle de tout ce module.',
        table:[['vagyok','je suis'],['vagy','tu es'],['van','il/elle est'],['vagyunk','nous sommes'],['vagytok','vous êtes'],['vannak','ils/elles sont']]
      },
      {
        title:'Règle clé — le « van » disparaît à la 3e personne',
        body:'Devant un nom ou un adjectif attribut (métier, nationalité, origine, âge…), le hongrois n’utilise pas « van » à la 3e personne du singulier — contrairement au français où « est » reste obligatoire. Aux autres personnes (vagyok, vagy, vagyunk, vagytok, vannak), la conjugaison reste toujours présente.',
        examples:[
          ['Péter tanár.','Péter est professeur. (pas de « van »)'],
          ['Anna diák?','Anna est-elle étudiante ?'],
          ['Péter harmincöt éves.','Péter a trente-cinq ans.'],
          ['De : Tanár vagyok.','Mais : Je suis professeur. (« vagyok » reste, à la 1ʳᵉ personne)']
        ]
      },
      {
        title:'La négation — nem',
        body:'On place « nem » juste avant l’élément nié. Pour nier une identité (métier, nationalité...) tout en proposant la bonne réponse, on utilise la structure contrastive « nem X vagyok, hanem Y » (je ne suis pas X, mais Y) — on répète alors le verbe après « hanem ».',
        examples:[
          ['Nem vagyok tanár.','Je ne suis pas professeur.'],
          ['Nem tanár vagyok, hanem mérnök.','Je ne suis pas professeur, mais ingénieur.'],
          ['Tamás nem Budapesti.','Tamás n’est pas de Budapest.'],
          ['(Te) nem vagy magyar.','Tu n’es pas hongrois.']
        ]
      }
    ],
    personTable:{
      title:'Une même phrase, personne par personne',
      body:'Ce tableau montre bien la règle du dessus : « vagyok » et « vagy » sont toujours présents, mais rien n’apparaît à la 3e personne.',
      cols:['én (je)','te (tu)','Ön / ő (vous / il-elle)'],
      rows:[
        ['Identité', 'Tamás vagyok.', 'Tamás vagy.', 'Tamás. (pas de verbe)'],
        ['Nationalité', 'Magyar vagyok.', 'Magyar vagy.', 'Magyar. (pas de verbe)'],
        ['Âge', 'Negyven éves vagyok.', 'Negyven éves vagy?', '40 éves. (pas de verbe)'],
        ['Origine', 'Szegedi vagyok.', 'Szegedi vagy.', 'Szegedi. (pas de verbe)']
      ],
      colsFr:['Je suis Tamás.', 'Tu es Tamás.', '(Vous êtes / il est) Tamás.']
    },
    exercises:[
      {
        type:'fill',
        title:'Complète avec vagyok, vagy, vagyunk, vagytok ou vannak',
        items:[
          {before:'Te olasz ', after:'?', answer:'vagy', note:'Tu es italien ?'},
          {before:'Nem, francia ', after:'.', answer:'vagyok', note:'Non, je suis français.'},
          {before:'Én építész ', after:'.', answer:'vagyok', note:'Je suis architecte.'},
          {before:'Nem, ukrán ', after:'.', answer:'vagyok', note:'Non, je suis ukrainien.'},
          {before:'Én színész ', after:'.', answer:'vagyok', note:'Je suis acteur.'},
          {before:'Te is színész ', after:'?', answer:'vagy', note:'Toi aussi tu es acteur ?'},
          {before:'(Én) Húsz éves ', after:'.', answer:'vagyok', note:'J’ai vingt ans.'},
          {before:'Te hány éves ', after:'?', answer:'vagy', note:'Quel âge as-tu ?'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois (négation)',
        items:[
          {fr:'Je ne suis pas allemand.', hu:'Nem vagyok német.'},
          {fr:'Es-tu allemand ?', hu:'(Te) német vagy?'},
          {fr:'Tu n’es pas allemand.', hu:'Nem vagy német.'},
          {fr:'Hans est-il allemand ? Oui, Hans est allemand.', hu:'Hans német? Igen. Hans német.'},
          {fr:'Non, Hans n’est pas allemand.', hu:'Nem. Hans nem német.'},
          {fr:'Je vais bien. Merci. Et toi ?', hu:'Jól vagyok. Köszönöm. És te?'},
          {fr:'Malheureusement, je ne vais pas bien.', hu:'Sajnos nem vagyok jól.'},
          {fr:'Es-tu acteur ?', hu:'Színész vagy?'},
          {fr:'Je ne suis pas acteur.', hu:'Nem vagyok színész.'},
          {fr:'Je ne suis pas acteur, mais sportif.', hu:'Nem színész vagyok, hanem sportoló.'},
          {fr:'Anna est-elle architecte ?', hu:'Anna építész?'},
          {fr:'Non, Anna n’est pas architecte, elle est programmeuse.', hu:'Nem. Anna nem építész, hanem programozó.'}
        ]
      }
    ],
    dialogue:{
      title:'Une rencontre — d’où viens-tu ?',
      formal:[
        ['Jó napot! Ön amerikai származású?','Bonjour ! Êtes-vous d’origine américaine ?'],
        ['Sajnos nem értem. Lassabban, legyen szíves.','Désolé, je ne comprends pas. Plus lentement, s’il vous plaît.'],
        ['Ön amerikai?','Êtes-vous américain ?'],
        ['Igen, amerikai vagyok, de Budapesten élek.','Oui, je suis américain, mais j’habite à Budapest.'],
        ['Ön Budapesti?','Êtes-vous de Budapest ?'],
        ['Magyar vagyok, de nem Budapesti. Szegedi vagyok. Budapesten tanulok a Corvinus Egyetemen.','Je suis hongrois, mais pas de Budapest. Je suis de Szeged. J’étudie à Budapest, à l’université Corvinus.'],
        ['Érdekes! Tud angolul?','Intéressant ! Savez-vous parler anglais ?'],
        ['Igen, természetesen!','Oui, bien sûr !'],
        ['Köszönöm...','Merci...']
      ],
      informal:[
        ['Jó napot! Amerikai származású vagy?','Bonjour ! Tu es d’origine américaine ?'],
        ['Sajnos nem értem. Lassabban, légy szíves.','Désolé, je ne comprends pas. Plus lentement, s’il te plaît.'],
        ['Te amerikai vagy?','Tu es américain ?'],
        ['Igen, amerikai vagyok, de Budapesten élek.','Oui, je suis américain, mais j’habite à Budapest.'],
        ['Te Budapesti vagy?','Tu es de Budapest ?'],
        ['Magyar vagyok, de nem Budapesti. Szegedi vagyok. Budapesten tanulok a Corvinus Egyetemen.','Je suis hongrois, mais pas de Budapest. Je suis de Szeged. J’étudie à Budapest, à l’université Corvinus.'],
        ['Érdekes! Tudsz angolul?','Intéressant ! Sais-tu parler anglais ?'],
        ['Igen, persze!','Oui, bien sûr !'],
        ['Köszi...','Merci...']
      ]
    }
  }
];
