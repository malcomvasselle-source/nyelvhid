/* MagyarOK A1 — chapitre 4 : A városban (En ville). Contenu original. */
MKM.use('A1', 4, 'A városban', 'En ville');

MK_MODULES.push(
MKM('mk4_1','K4.1','Hány óra van? Milyen nap van? — L’heure et les jours',{
  rules:[
    MKR('L’heure','« Hány óra van? » — « Három óra van. » Pour la demi : « fél négy » = 3 h 30 (littéralement « la moitié vers quatre »). Quart : « negyed négy » = 3 h 15 ; « háromnegyed négy » = 3 h 45. Pour « à telle heure » on ajoute -kor : « háromkor », « fél négykor ».',{table:[['Egy óra van. / Két óra van.','Il est une heure. / Il est deux heures.'],['fél nyolc','7 h 30'],['negyed nyolc','7 h 15'],['háromnegyed nyolc','7 h 45'],['Hány órakor?','À quelle heure ?'],['nyolckor, kilenckor, tízkor','à 8 h, à 9 h, à 10 h']]}),
    MKR('Les jours de la semaine','Avec un jour, on ajoute -n / -on / -en / -ön : « hétfőn » (lundi), « kedden », « szerdán », « csütörtökön », « pénteken », « szombaton ». Seul « vasárnap » reste invariable. Les moments de la journée : reggel, délelőtt, délután, este, éjjel.',{examples:[['Hétfőn korán kelek.','Le lundi je me lève tôt.'],['Vasárnap otthon vagyok.','Dimanche je suis à la maison.'],['Szerdán este moziba megyek.','Mercredi soir je vais au cinéma.']]}),
    MKR('Mettől meddig ? — de … à …','« -tól / -től » (à partir de) et « -ig » (jusqu’à) : « Reggel nyolctól délután ötig dolgozom. » ; « Hétfőtől péntekig. »',{examples:[['Mettől meddig dolgozol?','De quelle heure à quelle heure travailles-tu ?'],['Nyolctól ötig.','De huit heures à cinq heures.'],['Hétfőtől péntekig dolgozom.','Je travaille du lundi au vendredi.']]})
  ],
  vocab:[['óra','heure / horloge',''],['fél','demi (« fél négy » = 3 h 30)',''],['negyed','quart',''],['háromnegyed','trois quarts',''],['hétfő','lundi',''],['kedd','mardi',''],['szerda','mercredi',''],['csütörtök','jeudi',''],['péntek','vendredi',''],['szombat','samedi',''],['vasárnap','dimanche',''],
    ['reggel','le matin',''],['délelőtt','dans la matinée',''],['dél','midi',''],['délután','l’après-midi',''],['este','le soir',''],['éjjel','la nuit',''],['ma','aujourd’hui',''],['holnap','demain',''],['munkaidő','horaires de travail',''],['ebédszünet','pause déjeuner','']],
  exercises:[
    MKB('fill','À quelle heure ? (ajoute -kor)',[MKF('','  (8 h)','nyolckor',''),MKF('','  (3 h)','háromkor',''),MKF('','  (10 h)','tízkor',''),MKF('','  (9 h)','kilenckor','')]),
    MKB('choice','Choisis',[MKC('« Lundi »','hétfőn','hétfőkor','hétfőig'),MKC('« Dimanche »','vasárnap','vasárnapon','vasárnapnak'),MKC('7 h 30 :','fél nyolc','fél hét','negyed nyolc'),MKC('2 h 45 :','háromnegyed három','háromnegyed kettő','negyed három')])
  ],
  dialogue:{title:'Le planning de la semaine',formal:[['Mikor kezdődik a munkaideje?','Quand commencent vos horaires de travail ?'],['Reggel nyolckor kezdődik, és ötig tart.','Ils commencent à huit heures et durent jusqu’à cinq heures.'],['Mikor van az ebédszünet?','Quand est la pause déjeuner ?'],['Délben, tizenkettőtől egyig.','À midi, de douze à treize heures.']]}
}),
MKM('mk4_2','K4.2','Helyek a városban — Lieux de la ville',{
  rules:[
    MKR('Hol ? Hova ? Honnan ?','Trois questions, trois suffixes : « Hol? » (où — repos), « Hova? » (où — direction), « Honnan? » (d’où). Après voyelle graves/aiguës le suffixe change. Majorité des lieux : -ban/-ben · -ba/-be · -ból/-ből. Certains lieux (surface, ouvert) : -on/-en/-ön · -ra/-re · -ról/-ről.',{table:[['bolt','boltban · boltba · boltból'],['mozi','moziban · moziba · moziból'],['étterem','étteremben · étterembe · étteremből'],['posta','postán · postára · postáról'],['egyetem','egyetemen · egyetemre · egyetemről'],['állomás','állomáson · állomásra · állomásról']]}),
    MKR('Chez quelqu’un','Avec une personne, on utilise -nál/-nél (chez), -hoz/-hez/-höz (vers), -tól/-től (de chez) : « Péternél », « Péterhez », « Pétertől ».',{examples:[['Péternél vagyok.','Je suis chez Péter.'],['Péterhez megyek.','Je vais chez Péter.'],['Pétertől jövök.','Je viens de chez Péter.']]})
  ],
  vocab:[['bolt','magasin',''],['bank','banque',''],['posta','poste',''],['gyógyszertár','pharmacie',''],['uszoda','piscine',''],['mozi','cinéma',''],['színház','théâtre',''],['múzeum','musée',''],['étterem','restaurant',''],['iskola','école',''],['egyetem','université',''],['állomás','gare, station',''],['park','parc',''],['piac','marché',''],['könyvtár','bibliothèque',''],['templom','église',''],['tér','place',''],['utca','rue','']],
  exercises:[
    MKB('fill','Hova ? (direction)',[MKF('Moziba ','.','megyek','verbe « megy » (je)'),MKF('','  megyek. (bolt)','boltba','au magasin'),MKF('','  megyek. (egyetem)','egyetemre','à l’université'),MKF('','  megyek. (posta)','postára','à la poste')]),
    MKB('fill','Hol ? (repos)',[MKF('A gyerekek az ','  vannak. (iskola)','iskolában','à l’école'),MKF('Anna a ','  van. (posta)','postán','à la poste'),MKF('Péter a ','  van. (uszoda)','uszodában','à la piscine')]),
    MKB('fill','Honnan ? (provenance)',[MKF('A ','  jövök. (bolt)','boltból','du magasin'),MKF('Az ','  jövök. (állomás)','állomásról','de la gare'),MKF('A ','  jövök. (mozi)','moziból','du cinéma')])
  ],
  dialogue:{title:'Où vas-tu ?',informal:[['Szia! Hova mész?','Salut ! Où vas-tu ?'],['Az uszodába megyek. És te?','À la piscine. Et toi ?'],['Én a bankba, aztán a postára.','Moi à la banque, puis à la poste.'],['Honnan jössz?','D’où viens-tu ?'],['Az egyetemről jövök.','Je viens de l’université.']],formal:[['Elnézést, hova megy?','Excusez-moi, où allez-vous ?'],['A színházba megyek.','Je vais au théâtre.'],['Honnan jön?','D’où venez-vous ?'],['A munkahelyemről.','De mon travail.']]}
}),
MKM('mk4_3','K4.3','Közlekedés — Les transports',{
  rules:[
    MKR('Avec quoi ? -val / -vel','Pour le moyen de transport (et l’accompagnement), on ajoute -val (graves) / -vel (aiguës). Si le mot finit par une consonne, celle-ci se double : busz → busszal, villamos → villamossal. Après une voyelle finale : autó → autóval, bicikli → biciklivel. « Gyalog » (à pied) ne prend aucun suffixe.',{table:[['busz','busszal'],['villamos','villamossal'],['metró','metróval'],['vonat','vonattal'],['autó','autóval'],['bicikli','biciklivel'],['taxi','taxival'],['gyalog','à pied (invariable)']]}),
    MKR('Avec qui ?','Même suffixe pour l’accompagnement : « Péterrel », « Annával » (a final s’allonge). Avec les pronoms : velem, veled, vele, velünk, veletek, velük.',{examples:[['Kivel mész moziba?','Avec qui vas-tu au cinéma ?'],['Annával megyek.','J’y vais avec Anna.'],['Velem jössz?','Tu viens avec moi ?']]})
  ],
  vocab:[['közlekedik','circuler, se déplacer',''],['busz','bus',''],['villamos','tramway',''],['metró','métro',''],['vonat','train',''],['autó','voiture',''],['bicikli','vélo',''],['taxi','taxi',''],['gyalog','à pied',''],['mivel?','avec quoi ?',''],['kivel?','avec qui ?',''],['együtt','ensemble',''],['általában','en général',''],['néha','parfois',''],['mindig','toujours','']],
  exercises:[
    MKB('fill','Ajoute -val / -vel',[MKF('Busz','  megyek.','szal','busz → busszal (écris « szal »)'),MKF('Metró','  jövök.','val',''),MKF('Bicikli','  járok.','vel',''),MKF('Vonat','  utazom.','tal','vonat → vonattal')]),
    MKB('choice','Choisis',[MKC('« avec Anna »','Annával','Annaval','Annavel'),MKC('« avec toi »','veled','vele','velem')])
  ]
}),
MKM('mk4_4','K4.4','Útbaigazítás — Demander son chemin',{
  rules:[
    MKR('Demander et indiquer le chemin','On demande poliment : « Elnézést, hol van a posta? » ou « Hogyan jutok el a postára? ». On répond avec les formes polies du verbe : « Menjen egyenesen! » (Allez tout droit), « Forduljon jobbra! » (Tournez à droite), « a második utcában » (dans la deuxième rue).',{examples:[['Hogyan jutok el az állomásra?','Comment aller à la gare ?'],['Menjen egyenesen, aztán forduljon balra.','Allez tout droit, puis tournez à gauche.'],['A posta a bank mellett van.','La poste est à côté de la banque.']]})
  ],
  vocab:[['egyenesen','tout droit',''],['balra','à gauche',''],['jobbra','à droite',''],['sarok','coin (de rue)',''],['mellett','à côté de',''],['előtt','devant / avant',''],['mögött','derrière',''],['szemben','en face',''],['között','entre',''],['közel','près',''],['messze','loin',''],['térkép','carte, plan',''],['híd','pont',''],['Hogyan jutok el…?','Comment aller à… ?','']],
  exercises:[MKB('choice','Que dit-on ?',[MKC('« Tournez à droite. »','Forduljon jobbra.','Forduljon balra.','Menjen egyenesen.'),MKC('« Tout droit. »','Egyenesen.','Jobbra.','Balra.'),MKC('« La poste est près de la banque. »','A posta közel van a bankhoz.','A posta messze van a bankhoz.','A posta mögött van.')])]
}),
MKM('mk4_5','K4.5','Város és falu — Ville et village',{
  rules:[
    MKR('Le pluriel en -k','Le pluriel se forme avec -k. Après une consonne, on ajoute une voyelle de liaison : -ok / -ek / -ök. Après une voyelle, simplement -k, avec a → á et e → é en fin de mot : bolt → boltok, étterem → éttermek, park → parkok, mozi → mozik, iskola → iskolák, utca → utcák. Après un nombre ou « sok », le nom reste au singulier.',{table:[['bolt → boltok','magasins'],['étterem → éttermek','restaurants'],['mozi → mozik','cinémas'],['iskola → iskolák','écoles'],['sok ember','beaucoup de gens']]}),
    MKR('Mi van, mi nincs ?','On décrit une ville : « A városban vannak éttermek és kávézók, de nincs egyetem. » et on exprime l’opinion avec « jó + infinitif » : « Jó itt lakni. »',{examples:[['Hány ember lakik itt?','Combien de gens habitent ici ?'],['Jó falun élni.','Il fait bon vivre au village.'],['A városban sok bolt van.','En ville il y a beaucoup de magasins.']]})
  ],
  vocab:[['város','ville',''],['nagyváros','grande ville',''],['falu','village',''],['lakik','habiter',''],['él','vivre',''],['csendes','calme',''],['forgalmas','animé, embouteillé',''],['zöld','vert',''],['tiszta','propre',''],['szennyezett','pollué',''],['tömegközlekedés','transports en commun',''],['sok','beaucoup',''],['kevés','peu','']],
  exercises:[
    MKB('fill','Mets au pluriel',[MKF('bolt → ','','boltok',''),MKF('étterem → ','','éttermek',''),MKF('mozi → ','','mozik',''),MKF('iskola → ','','iskolák',''),MKF('park → ','','parkok','')]),
    MKB('truefalse','Vrai ou faux ?',[MKV('« három bolt » est correct.',true,'Le nom reste au singulier après un nombre.'),MKV('« három boltok » est correct.',false,'« három bolt »'),MKV('« Jó itt lakni. » signifie « Il fait bon habiter ici. »',true,'')])
  ]
})
);

MK_CHAPTERS.push({
  id:'a1-4', level:'A1', num:4, hu:'A városban', fr:'En ville',
  intro:'Dire l’heure et les jours, parler des lieux de la ville, des moyens de transport, demander son chemin, décrire sa ville ou son village. Grammaire : -kor, -tól/-ig, -val/-vel, hol/hova/honnan, megy et jön, le pluriel, les verbes en -ik.',
  modules:['mk4_1','mk4_2','mk4_3','mk4_4','mk4_5'],
  grammar:[
    MKG('g4_mikor','Időhatározók: Mikor?','Quand ? — les compléments de temps','Heure précise : -kor (nyolckor). Jour : -n/-on/-en/-ön (hétfőn), sauf « vasárnap ». Moment de la journée : sans suffixe (reggel, este, délután). Question : « Mikor? » ou « Hány órakor? ».',{
      grid:{head:['Type','Question','Exemple'],rows:[['heure','Hány órakor?','nyolckor, fél háromkor'],['jour','Mikor? / Milyen napon?','hétfőn, pénteken, vasárnap'],['moment','Mikor?','reggel, este, délután']]}}),
    MKG('g4_mettol','Mettől meddig? és lehet','De … à … ; « on peut »','« -tól / -től » indique le point de départ, « -ig » la limite. Avec « lehet » + infinitif, on exprime la possibilité : « Itt lehet parkolni. »',{
      examples:[['Nyolctól ötig vagyok az irodában.','Je suis au bureau de huit à dix-sept heures.'],['Hétfőtől péntekig dolgozom.','Je travaille du lundi au vendredi.'],['Itt lehet kávét inni.','On peut boire un café ici.']],
      notes:['« -tól » avec voyelles graves, « -től » avec voyelles aiguës : háromtól, hattól (consonne : hat+tól), kettőtől.']}),
    MKG('g4_val','A társ- és eszközhatározó: -val/-vel','Avec quoi / avec qui','-val après voyelles graves, -vel après aiguës. Le « v » s’assimile à la consonne finale : busz+val = busszal. Pronoms : velem, veled, vele, velünk, veletek, velük.',{
      grid:{head:['Mot','Forme','Mot','Forme'],rows:[['busz','busszal','Anna','Annával'],['vonat','vonattal','Péter','Péterrel'],['metró','metróval','barát','baráttal'],['autó','autóval','kolléga','kollégával']]}}),
    MKG('g4_hova','Helyhatározók: Hol? Hova? Honnan?','Où ? Où (direction) ? D’où ?','Trois séries de suffixes. Le choix de la série dépend du lieu : intérieur (-ban/-ba/-ból), surface/ouvert/événement (-on/-ra/-ról), personne (-nál/-hoz/-tól).',{
      grid:{head:['Hol?','Hova?','Honnan?','Exemple'],rows:[['-ban/-ben','-ba/-be','-ból/-ből','a boltban · a boltba · a boltból'],['-on/-en/-ön','-ra/-re','-ról/-ről','a postán · a postára · a postáról'],['-nál/-nél','-hoz/-hez/-höz','-tól/-től','Péternél · Péterhez · Pétertől']]},
      notes:['Pays et villes étrangères : Franciaországban · Franciaországba · Franciaországból.','Magyarország et les villes hongroises : Magyarországon · Magyarországra · Magyarországról ; Budapesten · Budapestre · Budapestről.','« Otthon » (à la maison), « haza » (vers la maison), « otthonról » (de la maison).']}),
    MKG('g4_megy','Rendhagyó igék: megy, jön','Verbes irréguliers : aller, venir','« megy » (aller) et « jön » (venir) sont irréguliers.',{
      grid:{head:['Personne','megy','jön'],rows:[['én','megyek','jövök'],['te','mész','jössz'],['ő / Ön','megy','jön'],['mi','megyünk','jövünk'],['ti','mentek','jöttök'],['ők / Önök','mennek','jönnek']]},
      examples:[['Hova mész? — Moziba megyek.','Où vas-tu ? — Je vais au cinéma.'],['Honnan jössz? — Az egyetemről jövök.','D’où viens-tu ? — Je viens de l’université.']]}),
    MKG('g4_tobbes','A többes szám: -k','Le pluriel','Le pluriel se forme avec -k, précédé de -o-/-e-/-ö- après une consonne. Les noms en -a, -e allongent leur voyelle : iskola → iskolák. Après un nombre ou « sok », le nom reste au singulier. Un pluriel d’adjectif est traité au chapitre 5.',{
      grid:{head:['Singulier','Pluriel','Singulier','Pluriel'],rows:[['bolt','boltok','iskola','iskolák'],['étterem','éttermek','utca','utcák'],['mozi','mozik','tér','terek'],['park','parkok','híd','hidak']]}}),
    MKG('g4_ikes','Ikes igék','Les verbes en -ik','Certains verbes se terminent par -ik à la 3e personne du singulier (lakik, dolgozik). À la 1re personne du singulier, ils prennent -om/-em/-öm au lieu de -ok/-ek/-ök. Les autres personnes sont régulières.',{
      grid:{head:['Personne','lakik','dolgozik','érkezik'],rows:[['én','lakom','dolgozom','érkezem'],['te','laksz','dolgozol','érkezel'],['ő / Ön','lakik','dolgozik','érkezik'],['mi','lakunk','dolgozunk','érkezünk'],['ti','laktok','dolgoztok','érkeztek'],['ők / Önök','laknak','dolgoznak','érkeznek']]}}),
    MKG('g4_szorend','Szórend: ige és vonzat','L’ordre des mots : verbe et complément','L’élément mis en avant (réponse à la question) se place juste avant le verbe. Dans une phrase neutre : sujet – verbe – complément de lieu / temps.',{
      examples:[['Moziba megyek.','C’est AU CINÉMA que je vais.'],['Hova mész? — Az egyetemre megyek.','Où vas-tu ? — Je vais à l’université.'],['Busszal járok dolgozni.','Je vais au travail EN BUS.']]})
  ],
  exercises:[
    MKX('e4_mikor','g4_mikor','1. Mikor?','Heure et jours',
      MKB('fill','Complète',[MKF('Hétfő','  dolgozom.','n','hétfő → hétfőn'),MKF('Kedd','  tanulok.','en','kedd → kedden'),MKF('Nyolc','  kezdek.','kor','nyolc → nyolckor'),MKF('','  otthon vagyok. (dimanche)','Vasárnap','Aucun suffixe')]),
      MKB('choice','Choisis',[MKC('« Il est 6 h 30. »','Fél hét van.','Fél hat van.','Negyed hét van.'),MKC('« À huit heures »','nyolckor','nyolcig','nyolcon')])),
    MKX('e4_mettol','g4_mettol','2. Mettől meddig?','-tól / -ig',
      MKB('fill','Complète',[MKF('Nyolc','  ötig dolgozom.','tól','nyolctól'),MKF('Hétfőtől péntek','  tanulok.','ig','péntekig'),MKF('Kettő','  háromig.','től','kettőtől')]),
      MKB('order','Remets en ordre',[MKO('Je travaille du lundi au vendredi.','Hétfőtől péntekig dolgozom.'),MKO('On peut garer ici.','Itt lehet parkolni.')])),
    MKX('e4_val','g4_val','3. -val/-vel','Avec quoi / qui',
      MKB('fill','Écris le mot avec le suffixe',[MKF('busz → ','','busszal',''),MKF('villamos → ','','villamossal',''),MKF('vonat → ','','vonattal',''),MKF('autó → ','','autóval',''),MKF('bicikli → ','','biciklivel','')]),
      MKB('translate','Traduis',[MKT('Je vais au travail en tramway.','Villamossal megyek dolgozni.'),MKT('Avec qui viens-tu ?','Kivel jössz?'),MKT('Viens avec moi !','Gyere velem!')])),
    MKX('e4_hova','g4_hova','4. Hol? Hova? Honnan?','Lieu',
      MKB('fill','Écris la forme demandée',[MKF('Hol? bank → a ','','bankban',''),MKF('Hova? bank → a ','','bankba',''),MKF('Honnan? bank → a ','','bankból',''),MKF('Hova? posta → a ','','postára',''),MKF('Honnan? egyetem → az ','','egyetemről','')]),
      MKB('choice','Choisis',[MKC('« Je vais chez Péter. »','Péterhez megyek.','Péternél megyek.','Pétertől megyek.'),MKC('« Je viens de Budapest. »','Budapestről jövök.','Budapesten jövök.','Budapestre jövök.')])),
    MKX('e4_megy','g4_megy','5. megy és jön','Conjugaison',
      MKB('fill','Conjugue',[MKF('Én moziba ','.','megyek',''),MKF('Te honnan ','?','jössz',''),MKF('Mi busszal ','.','megyünk',''),MKF('Ők Pécsről ','.','jönnek',''),MKF('Ti hova ','?','mentek','')])),
    MKX('e4_tobbes','g4_tobbes','6. A többes szám','-k',
      MKB('fill','Pluriel',[MKF('ház → ','','házak',''),MKF('szék → ','','székek',''),MKF('asztal → ','','asztalok',''),MKF('lámpa → ','','lámpák',''),MKF('kávézó → ','','kávézók','')]),
      MKB('choice','Choisis',[MKC('« cinq restaurants »','öt étterem','öt éttermek','öt éttermeket'),MKC('« beaucoup de magasins »','sok bolt','sok boltok','sok bolták')])),
    MKX('e4_ikes','g4_ikes','7. Ikes igék','lakik, dolgozik',
      MKB('fill','Conjugue',[MKF('Én Budapesten ','.  (lakik)','lakom',''),MKF('Te hol ','?  (dolgozik)','dolgozol',''),MKF('Mi itt ','.  (lakik)','lakunk',''),MKF('Ők sokat ','.  (dolgozik)','dolgoznak',''),MKF('Én ma nyolckor ','.  (érkezik)','érkezem','')])),
    MKX('e4_szorend','g4_szorend','8. Szórend','Focus + verbe',
      MKB('order','Remets en ordre',[MKO('C’est au cinéma que je vais.','Moziba megyek.'),MKO('Je vais en bus à l’université.','Busszal megyek az egyetemre.'),MKO('Où habites-tu ?','Hol laksz?')]))
  ]
});
