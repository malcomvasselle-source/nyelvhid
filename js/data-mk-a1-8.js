/* MagyarOK A1 — chapitre 8 : Édes otthon (Chez soi). Contenu original. */
MKM.use('A1', 8, 'Édes otthon', 'Chez soi');

MK_MODULES.push(
MKM('mk8_1','K8.1','A mi családunk — Notre famille',{
  rules:[
    MKR('Les possessifs à toutes les personnes','Le possesseur se marque sur le nom : -m, -d, -a/-e (ou -ja/-je), -nk, -tok/-tek/-tök, -uk/-ük (ou -juk/-jük). Exemple avec « ház » : házam, házad, háza, házunk, házatok, házuk.',{table:[['én → házam / lakásom','ma maison / mon appartement'],['te → házad / lakásod','ta maison / ton appartement'],['ő → háza / lakása','sa maison / son appartement'],['mi → házunk / lakásunk','notre maison / notre appartement'],['ti → házatok / lakásotok','votre maison / votre appartement'],['ők → házuk / lakásuk','leur maison / leur appartement']]}),
    MKR('Présenter sa famille','« Hányan vagytok a családban? » (Combien êtes-vous dans la famille ?) — « Négyen vagyunk. » (Nous sommes quatre.) Avec un possessif : « az anyám », « a testvéreim ». Animaux : « Van egy kutyám. »',{examples:[['Hányan vagytok?','Combien êtes-vous ?'],['Két testvérem van.','J’ai deux frères et sœurs.'],['Nincs háziállatom.','Je n’ai pas d’animal de compagnie.']]})
  ],
  vocab:[['család','famille',''],['anya','mère',''],['apa','père',''],['szülők','parents',''],['testvér','frère / sœur',''],['bátyám','mon frère aîné',''],['nővérem','ma sœur aînée',''],['öcsém','mon frère cadet',''],['húgom','ma sœur cadette',''],['nagyszülők','grands-parents',''],['nagymama','grand-mère',''],['nagypapa','grand-père',''],['férj','mari',''],['feleség','épouse',''],['gyerek','enfant',''],['fiú','garçon / fils',''],['lány','fille',''],['unoka','petit-enfant',''],['kutya','chien',''],['macska','chat',''],['háziállat','animal de compagnie','']],
  exercises:[
    MKB('fill','Possessif',[MKF('Ez ','.  (ház, mon)','házam',''),MKF('Ez ','.  (család, notre)','családunk',''),MKF('Ez ','.  (lakás, leur)','lakásuk',''),MKF('Ez ','.  (kutya, votre)','kutyátok','')]),
    MKB('choice','Choisis',[MKC('« notre maison »','házunk','házam','házuk'),MKC('« leur chat »','macskájuk','macskánk','macskátok')])
  ],
  dialogue:{title:'Présenter sa famille',informal:[['Hányan vagytok a családban?','Combien êtes-vous dans la famille ?'],['Öten vagyunk: a szüleim, a testvérem, én és a kutyánk.','Nous sommes cinq : mes parents, mon frère, moi et notre chien.'],['Hol laknak a nagyszüleid?','Où habitent tes grands-parents ?'],['Székesfehérváron laknak.','Ils habitent à Székesfehérvár.']]}
}),
MKM('mk8_2','K8.2','Családi ünnepek: születésnap — Fêtes de famille',{
  rules:[
    MKR('Les dates','Question : « Hányadika van ma? » (Quel jour sommes-nous ?) — « Ma október tizennyolcadika van. » Pour « le 15 mars » : « március tizenötödikén ». « Mikor van a születésnapod? » — « Június huszadikán. »',{table:[['elseje · másodika · harmadika','le 1er · le 2 · le 3 (date)'],['tizenötödike · huszadika · harmincadika','le 15 · le 20 · le 30'],['elsején · másodikán · tizenötödikén','le 1er · le 2 · le 15 (quand ?)']]}),
    MKR('Moi → toi : -lak / -lek','Quand le sujet est « je » et l’objet « toi » ou « vous », le verbe prend -lak/-lek : « Szeretlek. » (Je t’aime), « Meghívlak a születésnapomra. » (Je t’invite à mon anniversaire), « Várlak. » (Je t’attends).',{examples:[['Meghívlak vacsorára.','Je t’invite à dîner.'],['Látlak.','Je te vois.'],['Várlak benneteket.','Je vous attends.']]})
  ],
  vocab:[['születésnap','anniversaire',''],['ünnep','fête',''],['meghív','inviter',''],['meghívás','invitation',''],['ajándék','cadeau',''],['torta','gâteau',''],['vendég','invité',''],['karácsony','Noël',''],['húsvét','Pâques',''],['boldog','heureux',''],['Boldog születésnapot!','Joyeux anniversaire !',''],['köszönt','féliciter',''],['ünnepel','fêter',''],['hányadika','quelle date',''],['kívánok','je souhaite','']],
  exercises:[
    MKB('fill','Moi → toi',[MKF('Meghív','  a születésnapomra.','lak',''),MKF('Szeret','  .','lek',''),MKF('Vár','  .','lak',''),MKF('Hív','  .','lak','')]),
    MKB('translate','Traduis',[MKT('Mon anniversaire est le 20 juin.','A születésnapom június huszadikán van.'),MKT('Joyeux anniversaire !','Boldog születésnapot!')])
  ],
  dialogue:{title:'Invitation',informal:[['Szia! Meghívlak a születésnapomra.','Salut ! Je t’invite à mon anniversaire.'],['Köszönöm! Mikor van?','Merci ! C’est quand ?'],['Július tizennyolcadikán.','Le 18 juillet.'],['Sajnos akkor nem leszek itthon.','Malheureusement je ne serai pas là.'],['Kár! Majd máskor találkozunk.','Dommage ! On se verra une autre fois.']]}
}),
MKM('mk8_3','K8.3','Helyiségek és bútorok — Pièces et meubles',{
  rules:[
    MKR('Où se trouve quoi ? (névutók)','Les postpositions se placent après le nom : « az asztal alatt » (sous la table), « a szekrény mögött » (derrière l’armoire), « a kanapé mellett » (à côté du canapé), « az ablak előtt » (devant la fenêtre), « az ágy fölött » (au-dessus du lit), « a szék és az asztal között » (entre la chaise et la table).',{table:[['alatt','sous'],['fölött / felett','au-dessus de'],['előtt','devant'],['mögött','derrière'],['mellett','à côté de'],['között','entre']]}),
    MKR('Chez les gens : -ék','Le suffixe -ék après un prénom désigne la personne et ses proches : « Adélék » (Adél et les siens, chez Adél), « Péterék » : « Adélék új házba költöztek. »',{examples:[['Adélék új házban laknak.','Adél et sa famille habitent dans une nouvelle maison.'],['Péterékhez megyek.','Je vais chez Péter et sa famille.']]})
  ],
  vocab:[['nappali','salon',''],['hálószoba','chambre à coucher',''],['konyha','cuisine',''],['fürdőszoba','salle de bain',''],['előszoba','entrée',''],['kert','jardin',''],['erkély','balcon',''],['kanapé','canapé',''],['ágy','lit',''],['szekrény','armoire',''],['komód','commode',''],['polc','étagère',''],['tükör','miroir',''],['szőnyeg','tapis',''],['emelet','étage',''],['lakás','appartement',''],['ház','maison',''],['alatt','sous',''],['fölött','au-dessus',''],['mögött','derrière',''],['mellett','à côté',''],['között','entre','']],
  exercises:[
    MKB('choice','Choisis la postposition',[MKC('« sous la table »','az asztal alatt','az asztal fölött','az asztal mögött'),MKC('« derrière l’armoire »','a szekrény mögött','a szekrény alatt','a szekrény mellett'),MKC('« à côté du canapé »','a kanapé mellett','a kanapé között','a kanapé fölött')]),
    MKB('fill','Complète',[MKF('A lámpa az ágy ','  van. (au-dessus)','fölött',''),MKF('A kutya a szék ','  van. (sous)','alatt',''),MKF('A tükör az ajtó és az ablak ','  van. (entre)','között','')])
  ]
}),
MKM('mk8_4','K8.4','Otthoni tevékenységek — Tâches à la maison',{
  rules:[
    MKR('Le passé en -t','Passé = radical + -t- + terminaisons : -tam/-tem, -tál/-tél, -t, -tunk/-tünk, -tatok/-tetek, -tak/-tek. Pour de nombreux verbes la 3e personne devient -ott/-ett/-ött : nézett, olvasott, főzött. Exemples : tanul → tanultam ; néz → néztem ; főz → főztem.',{table:[['tanultam, tanultál, tanult','j’ai étudié, tu as étudié, il a étudié'],['néztem, néztél, nézett','j’ai regardé…'],['főztem, főztél, főzött','j’ai cuisiné…'],['mentem, mentél, ment','j’y suis allé…'],['jöttem, jöttél, jött','je suis venu…'],['ettem, ettél, evett','j’ai mangé…'],['ittam, ittál, ivott','j’ai bu…']]}),
    MKR('Raconter hier','« Mit csináltál tegnap otthon? » — « Takarítottam, főztem és tévéztem. » Mots de temps : tegnap (hier), tegnapelőtt (avant-hier), múlt héten (la semaine dernière), tavaly (l’an dernier).',{examples:[['Tegnap főztem.','Hier j’ai cuisiné.'],['Mit csináltál a hétvégén?','Qu’as-tu fait ce week-end ?'],['Anna takarított, én mosogattam.','Anna a fait le ménage, moi j’ai fait la vaisselle.']]})
  ],
  vocab:[['takarít','faire le ménage',''],['mosogat','faire la vaisselle',''],['mos','laver',''],['vasal','repasser',''],['porszívózik','passer l’aspirateur',''],['főz','cuisiner',''],['rendet rak','ranger',''],['bevásárol','faire les courses',''],['kertészkedik','jardiner',''],['pihen','se reposer',''],['tegnap','hier',''],['tegnapelőtt','avant-hier',''],['múlt héten','la semaine dernière',''],['egész nap','toute la journée','']],
  exercises:[
    MKB('fill','Passé',[MKF('Én tegnap ','.  (főz)','főztem',''),MKF('Te mit ','?  (néz)','néztél',''),MKF('Ő sokat ','.  (tanul)','tanult',''),MKF('Mi moziba ','.  (megy)','mentünk',''),MKF('Ők hozzánk ','.  (jön)','jöttek','')]),
    MKB('choice','Choisis',[MKC('« Hier j’ai fait le ménage. »','Tegnap takarítottam.','Tegnap takarítok.','Tegnap takarítanak.')])
  ]
}),
MKM('mk8_5','K8.5','Összefoglalás: az otthonom — Mon chez-moi',{
  rules:[MKR('Décrire son logement','« Milyen a lakásod? » — « Háromszobás lakásban lakom az ötödik emeleten. Van nappalim, két hálószobám, konyhám és fürdőszobám. A konyha nagy és világos. »',{examples:[['Kétszobás lakásban lakom.','J’habite dans un appartement de deux pièces.'],['Van erkélyünk és kertünk is.','Nous avons un balcon et un jardin.'],['A nappali a legszebb szoba.','Le salon est la plus belle pièce.']]})],
  vocab:[['szoba','pièce / chambre',''],['háromszobás','de trois pièces',''],['világos','lumineux, clair',''],['sötét','sombre',''],['nagy','grand',''],['kicsi','petit',''],['szép','beau',''],['modern','moderne',''],['régi','ancien',''],['költözik','déménager',''],['bérel','louer',''],['albérlet','location',''],['saját','propre (à soi)','']],
  exercises:[MKB('choice','Choisis',[MKC('« J’habite dans un appartement de deux pièces. »','Kétszobás lakásban lakom.','Kétszobás lakás lakom.','Két szoba lakásban lakom.'),MKC('« Nous avons un jardin. »','Van kertünk.','Van kertem.','Van kertetek.')])]
})
);

MK_CHAPTERS.push({
  id:'a1-8', level:'A1', num:8, hu:'Édes otthon', fr:'Chez soi',
  intro:'Parler de sa famille, fêter un anniversaire, décrire son logement et raconter ce que l’on a fait à la maison. Grammaire : possessifs complets, être et avoir à tous les temps, objet pronominal (engem, téged), passé en -t, -lak/-lek, dates, -ék, postpositions.',
  modules:['mk8_1','mk8_2','mk8_3','mk8_4','mk8_5'],
  grammar:[
    MKG('g8_birtokos','Birtokos személyjelek','Les possessifs','Le suffixe possessif dépend de la personne du possesseur et de l’harmonie vocalique. Pour insister, on ajoute le pronom : az én házam, a te házad, az ő háza, a mi házunk, a ti házatok, az ő házuk.',{
      grid:{head:['Personne','ház','lakás','család'],rows:[['én','házam','lakásom','családom'],['te','házad','lakásod','családod'],['ő / Ön','háza','lakása','családja'],['mi','házunk','lakásunk','családunk'],['ti','házatok','lakásotok','családotok'],['ők / Önök','házuk','lakásuk','családjuk']]}}),
    MKG('g8_birtoklas_idok','Birtoklás minden igeidőben','Possession à tous les temps','Présent : van. Passé : volt. Futur : lesz. Négation : nincs / nem volt / nem lesz.',{
      grid:{head:['Temps','Affirmatif','Négatif'],rows:[['présent','Van kutyám.','Nincs kutyám.'],['passé','Volt egy macskám.','Nem volt macskám.'],['futur','Lesz kistestvérem.','Nem lesz kistestvérem.']]}}),
    MKG('g8_letige','A létige minden igeidőben','Être à tous les temps','Présent : vagyok, vagy, van… Passé : voltam, voltál, volt… Futur : leszek, leszel, lesz, leszünk, lesztek, lesznek.',{
      grid:{head:['Personne','présent','passé','futur'],rows:[['én','vagyok','voltam','leszek'],['te','vagy','voltál','leszel'],['ő / Ön','van','volt','lesz'],['mi','vagyunk','voltunk','leszünk'],['ti','vagytok','voltatok','lesztek'],['ők / Önök','vannak','voltak','lesznek']]}}),
    MKG('g8_engem','A személyes névmás mint tárgy','Le pronom personnel objet','engem, téged, őt, minket, titeket, őket (Önt, Önöket). Avec engem/téged/minket/titeket, le verbe est indéfini ; avec őt/őket ou Önt/Önöket, défini.',{
      grid:{head:['Sujet','Objet','Exemple'],rows:[['én','engem','Lát engem.'],['te','téged','Szeret téged.'],['ő','őt','Látom őt.'],['mi','minket','Hív minket.'],['ti','titeket','Ismer titeket.'],['ők','őket','Ismerem őket.']]}}),
    MKG('g8_mult','A múlt idő: -t (-tam/-tem)','Le passé','Radical + -t- + terminaison. Les verbes irréguliers ont des formes particulières à retenir.',{
      grid:{head:['Personne','tanul','néz','megy','jön'],rows:[['én','tanultam','néztem','mentem','jöttem'],['te','tanultál','néztél','mentél','jöttél'],['ő','tanult','nézett','ment','jött'],['mi','tanultunk','néztünk','mentünk','jöttünk'],['ti','tanultatok','néztetek','mentetek','jöttetek'],['ők','tanultak','néztek','mentek','jöttek']]},
      notes:['Négation : « Nem tanultam ».']}),
    MKG('g8_lak','Igeragozás: -lak/-lek','Moi → toi','Quand « je » agit sur « toi/vous » : radical + -lak (graves) / -lek (aiguës).',{
      grid:{head:['Verbe','Forme','Sens'],rows:[['szeret','szeretlek','je t’aime'],['hív','hívlak','je t’appelle'],['vár','várlak','je t’attends'],['lát','látlak','je te vois'],['meghív','meghívlak','je t’invite'],['kér','kérlek','je te demande, s’il te plaît']]}}),
    MKG('g8_datum','Időhatározók: Mikor? Hányadikán?','Les dates','Hányadika? (date) / Hányadikán? (quand). Ordinal + -a/-e (date) ou -án/-én (quand).',{
      grid:{head:['Chiffre','Date','Quand ?'],rows:[['1','elseje','elsején'],['2','másodika','másodikán'],['15','tizenötödike','tizenötödikén'],['20','huszadika','huszadikán'],['30','harmincadika','harmincadikán']]}}),
    MKG('g8_ek','Főnévragok: -ék','Le suffixe -ék','Adél + -ék = Adélék (Adél et ses proches). On le décline : Adélékhoz, Adéléknál, Adélektől.',{
      examples:[['Adélék új házba költöztek.','Adél et les siens ont déménagé dans une nouvelle maison.'],['Péterékhez megyek vacsorázni.','Je vais dîner chez Péter et sa famille.']]}),
    MKG('g8_nevuto','Helyet jelölő névutók: mögött, alatt','Postpositions de lieu','alatt (sous), fölött (au-dessus), előtt (devant), mögött (derrière), mellett (à côté), között (entre), mellett (près).',{
      examples:[['A macska az asztal alatt van.','Le chat est sous la table.'],['A szék az ablak előtt áll.','La chaise est devant la fenêtre.']]}),
    MKG('g8_hat_sz','Határozott ragozás: -s, -sz, -z végű igék','Conjugaison définie des verbes en -s/-sz/-z','La consonne finale se double devant -j- : olvas → olvassa, néz → nézzük, főz → főzzük.',{
      grid:{head:['Personne','olvas','néz','főz'],rows:[['én','olvasom','nézem','főzöm'],['te','olvasod','nézed','főzöd'],['ő','olvassa','nézi','főzi'],['mi','olvassuk','nézzük','főzzük'],['ti','olvassátok','nézitek','főzitek'],['ők','olvassák','nézik','főzik']]}}),
    MKG('g8_szorend','Szórend: birtoklást kifejező mondatok','L’ordre des mots avec possession','Le possesseur peut être placé en tête (avec -nak/-nek) ou en focus : « Péternek van egy kutyája ». Le nom possédé porte le suffixe possessif.',{
      examples:[['Péternek van egy kutyája.','C’est Péter qui a un chien.'],['Nekem nincs időm.','Moi je n’ai pas le temps.']]})
  ],
  exercises:[
    MKX('e8_birtokos','g8_birtokos','1. Birtokos személyjelek','Possessifs',
      MKB('fill','Complète',[MKF('(én) ','  (család)','családom',''),MKF('(te) ','  (lakás)','lakásod',''),MKF('(mi) ','  (ház)','házunk',''),MKF('(ti) ','  (kert)','kertetek',''),MKF('(ők) ','  (autó)','autójuk','')])),
    MKX('e8_idok','g8_birtoklas_idok','2. Birtoklás','van / volt / lesz',
      MKB('fill','Complète',[MKF('Tavaly volt egy ','.  (macska, mon)','macskám',''),MKF('Jövőre lesz ','.  (autó, mon)','autóm',''),MKF('Most ',' kutyám.','nincs','')]),
      MKB('choice','Choisis',[MKC('« L’année prochaine j’aurai un petit frère/une petite sœur. »','Jövőre lesz kistestvérem.','Jövőre van kistestvérem.','Jövőre volt kistestvérem.')])),
    MKX('e8_letige','g8_letige','3. A létige minden igeidőben','Passé, présent, futur',
      MKB('fill','Complète',[MKF('Holnap otthon ','.','leszek',''),MKF('Tegnap otthon ','.','voltam',''),MKF('Ők holnap itt ','.','lesznek',''),MKF('Te hol ','?  (passé)','voltál',''),MKF('Mi most itt ','.','vagyunk','')])),
    MKX('e8_engem','g8_engem','4. Személyes névmás: tárgy','engem, téged…',
      MKB('fill','Complète',[MKF('Péter lát ','.  (moi)','engem',''),MKF('Szeretlek ','.  (toi)','téged',''),MKF('Ismered ','?  (lui)','őt',''),MKF('Hívnak ','.  (nous)','minket','')])),
    MKX('e8_mult','g8_mult','5. A múlt idő','Passé en -t',
      MKB('fill','Passé',[MKF('Én tegnap ','.  (néz)','néztem',''),MKF('Te mit ','?  (tanul)','tanultál',''),MKF('Mi ','  moziba. (megy)','mentünk',''),MKF('Ők hozzánk ','.  (jön)','jöttek',''),MKF('Ti hol ','?  (van)','voltatok','')])),
    MKX('e8_lak','g8_lak','6. -lak / -lek','Moi → toi',
      MKB('fill','Complète',[MKF('Meghív','  vacsorára.','lak',''),MKF('Szeret','  .','lek',''),MKF('Vár','  .','lak','')]),
      MKB('translate','Traduis',[MKT('Je t’invite à dîner.','Meghívlak vacsorára.'),MKT('Je t’attends.','Várlak.')])),
    MKX('e8_datum','g8_datum','7. Hányadikán?','Dates',
      MKB('fill','Complète',[MKF('Március ','  van a születésnapom. (15)','tizenötödikén',''),MKF('Január ','  . (1er)','elsején',''),MKF('Június ','  . (20)','huszadikán','')])),
    MKX('e8_ek','g8_ek','8. -ék','Adélék',
      MKB('choice','Choisis',[MKC('« chez Péter et sa famille »','Péteréknél','Péternél','Péterhez'),MKC('« Adél et sa famille ont déménagé. »','Adélék elköltöztek.','Adél elköltözött.','Adélék elköltözik.')])),
    MKX('e8_nevuto','g8_nevuto','9. Névutók','alatt, mögött…',
      MKB('fill','Complète',[MKF('A kutya az asztal ','  van.','alatt',''),MKF('A szék az ablak ','  van.','előtt',''),MKF('A tükör az ágy ','  van.','fölött',''),MKF('Az iskola a posta ','  van.','mellett','')])),
    MKX('e8_hat_sz','g8_hat_sz','10. Határozott ragozás: -s,-sz,-z','olvassa, nézzük',
      MKB('fill','Conjugue (défini)',[MKF('Ő a könyvet ','.  (olvas)','olvassa',''),MKF('Mi a filmet ','.  (néz)','nézzük',''),MKF('Ők a vacsorát ','.  (főz)','főzik',''),MKF('Te a levelet ','.  (olvas)','olvasod','')])),
    MKX('e8_szorend','g8_szorend','11. Szórend: birtoklás','Ordre des mots',
      MKB('order','Remets en ordre',[MKO('C’est Péter qui a un chien.','Péternek van egy kutyája.'),MKO('Je n’ai pas le temps.','Nincs időm.'),MKO('Hier j’ai fait le ménage.','Tegnap takarítottam.')]))
  ]
});
