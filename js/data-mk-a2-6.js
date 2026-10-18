/* MagyarOK A2 — chapitre 6 : Ahol a legtöbb időt töltjük (Là où l’on passe le plus de temps). Contenu original. */
MKM.use('A2', 6, 'Ahol a legtöbb időt töltjük', 'Là où l’on passe le plus de temps');

MK_MODULES.push(
MKM('mkb6_1','A2·6.1','Állásinterjú — L’entretien d’embauche',{
  rules:[
    MKR('Questions d’entretien','Les recruteurs utilisent la forme polie : « Mióta dolgozik ebben a szakmában? » (Depuis quand travaillez-vous dans ce métier ?), « Milyen nyelveket beszél? », « Miért ezt az állást választotta? », « Mikor kezdhet? » (Quand pouvez-vous commencer ?).',{examples:[['Mesélne magáról?','Pourriez-vous vous présenter ?'],['Három éve dolgozom informatikusként.','Cela fait trois ans que je travaille comme informaticien.'],['Jövő hónapban kezdhetek.','Je peux commencer le mois prochain.']]}),
    MKR('Le futur : fog + infinitif','Le futur se forme avec « fog » conjugué + infinitif : fogok dolgozni, fogsz dolgozni, fog dolgozni, fogunk dolgozni, fogtok dolgozni, fognak dolgozni. Avec un nom : « leszek » (je serai) : « Tanár leszek. » On peut aussi utiliser le présent avec un mot de temps (Holnap dolgozom).',{table:[['fogok dolgozni','je travaillerai'],['fogsz tanulni','tu étudieras'],['fog utazni','il voyagera'],['leszek tanár','je serai professeur']]})
  ],
  vocab:[['állásinterjú','entretien d’embauche',''],['önéletrajz','CV',''],['tapasztalat','expérience',''],['végzettség','formation, diplôme',''],['nyelvtudás','connaissances en langues',''],['fizetés','salaire',''],['próbaidő','période d’essai',''],['munkaidő','temps de travail',''],['jelentkezik','postuler',''],['felvesz','embaucher',''],['munkáltató','employeur',''],['kezd','commencer',''],['következő','suivant',''],['jövő hónap','le mois prochain','']],
  exercises:[MKB('fill','Futur (fog + infinitif)',[MKF('Holnap ','  dolgozni. (je)','fogok',''),MKF('Te mit ','  csinálni? (tu)','fogsz',''),MKF('Ők is ','  jönni.','fognak',''),MKF('Mi ','  utazni. (nous)','fogunk','')]),MKB('choice','Choisis',[MKC('« Je serai professeur. »','Tanár leszek.','Tanár fogok.','Tanár vagyok lesz.')])]
}),
MKM('mkb6_2','A2·6.2','Munkatársak — Collègues',{
  rules:[
    MKR('Le pronom relatif : aki, akit, akivel…','« aki » (qui, personne) se décline comme « ki » : akit (que), akinek (à qui), akivel (avec qui), akihez (chez qui), akiről (dont/de qui). « Az a kolléga, aki segített, nagyon kedves. » « Ismerem a nőt, akivel beszéltél. » Pour les choses : ami, amit, amiben.',{table:[['aki','qui (sujet)'],['akit','que (objet)'],['akinek','à qui'],['akivel','avec qui'],['akiről','dont, de qui'],['amit','ce que / que (objet, chose)']]}),
    MKR('Parler de ses collègues','« Milyen a főnököd? » — « Olyan főnököm van, aki mindig segít. » « Van egy kollégám, akivel jól dolgozom. »',{examples:[['Olyan kolléga, akire számíthatsz.','Un collègue sur qui tu peux compter.'],['Az a nő, akit láttál, a főnököm.','La femme que tu as vue est ma cheffe.']]})
  ],
  vocab:[['munkatárs','collègue',''],['vezető','dirigeant',''],['beosztott','subordonné',''],['csapat','équipe',''],['segít','aider',''],['számít','compter (sur)',''],['megbízható','fiable',''],['pontos','ponctuel, précis',''],['türelmes','patient',''],['aki','qui (personne)',''],['akit','que (personne)',''],['akivel','avec qui','']],
  exercises:[MKB('fill','Pronom relatif',[MKF('Ő az a kolléga, ','  segített. (qui)','aki',''),MKF('Ő az a nő, ','  láttam. (que)','akit',''),MKF('Van egy barátom, ','  jól dolgozom. (avec qui)','akivel',''),MKF('Ő az, ','  adtam a levelet. (à qui)','akinek','')])]
}),
MKM('mkb6_3','A2·6.3','Munkahelyi telefonbeszélgetések — Au téléphone',{
  rules:[
    MKR('Le conditionnel présent','Le conditionnel se forme avec -na/-ne (+ personne). Indéfini : -nék, -nál/-nél, -na/-ne, -nánk/-nénk, -nátok/-nétek, -nának/-nének. Exemples : olvasnék, olvasnál, olvasna ; néznék, néznél, nézne. Irréguliers : lenni → lennék, menni → mennék, enni → ennék, inni → innék.',{table:[['én','olvasnék · néznék · lennék'],['te','olvasnál · néznél · lennél'],['ő','olvasna · nézne · lenne'],['mi','olvasnánk · néznénk · lennénk'],['ti','olvasnátok · néznétek · lennétek'],['ők','olvasnának · néznének · lennének']]}),
    MKR('Demandes polies au téléphone','« Jó napot kívánok! Beszélhetnék Nagy úrral? » (Pourrais-je parler à M. Nagy ?) — « Egy pillanat, kapcsolom. » — « Kérhetném, hogy hívja vissza később? » (Pourriez-vous le rappeler plus tard ?) — « Szeretnék üzenetet hagyni. »',{examples:[['Beszélhetnék Nagy úrral?','Pourrais-je parler à M. Nagy ?'],['Kaphatnék egy kávét?','Pourrais-je avoir un café ?'],['Szeretnék üzenetet hagyni.','Je voudrais laisser un message.']]})
  ],
  vocab:[['telefon','téléphone',''],['hív','appeler',''],['visszahív','rappeler',''],['kapcsol','passer la communication',''],['üzenet','message',''],['hagy','laisser',''],['foglalt','occupé',''],['egy pillanat','un instant',''],['kérhetnék','pourrais-je demander',''],['beszélhetnék','pourrais-je parler',''],['szeretnék','je voudrais',''],['lehetne','serait-il possible','']],
  exercises:[MKB('fill','Conditionnel',[MKF('Én kávét ','.  (iszik → inni)','innék',''),MKF('Mi moziba ','.  (megy → menni)','mennénk',''),MKF('Te mit ','?  (néz)','néznél',''),MKF('Ő is itt ','.  (van → lenni)','lenne',''),MKF('Én egy könyvet ','.  (olvas)','olvasnék','')]),MKB('choice','Choisis',[MKC('« Pourrais-je parler à M. Nagy ? »','Beszélhetnék Nagy úrral?','Beszélhetek Nagy úrral?','Beszélnék Nagy úr?')])]
}),
MKM('mkb6_4','A2·6.4','Foglalkozások — Métiers',{
  rules:[
    MKR('Faire un souhait ou une hypothèse','« Ha időm lenne, utaznék. » (Si j’avais le temps, je voyagerais.) Dans la proposition en « ha », on met aussi le conditionnel : ha + conditionnel, conditionnel.',{examples:[['Ha több időm lenne, többet olvasnék.','Si j’avais plus de temps, je lirais davantage.'],['Szeretnék orvos lenni.','Je voudrais être médecin.'],['Mit csinálnál, ha sok pénzed lenne?','Que ferais-tu si tu avais beaucoup d’argent ?']]})
  ],
  vocab:[['orvos','médecin',''],['ápoló','infirmier',''],['tanár','professeur',''],['mérnök','ingénieur',''],['programozó','programmeur',''],['pincér','serveur',''],['szakács','cuisinier',''],['rendőr','policier',''],['tűzoltó','pompier',''],['újságíró','journaliste',''],['színész','acteur',''],['festő','peintre',''],['lenne','serait',''],['ha','si','']],
  exercises:[MKB('fill','Hypothèse',[MKF('Ha időm ','  , utaznék. (serait)','lenne',''),MKF('Ha pénzem lenne, házat ','.  (vesz)','vennék',''),MKF('Ha jó idő ','  , sétálnánk. (serait)','lenne','')])]
})
);

MK_CHAPTERS.push({
  id:'a2-6', level:'A2', num:6, hu:'Ahol a legtöbb időt töltjük', fr:'Là où l’on passe le plus de temps',
  intro:'Parler du travail : entretien d’embauche, collègues, téléphone, métiers. Grammaire : pronom relatif (aki, akit, akivel), questions directes et rapportées, azt/ezt qui annoncent « hogy », conditionnel présent et ses emplois, règles de césure, futur, ordre des mots avec focus sans préverbe.',
  modules:['mkb6_1','mkb6_2','mkb6_3','mkb6_4'],
  grammar:[
    MKG('ga6_aki','A vonatkozó névmás: aki, akit, akivel','Le pronom relatif','aki pour les personnes, ami pour les choses. Ils se déclinent comme ki / mi : akit, akinek, akivel, akihez, akiről…',{
      grid:{head:['Cas','Personne','Chose'],rows:[['sujet','aki','ami'],['objet','akit','amit'],['datif','akinek','aminek'],['avec','akivel','amivel'],['de/sur','akiről','amiről'],['chez','akihez','amihez']]}}),
    MKG('ga6_kerdes','Közvetlen kérdések és idézett kérdések','Questions directes et indirectes','Direct : Mikor jössz? Indirect : Megkérdezte, mikor jövök / Megkérdezte, hogy jövök-e.',{
      examples:[['Hol laksz?','Où habites-tu ?'],['Megkérdezte, hol lakom.','Il a demandé où j’habite.'],['Megkérdezte, hogy lakom-e itt.','Il a demandé si j’habite ici.']]}),
    MKG('ga6_az','Előreutalás és visszautalás: az, ez','Annonce et reprise : az, ez','« azt », « ezt » annoncent un « hogy » : Azt szeretném, hogy segíts. « Ez » reprend ce qui vient d’être dit : Ezért nem mentem.',{
      examples:[['Azt szeretném, hogy gyere.','Je voudrais que tu viennes.'],['Nem tudom, hogy mikor érkezik.','Je ne sais pas quand il arrive.']]}),
    MKG('ga6_felt','A feltételes mód: jelen idejű igeragozás','Le conditionnel présent','-na/-ne + terminaisons. 1re sg : -nék ; 2e sg : -nál/-nél ; 3e sg : -na/-ne ; 1re pl : -nánk/-nénk ; 2e pl : -nátok/-nétek ; 3e pl : -nának/-nének.',{
      grid:{head:['Personne','olvas','néz','van'],rows:[['én','olvasnék','néznék','lennék'],['te','olvasnál','néznél','lennél'],['ő','olvasna','nézne','lenne'],['mi','olvasnánk','néznénk','lennénk'],['ti','olvasnátok','néznétek','lennétek'],['ők','olvasnának','néznének','lennének']]}}),
    MKG('ga6_felt_funk','A feltételes mód funkciói','Emplois du conditionnel','Demande polie (Kaphatnék…?), souhait (Szeretnék…), conseil (Elmehetnél orvoshoz), hypothèse (Ha időm lenne…).',{
      examples:[['Kaphatnék egy pohár vizet?','Pourrais-je avoir un verre d’eau ?'],['Elmehetnél orvoshoz.','Tu pourrais aller chez le médecin.'],['Ha tudnék, segítenék.','Si je pouvais, j’aiderais.']]}),
    MKG('ga6_elvalaszt','Az elválasztás szabályai','Règles de césure','Les digraphes (cs, gy, ly, ny, sz, ty, zs) ne se coupent pas. Une consonne entre deux voyelles passe à la syllabe suivante ; entre deux consonnes, on coupe après la première.',{
      grid:{head:['Mot','Césure'],rows:[['magyar','ma-gyar'],['asztal','asz-tal'],['iskola','is-ko-la'],['kenyér','ke-nyér'],['ablak','ab-lak'],['barát','ba-rát']]}}),
    MKG('ga6_jovo','A jövő idő','Le futur','fog + infinitif ; ou « lesz » + nom. Le présent avec un mot de temps convient aussi.',{
      grid:{head:['Personne','fog + inf.','lesz'],rows:[['én','fogok dolgozni','leszek'],['te','fogsz dolgozni','leszel'],['ő','fog dolgozni','lesz'],['mi','fogunk dolgozni','leszünk'],['ti','fogtok dolgozni','lesztek'],['ők','fognak dolgozni','lesznek']]}}),
    MKG('ga6_szorend','Szórend: fókuszos mondatok igekötő nélkül','Ordre des mots : focus sans préverbe','L’élément mis en avant précède immédiatement le verbe : « Anna dolgozik itt », « Itt dolgozik Anna ».',{
      examples:[['Péter hívott.','C’est Péter qui a appelé.'],['Holnap fogok dolgozni.','C’est DEMAIN que je travaillerai.']]})
  ],
  exercises:[
    MKX('ea6_aki','ga6_aki','1. aki, akit, akivel','Pronom relatif',MKB('fill','Complète',[MKF('Az a férfi, ','  láttam, a főnököm. (que)','akit',''),MKF('A nő, ','  beszéltem, kedves. (avec qui)','akivel',''),MKF('A kolléga, ','  segít, jó. (qui)','aki',''),MKF('Az ember, ','  adtam a könyvet. (à qui)','akinek','')])),
    MKX('ea6_kerdes','ga6_kerdes','2. Kérdések','Directes / indirectes',MKB('choice','Choisis',[MKC('« Il a demandé où j’habite. »','Megkérdezte, hol lakom.','Megkérdezte, hol laksz.','Megkérdezte, hol lakik-e.')])),
    MKX('ea6_az','ga6_az','3. az, ez','Annoncer / reprendre',MKB('fill','Complète',[MKF('','  szeretném, hogy segíts. (cela)','Azt',''),MKF('Nem tudom, ','  mikor jön.','hogy',''),MKF('Későn keltem, ','  nem értem oda.','ezért','')])),
    MKX('ea6_felt','ga6_felt','4. Feltételes mód','Conditionnel',MKB('fill','Conditionnel',[MKF('Én pihenni ','.  (szeret → szeretne)','szeretnék',''),MKF('Te mit ','?  (csinál)','csinálnál',''),MKF('Ő jönni ','.  (akar)','akarna',''),MKF('Mi segíteni ','.  (tud)','tudnánk',''),MKF('Ti is ','.  (jön)','jönnétek',''),MKF('Ők itt ','.  (marad)','maradnának','')])),
    MKX('ea6_funk','ga6_felt_funk','5. A feltételes mód funkciói','Emplois',MKB('choice','Choisis',[MKC('« Pourrais-je avoir un café ? »','Kaphatnék egy kávét?','Kaphatok egy kávét?','Kapnék egy kávét?'),MKC('« Si j’avais le temps, je voyagerais. »','Ha időm lenne, utaznék.','Ha időm van, utaznék.','Ha időm lenne, utazom.')])),
    MKX('ea6_elvalaszt','ga6_elvalaszt','6. Elválasztás','Césure',MKB('choice','Coupe correctement',[MKC('magyar','ma-gyar','mag-yar','magy-ar'),MKC('asztal','asz-tal','as-ztal','a-sztal'),MKC('iskola','is-ko-la','isk-o-la','i-sko-la')])),
    MKX('ea6_jovo','ga6_jovo','7. A jövő idő','Futur',MKB('fill','Futur',[MKF('Én holnap ','  dolgozni.','fogok',''),MKF('Mi jövőre ','  utazni.','fogunk',''),MKF('Te mikor ','  jönni?','fogsz',''),MKF('Ők orvos ','.','lesznek','')])),
    MKX('ea6_szorend','ga6_szorend','8. Szórend','Focus',MKB('order','Remets en ordre',[MKO('C’est Péter qui a appelé.','Péter hívott.'),MKO('C’est demain que je travaillerai.','Holnap fogok dolgozni.')]))
  ]
});
