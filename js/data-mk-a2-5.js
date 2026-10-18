/* MagyarOK A2 — chapitre 5 : Tanulni jó! (Étudier, c’est bien !). Contenu original. */
MKM.use('A2', 5, 'Tanulni jó!', 'Étudier, c’est bien !');

MK_MODULES.push(
MKM('mkb5_1','A2·5.1','Iskolarendszerek — Les systèmes scolaires',{
  rules:[
    MKR('Le parcours scolaire','En Hongrie : óvoda (maternelle) → általános iskola (école primaire/collège, 8 ans) → középiskola (gimnázium ou szakközépiskola) → érettségi (baccalauréat) → egyetem ou főiskola (université) → diploma. On compare avec son pays : « Franciaországban az iskola hat évesen kezdődik. »',{examples:[['Hány évesen kezdődik az iskola?','À quel âge commence l’école ?'],['Az érettségi után egyetemre mentem.','Après le bac je suis allé à l’université.'],['Három évig tanultam az egyetemen.','J’ai étudié trois ans à l’université.']]}),
    MKR('Combien de personnes ? egyedül, ketten, hárman','Numéraux de groupe : egyedül (seul), ketten (à deux), hárman (à trois), négyen, öten, hatan, heten, nyolcan, kilencen, tízen. Question : « Hányan vagytok? ».',{table:[['egyedül','seul'],['ketten','à deux'],['hárman','à trois'],['négyen','à quatre'],['öten','à cinq'],['tízen','à dix']]})
  ],
  vocab:[['óvoda','école maternelle',''],['általános iskola','école primaire / collège',''],['gimnázium','lycée général',''],['szakközépiskola','lycée professionnel',''],['érettségi','baccalauréat',''],['egyetem','université',''],['főiskola','école supérieure',''],['diploma','diplôme',''],['osztály','classe',''],['tanév','année scolaire',''],['félév','semestre',''],['tantárgy','matière',''],['bizonyítvány','bulletin, certificat','']],
  exercises:[MKB('fill','Complète',[MKF('Mi ','  vagyunk. (à deux)','ketten',''),MKF('Mi ','  vagyunk. (à trois)','hárman',''),MKF('Ők ','  vannak. (à cinq)','öten','')]),MKB('choice','Choisis',[MKC('« baccalauréat »','érettségi','diploma','félév')])]
}),
MKM('mkb5_2','A2·5.2','Egyetemi tapasztalatok — L’expérience universitaire',{
  rules:[
    MKR('Les modaux au passé','Au passé, les verbes modaux se conjuguent comme les autres verbes : szerettem / akartam / tudtam (j’aimais, voulais, savais) ; « kellett » (il fallait) et « lehetett » (on pouvait) sont invariables : « Dolgoznom kellett. »',{table:[['én','szerettem · akartam · tudtam'],['te','szerettél · akartál · tudtál'],['ő','szeretett · akart · tudott'],['mi','szerettünk · akartunk · tudtunk'],['ti','szerettetek · akartatok · tudtatok'],['ők','szerettek · akartak · tudtak']]}),
    MKR('Comment ? Les adverbes de manière','L’adverbe de manière se forme avec -an/-en : lassú → lassan, könnyű → könnyen, nehéz → nehezen, gyors → gyorsan, szép → szépen. Irréguliers : jó → jól, rossz → rosszul.',{table:[['lassú → lassan','lentement'],['gyors → gyorsan','vite'],['nehéz → nehezen','difficilement'],['könnyű → könnyen','facilement'],['szép → szépen','joliment'],['jó → jól · rossz → rosszul','bien · mal']]})
  ],
  vocab:[['előadás','cours magistral',''],['szeminárium','séminaire, TD',''],['vizsga','examen',''],['dolgozat','devoir, rédaction',''],['jegy','note',''],['kollégium','résidence universitaire',''],['ösztöndíj','bourse',''],['szakdolgozat','mémoire',''],['hallgató','étudiant',''],['oktató','enseignant',''],['kar','faculté',''],['sikerül','réussir',''],['megbukik','échouer',''],['átmegy','réussir (un examen)','']],
  exercises:[MKB('fill','Passé des modaux',[MKF('Én tegnap nem ','  tanulni. (tud)','tudtam',''),MKF('Ő mindig ','  úszni. (szeret)','szeretett',''),MKF('Mi nem ','  menni. (akar)','akartunk',''),MKF('Tegnap dolgoznom ','.','kellett','')]),MKB('fill','Adverbe de manière',[MKF('Lassan → ','','lassan',''),MKF('gyors → ','','gyorsan',''),MKF('nehéz → ','','nehezen',''),MKF('jó → ','','jól',''),MKF('rossz → ','','rosszul','')])]
}),
MKM('mkb5_3','A2·5.3','Egyetemek a világban — Les universités dans le monde',{
  rules:[
    MKR('mégis / mégsem','« mégis » (pourtant) exprime une opposition : « Esett az eső, mégis kirándultunk. » « mégsem » (pourtant pas) : « Tanultam, mégsem sikerült a vizsga. » Ils se placent en début de proposition.',{examples:[['Fáradt voltam, mégis elmentem.','J’étais fatigué, pourtant j’y suis allé.'],['Tanult, mégsem ment át.','Il a étudié, pourtant il n’a pas réussi.']]})
  ],
  vocab:[['külföld','étranger',''],['külföldi','étranger(ère)',''],['csereprogram','programme d’échange',''],['nyelvtanfolyam','cours de langue',''],['tandíj','frais de scolarité',''],['felvételi','concours d’entrée',''],['jelentkezik','s’inscrire, postuler',''],['mégis','pourtant',''],['mégsem','pourtant pas',''],['ugyanakkor','en même temps','']],
  exercises:[MKB('choice','Choisis',[MKC('« Il pleuvait, pourtant nous sommes sortis. »','Esett az eső, mégis kimentünk.','Esett az eső, mégsem kimentünk.','Esett az eső, ezért kimentünk.'),MKC('« Il a étudié, pourtant il a échoué. »','Tanult, mégsem ment át.','Tanult, mégis ment át.','Tanult, ezért nem ment át.')])]
})
);

MK_CHAPTERS.push({
  id:'a2-5', level:'A2', num:5, hu:'Tanulni jó!', fr:'Étudier, c’est bien !',
  intro:'Parler des systèmes scolaires, de ses études et de l’université, comparer avec d’autres pays. Grammaire : modaux au passé, numéraux de groupe, adverbes de manière, mégis/mégsem, préverbes au passé.',
  modules:['mkb5_1','mkb5_2','mkb5_3'],
  grammar:[
    MKG('ga5_modal','Múlt idő: a segédigék múlt ideje','Passé des modaux','szeret, akar, tud se conjuguent au passé comme les autres verbes ; kell et lehet : kellett, lehetett (invariables).',{
      grid:{head:['Personne','szeret','akar','tud'],rows:[['én','szerettem','akartam','tudtam'],['te','szerettél','akartál','tudtál'],['ő','szeretett','akart','tudott'],['mi','szerettünk','akartunk','tudtunk'],['ti','szerettetek','akartatok','tudtatok'],['ők','szerettek','akartak','tudtak']]}}),
    MKG('ga5_szamnev','A számnév: egyedül, ketten, hárman','Numéraux de groupe','egyedül (seul), ketten, hárman, négyen, öten, hatan, heten, nyolcan, kilencen, tízen. Question : Hányan?',{
      grid:{head:['Nombre','Forme'],rows:[['1','egyedül'],['2','ketten'],['3','hárman'],['4','négyen'],['5','öten'],['10','tízen']]}}),
    MKG('ga5_mult_tobbes','Múlt idő: többes szám (Gyakorlás)','Passé : le pluriel','1re pl. -tunk/-tünk, 2e pl. -tatok/-tetek, 3e pl. -tak/-tek. Défini : -tuk/-tük, -tátok/-tétek, -ták/-ték.',{
      grid:{head:['Personne','néz (indéf.)','néz (déf.)'],rows:[['mi','néztünk','néztük'],['ti','néztetek','néztétek'],['ők','néztek','nézték']]}}),
    MKG('ga5_mod','A módhatározó: lassan, nehezen, jól, rosszul','Adverbes de manière','-an/-en après la plupart des adjectifs. Irréguliers : jól, rosszul.',{
      grid:{head:['Adjectif','Adverbe'],rows:[['lassú','lassan'],['gyors','gyorsan'],['nehéz','nehezen'],['könnyű','könnyen'],['szép','szépen'],['jó','jól'],['rossz','rosszul']]}}),
    MKG('ga5_megis','Ellentétre utaló kötőszók: mégis, mégsem','Opposition : mégis, mégsem','« mégis » : pourtant ; « mégsem » : pourtant pas. Ils introduisent la proposition qui contredit l’attente.',{
      examples:[['Beteg volt, mégis dolgozott.','Il était malade, pourtant il a travaillé.'],['Készült, mégsem sikerült.','Il s’est préparé, pourtant il n’a pas réussi.']]}),
    MKG('ga5_igekoto','Igekötők: befejezettség múlt idejű mondatokban','Préverbes au passé','meg-, el-, ki-… marquent l’action achevée. Négation : le préverbe suit le verbe (Nem írtam meg).',{
      grid:{head:['Affirmatif','Négatif'],rows:[['Megírtam a dolgozatot.','Nem írtam meg a dolgozatot.'],['Elolvastam a könyvet.','Nem olvastam el a könyvet.'],['Megtanultam a szavakat.','Nem tanultam meg a szavakat.']]}}),
    MKG('ga5_szorend','Szórend: vonzatos igék semleges (narratív) mondatokban 2.','Ordre des mots dans le récit','En narration neutre : sujet – temps – verbe – complément, avec préverbe devant le verbe.',{
      examples:[['Tegnap megírtam a dolgozatot.','Hier j’ai fini ma rédaction.'],['A diákok elmentek a vizsgára.','Les étudiants sont partis à l’examen.']]})
  ],
  exercises:[
    MKX('ea5_modal','ga5_modal','1. A segédigék múlt ideje','Modaux au passé',MKB('fill','Passé',[MKF('Én ','  úszni. (tud)','tudtam',''),MKF('Te ','  nyaralni. (akar)','akartál',''),MKF('Ő ','  zenét hallgatni. (szeret)','szeretett',''),MKF('Nekik dolgozniuk ','.  (il fallait)','kellett','')])),
    MKX('ea5_szamnev','ga5_szamnev','2. egyedül, ketten…','Numéraux de groupe',MKB('fill','Complète',[MKF('Egyedül vagyok, mi ','  vagyunk. (3)','hárman',''),MKF('Ők ','  érkeztek. (2)','ketten',''),MKF('Mi ','  mentünk. (4)','négyen',''),MKF('Ők ','  vannak. (10)','tízen',''),MKF('Hány','  vagytok?','an','forme « Hányan »')])),
    MKX('ea5_tobbes','ga5_mult_tobbes','3. Múlt idő: többes szám','Passé pluriel',MKB('fill','Passé',[MKF('Mi ','  a filmet. (néz, défini)','néztük',''),MKF('Ti ','  . (dolgozik)','dolgoztatok',''),MKF('Ők ','  a könyvet. (olvas, défini)','olvasták',''),MKF('Mi ','  sokat. (tanul)','tanultunk',''),MKF('Ti ','  a levelet. (ír, défini)','írtátok','')])),
    MKX('ea5_mod','ga5_mod','4. Módhatározó','Adverbes de manière',MKB('fill','Adverbe',[MKF('A tanár ','  beszél. (lassú)','lassan',''),MKF('Ő ','  tanul. (jó)','jól',''),MKF('Ők ','  énekelnek. (szép)','szépen',''),MKF('A vizsga ','  ment. (rossz)','rosszul',''),MKF('Ő ','  oldja meg. (könnyű)','könnyen','')])),
    MKX('ea5_megis','ga5_megis','5. mégis, mégsem','Opposition',MKB('choice','Choisis',[MKC('« Il a étudié, pourtant il a échoué. »','Tanult, mégsem ment át.','Tanult, mégis ment át.','Tanult, ezért nem ment át.'),MKC('« Il pleuvait, pourtant nous avons fait la randonnée. »','Esett, mégis kirándultunk.','Esett, mégsem kirándultunk.','Esett, ezért kirándultunk.')])),
    MKX('ea5_igekoto','ga5_igekoto','6. Igekötők a múlt időben','Perfectif au passé',MKB('fill','Négation : place le préverbe',[MKF('Nem írtam ','  a dolgozatot.','meg',''),MKF('Nem olvastam ','  a könyvet.','el',''),MKF('Nem tanultam ','  a szavakat.','meg','')])),
    MKX('ea5_szorend','ga5_szorend','7. Szórend','Récit',MKB('order','Remets en ordre',[MKO('Hier j’ai fini ma rédaction.','Tegnap megírtam a dolgozatot.'),MKO('Les étudiants sont partis à l’examen.','A diákok elmentek a vizsgára.')]))
  ]
});
