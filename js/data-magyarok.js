/* Données — Parcours MagyarOK (A1), chapitre pilote : « Találkozás » (Rencontres).
 *
 * Ce parcours suit la progression et la structure du manuel (salutations → pays/langues →
 * nombres → métiers → famille → synthèse), mais tous les textes, exemples, dialogues et
 * exercices sont rédigés pour l’application (aucune copie du manuel).
 * Cette app MagyarOK est indépendante de l’« App de base Malcom » (data-a1.js / data-academy.js).
 * Chaque module : rules, personTable (optionnel), vocab [hongrois, français, note], exercises, dialogue.
 * Types d’exercices : fill, translate, truefalse, choice, order.
 */

const MAGYAROK_COURSE = 'magyarok-a1';
const MAGYAROK_LABEL = 'MagyarOK · Chapitre 2 — Találkozás (Rencontres)';
const MAGYAROK_SOURCE = 'Parcours MagyarOK A1 — chapitre 2';

const MK_MODULES = [
  /* ------------------------------------------------------------------ */
  {
    id:'mk2_1', num:'K2.1', level:'A1', course:MAGYAROK_COURSE, courseLabel:MAGYAROK_LABEL,
    title:'Köszönés, bemutatkozás — Saluer et se présenter',
    source:MAGYAROK_SOURCE,
    rules:[
      {
        title:'Tutoyer ou vouvoyer — tegezés / önözés',
        body:'Le hongrois distingue deux registres. Avec un ami, un enfant ou un jeune, on tutoie (tegezés, « te »). Avec une personne qu’on ne connaît pas, plus âgée ou dans un cadre professionnel, on vouvoie (önözés, « Ön »). Les salutations changent selon le registre : choisis-le dès la première phrase.',
        table:[
          ['Szia!','Salut ! (familier, aussi pour dire au revoir)'],
          ['Jó reggelt!','Bonjour (le matin)'],
          ['Jó napot kívánok!','Bonjour (journée, formel)'],
          ['Jó estét!','Bonsoir'],
          ['Viszlát!','À bientôt ! (familier)'],
          ['Viszontlátásra!','Au revoir (formel)'],
          ['Köszönöm.','Merci.'],
          ['Légy szíves! / Legyen szíves!','S’il te plaît / S’il vous plaît']
        ]
      },
      {
        title:'Se présenter — Hogy hívnak? Hogy hívják?',
        body:'Pour demander le nom, on dit « Hogy hívnak ? » (tu) ou « Hogy hívják ? » (vous). Pour répondre, la façon la plus simple est « Prénom + vagyok » (je suis…). Attention à l’ordre hongrois : le nom de famille vient avant le prénom (Kovács Anna).',
        examples:[
          ['Hogy hívnak?','Comment tu t’appelles ?'],
          ['Hogy hívják?','Comment vous appelez-vous ?'],
          ['Anna vagyok.','Je suis Anna.'],
          ['A nevem Kovács Anna.','Je m’appelle Anna Kovács.'],
          ['Örvendek!','Enchanté(e) !'],
          ['Honnan jössz? — Franciaországból.','D’où viens-tu ? — De France.']
        ]
      },
      {
        title:'Pas d’article devant un nom de métier ou de nationalité',
        body:'En hongrois on ne dit pas « je suis un médecin » : on dit simplement « Orvos vagyok » (je suis médecin). Et le mot « vagyok » peut se placer après le nom ou l’adjectif : « Francia vagyok » = « Je suis français(e) ».',
        examples:[
          ['Francia vagyok.','Je suis français(e).'],
          ['Magyar vagy?','Tu es hongrois(e) ?']
        ]
      }
    ],
    personTable:{
      title:'Le verbe « être » au présent — lenni',
      body:'À la 3e personne (il/elle/ils/elles), avec un nom ou un adjectif, le verbe est tout simplement absent : « Anna magyar » = « Anna est hongroise ». Aux autres personnes, il se conjugue.',
      cols:['Forme','Exemple','Traduction'],
      rows:[
        ['én','vagyok','Anna vagyok.','Je suis Anna.'],
        ['te','vagy','Te magyar vagy?','Tu es hongrois(e) ?'],
        ['ő / Ön','—','Anna magyar.','Anna est hongroise.'],
        ['mi','vagyunk','Franciák vagyunk.','Nous sommes français.'],
        ['ti','vagytok','Ti diákok vagytok?','Vous êtes étudiants ?'],
        ['ők / Önök','—','Ők magyarok.','Ils sont hongrois.']
      ]
    },
    vocab:[
      ['Szia','Salut','familier'],
      ['Jó napot kívánok','Bonjour','formel'],
      ['Jó estét','Bonsoir',''],
      ['Viszontlátásra','Au revoir','formel'],
      ['Köszönöm','Merci',''],
      ['Hogy hívnak?','Comment tu t’appelles ?',''],
      ['Hogy hívják?','Comment vous appelez-vous ?','formel'],
      ['Örvendek','Enchanté(e)',''],
      ['A nevem …','Je m’appelle …',''],
      ['Igen / Nem','Oui / Non','']
    ],
    exercises:[
      {
        type:'fill',
        title:'Complète avec la bonne forme de « lenni » (être)',
        items:[
          {before:'Én Anna ', after:'.', answer:'vagyok', note:'je suis'},
          {before:'Te magyar ', after:'?', answer:'vagy', note:'tu es'},
          {before:'Mi franciák ', after:'.', answer:'vagyunk', note:'nous sommes'},
          {before:'Ti diákok ', after:'?', answer:'vagytok', note:'vous êtes (pl.)'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'Comment tu t’appelles ?', hu:'Hogy hívnak?'},
          {fr:'Je suis français(e).', hu:'Francia vagyok.'},
          {fr:'Enchanté(e).', hu:'Örvendek.'},
          {fr:'Bonjour (formel).', hu:'Jó napot kívánok.'},
          {fr:'Tu es hongrois(e) ?', hu:'Magyar vagy?'}
        ]
      }
    ],
    dialogue:{
      title:'Première rencontre',
      formal:[
        ['Jó napot kívánok! Hogy hívják?','Bonjour ! Comment vous appelez-vous ?'],
        ['Jó napot! Kovács Anna vagyok.','Bonjour ! Je suis Anna Kovács.'],
        ['Örvendek. Én Martin Pierre vagyok.','Enchanté. Je suis Pierre Martin.'],
        ['Ön magyar?','Vous êtes hongroise ?'],
        ['Igen, magyar vagyok. És Ön?','Oui, je suis hongroise. Et vous ?'],
        ['Én francia vagyok.','Moi, je suis français.']
      ],
      informal:[
        ['Szia! Hogy hívnak?','Salut ! Comment tu t’appelles ?'],
        ['Szia! Anna vagyok. És téged?','Salut ! Je suis Anna. Et toi ?'],
        ['Pierre vagyok. Örvendek!','Je suis Pierre. Enchanté !'],
        ['Te magyar vagy?','Tu es hongroise ?'],
        ['Igen, magyar vagyok. Te francia vagy?','Oui, je suis hongroise. Tu es français ?'],
        ['Igen, francia vagyok.','Oui, je suis français.']
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    id:'mk2_2', num:'K2.2', level:'A1', course:MAGYAROK_COURSE, courseLabel:MAGYAROK_LABEL,
    title:'Országok, nemzetiségek, nyelvek — Pays, nationalités et langues',
    source:MAGYAROK_SOURCE,
    rules:[
      {
        title:'Pays, nationalité et langue',
        body:'Chaque pays a un adjectif de nationalité (invariable : « francia » pour un homme comme pour une femme) et un adverbe de langue en -ul / -ül (« franciául » = en français).',
        table:[
          ['Magyarország — magyar — magyarul','Hongrie — hongrois — en hongrois'],
          ['Franciaország — francia — franciául','France — français — en français'],
          ['Németország — német — németül','Allemagne — allemand — en allemand'],
          ['Olaszország — olasz — olaszul','Italie — italien — en italien'],
          ['Spanyolország — spanyol — spanyolul','Espagne — espagnol — en espagnol'],
          ['Anglia — angol — angolul','Angleterre — anglais — en anglais']
        ]
      },
      {
        title:'Où habites-tu ? — les suffixes -ban / -ben et -n',
        body:'Pour dire « dans / en / à » on ajoute un suffixe au lieu. Les pays prennent -ban (voyelles « graves » : a, á, o, ó, u, ú) ou -ben (voyelles « aiguës » : e, é, i, ö, ü). Les villes hongroises prennent plutôt -n (-on, -en, -ön), les villes étrangères -ban/-ben. Exception à retenir : Magyarország → Magyarországon.',
        examples:[
          ['Franciaországban élek.','J’habite en France.'],
          ['Németországban él.','Il / elle habite en Allemagne.'],
          ['Budapesten élek.','J’habite à Budapest.'],
          ['Szegeden élek.','J’habite à Szeged.'],
          ['Párizsban élek.','J’habite à Paris.'],
          ['Berlinben élek.','J’habite à Berlin.'],
          ['Magyarországon élek.','J’habite en Hongrie.']
        ]
      },
      {
        title:'Parler une langue — beszélni + -ul / -ül',
        body:'Pour dire dans quelle langue on parle, on ajoute -ul (voyelles graves) ou -ül (voyelles aiguës) au nom de la langue, puis on conjugue « beszélni » (parler). Pour demander : « Milyen nyelven beszélsz ? » (Quelle langue parles-tu ?).',
        examples:[
          ['Milyen nyelven beszélsz?','Quelle langue parles-tu ?'],
          ['Franciául és angolul beszélek.','Je parle français et anglais.'],
          ['Egy kicsit beszélek magyarul.','Je parle un peu hongrois.'],
          ['Párizsi vagyok.','Je suis de Paris. (le suffixe -i indique la ville d’origine)']
        ]
      }
    ],
    personTable:{
      title:'Parler au présent — beszélni',
      body:'Verbe régulier à conjugaison « indéfinie » : il suit exactement ce modèle pour beaucoup d’autres verbes (tanul, dolgozik avec de petites variations).',
      cols:['Forme','Exemple','Traduction'],
      rows:[
        ['én','beszélek','Franciául beszélek.','Je parle français.'],
        ['te','beszélsz','Beszélsz angolul?','Tu parles anglais ?'],
        ['ő / Ön','beszél','Anna németül beszél.','Anna parle allemand.'],
        ['mi','beszélünk','Magyarul beszélünk.','Nous parlons hongrois.'],
        ['ti','beszéltek','Olaszul beszéltek?','Vous parlez italien ?'],
        ['ők / Önök','beszélnek','Spanyolul beszélnek.','Ils parlent espagnol.']
      ]
    },
    vocab:[
      ['Magyarország','la Hongrie',''],
      ['Franciaország','la France',''],
      ['Németország','l’Allemagne',''],
      ['Olaszország','l’Italie',''],
      ['Spanyolország','l’Espagne',''],
      ['Anglia','l’Angleterre',''],
      ['nyelv','langue',''],
      ['beszélni','parler',''],
      ['élni','vivre, habiter',''],
      ['egy kicsit','un peu','']
    ],
    exercises:[
      {
        type:'fill',
        title:'Ajoute le bon suffixe de lieu (-ban, -ben, -n, -on, -en)',
        items:[
          {before:'Franciaország', after:' élek.', answer:'ban', note:'en France'},
          {before:'Berlin', after:' élek.', answer:'ben', note:'à Berlin'},
          {before:'Szeged', after:' élek.', answer:'en', note:'à Szeged'},
          {before:'Magyarország', after:' élek.', answer:'on', note:'en Hongrie — exception'},
          {before:'Németország', after:' élek.', answer:'ban', note:'en Allemagne'}
        ]
      },
      {
        type:'fill',
        title:'Ajoute le bon suffixe de langue (-ul ou -ül)',
        items:[
          {before:'angol', after:' beszélek.', answer:'ul', note:'en anglais'},
          {before:'német', after:' beszélek.', answer:'ül', note:'en allemand'},
          {before:'olasz', after:' beszélek.', answer:'ul', note:'en italien'},
          {before:'spanyol', after:' beszélek.', answer:'ul', note:'en espagnol'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'Je parle hongrois.', hu:'Magyarul beszélek.'},
          {fr:'J’habite à Paris.', hu:'Párizsban élek.'},
          {fr:'Tu parles allemand ?', hu:'Beszélsz németül?'},
          {fr:'Je suis français, j’habite en Hongrie.', hu:'Francia vagyok, Magyarországon élek.'}
        ]
      }
    ],
    dialogue:{
      title:'Où habitez-vous, quelles langues parlez-vous ?',
      formal:[
        ['Hol él?','Où habitez-vous ?'],
        ['Budapesten élek, de francia vagyok.','J’habite à Budapest, mais je suis français.'],
        ['Milyen nyelven beszél?','Quelles langues parlez-vous ?'],
        ['Franciául, angolul és egy kicsit magyarul.','Français, anglais et un peu hongrois.'],
        ['Nagyon jól beszél magyarul!','Vous parlez très bien hongrois !'],
        ['Köszönöm, de még sokat tanulok.','Merci, mais j’ai encore beaucoup à apprendre.']
      ],
      informal:[
        ['Hol élsz?','Où habites-tu ?'],
        ['Budapesten élek, de francia vagyok.','J’habite à Budapest, mais je suis française.'],
        ['Milyen nyelven beszélsz?','Quelles langues parles-tu ?'],
        ['Franciául, angolul és egy kicsit magyarul.','Français, anglais et un peu hongrois.'],
        ['Nagyon jól beszélsz magyarul!','Tu parles très bien hongrois !'],
        ['Köszi, de még sokat tanulok.','Merci, mais j’ai encore beaucoup à apprendre.']
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    id:'mk2_3', num:'K2.3', level:'A1', course:MAGYAROK_COURSE, courseLabel:MAGYAROK_LABEL,
    title:'Számok, elérhetőségek — Nombres et coordonnées',
    source:MAGYAROK_SOURCE,
    rules:[
      {
        title:'Les nombres de 0 à 20',
        body:'De 11 à 19, on construit « tizen- » + l’unité. 20 se dit « húsz », et au-dessus de 20 la dizaine devient « huszon- » (huszonegy = 21).',
        table:[
          ['0 nulla · 1 egy · 2 kettő · 3 három','zéro · un · deux · trois'],
          ['4 négy · 5 öt · 6 hat · 7 hét','quatre · cinq · six · sept'],
          ['8 nyolc · 9 kilenc · 10 tíz','huit · neuf · dix'],
          ['11 tizenegy · 12 tizenkettő · 13 tizenhárom','onze · douze · treize'],
          ['14 tizennégy · 15 tizenöt · 16 tizenhat','quatorze · quinze · seize'],
          ['17 tizenhét · 18 tizennyolc · 19 tizenkilenc','dix-sept · dix-huit · dix-neuf'],
          ['20 húsz · 21 huszonegy · 22 huszonkettő','vingt · vingt et un · vingt-deux']
        ]
      },
      {
        title:'Les dizaines et « két » devant un nom',
        body:'Les dizaines : harminc (30), negyven (40), ötven (50), hatvan (60), hetven (70), nyolcvan (80), kilencven (90), száz (100). Devant un nom, « 2 » devient « két » : « két alma » (deux pommes). Et le nom reste au singulier après un nombre : « három gyerek » (trois enfants).',
        examples:[
          ['harmincöt','35'],
          ['negyvenhat','46'],
          ['két testvér','deux frères et sœurs'],
          ['három gyerek','trois enfants']
        ]
      },
      {
        title:'Donner ses coordonnées',
        body:'Un numéro de téléphone se lit généralement par groupes de deux chiffres. Dans une adresse e-mail, « @ » se dit « kukac » (littéralement : le ver) et « . » se dit « pont ».',
        examples:[
          ['Mi a telefonszámod?','Quel est ton numéro de téléphone ?'],
          ['Mi az e-mail címed?','Quelle est ton adresse e-mail ?'],
          ['anna kukac pelda pont hu','anna@pelda.hu (exemple lu à voix haute)'],
          ['Hány éves vagy? — Huszonöt éves vagyok.','Quel âge as-tu ? — J’ai vingt-cinq ans.']
        ]
      }
    ],
    vocab:[
      ['nulla','zéro',''],['egy','un',''],['kettő','deux','« két » devant un nom'],
      ['három','trois',''],['négy','quatre',''],['öt','cinq',''],['hat','six',''],
      ['hét','sept',''],['nyolc','huit',''],['kilenc','neuf',''],['tíz','dix',''],
      ['húsz','vingt',''],['harminc','trente',''],['száz','cent',''],
      ['kukac','@','littéralement « ver »'],['pont','point (.)',''],
      ['telefonszám','numéro de téléphone',''],['éves','âgé(e) de … ans','']
    ],
    exercises:[
      {
        type:'fill',
        title:'Complète les nombres',
        items:[
          {before:'huszon', after:' (21)', answer:'egy', note:'vingt et un'},
          {before:'tizen', after:' (13)', answer:'három', note:'treize'},
          {before:'huszon', after:' (25)', answer:'öt', note:'vingt-cinq'},
          {before:'harminc', after:' (30 + 6 = 36)', answer:'hat', note:'trente-six'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'sept', hu:'hét'},
          {fr:'quatorze', hu:'tizennégy'},
          {fr:'quarante', hu:'negyven'},
          {fr:'deux enfants', hu:'két gyerek'},
          {fr:'J’ai vingt-cinq ans.', hu:'Huszonöt éves vagyok.'}
        ]
      }
    ],
    dialogue:{
      title:'Échanger ses coordonnées',
      formal:[
        ['Elnézést, mi a telefonszáma?','Excusez-moi, quel est votre numéro de téléphone ?'],
        ['Nulla hat, húsz, tizenkettő, harmincöt, negyvenhat.','06, 20, 12, 35, 46.'],
        ['Köszönöm. És az e-mail címe?','Merci. Et votre adresse e-mail ?'],
        ['Anna kukac példa pont hu.','anna@pelda.hu.'],
        ['Hány éves, ha szabad kérdeznem?','Quel âge avez-vous, si je peux me permettre ?'],
        ['Negyven éves vagyok.','J’ai quarante ans.']
      ],
      informal:[
        ['Mi a telefonszámod?','Quel est ton numéro de téléphone ?'],
        ['Nulla hat, húsz, tizenkettő, harmincöt, negyvenhat.','06, 20, 12, 35, 46.'],
        ['Szuper, köszi! És az e-mail címed?','Super, merci ! Et ton adresse e-mail ?'],
        ['Anna kukac példa pont hu.','anna@pelda.hu.'],
        ['Hány éves vagy?','Quel âge as-tu ?'],
        ['Huszonöt éves vagyok.','J’ai vingt-cinq ans.']
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    id:'mk2_4', num:'K2.4', level:'A1', course:MAGYAROK_COURSE, courseLabel:MAGYAROK_LABEL,
    title:'Foglalkozások — Les métiers',
    source:MAGYAROK_SOURCE,
    rules:[
      {
        title:'Dire son métier',
        body:'Pour demander : « Mi a foglalkozásod ? » (quel est ton métier ?) ou « Mit dolgozol ? » (que fais-tu comme travail ?). On répond sans article : « Orvos vagyok » (je suis médecin). Au pluriel, le nom prend -k : « Orvosok vagyunk » (nous sommes médecins).',
        examples:[
          ['Mi a foglalkozásod?','Quel est ton métier ?'],
          ['Orvos vagyok.','Je suis médecin.'],
          ['Anna tanár.','Anna est enseignante.'],
          ['Diák vagyok.','Je suis étudiant(e).'],
          ['Mérnökök vagyunk.','Nous sommes ingénieurs.']
        ]
      },
      {
        title:'Où travailles-tu ? — dolgozik + -ban / -ben',
        body:'Pour dire où l’on travaille, on utilise « dolgozik » (travailler) et le suffixe de lieu -ban / -ben : « egy kórházban dolgozom » (je travaille dans un hôpital). Le verbe « dolgozik » est un verbe en -ik, avec une 3e personne en -ik.',
        examples:[
          ['Hol dolgozol?','Où travailles-tu ?'],
          ['Egy kórházban dolgozom.','Je travaille dans un hôpital.'],
          ['Anna egy iskolában dolgozik.','Anna travaille dans une école.'],
          ['Egy étteremben dolgozunk.','Nous travaillons dans un restaurant.']
        ]
      }
    ],
    personTable:{
      title:'Travailler au présent — dolgozik',
      body:'Un verbe en -ik : seule la 1re personne du singulier diffère (-om / -em / -öm au lieu de -ok / -ek / -ök).',
      cols:['Forme','Exemple','Traduction'],
      rows:[
        ['én','dolgozom','Irodában dolgozom.','Je travaille dans un bureau.'],
        ['te','dolgozol','Hol dolgozol?','Où travailles-tu ?'],
        ['ő / Ön','dolgozik','Péter orvosként dolgozik.','Péter travaille comme médecin.'],
        ['mi','dolgozunk','Együtt dolgozunk.','Nous travaillons ensemble.'],
        ['ti','dolgoztok','Hol dolgoztok?','Où travaillez-vous ?'],
        ['ők / Önök','dolgoznak','Boltban dolgoznak.','Ils travaillent dans un magasin.']
      ]
    },
    vocab:[
      ['orvos','médecin',''],['tanár','enseignant(e)',''],['diák','étudiant(e), élève',''],
      ['mérnök','ingénieur(e)',''],['ápoló','infirmier / infirmière',''],
      ['szakács','cuisinier / cuisinière',''],['pincér','serveur / serveuse',''],
      ['eladó','vendeur / vendeuse',''],['rendőr','policier / policière',''],
      ['dolgozni','travailler',''],['iroda','bureau',''],['kórház','hôpital',''],
      ['iskola','école',''],['étterem','restaurant','']
    ],
    exercises:[
      {
        type:'fill',
        title:'Conjugue « dolgozik »',
        items:[
          {before:'Én kórházban ', after:'.', answer:'dolgozom', note:'je travaille'},
          {before:'Te hol ', after:'?', answer:'dolgozol', note:'tu travailles'},
          {before:'Anna iskolában ', after:'.', answer:'dolgozik', note:'elle travaille'},
          {before:'Mi irodában ', after:'.', answer:'dolgozunk', note:'nous travaillons'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'Je suis médecin.', hu:'Orvos vagyok.'},
          {fr:'Elle est enseignante.', hu:'Ő tanár.'},
          {fr:'Tu es étudiant ?', hu:'Diák vagy?'},
          {fr:'Je travaille dans un restaurant.', hu:'Egy étteremben dolgozom.'},
          {fr:'Quel est ton métier ?', hu:'Mi a foglalkozásod?'}
        ]
      }
    ],
    dialogue:{
      title:'Parler de son travail',
      formal:[
        ['Mi a foglalkozása?','Quel est votre métier ?'],
        ['Mérnök vagyok. És Ön?','Je suis ingénieur. Et vous ?'],
        ['Én orvos vagyok.','Moi, je suis médecin.'],
        ['Hol dolgozik?','Où travaillez-vous ?'],
        ['Egy kórházban dolgozom Szegeden.','Je travaille dans un hôpital à Szeged.'],
        ['Szeret a munkájában dolgozni?','Aimez-vous votre travail ?']
      ],
      informal:[
        ['Mi a foglalkozásod?','Quel est ton métier ?'],
        ['Mérnök vagyok. És te?','Je suis ingénieur. Et toi ?'],
        ['Én orvos vagyok.','Moi, je suis médecin.'],
        ['Hol dolgozol?','Où travailles-tu ?'],
        ['Egy kórházban dolgozom Szegeden.','Je travaille dans un hôpital à Szeged.'],
        ['Jó munka! Tetszik?','Beau métier ! Ça te plaît ?']
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    id:'mk2_5', num:'K2.5', level:'A1', course:MAGYAROK_COURSE, courseLabel:MAGYAROK_LABEL,
    title:'A családom — Ma famille',
    source:MAGYAROK_SOURCE,
    rules:[
      {
        title:'Les membres de la famille',
        body:'Quelques mots de base. Le hongrois n’a pas de mot unique pour « frère » ou « sœur » : « testvér » désigne un frère ou une sœur, et on précise si besoin avec « bátya » (frère aîné), « öcs » (frère cadet), « nővér » (sœur aînée), « húg » (sœur cadette).',
        table:[
          ['anya','mère'],['apa','père'],['testvér','frère ou sœur'],
          ['férj','mari'],['feleség','épouse'],['fiú','fils / garçon'],
          ['lány','fille'],['gyerek','enfant'],['nagymama','grand-mère'],['nagypapa','grand-père']
        ]
      },
      {
        title:'« mon », « ton » — les possessifs -m / -d',
        body:'Le possesseur s’ajoute directement au nom. Après une voyelle : -m (mon), -d (ton), le « a » final s’allonge en « á » (anya → anyám). Après une consonne : on intercale une voyelle de liaison, -om / -em / -öm (mon), -od / -ed / -öd (ton). La 3e personne (son, sa) fait -a / -e ou -ja / -je.',
        examples:[
          ['anya → anyám, anyád, anyja','ma mère, ta mère, sa mère'],
          ['apa → apám, apád, apja','mon père, ton père, son père'],
          ['lány → lányom, lányod, lánya','ma fille, ta fille, sa fille'],
          ['testvér → testvérem, testvéred, testvére','mon frère/ma sœur, ton/ta…, son/sa…'],
          ['gyerek → gyerekem, gyereked, gyereke','mon enfant, ton enfant, son enfant']
        ]
      },
      {
        title:'Avoir — « van » + possessif',
        body:'Pour dire « j’ai un frère », le hongrois dit littéralement « mon frère existe » : on met le nom avec le possessif et le mot « van » (il y a). Pour la négation : « nincs » (il n’y a pas).',
        examples:[
          ['Van egy testvérem.','J’ai un frère ou une sœur.'],
          ['Van testvéred?','Tu as un frère ou une sœur ?'],
          ['Két gyerekem van.','J’ai deux enfants.'],
          ['Nincs gyerekem.','Je n’ai pas d’enfant.'],
          ['A férjem orvos.','Mon mari est médecin.']
        ]
      }
    ],
    vocab:[
      ['anya','mère',''],['apa','père',''],['testvér','frère / sœur',''],
      ['férj','mari',''],['feleség','épouse',''],['fiú','fils, garçon',''],
      ['lány','fille',''],['gyerek','enfant',''],['nagymama','grand-mère',''],
      ['nagypapa','grand-père',''],['van','il y a, il existe',''],['nincs','il n’y a pas','']
    ],
    exercises:[
      {
        type:'fill',
        title:'Écris le mot avec le possessif demandé',
        items:[
          {before:'', after:' (ma mère)', answer:'anyám', note:'anya + -m'},
          {before:'', after:' (mon père)', answer:'apám', note:'apa + -m'},
          {before:'', after:' (ma fille)', answer:'lányom', note:'lány + -om'},
          {before:'', after:' (ton frère / ta sœur)', answer:'testvéred', note:'testvér + -ed'},
          {before:'', after:' (mon mari)', answer:'férjem', note:'férj + -em'}
        ]
      },
      {
        type:'translate',
        title:'Traduis en hongrois',
        items:[
          {fr:'J’ai un enfant.', hu:'Van egy gyerekem.'},
          {fr:'Tu as un frère ou une sœur ?', hu:'Van testvéred?'},
          {fr:'Je n’ai pas d’enfant.', hu:'Nincs gyerekem.'},
          {fr:'Ma mère est médecin.', hu:'Az anyám orvos.'}
        ]
      }
    ],
    dialogue:{
      title:'Parler de sa famille',
      formal:[
        ['Van gyereke?','Avez-vous des enfants ?'],
        ['Igen, két gyerekem van: egy fiam és egy lányom.','Oui, j’ai deux enfants : un fils et une fille.'],
        ['Hány évesek?','Quel âge ont-ils ?'],
        ['A fiam tizenkét éves, a lányom nyolc.','Mon fils a douze ans, ma fille huit.'],
        ['És a férje mivel foglalkozik?','Et votre mari, que fait-il ?'],
        ['Orvos, egy kórházban dolgozik.','Il est médecin, il travaille dans un hôpital.']
      ],
      informal:[
        ['Van testvéred?','Tu as des frères et sœurs ?'],
        ['Igen, egy nővérem van.','Oui, j’ai une grande sœur.'],
        ['Hány éves?','Quel âge a-t-elle ?'],
        ['Harminc éves.','Elle a trente ans.'],
        ['És a szüleid hol élnek?','Et tes parents, où habitent-ils ?'],
        ['Szegeden élnek.','Ils habitent à Szeged.']
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  {
    id:'mk2_6', num:'K2.6', level:'A1', course:MAGYAROK_COURSE, courseLabel:MAGYAROK_LABEL,
    title:'Összefoglalás — Synthèse : se présenter en entier',
    source:MAGYAROK_SOURCE,
    rules:[
      {
        title:'Un texte de présentation complet',
        body:'Voici comment assembler tout le chapitre en quelques phrases : nom, nationalité, ville, métier, langues, famille. Lis-le à voix haute, puis écris le tien sur le même modèle.',
        examples:[
          ['Szia! Kovács Anna vagyok.','Salut ! Je suis Anna Kovács.'],
          ['Magyar vagyok, Szegeden élek.','Je suis hongroise, j’habite à Szeged.'],
          ['Tanár vagyok, egy iskolában dolgozom.','Je suis enseignante, je travaille dans une école.'],
          ['Magyarul, angolul és egy kicsit franciául beszélek.','Je parle hongrois, anglais et un peu français.'],
          ['Van egy fiam és egy lányom.','J’ai un fils et une fille.'],
          ['A férjem orvos.','Mon mari est médecin.']
        ]
      },
      {
        title:'Prononciation et intonation',
        body:'En hongrois, l’accent tonique tombe toujours sur la première syllabe du mot (MAgyarország, BUdapest), jamais sur la dernière. Pour une question oui/non (« Magyar vagy ? »), la voix monte au milieu puis redescend sur la dernière syllabe ; pour une question avec mot interrogatif (« Hol élsz ? »), la voix reste plutôt descendante.',
        examples:[
          ['MAgyar vagy?','Tu es hongrois(e) ?'],
          ['HOL élsz?','Où habites-tu ?'],
          ['Milyen NYELven beszélsz?','Quelle langue parles-tu ?']
        ]
      }
    ],
    vocab:[
      ['Szia! … vagyok.','Salut ! Je suis …',''],
      ['… vagyok. (nationalité)','Je suis … (nationalité)',''],
      ['… -ban/-ben élek.','J’habite à / en …',''],
      ['… -ul/-ül beszélek.','Je parle …',''],
      ['… dolgozom.','Je travaille …',''],
      ['Van … -m.','J’ai …','possessif']
    ],
    exercises:[
      {
        type:'truefalse',
        title:'Vrai ou faux ? D’après le texte de présentation d’Anna',
        items:[
          {text:'Anna francia.', answer:false, note:'Elle dit « Magyar vagyok » : elle est hongroise.'},
          {text:'Anna Szegeden él.', answer:true, note:'« Szegeden élek ».'},
          {text:'Anna orvos.', answer:false, note:'Elle est enseignante (tanár) ; c’est son mari qui est médecin.'},
          {text:'Anna egy iskolában dolgozik.', answer:true, note:'« Egy iskolában dolgozom ».'},
          {text:'Anna három nyelven beszél.', answer:true, note:'Hongrois, anglais et un peu de français.'},
          {text:'Anna férje orvos.', answer:true, note:'« A férjem orvos ».'}
        ]
      },
      {
        type:'translate',
        title:'Présente-toi : traduis chaque phrase en hongrois',
        items:[
          {fr:'Salut ! Je suis Marie.', hu:'Szia! Marie vagyok.'},
          {fr:'Je suis française, j’habite à Lyon.', hu:'Francia vagyok, Lyonban élek.'},
          {fr:'Je parle français et anglais.', hu:'Franciául és angolul beszélek.'},
          {fr:'Je travaille dans un bureau.', hu:'Irodában dolgozom.'},
          {fr:'J’ai un frère ou une sœur.', hu:'Van egy testvérem.'}
        ]
      }
    ],
    dialogue:{
      title:'Se présenter à un groupe',
      formal:[
        ['Jó napot kívánok mindenkinek!','Bonjour à tous !'],
        ['Martin Pierre vagyok, francia vagyok.','Je suis Pierre Martin, je suis français.'],
        ['Budapesten élek és egy irodában dolgozom.','J’habite à Budapest et je travaille dans un bureau.'],
        ['Franciául, angolul és egy kicsit magyarul beszélek.','Je parle français, anglais et un peu hongrois.'],
        ['Van egy lányom, nyolc éves.','J’ai une fille, elle a huit ans.'],
        ['Örvendek, hogy megismerhetem Önöket!','Ravi de faire votre connaissance !']
      ],
      informal:[
        ['Sziasztok! Pierre vagyok.','Salut tout le monde ! Je suis Pierre.'],
        ['Francia vagyok, de Budapesten élek.','Je suis français, mais j’habite à Budapest.'],
        ['Irodában dolgozom.','Je travaille dans un bureau.'],
        ['Franciául, angolul és egy kicsit magyarul beszélek.','Je parle français, anglais et un peu hongrois.'],
        ['Van egy lányom.','J’ai une fille.'],
        ['Örülök, hogy itt vagyok!','Je suis content d’être ici !']
      ]
    }
  }
];
