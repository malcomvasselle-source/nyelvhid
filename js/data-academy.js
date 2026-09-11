/* Données — Académie (modules de l'académie en ligne suivie par l'utilisateur) */

const ACADEMY_MODULES = [
  {
    id:'m3_1', num:'3.1',
    title:'Salutations et petite conversation',
    source:'Magyarize — Hungarian Mastercourse for beginners',
    vocabCat:'academie_m3',
    rules:[
      {
        title:'Saluer — formel et familier',
        body:'Le hongrois distingue nettement le registre formel du registre familier, dès la première salutation. « Szia » (au singulier) et « Sziasztok » (à plusieurs personnes) sont réservés aux proches, amis, collègues du même âge. « Jó napot » est la formule passe-partout et polie, utilisable à toute heure de la journée envers un inconnu, un client, une personne plus âgée.',
        examples:[
          ['Szia! Hogy vagy?','Salut ! Comment vas-tu ? (familier)'],
          ['Jó napot! Hogy van?','Bonjour ! Comment allez-vous ? (formel)'],
          ['Sziasztok!','Salut ! (à plusieurs personnes, familier)']
        ]
      },
      {
        title:'Demander et dire son prénom',
        body:'Pour demander le prénom de quelqu’un, on utilise « Hogy hívnak? » (familier) ou « Hogy hívják? » (formel) — littéralement « comment t’appelle-t-on / vous appelle-t-on ? ». Pour répondre, deux structures existent : « A nevem... » (mon nom est...) ou directement « ...vagyok » (je suis...) suivi du prénom.',
        examples:[
          ['Hogy hívnak?','Comment tu t’appelles ? (familier)'],
          ['A nevem Marie.','Je m’appelle Marie.'],
          ['Marie vagyok.','Je suis Marie.'],
          ['Hogy hívják?','Comment vous appelez-vous ? (formel)']
        ]
      },
      {
        title:'Se réjouir de la rencontre',
        body:'Après les présentations, on répond souvent par une formule de politesse pour dire qu’on est content de faire connaissance. La forme change selon le registre, comme beaucoup de verbes en hongrois.',
        examples:[
          ['Örülök, hogy megismerhetlek.','Ravi(e) de te rencontrer. (familier)'],
          ['Örülök, hogy megismerhetem.','Ravi(e) de vous rencontrer. (formel)'],
          ['Én is.','Moi aussi.']
        ]
      }
    ],
    exercises:[
      {
        type:'fill',
        title:'Complète les salutations',
        items:[
          {before:'', after:'! Hogy vagy?', answer:'Szia', note:'Salut ! Comment vas-tu ? (familier)'},
          {before:'Jó ', after:'! Hogy van?', answer:'napot', note:'Bonjour ! Comment allez-vous ? (formel)'},
          {before:'Hogy ', after:'?', answer:'hívnak', note:'Comment tu t’appelles ? (familier)'},
          {before:'A ', after:' Marie.', answer:'nevem', note:'Je m’appelle Marie.'},
          {before:'Örülök, hogy meg', after:'lek.', answer:'ismerhet', note:'Ravi(e) de te rencontrer.'},
          {before:'Én ', after:'.', answer:'is', note:'Moi aussi.'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'Salut ! Comment vas-tu ?', hu:'Szia! Hogy vagy?'},
          {fr:'Bonjour ! Comment allez-vous ?', hu:'Jó napot! Hogy van?'},
          {fr:'Comment vous appelez-vous ?', hu:'Hogy hívják?'},
          {fr:'Je m’appelle Pierre.', hu:'A nevem Pierre.'},
          {fr:'Ravi de vous rencontrer.', hu:'Örülök, hogy megismerhetem.'},
          {fr:'Moi aussi.', hu:'Én is.'}
        ]
      }
    ],
    dialogue:{
      title:'Première rencontre',
      formal:[
        ['Jó napot! Hogy hívják?','Bonjour ! Comment vous appelez-vous ?'],
        ['Jó napot! A nevem Klára.','Bonjour ! Je m’appelle Klára.'],
        ['Örülök, hogy megismerhetem.','Ravi de vous rencontrer.'],
        ['Én is örülök.','Moi aussi, je suis ravie.'],
        ['Hogy van?','Comment allez-vous ?'],
        ['Köszönöm, jól. És Ön?','Merci, je vais bien. Et vous ?']
      ],
      informal:[
        ['Szia! Hogy hívnak?','Salut ! Comment tu t’appelles ?'],
        ['Szia! Klára vagyok.','Salut ! Je suis Klára.'],
        ['Örülök, hogy megismerhetlek.','Ravi de te rencontrer.'],
        ['Én is örülök.','Moi aussi, je suis ravie.'],
        ['Hogy vagy?','Comment vas-tu ?'],
        ['Köszönöm, jól. És te?','Merci, je vais bien. Et toi ?']
      ]
    }
  },
  {
    id:'m3_2', num:'3.2',
    title:'Se présenter en détail',
    source:'Magyarize — Hungarian Mastercourse for beginners',
    vocabCat:'academie_m3',
    rules:[
      {
        title:'Dire d’où l’on vient',
        body:'Pour demander l’origine, on utilise « Honnan jössz? » (familier) ou « Honnan jön? » (formel) — littéralement « d’où viens-tu / venez-vous ? ». La réponse utilise un suffixe qui signifie « depuis, en provenance de » : « -ból » ou « -ből » selon l’harmonie vocalique du nom du pays ou de la ville.',
        examples:[
          ['Honnan jössz?','D’où viens-tu ?'],
          ['Franciaországból jövök.','Je viens de France.'],
          ['Honnan jön?','D’où venez-vous ?'],
          ['Magyarországból jövök.','Je viens de Hongrie.']
        ]
      },
      {
        title:'Dire où l’on habite',
        body:'Pour demander où quelqu’un habite, on utilise « Hol laksz? » (familier) ou « Hol lakik? » (formel). La réponse utilise le suffixe locatif « -ban » ou « -ben » (à l’intérieur de), selon l’harmonie vocalique.',
        examples:[
          ['Hol laksz?','Où habites-tu ?'],
          ['Budapesten lakom.','J’habite à Budapest.'],
          ['Hol lakik?','Où habitez-vous ?'],
          ['Franciaországban lakom.','J’habite en France.']
        ]
      },
      {
        title:'Dire son âge — rappel',
        body:'On peut aussi reformuler la question de l’âge avec « Mennyi idős vagy? », une variante de « Hány éves vagy? » vue dans le module Grammaire — les deux sont correctes et interchangeables.',
        examples:[
          ['Mennyi idős vagy?','Quel âge as-tu ?'],
          ['Harminc éves vagyok.','J’ai trente ans.']
        ]
      }
    ],
    exercises:[
      {
        type:'fill',
        title:'Complète avec le bon suffixe (-ból/-ből, -ban/-ben)',
        items:[
          {before:'Franciaország', after:' jövök.', answer:'ból', note:'Je viens de France.'},
          {before:'Németország', after:' jövök.', answer:'ból', note:'Je viens d’Allemagne.'},
          {before:'Budapest', after:' lakom.', answer:'en', note:'J’habite à Budapest. (Budapesten)'},
          {before:'Magyarország', after:' lakom.', answer:'ban', note:'J’habite en Hongrie.'},
          {before:'Anglia', after:' jövök.', answer:'ból', note:'Je viens d’Angleterre.'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'D’où viens-tu ?', hu:'Honnan jössz?'},
          {fr:'Je viens de Hongrie.', hu:'Magyarországból jövök.'},
          {fr:'Où habitez-vous ?', hu:'Hol lakik?'},
          {fr:'J’habite à Paris.', hu:'Párizsban lakom.'},
          {fr:'Quel âge as-tu ?', hu:'Mennyi idős vagy?'},
          {fr:'J’ai vingt-cinq ans.', hu:'Huszonöt éves vagyok.'}
        ]
      }
    ],
    dialogue:{
      title:'D’où viens-tu, où habites-tu ?',
      formal:[
        ['Honnan jön?','D’où venez-vous ?'],
        ['Franciaországból jövök, de most Magyarországon élek.','Je viens de France, mais je vis maintenant en Hongrie.'],
        ['Hol lakik?','Où habitez-vous ?'],
        ['Budapesten lakom, a Corvinus Egyetem mellett.','J’habite à Budapest, à côté de l’université Corvinus.'],
        ['Mennyi idős, ha szabad kérdeznem?','Quel âge avez-vous, si je peux me permettre ?'],
        ['Harminc éves vagyok.','J’ai trente ans.']
      ],
      informal:[
        ['Honnan jössz?','D’où viens-tu ?'],
        ['Franciaországból jövök, de most Magyarországon élek.','Je viens de France, mais je vis maintenant en Hongrie.'],
        ['Hol laksz?','Où habites-tu ?'],
        ['Budapesten lakom, a Corvinus Egyetem mellett.','J’habite à Budapest, à côté de l’université Corvinus.'],
        ['Hány éves vagy?','Quel âge as-tu ?'],
        ['Harminc éves vagyok.','J’ai trente ans.']
      ]
    }
  },
  {
    id:'m3_3', num:'3.3',
    title:'Harmonie vocalique et suffixes de lieu / de langue',
    source:'Magyarize — Hungarian Mastercourse for beginners',
    vocabCat:'academie_m3',
    rules:[
      {
        title:'Le principe de l’harmonie vocalique',
        body:'En hongrois, les voyelles se répartissent en deux familles : les voyelles « antérieures » (e, é, i, í, ö, ő, ü, ű) et les voyelles « postérieures » (a, á, o, ó, u, ú). Un suffixe possède presque toujours deux (parfois trois) formes, et on choisit la forme dont la voyelle s’accorde avec la dernière voyelle du mot. Pour un mot dont la dernière voyelle est postérieure, on emploie la forme en « a/á/o/u » du suffixe ; pour un mot dont la dernière voyelle est antérieure, on emploie la forme en « e/é/i/ö/ü ».',
        examples:[
          ['Budapest → Budapesten','« e » antérieur → suffixe -en'],
          ['Franciaország → Franciaországban','« a » postérieur → suffixe -ban'],
          ['Németország → Németországból','« o » postérieur → suffixe -ból'],
          ['Berlin → Berlinből','« i » antérieur → suffixe -ből']
        ]
      },
      {
        title:'Les suffixes de lieu (-ban/-ben, -ból/-ből, -ba/-be)',
        body:'Trois suffixes expriment la position « à l’intérieur de » : « -ban/-ben » (être dans, statique), « -ba/-be » (aller dans, mouvement vers l’intérieur), et « -ból/-ből » (venir de l’intérieur de). Ils suivent tous la même règle d’harmonie vocalique.',
        table:[['-ban / -ben','être dans (statique)'],['-ba / -be','aller dans (mouvement)'],['-ból / -ből','venir de (origine)']]
      },
      {
        title:'Le suffixe de langue -ul/-ül',
        body:'Pour dire « en telle langue » (parler, écrire, lire...), le hongrois ajoute le suffixe « -ul » (après une voyelle postérieure) ou « -ül » (après une voyelle antérieure) au nom de la langue.',
        examples:[
          ['magyarul','en hongrois'],
          ['franciául','en français'],
          ['angolul','en anglais'],
          ['németül','en allemand']
        ]
      }
    ],
    exercises:[
      {
        type:'fill',
        title:'Complète avec le suffixe correct (harmonie vocalique)',
        items:[
          {before:'Beszélsz magyar', after:'?', answer:'ul', note:'Parles-tu hongrois ?'},
          {before:'Beszélek német', after:'.', answer:'ül', note:'Je parle allemand.'},
          {before:'Magyarország', after:' lakom.', answer:'ban', note:'J’habite en Hongrie.'},
          {before:'Németország', after:' jövök.', answer:'ból', note:'Je viens d’Allemagne.'},
          {before:'Franciaország', after:' megyek.', answer:'ba', note:'Je vais en France.'},
          {before:'Beszélek franciá', after:'.', answer:'ul', note:'Je parle français.'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'Parles-tu anglais ?', hu:'Beszélsz angolul?'},
          {fr:'Je parle un peu hongrois.', hu:'Beszélek egy kicsit magyarul.'},
          {fr:'Je parle français couramment.', hu:'Folyékonyan beszélek franciául.'},
          {fr:'Je viens de Hongrie et je vis en France.', hu:'Magyarországból jövök és Franciaországban élek.'}
        ]
      }
    ],
    dialogue:{
      title:'Parler des langues',
      formal:[
        ['Beszél magyarul?','Parlez-vous hongrois ?'],
        ['Egy kicsit beszélek magyarul, de folyékonyan beszélek franciául.','Je parle un peu hongrois, mais je parle couramment français.'],
        ['Tud angolul?','Savez-vous parler anglais ?'],
        ['Igen, természetesen.','Oui, bien sûr.']
      ],
      informal:[
        ['Beszélsz magyarul?','Parles-tu hongrois ?'],
        ['Egy kicsit beszélek magyarul, de folyékonyan beszélek franciául.','Je parle un peu hongrois, mais je parle couramment français.'],
        ['Tudsz angolul?','Sais-tu parler anglais ?'],
        ['Igen, persze.','Oui, bien sûr.']
      ]
    }
  },
  {
    id:'m3_4', num:'3.4',
    title:'Métiers et opinions',
    source:'Magyarize — Hungarian Mastercourse for beginners',
    vocabCat:'academie_m3',
    rules:[
      {
        title:'Demander et dire son métier',
        body:'Deux questions permettent de demander le métier de quelqu’un : « Mi a foglalkozásod? » (familier) / « Mi a foglalkozása? » (formel), littéralement « quelle est ton/votre occupation ? », ou « Mivel foglalkozol? » (que fais-tu dans la vie ?). Pour répondre, on utilise la structure déjà connue « métier + vagyok » (rappel : pas de « van » à la 3e personne, voir Module 4).',
        examples:[
          ['Mi a foglalkozásod?','Quel est ton métier ?'],
          ['Orvos vagyok.','Je suis médecin.'],
          ['Mivel foglalkozol?','Que fais-tu dans la vie ?'],
          ['Tanár vagyok.','Je suis professeur.']
        ]
      },
      {
        title:'Parler de son lieu de travail',
        body:'Pour dire où l’on travaille, on utilise le suffixe « -nál/-nél » (chez, auprès de) après le nom de l’entreprise ou de l’organisation, suivi de « dolgozom » (je travaille).',
        examples:[
          ['Hol dolgozol?','Où travailles-tu ?'],
          ['Egy kórháznál dolgozom.','Je travaille dans un hôpital. (litt. auprès d’un hôpital)'],
          ['Egy iskolánál dolgozom.','Je travaille dans une école.']
        ]
      },
      {
        title:'Donner son opinion sur son travail',
        body:'« Szerintem » (selon moi, à mon avis) introduit une opinion. On peut aussi dire simplement si on aime ou non son travail avec « szeretem » / « nem szeretem » (j’aime / je n’aime pas) + « a munkámat » (mon travail).',
        examples:[
          ['Szeretem a munkámat.','J’aime mon travail.'],
          ['Nem szeretem a munkámat.','Je n’aime pas mon travail.'],
          ['Szerintem érdekes, de fárasztó.','À mon avis, c’est intéressant, mais fatigant.'],
          ['Szerintem unalmas.','À mon avis, c’est ennuyeux.']
        ]
      }
    ],
    exercises:[
      {
        type:'fill',
        title:'Complète les phrases sur le métier',
        items:[
          {before:'Mi a ', after:'od?', answer:'foglalkozás', note:'Quel est ton métier ? (familier)'},
          {before:'Orvos ', after:'.', answer:'vagyok', note:'Je suis médecin.'},
          {before:'Egy kórház', after:' dolgozom.', answer:'nál', note:'Je travaille dans un hôpital.'},
          {before:'Szeretem a ', after:'.', answer:'munkámat', note:'J’aime mon travail.'},
          {before:'Szerintem ', after:', de fárasztó.', answer:'érdekes', note:'À mon avis, c’est intéressant, mais fatigant.'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'Quel est votre métier ?', hu:'Mi a foglalkozása?'},
          {fr:'Je suis ingénieur.', hu:'Mérnök vagyok.'},
          {fr:'Où travailles-tu ?', hu:'Hol dolgozol?'},
          {fr:'Je travaille dans une école.', hu:'Egy iskolánál dolgozom.'},
          {fr:'J’aime mon travail, c’est intéressant.', hu:'Szeretem a munkámat, szerintem érdekes.'},
          {fr:'Je n’aime pas mon travail, c’est ennuyeux et fatigant.', hu:'Nem szeretem a munkámat, szerintem unalmas és fárasztó.'}
        ]
      }
    ],
    dialogue:{
      title:'Parler de son métier',
      formal:[
        ['Mi a foglalkozása?','Quel est votre métier ?'],
        ['Ügyvéd vagyok, egy budapesti irodánál dolgozom.','Je suis avocat, je travaille dans un cabinet à Budapest.'],
        ['Szereti a munkáját?','Aimez-vous votre travail ?'],
        ['Igen, szerintem érdekes, de néha fárasztó.','Oui, à mon avis c’est intéressant, mais parfois fatigant.'],
        ['És Ön mivel foglalkozik?','Et vous, que faites-vous dans la vie ?'],
        ['Tanár vagyok, szeretem a munkámat.','Je suis professeur, j’aime mon travail.']
      ],
      informal:[
        ['Mi a foglalkozásod?','Quel est ton métier ?'],
        ['Ügyvéd vagyok, egy budapesti irodánál dolgozom.','Je suis avocat, je travaille dans un cabinet à Budapest.'],
        ['Szereted a munkádat?','Aimes-tu ton travail ?'],
        ['Igen, szerintem érdekes, de néha fárasztó.','Oui, à mon avis c’est intéressant, mais parfois fatigant.'],
        ['És te mivel foglalkozol?','Et toi, que fais-tu dans la vie ?'],
        ['Tanár vagyok, szeretem a munkámat.','Je suis professeur, j’aime mon travail.']
      ]
    }
  },
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
