/* Données — Parcours MagyarOK : chapitres, grammaire du cahier, exercices du cahier (Gyakorlatok).
 *
 * Structure calquée sur le cahier de grammaire MagyarOK : pour chaque chapitre,
 *   « Nyelvtani összefoglalók » (résumés de grammaire : FORMA + FUNKCIÓ) puis
 *   « Gyakorlatok » (séries d’exercices), en plus du manuel (modules thématiques de MK_MODULES).
 * Tous les textes et exercices sont originaux (rédigés pour l’application).
 *
 * Types d’exercices : fill, choice, order, truefalse, translate.
 */

const MK_CHAPTERS = [
  {
    id:'a1-2', level:'A1', num:2,
    hu:'Találkozás', fr:'Rencontres',
    intro:'Saluer, se présenter, dire d’où l’on vient, quelles langues on parle, son métier, ses coordonnées et sa famille. La grammaire du chapitre : « être », les suffixes de lieu, la ville d’origine, les langues, les verbes réguliers, les possessifs -m / -d, les mots interrogatifs et l’ordre des mots.',
    modules:['mk2_1','mk2_2','mk2_3','mk2_4','mk2_5','mk2_6'],

    /* ================= GRAMMAIRE (Nyelvtani összefoglalók) ================= */
    grammar:[
      {
        id:'g2_van', hu:'A létige: van', fr:'Le verbe « être »',
        body:'« Lenni » (être) est irrégulier. Avec un nom ou un adjectif, il n’apparaît pas à la 3e personne : « Anna tanár » (Anna est enseignante).',
        grid:{head:['Personne','Forme','Personne','Forme'], rows:[
          ['én','vagyok','mi','vagyunk'],
          ['te','vagy','ti','vagytok'],
          ['ő / Ön','—','ők / Önök','—']
        ]},
        funkcio:[
          ['Ki vagy? / Ki ő?','Éva vagyok. / Ő András.'],
          ['Mi vagy? (métier)','Mérnök vagyok. / András diák.'],
          ['Mi ez?','Ez egy város.'],
          ['Hány éves vagy?','Húsz éves vagyok.'],
          ['Milyen nemzetiségű vagy?','Német vagyok.'],
          ['Milyen Magyarország?','Magyarország kicsi.']
        ],
        notes:['Pour les questions oui/non, l’ordre des mots ne change pas : seule l’intonation monte (« Magyar vagy ? »).','Le verbe « van » (il y a / se trouve) existe aussi à la 3e personne quand on parle d’un lieu : « Anna Budapesten van » (Anna est à Budapest). Nous le verrons au chapitre suivant.']
      },
      {
        id:'g2_hely', hu:'Helyhatározóragok: -ban/-ben, -n', fr:'Où ? — les suffixes de lieu',
        body:'Pour dire « dans / en / à », on ajoute un suffixe au nom du lieu. Il suit l’harmonie vocalique : -ban après des voyelles « graves » (a, á, o, ó, u, ú), -ben après des voyelles « aiguës » (e, é, i, í, ö, ő, ü, ű).',
        grid:{head:['Suffixe','Quand ?','Exemples'], rows:[
          ['-ban / -ben','pays, continents, villes étrangères','Franciaországban, Berlinben, Madridban'],
          ['-n (-on / -en / -ön)','Magyarország et de nombreuses villes hongroises','Magyarországon, Budapesten, Szegeden, Pécsen'],
          ['-ban (à voyelle finale longue)','a → á, e → é devant le suffixe','Anglia → Angliában, Kína → Kínában, Chile → Chilében']
        ]},
        notes:['Exception à retenir : « a világon » (dans le monde). Les îles prennent aussi -n : Cipruson, Máltán.','Les villes hongroises ne suivent pas toutes -n (Debrecenben, Győrben…) : on les apprend avec l’usage.']
      },
      {
        id:'g2_i', hu:'Származási hely: -i', fr:'D’où es-tu ? — le suffixe -i',
        body:'Pour dire qu’on est « de » telle ville ou pays, on ajoute -i au nom (invariable en harmonie vocalique). C’est un adjectif : « Szegedi vagyok » (je suis de Szeged).',
        grid:{head:['Nom','Origine','Sens'], rows:[
          ['Budapest','budapesti','de Budapest'],
          ['Szeged','szegedi','de Szeged'],
          ['London','londoni','de Londres'],
          ['Svájc','svájci','suisse'],
          ['Kanada','kanadai','canadien(ne)'],
          ['Amerika','amerikai','américain(e)']
        ]},
        notes:['Pour beaucoup de pays et continents, le suffixe s’ajoute directement ou avec une petite adaptation : Kanada → kanadai, Egyiptom → egyiptomi, Amerika → amerikai. Apprends-les comme ils viennent.','Question : « Honnan jössz ? » (D’où viens-tu ?) ou « Budapesti vagy ? » (Tu es de Budapest ?).']
      },
      {
        id:'g2_nyelv', hu:'Milyen nyelven? -ul/-ül', fr:'En quelle langue ?',
        body:'Pour dire « en (une langue) », on ajoute -ul (voyelles graves) ou -ül (voyelles aiguës) au nom de la langue. On l’emploie avec beszélni (parler), tudni (savoir), tanulni (apprendre).',
        grid:{head:['-ul (graves)','-ül (aiguës)'], rows:[
          ['oroszul','finnül'],
          ['spanyolul','lengyelül'],
          ['kínaiul','svédül'],
          ['japánul','németül'],
          ['angolul','törökül']
        ]},
        notes:['Après une voyelle finale longue, le suffixe s’ajoute à la forme allongée : francia → franciául.','Question : « Milyen nyelven beszélsz ? » — « Magyarul és angolul beszélek. »']
      },
      {
        id:'g2_igek', hu:'Szabályos igék', fr:'Les verbes réguliers (présent)',
        body:'Les verbes réguliers se conjuguent avec des terminaisons qui dépendent de l’harmonie vocalique du radical. Les pronoms sujets sont souvent omis : « Japánul tanulok » (j’apprends le japonais).',
        grid:{head:['Personne','tanul (graves)','beszél (aiguës)','örül (ö/ü)'], rows:[
          ['én','tanulok','beszélek','örülök'],
          ['te','tanulsz','beszélsz','örülsz'],
          ['ő / Ön','tanul','beszél','örül'],
          ['mi','tanulunk','beszélünk','örülünk'],
          ['ti','tanultok','beszéltek','örültök'],
          ['ők / Önök','tanulnak','beszélnek','örülnek']
        ]},
        notes:['On met le pronom seulement pour insister : « Én tanulok japánul, nem Éva » (c’est moi qui apprends le japonais, pas Éva).','Avec deux sujets au singulier, le verbe peut être au singulier ou au pluriel : « Péter és Jan Brüsszelben él / élnek ».']
      },
      {
        id:'g2_birtok', hu:'Birtokos személyjelek: -m, -d', fr:'« mon », « ton » — possessifs',
        body:'Le possesseur se marque par un suffixe sur le nom. Après une voyelle : -m (mon) et -d (ton). Après une consonne, on intercale une voyelle de liaison : -om / -em / -öm (mon) et -od / -ed / -öd (ton), selon l’harmonie vocalique.',
        grid:{head:['Personne','Après voyelle','Voyelles graves','Voyelles aiguës','ö / ő / ü / ű'], rows:[
          ['én (mon)','-m','-om / -am','-em','-öm'],
          ['te (ton)','-d','-od / -ad','-ed','-öd']
        ]},
        notes:['La voyelle finale s’allonge : anyu(ka) → anyukám, anyukád.','Mots composés : la dernière partie décide (anyanyelv → anyanyelvem). Mots étrangers : la dernière voyelle décide (koncert → koncertem).','Mots à une syllabe : attention, ils varient (ház → házam, mais szám → számom).','Forme irrégulière à connaître : név → nevem, neved.']
      },
      {
        id:'g2_kerdo', hu:'Kérdőszók: Ki? Mi? Hol?', fr:'Les mots interrogatifs',
        body:'Les mots interrogatifs de base se placent en début de phrase, et le verbe vient directement après eux.',
        grid:{head:['Mot','Exemple','Mot','Exemple'], rows:[
          ['Ki?','Ki vagy?','Hány …?','Hány ember él Kínában?'],
          ['Mi?','Mi ez?','Melyik …?','Melyik városban élsz?'],
          ['Hol?','Hol élsz?','Milyen …?','Milyen nyelven beszélsz?'],
          ['Hány éves?','Hány éves vagy?','Miért?','Miért tanulsz magyarul?']
        ]},
        notes:['« Ki ? » = qui, « Mi ? » = quoi, « Hol ? » = où.','Pour une question « Hány … ? » le nom qui suit reste au singulier : « Hány ember ? ».']
      },
      {
        id:'g2_szorend', hu:'Szórend: a fókuszpozíció', fr:'Ordre des mots : la position de focus',
        body:'En hongrois, l’élément le plus important de la phrase (celui qui répond à la question, ou qu’on veut souligner) se place immédiatement devant le verbe : c’est la position de focus. Le mot interrogatif y est lui aussi placé.',
        examples:[
          ['Hol élsz? — Budapesten élek.','Où habites-tu ? — J’habite À BUDAPEST.'],
          ['Milyen nyelven beszélsz? — Franciául beszélek.','Quelle langue parles-tu ? — Je parle FRANÇAIS.'],
          ['Ki tanul japánul? — Éva tanul japánul.','Qui apprend le japonais ? — C’est ÉVA qui l’apprend.'],
          ['Mit tanulsz? — Magyarul tanulok.','Que fais-tu comme étude ? — J’apprends LE HONGROIS.']
        ],
        notes:['Phrase neutre sans mise en avant : sujet – verbe – complément (« Éva japánul tanul »).','Quand on interroge sur un élément, la réponse reprend cet élément juste avant le verbe.']
      }
    ],

    /* ================= EXERCICES DU CAHIER (Gyakorlatok) ================= */
    exercises:[
      {
        id:'e2_van', topic:'g2_van', hu:'1. A létige', fr:'Le verbe « être »',
        blocks:[
          {
            type:'fill', title:'Complète avec vagyok, vagy, vagyunk ou vagytok (ou — si le verbe est absent)',
            items:[
              {before:'Én mérnök ', after:'.', answer:'vagyok', note:'je suis'},
              {before:'Te diák ', after:'?', answer:'vagy', note:'tu es'},
              {before:'Mi magyarok ', after:'.', answer:'vagyunk', note:'nous sommes'},
              {before:'Ti is szegediek ', after:'?', answer:'vagytok', note:'vous êtes'},
              {before:'Anna tanár', after:'.', answer:'-', note:'3e personne : tape « - » (verbe absent)'},
              {before:'Barta Dániel Budapesten él, magyar', after:'.', answer:'-', note:'3e personne : tape « - »'}
            ]
          },
          {
            type:'choice', title:'Choisis la bonne phrase',
            items:[
              {q:'« Tu es hongroise ? »', options:['Magyar vagy?','Magyar vagyok?','Magyar vagytok?'], answer:'Magyar vagy?'},
              {q:'« Je suis ingénieur. »', options:['Mérnök vagy.','Mérnök vagyok.','Mérnök vagyunk.'], answer:'Mérnök vagyok.'},
              {q:'« Nous sommes français. »', options:['Franciák vagytok.','Francia vagyok.','Franciák vagyunk.'], answer:'Franciák vagyunk.'}
            ]
          }
        ]
      },
      {
        id:'e2_hely', topic:'g2_hely', hu:'2. Helyhatározóragok', fr:'Suffixes de lieu',
        blocks:[
          {
            type:'fill', title:'Ajoute le bon suffixe : -ban, -ben, -on, -en ou -ön',
            items:[
              {before:'Franciaország', after:' élek.', answer:'ban', note:'en France'},
              {before:'Szeged', after:' élsz?', answer:'en', note:'à Szeged'},
              {before:'Magyarország', after:' él Vera.', answer:'on', note:'en Hongrie'},
              {before:'Berlin', after:' tanulok.', answer:'ben', note:'à Berlin'},
              {before:'Madrid', after:' élünk.', answer:'ban', note:'à Madrid'},
              {before:'Budapest', after:' vagyok.', answer:'en', note:'à Budapest'},
              {before:'Svájc', after:' élnek.', answer:'ban', note:'en Suisse'},
              {before:'Pécs', after:' tanulsz?', answer:'en', note:'à Pécs'},
              {before:'London', after:' dolgozom.', answer:'ban', note:'à Londres'},
              {before:'Peking', after:' élek.', answer:'ben', note:'à Pékin'}
            ]
          },
          {
            type:'choice', title:'Choisis la forme correcte',
            items:[
              {q:'J’habite à Vienne (Bécs).', options:['Bécsban élek.','Bécsben élek.','Bécsön élek.'], answer:'Bécsben élek.'},
              {q:'Elle habite à Budapest.', options:['Budapestben él.','Budapesten él.','Budapestban él.'], answer:'Budapesten él.'},
              {q:'Nous habitons en Italie (Olaszország).', options:['Olaszországon élünk.','Olaszországben élünk.','Olaszországban élünk.'], answer:'Olaszországban élünk.'}
            ]
          },
          {
            type:'translate', title:'Traduis en hongrois',
            items:[
              {fr:'J’habite en Allemagne.', hu:'Németországban élek.'},
              {fr:'Tu habites à Szeged ?', hu:'Szegeden élsz?'},
              {fr:'Nous apprenons à Berlin.', hu:'Berlinben tanulunk.'}
            ]
          }
        ]
      },
      {
        id:'e2_i', topic:'g2_i', hu:'3. Származási hely: -i', fr:'La ville d’origine',
        blocks:[
          {
            type:'fill', title:'Forme l’adjectif d’origine (tape le mot entier, en minuscules)',
            items:[
              {before:'Szeged → ', after:'', answer:'szegedi', note:'de Szeged'},
              {before:'Budapest → ', after:'', answer:'budapesti', note:'de Budapest'},
              {before:'Pécs → ', after:'', answer:'pécsi', note:'de Pécs'},
              {before:'Bécs → ', after:'', answer:'bécsi', note:'de Vienne'},
              {before:'London → ', after:'', answer:'londoni', note:'de Londres'},
              {before:'Párizs → ', after:'', answer:'párizsi', note:'de Paris'},
              {before:'Berlin → ', after:'', answer:'berlini', note:'de Berlin'},
              {before:'Svájc → ', after:'', answer:'svájci', note:'suisse'}
            ]
          },
          {
            type:'order', title:'Remets les mots dans l’ordre',
            items:[
              {ctx:'Question : « Tu es de Budapest ? »', words:['vagy','budapesti'], answer:'Budapesti vagy'},
              {ctx:'Réponse : « Je suis de Szeged. »', words:['vagyok','szegedi'], answer:'Szegedi vagyok'}
            ]
          }
        ]
      },
      {
        id:'e2_nyelv', topic:'g2_nyelv', hu:'4. Milyen nyelven? -ul/-ül', fr:'Les langues',
        blocks:[
          {
            type:'fill', title:'Ajoute -ul ou -ül',
            items:[
              {before:'angol', after:' beszélek.', answer:'ul', note:'en anglais'},
              {before:'német', after:' tudok.', answer:'ül', note:'en allemand'},
              {before:'orosz', after:' tanulok.', answer:'ul', note:'en russe'},
              {before:'finn', after:' beszélsz?', answer:'ül', note:'en finnois'},
              {before:'spanyol', after:' tud.', answer:'ul', note:'en espagnol'},
              {before:'lengyel', after:' beszélnek.', answer:'ül', note:'en polonais'},
              {before:'japán', after:' tanulunk.', answer:'ul', note:'en japonais'},
              {before:'török', after:' beszéltek.', answer:'ül', note:'en turc'}
            ]
          },
          {
            type:'translate', title:'Traduis en hongrois',
            items:[
              {fr:'Je parle anglais.', hu:'Angolul beszélek.'},
              {fr:'Tu parles allemand ?', hu:'Beszélsz németül?'},
              {fr:'Nous apprenons le japonais.', hu:'Japánul tanulunk.'}
            ]
          }
        ]
      },
      {
        id:'e2_igek', topic:'g2_igek', hu:'5. Szabályos igék', fr:'Les verbes réguliers',
        blocks:[
          {
            type:'fill', title:'Conjugue le verbe entre parenthèses',
            items:[
              {before:'Én magyarul ', after:'.', answer:'tanulok', note:'tanul'},
              {before:'Te angolul ', after:'?', answer:'beszélsz', note:'beszél'},
              {before:'Mi Szegeden ', after:'.', answer:'élünk', note:'él'},
              {before:'Ti németül ', after:'?', answer:'tudtok', note:'tud'},
              {before:'Ők nagyon ', after:'.', answer:'örülnek', note:'örül'},
              {before:'Én is ', after:'.', answer:'örülök', note:'örül'},
              {before:'Ő franciául ', after:'.', answer:'beszél', note:'beszél'},
              {before:'Mi japánul ', after:'.', answer:'tanulunk', note:'tanul'}
            ]
          },
          {
            type:'choice', title:'Quelle est la bonne terminaison ?',
            items:[
              {q:'Önök magyarul … (beszél)', options:['beszél','beszélnek','beszéltek'], answer:'beszélnek'},
              {q:'Ti Budapesten … (él)', options:['éltek','élnek','élünk'], answer:'éltek'},
              {q:'Te nem … (tud)', options:['tudok','tudsz','tudtok'], answer:'tudsz'}
            ]
          }
        ]
      },
      {
        id:'e2_birtok', topic:'g2_birtok', hu:'6. Birtokos személyjelek', fr:'Les possessifs -m / -d',
        blocks:[
          {
            type:'fill', title:'Écris « mon … » puis « ton … » (le mot sans article)',
            items:[
              {before:'cím → mon : ', after:'', answer:'címem', note:'mon adresse'},
              {before:'cím → ton : ', after:'', answer:'címed', note:'ton adresse'},
              {before:'telefonszám → mon : ', after:'', answer:'telefonszámom', note:'mon numéro'},
              {before:'barát → ton : ', after:'', answer:'barátod', note:'ton ami(e)'},
              {before:'család → mon : ', after:'', answer:'családom', note:'ma famille'},
              {before:'iskola → mon : ', after:'', answer:'iskolám', note:'mon école'},
              {before:'feleség → ton : ', after:'', answer:'feleséged', note:'ta femme'},
              {before:'anyanyelv → mon : ', after:'', answer:'anyanyelvem', note:'ma langue maternelle'},
              {before:'név → mon : ', after:'', answer:'nevem', note:'forme irrégulière'}
            ]
          },
          {
            type:'choice', title:'Choisis la forme correcte',
            items:[
              {q:'« mon père » (apa)', options:['apom','apám','apem'], answer:'apám'},
              {q:'« ta fille » (lány)', options:['lányod','lányed','lányád'], answer:'lányod'},
              {q:'« mon mari » (férj)', options:['férjom','férjem','férjam'], answer:'férjem'}
            ]
          }
        ]
      },
      {
        id:'e2_kerdo', topic:'g2_kerdo', hu:'7. Kérdőszók', fr:'Les mots interrogatifs',
        blocks:[
          {
            type:'fill', title:'Complète avec le mot interrogatif : Ki, Mi, Hol, Hány, Milyen, Melyik, Miért',
            items:[
              {before:'', after:' vagy? — Éva vagyok.', answer:'ki', note:'qui'},
              {before:'', after:' ez? — Ez egy város.', answer:'mi', note:'quoi'},
              {before:'', after:' élsz? — Pécsen.', answer:'hol', note:'où'},
              {before:'', after:' éves vagy? — Húsz.', answer:'hány', note:'combien'},
              {before:'', after:' nyelven beszélsz? — Oroszul.', answer:'milyen', note:'quelle sorte'},
              {before:'', after:' városban élsz? — Szegeden.', answer:'melyik', note:'lequel'},
              {before:'', after:' tanulsz magyarul? — Mert szeretem.', answer:'miért', note:'pourquoi'}
            ]
          },
          {
            type:'choice', title:'Quelle est la bonne réponse ?',
            items:[
              {q:'Hol él Anna?', options:['Tanár.','Szegeden él.','Húsz éves.'], answer:'Szegeden él.'},
              {q:'Hány éves vagy?', options:['Negyven éves vagyok.','Orvos vagyok.','Budapesten élek.'], answer:'Negyven éves vagyok.'},
              {q:'Mi a foglalkozásod?', options:['Orvos vagyok.','Magyarul beszélek.','Szegeden élek.'], answer:'Orvos vagyok.'}
            ]
          }
        ]
      },
      {
        id:'e2_szorend', topic:'g2_szorend', hu:'8. Szórend', fr:'Ordre des mots',
        blocks:[
          {
            type:'order', title:'Remets les mots dans l’ordre (le focus devant le verbe)',
            items:[
              {ctx:'Hol élsz?', words:['élek','Budapesten'], answer:'Budapesten élek'},
              {ctx:'Milyen nyelven beszélsz?', words:['beszélek','franciául'], answer:'Franciául beszélek'},
              {ctx:'Hol dolgozol?', words:['dolgozom','irodában','egy'], answer:'Egy irodában dolgozom'},
              {ctx:'Ki tanul japánul?', words:['tanul','Éva','japánul'], answer:'Éva tanul japánul'},
              {ctx:'Miért tanulsz magyarul?', words:['tanulsz','miért','magyarul'], answer:'Miért tanulsz magyarul'}
            ]
          },
          {
            type:'truefalse', title:'Vrai ou faux ? (règles du chapitre)',
            items:[
              {text:'En hongrois, l’élément le plus important se place juste devant le verbe.', answer:true, note:'C’est la position de focus.'},
              {text:'Pour une question oui/non, on change l’ordre des mots.', answer:false, note:'Seule l’intonation change.'},
              {text:'Les noms de langues prennent -ban / -ben.', answer:false, note:'Ils prennent -ul / -ül.'},
              {text:'« Anna magyar » : le verbe être est absent à la 3e personne.', answer:true, note:'Avec un nom ou un adjectif, oui.'},
              {text:'On met toujours le pronom sujet devant le verbe.', answer:false, note:'On l’omet, sauf pour insister.'}
            ]
          }
        ]
      }
    ]
  }
];

/* Sommaire complet des manuels : les chapitres pas encore construits s’affichent « bientôt ». */
const MK_ROADMAP = [
  {level:'A1', items:[
    {num:1, hu:'A magyar nyelv', fr:'La langue hongroise'},
    {num:2, hu:'Találkozás', fr:'Rencontres'},
    {num:3, hu:'Ismerkedés az irodában', fr:'Faire connaissance au bureau'},
    {num:4, hu:'A városban', fr:'En ville'},
    {num:5, hu:'Vásárlás, étterem', fr:'Achats et restaurant'},
    {num:6, hu:'Szolgáltatások, szabadidős programok', fr:'Services et loisirs'},
    {num:7, hu:'Aktív napok', fr:'Journées actives'},
    {num:8, hu:'Édes otthon', fr:'Chez soi'}
  ]},
  {level:'A2', items:[
    {num:1, hu:'Magunkról és másokról', fr:'Parler de soi et des autres'},
    {num:2, hu:'A hely, ahol lakom', fr:'Là où j’habite'},
    {num:3, hu:'Szabadidős programok', fr:'Loisirs'},
    {num:4, hu:'Hétvégék és hétköznapok', fr:'Week-ends et jours de semaine'},
    {num:5, hu:'Tanulni jó!', fr:'Étudier, c’est bien !'},
    {num:6, hu:'Ahol a legtöbb időt töltjük', fr:'Là où l’on passe le plus de temps'},
    {num:7, hu:'Közel és távol', fr:'Près et loin'},
    {num:8, hu:'Fő az egészség!', fr:'La santé avant tout !'}
  ]}
];
