/* MagyarOK A2 — chapitre 2 : A hely, ahol lakom (Là où j’habite). Contenu original. */
MKM.use('A2', 2, 'A hely, ahol lakom', 'Là où j’habite');

MK_MODULES.push(
MKM('mkb2_1','A2·2.1','Lakást keresünk — On cherche un logement',{
  rules:[
    MKR('Annonces immobilières : -s','Le suffixe -s forme des adjectifs : szoba → háromszobás, erkély → erkélyes, kert → kertes, lift → liftes, nap → napos. Dans une annonce : « Kiadó egy kétszobás, erkélyes lakás a belvárosban. »',{table:[['szobás','à … pièces (háromszobás)'],['erkélyes','avec balcon'],['kertes','avec jardin'],['liftes','avec ascenseur'],['napos','ensoleillé'],['bútorozott','meublé']]}),
    MKR('Un adjectif de provenance : -i','-i forme un adjectif de lieu ou de temps : város → városi (urbain), vidék → vidéki (rural), tegnap → tegnapi (d’hier), reggel → reggeli (du matin).',{table:[['város → városi','urbain'],['vidék → vidéki','de la campagne'],['Budapest → budapesti','de Budapest'],['tegnap → tegnapi','d’hier']]})
  ],
  vocab:[['kiadó','à louer',''],['eladó','à vendre',''],['albérlet','location',''],['bérleti díj','loyer',''],['rezsi','charges',''],['bútorozott','meublé',''],['üres','vide',''],['tágas','spacieux',''],['világos','lumineux',''],['csendes','calme',''],['napos','ensoleillé',''],['belváros','centre-ville',''],['külváros','banlieue',''],['szomszéd','voisin',''],['költözik','déménager',''],['hirdetés','annonce','']],
  exercises:[MKB('fill','Ajoute -s',[MKF('háromszoba → ','','háromszobás',''),MKF('erkély → ','','erkélyes',''),MKF('kert → ','','kertes',''),MKF('lift → ','','liftes','')]),MKB('choice','Choisis',[MKC('« urbain »','városi','városos','város'),MKC('« rural »','vidéki','vidékes','vidékü')])]
}),
MKM('mkb2_2','A2·2.2','A lakásban — Dans l’appartement',{
  rules:[
    MKR('Destination ou lieu : alá / alatt / alól','Chaque postposition a trois formes : où ? (repos), vers où ? (mouvement), d’où ? (provenance) : alatt / alá / alól (sous), mögött / mögé / mögül (derrière), mellett / mellé / mellől (à côté), előtt / elé / elől (devant), fölött / fölé / fölül (au-dessus).',{table:[['alatt · alá · alól','sous'],['mögött · mögé · mögül','derrière'],['mellett · mellé · mellől','à côté'],['előtt · elé · elől','devant'],['fölött · fölé · fölül','au-dessus']]}),
    MKR('Avec un pronom : alattam, mögötted…','Les postpositions se conjuguent avec les pronoms : alattam, alattad, alatta, alattunk, alattatok, alattuk (sous moi, toi…). De même mellettem, mögöttem, előttem, fölöttem.',{examples:[['A macska alattam ül.','Le chat est assis sous moi.'],['Mellettem lakik a nővérem.','Ma sœur habite à côté de chez moi.'],['Mögötted van a polc.','L’étagère est derrière toi.']]})
  ],
  vocab:[['alatt','sous',''],['alá','sous (vers)',''],['mögött','derrière',''],['mögé','derrière (vers)',''],['mellett','à côté',''],['mellé','à côté (vers)',''],['előtt','devant',''],['elé','devant (vers)',''],['fölött','au-dessus',''],['fölé','au-dessus (vers)',''],['között','entre',''],['közé','entre (vers)',''],['berendezés','aménagement',''],['bútor','meuble','']],
  exercises:[MKB('fill','Hol? → Hova?',[MKF('A kutya az asztal ','  van. (sous)','alatt','repos : alatt'),MKF('Beteszem a széket az asztal ','.  (sous, vers)','alá',''),MKF('Leteszem a táskát a szék ','.  (derrière, vers)','mögé','')]),MKB('fill','Pronoms',[MKF('A kutya ','  ül. (sous moi)','alattam',''),MKF('Ő ','  lakik. (à côté de moi)','mellettem',''),MKF('A polc ','  van. (derrière toi)','mögötted','')])]
}),
MKM('mkb2_3','A2·2.3','Házirend, szomszédok — Règlement, voisins',{
  rules:[
    MKR('kell / szabad / tilos','« kell » (il faut), « szabad » (il est permis), « tilos » (il est interdit). Négatif de « szabad » : « nem szabad » (interdit). Après : infinitif. « Itt tilos dohányozni. » « Nem szabad parkolni. » « Szabad bejönni? »',{table:[['kell + inf.','il faut'],['nem kell + inf.','pas besoin'],['szabad + inf.','il est permis'],['nem szabad / tilos + inf.','c’est interdit']]}),
    MKR('Parler de ses voisins','« Milyenek a szomszédaid? » — « Kedvesek és csendesek. » Pluriel de l’adjectif : kedvesek, csendesek, hangosak (bruyants), udvariasak.',{examples:[['Este tíz után nem szabad hangosan zenélni.','Après vingt-deux heures il est interdit de mettre de la musique fort.'],['A szomszédaim nagyon kedvesek.','Mes voisins sont très gentils.']]})
  ],
  vocab:[['házirend','règlement intérieur',''],['szabad','permis, libre',''],['tilos','interdit',''],['dohányzik','fumer',''],['parkol','se garer',''],['hangos','bruyant',''],['csendes','calme',''],['zaj','bruit',''],['lépcsőház','cage d’escalier',''],['kuka','poubelle',''],['udvarias','poli',''],['zavar','déranger','']],
  exercises:[MKB('choice','Choisis',[MKC('« Il est interdit de fumer. »','Tilos dohányozni.','Kell dohányozni.','Szabad dohányozni.'),MKC('« Peut-on entrer ? »','Szabad bejönni?','Tilos bejönni?','Kell bejönni?')]),MKB('fill','Pluriel de l’adjectif',[MKF('A szomszédok ','.  (kedves)','kedvesek',''),MKF('A gyerekek ','.  (hangos)','hangosak',''),MKF('Az utcák ','.  (csendes)','csendesek','')])]
}),
MKM('mkb2_4','A2·2.4','Vidék és nagyváros — Campagne et grande ville',{
  rules:[
    MKR('Comparer : -bb, mint, leg-','Comparatif : adjectif + -bb (magas → magasabb). Superlatif : leg- + comparatif (a legmagasabb). « mint » = que. Quelques irréguliers : jó → jobb → a legjobb ; sok → több → a legtöbb ; kevés → kevesebb ; nagy → nagyobb ; kicsi → kisebb ; szép → szebb.',{table:[['magas → magasabb → a legmagasabb','grand → plus grand → le plus grand'],['szép → szebb → a legszebb','beau → plus beau → le plus beau'],['nagy → nagyobb → a legnagyobb','grand → plus grand → le plus grand'],['jó → jobb → a legjobb','bon → meilleur → le meilleur'],['drága → drágább → a legdrágább','cher → plus cher → le plus cher'],['olcsó → olcsóbb → a legolcsóbb','bon marché → moins cher → le moins cher']]})
  ],
  vocab:[['nagyváros','grande ville',''],['falu','village',''],['vidék','campagne',''],['magasabb','plus grand',''],['nagyobb','plus grand',''],['szebb','plus beau',''],['jobb','meilleur',''],['olcsóbb','moins cher',''],['drágább','plus cher',''],['mint','que',''],['legnagyobb','le plus grand',''],['rekord','record','']],
  exercises:[MKB('fill','Comparatif',[MKF('Budapest ','  Szegednél. (nagy)','nagyobb',''),MKF('A falu ','  mint a város. (csendes)','csendesebb',''),MKF('A lakás ','  . (olcsó)','olcsóbb',''),MKF('Ez a ház ','  . (szép)','szebb','')]),MKB('fill','Superlatif',[MKF('Ő a ','  diák. (jó)','legjobb',''),MKF('Ez a ','  lakás. (nagy)','legnagyobb',''),MKF('Ez a ','  hotel. (drága)','legdrágább','')])]
})
);

MK_CHAPTERS.push({
  id:'a2-2', level:'A2', num:2, hu:'A hely, ahol lakom', fr:'Là où j’habite',
  intro:'Chercher un logement, décrire son intérieur, connaître les règles de la maison, parler de ses voisins et comparer vie rurale et urbaine. Grammaire : -i et -s, postpositions à trois formes (alatt/alá/alól), formes conjuguées (alattam), kell/szabad/tilos, pluriel de l’adjectif, comparatif et superlatif.',
  modules:['mkb2_1','mkb2_2','mkb2_3','mkb2_4'],
  grammar:[
    MKG('ga2_i','Melléknévképzők: -i','Les adjectifs en -i','-i transforme un nom de lieu ou de temps en adjectif : város → városi, vidék → vidéki, tegnap → tegnapi.',{
      grid:{head:['Nom','Adjectif'],rows:[['város','városi'],['vidék','vidéki'],['Budapest','budapesti'],['reggel','reggeli'],['tegnap','tegnapi'],['ma','mai']]}}),
    MKG('ga2_s','Melléknévképzők: -s','Les adjectifs en -s','-s (voyelle de liaison -as/-es/-os/-ös) exprime « qui a » : szoba → szobás, erkély → erkélyes, kert → kertes.',{
      grid:{head:['Nom','Adjectif'],rows:[['szoba','szobás'],['erkély','erkélyes'],['kert','kertes'],['lift','liftes'],['nap','napos'],['csend','csendes']]}}),
    MKG('ga2_nevuto_hova','Névutók a Hova? kérdésre: mögé, alá','Postpositions de direction','Hova ? alá (sous), mögé (derrière), mellé (à côté), elé (devant), fölé (au-dessus), közé (entre).',{
      grid:{head:['Hol?','Hova?','Honnan?'],rows:[['alatt','alá','alól'],['mögött','mögé','mögül'],['mellett','mellé','mellől'],['előtt','elé','elől'],['fölött','fölé','fölül'],['között','közé','közül']]}}),
    MKG('ga2_nevuto_rag','A névutók ragozott alakja','Postpositions conjuguées','Les postpositions prennent des suffixes personnels : alattam, alattad, alatta, alattunk, alattatok, alattuk.',{
      grid:{head:['Personne','alatt','mögött','mellett'],rows:[['én','alattam','mögöttem','mellettem'],['te','alattad','mögötted','melletted'],['ő','alatta','mögötte','mellette'],['mi','alattunk','mögöttünk','mellettünk'],['ti','alattatok','mögöttetek','mellettetek'],['ők','alattuk','mögöttük','mellettük']]}}),
    MKG('ga2_kell','Segédigék: kell, szabad, tilos','Modaux : devoir, avoir le droit, interdit','Ces mots précèdent ou suivent l’infinitif. « Nem szabad » et « tilos » expriment l’interdiction.',{
      examples:[['Itt kell várni.','Il faut attendre ici.'],['Szabad fényképezni?','A-t-on le droit de photographier ?'],['Tilos a dohányzás.','Il est interdit de fumer.']]}),
    MKG('ga2_mn_tobbes','A melléknév többes száma (Ismétlés)','Pluriel de l’adjectif (rappel)','-ak/-ek (après consonne), -k (après voyelle) ; a→á, e→é en fin de mot. Exceptions : nagy → nagyok, jó → jók.',{
      grid:{head:['Singulier','Pluriel'],rows:[['kedves','kedvesek'],['hangos','hangosak'],['csendes','csendesek'],['olcsó','olcsók'],['drága','drágák'],['nagy','nagyok']]}}),
    MKG('ga2_osszehas','Összehasonlítás: magas, magasabb, a legmagasabb','Comparatif et superlatif','Comparatif : -bb (avec voyelle de liaison : -abb/-ebb). Superlatif : leg- + comparatif. « mint » ou « -nál/-nél » pour le second terme.',{
      grid:{head:['Positif','Comparatif','Superlatif'],rows:[['magas','magasabb','a legmagasabb'],['szép','szebb','a legszebb'],['nagy','nagyobb','a legnagyobb'],['jó','jobb','a legjobb'],['kicsi','kisebb','a legkisebb'],['sok','több','a legtöbb']]},
      examples:[['Budapest nagyobb, mint Szeged.','Budapest est plus grand que Szeged.'],['Budapest nagyobb Szegednél.','Budapest est plus grand que Szeged.']]}),
    MKG('ga2_szorend','Szórend: kell, szabad, tilos','Ordre des mots avec kell, szabad, tilos','Ces mots se placent près de l’infinitif : « Itt tilos dohányozni », « Nem szabad itt parkolni ». Avec une personne : « Nekem kell menni ».',{
      examples:[['Nem szabad hangosan zenélni.','Il ne faut pas mettre la musique fort.'],['Neked nem kell várni.','Tu n’as pas à attendre.']]})
  ],
  exercises:[
    MKX('ea2_i','ga2_i','1. -i','Adjectifs en -i',MKB('fill','Ajoute -i',[MKF('vidék → ','','vidéki',''),MKF('város → ','','városi',''),MKF('reggel → ','','reggeli',''),MKF('Szeged → ','','szegedi','')])),
    MKX('ea2_s','ga2_s','2. -s','Adjectifs en -s',MKB('fill','Ajoute -s',[MKF('erkély → ','','erkélyes',''),MKF('kert → ','','kertes',''),MKF('szoba → háromszoba → ','','háromszobás',''),MKF('nap → ','','napos','')])),
    MKX('ea2_hova','ga2_nevuto_hova','3. Hova?','alá, mögé…',MKB('fill','Complète',[MKF('A kutya az asztal ','  megy. (sous)','alá',''),MKF('A szék az ajtó ','  kerül. (devant)','elé',''),MKF('A kulcs a doboz ','  esett. (derrière)','mögé','')])),
    MKX('ea2_rag','ga2_nevuto_rag','4. Alattam, mögötted…','Postpositions conjuguées',MKB('fill','Complète',[MKF('A lámpa ','  van. (au-dessus de moi)','fölöttem',''),MKF('Ő ','  ül. (à côté de toi)','melletted',''),MKF('A kutya ','  fekszik. (sous elle/lui)','alatta',''),MKF('A gyerekek ','  futnak. (devant nous)','előttünk','')])),
    MKX('ea2_kell','ga2_kell','5. kell, szabad, tilos','Modaux',MKB('choice','Choisis',[MKC('« Il est interdit de se garer. »','Tilos parkolni.','Szabad parkolni.','Kell parkolni.'),MKC('« Il faut payer. »','Fizetni kell.','Fizetni tilos.','Fizetni szabad.')])),
    MKX('ea2_mn','ga2_mn_tobbes','6. Melléknév többes száma','Pluriel',MKB('fill','Pluriel',[MKF('A házak ','.  (nagy)','nagyok',''),MKF('Az árak ','.  (drága)','drágák',''),MKF('A szomszédok ','.  (kedves)','kedvesek',''),MKF('A lakások ','.  (olcsó)','olcsók','')])),
    MKX('ea2_osszehas','ga2_osszehas','7. Összehasonlítás','Comparatif / superlatif',MKB('fill','Complète',[MKF('A vonat ','  mint a busz. (gyors)','gyorsabb',''),MKF('Ez a ','  lakás. (olcsó)','legolcsóbb',''),MKF('Ő ','  nálam. (magas)','magasabb',''),MKF('Ez a ','  film. (jó)','legjobb','')])),
    MKX('ea2_szorend','ga2_szorend','8. Szórend','Ordre',MKB('order','Remets en ordre',[MKO('Il est interdit de se garer ici.','Itt tilos parkolni.'),MKO('Il ne faut pas faire de bruit.','Nem szabad zajongani.')]))
  ]
});
