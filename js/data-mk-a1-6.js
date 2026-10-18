/* MagyarOK A1 — chapitre 6 : Szolgáltatások, szabadidős programok (Services et loisirs). Contenu original. */
MKM.use('A1', 6, 'Szolgáltatások, szabadidős programok', 'Services et loisirs');

MK_MODULES.push(
MKM('mk6_1','K6.1','Helyek és helyzetek — Lieux et situations',{
  rules:[
    MKR('Que fait-on où ? (lehet)','« Hol mit lehet csinálni? » — « lehet » + infinitif = on peut. « Az étteremben lehet enni és inni. » « A könyvtárban lehet könyveket olvasni. »',{examples:[['A moziban filmet lehet nézni.','Au cinéma on peut regarder un film.'],['A piacon lehet friss zöldséget venni.','Au marché on peut acheter des légumes frais.'],['A múzeumban nem lehet fényképezni.','Au musée on ne peut pas photographier.']]}),
    MKR('Le datif : -nak / -nek','Pour « à quelqu’un / pour quelqu’un », on ajoute -nak (graves) / -nek (aiguës) : « Péternek », « az orvosnak », « a barátomnak ». C’est le destinataire (on lui donne, écrit, téléphone).',{table:[['Péter → Péternek','à Péter'],['Anna → Annának','à Anna'],['a főnök → a főnöknek','au chef'],['a barátom → a barátomnak','à mon ami']]})
  ],
  vocab:[['könyvtár','bibliothèque',''],['múzeum','musée',''],['gyógyszertár','pharmacie',''],['étterem','restaurant',''],['kávézó','café',''],['szálloda','hôtel',''],['vasútállomás','gare',''],['színház','théâtre',''],['jegy','billet',''],['szoba','chambre / pièce',''],['foglal','réserver',''],['néz','regarder',''],['hallgat','écouter',''],['tanul','apprendre, étudier',''],['vesz','acheter',''],['telefonál','téléphoner','']],
  exercises:[
    MKB('fill','Datif',[MKF('Péter','  telefonálok.','nek',''),MKF('Anna','  írok.','nak',''),MKF('A főnök','  mondom.','nek',''),MKF('A barátom','  adom.','nak','')]),
    MKB('choice','Choisis',[MKC('« Au cinéma on peut regarder un film. »','A moziban filmet lehet nézni.','A moziban filmet lehetek nézni.','A mozi filmet lehet nézni.')])
  ]
}),
MKM('mk6_2','K6.2','Szolgáltatások — Services (kell)',{
  rules:[
    MKR('Devoir : kell','« kell » (il faut) se place avant ou après l’infinitif : « Dolgozni kell. » (Il faut travailler.) Avec un sujet précis, on met « nekem / neked / neki… » : « Nekem dolgozni kell. » La forme personnelle de l’infinitif (dolgoznom kell = je dois travailler) arrivera plus tard.',{table:[['Nekem dolgozni kell.','Je dois travailler.'],['Neked tanulni kell.','Tu dois étudier.'],['Neki időpontot kell kérni.','Il/elle doit prendre rendez-vous.'],['Nem kell várni.','Il ne faut pas / pas besoin d’attendre.']]}),
    MKR('Prendre rendez-vous','« Szeretnék időpontot kérni hajvágásra. » — « Mikor van szabad időpont? » — « Szerdán délután négykor. » — « Jó, az megfelel. »',{examples:[['Időpontot szeretnék kérni.','Je voudrais prendre rendez-vous.'],['Két jegyet kérek az előadásra.','Deux billets pour la représentation, s’il vous plaît.'],['Van még szabad hely?','Reste-t-il de la place ?']]})
  ],
  vocab:[['kell','il faut / devoir',''],['időpont','rendez-vous (horaire)',''],['fodrász','coiffeur',''],['orvos','médecin',''],['fogorvos','dentiste',''],['szabad','libre',''],['hely','place / endroit',''],['előadás','représentation, cours',''],['kiállítás','exposition',''],['megfelel','convenir',''],['vár','attendre','']],
  exercises:[
    MKB('order','Remets en ordre',[MKO('Il faut attendre.','Várni kell.'),MKO('Je dois travailler.','Nekem dolgozni kell.'),MKO('Tu dois prendre rendez-vous.','Neked időpontot kell kérni.')]),
    MKB('truefalse','Vrai ou faux ?',[MKV('« Nem kell várni. » signifie « Il n’est pas nécessaire d’attendre ».',true,''),MKV('« Neked kell tanulni. » = Je dois étudier.',false,'« Neked » = à toi → tu dois étudier')])
  ],
  dialogue:{title:'Chez le coiffeur',formal:[['Jó napot! Szeretnék időpontot kérni hajvágásra.','Bonjour ! Je voudrais prendre rendez-vous pour une coupe.'],['Mikor lenne jó?','Quand cela vous conviendrait-il ?'],['Szerdán délután.','Mercredi après-midi.'],['Négykor van szabad időpont.','À seize heures il y a un créneau libre.'],['Az megfelel, köszönöm.','Cela me convient, merci.']]}
}),
MKM('mk6_3','K6.3','Szabadidő — Temps libre',{
  rules:[
    MKR('Avoir : (nekem) van … ','La possession se dit avec « van » + nom possédé portant le suffixe possessif : « (Nekem) van autóm. » (J’ai une voiture.) Négation : « Nincs autóm. » Question : « Van tévéd? » Les pronoms « nekem / neked / neki… » sont facultatifs (ils servent à insister).',{table:[['én','(nekem) van autóm'],['te','(neked) van autód'],['ő / Ön','(neki) van autója'],['mi','(nekünk) van autónk'],['ti','(nektek) van autótok'],['ők','(nekik) van autójuk']]}),
    MKR('Combien de fois ? Quelle fréquence ?','« Hányszor? » — « Egyszer, kétszer, háromszor… » (-szor/-szer/-ször). « Milyen gyakran? » — « naponta, hetente, havonta, ritkán, gyakran, soha ». « Hetente háromszor sportolok. »',{table:[['egyszer, kétszer, háromszor','une fois, deux fois, trois fois'],['naponta · hetente · havonta','chaque jour · chaque semaine · chaque mois'],['gyakran · ritkán · soha','souvent · rarement · jamais']]})
  ],
  vocab:[['szabadidő','temps libre',''],['hobbi','loisir',''],['sportol','faire du sport',''],['úszik','nager',''],['olvas','lire',''],['zenét hallgat','écouter de la musique',''],['tévézik','regarder la télé',''],['kirándul','faire une randonnée',''],['főz','cuisiner',''],['rajzol','dessiner',''],['naponta','chaque jour',''],['hetente','chaque semaine',''],['havonta','chaque mois',''],['gyakran','souvent',''],['ritkán','rarement',''],['soha','jamais',''],['egyszer','une fois',''],['kétszer','deux fois',''],['háromszor','trois fois','']],
  exercises:[
    MKB('fill','Possession',[MKF('(Nekem) van ','.  (autó)','autóm',''),MKF('(Neked) van ','?  (tévé)','tévéd',''),MKF('(Neki) nincs ','.  (idő)','ideje',''),MKF('(Nekünk) van egy ','.  (kert)','kertünk','')]),
    MKB('fill','Hányszor ?',[MKF('3 fois = ','','háromszor',''),MKF('2 fois = ','','kétszer',''),MKF('1 fois = ','','egyszer',''),MKF('5 fois = ','','ötször','')])
  ]
}),
MKM('mk6_4','K6.4','Mikor találkozunk? — On se voit quand ?',{
  rules:[
    MKR('Proposer et refuser','« Nincs kedved moziba menni? » (Tu n’as pas envie d’aller au cinéma ?) — « Szívesen! » / « Sajnos nem tudok, mert dolgoznom kell. » Les conjonctions : « és » (et), « de » (mais), « mert » (parce que).',{examples:[['Nincs kedved sétálni?','Tu n’as pas envie de te promener ?'],['Szívesen, de ma nem érek rá.','Avec plaisir, mais aujourd’hui je ne suis pas libre.'],['Nem megyek, mert fáradt vagyok.','Je n’y vais pas parce que je suis fatigué.']]})
  ],
  vocab:[['kedv','envie, humeur',''],['szívesen','avec plaisir',''],['sajnos','malheureusement',''],['ráér','être disponible',''],['találkozik','se rencontrer',''],['együtt','ensemble',''],['mert','parce que',''],['de','mais',''],['és','et',''],['aztán','ensuite','']],
  exercises:[MKB('fill','Conjonctions : és / de / mert',[MKF('Szeretek olvasni, ','  nincs időm.','de',''),MKF('Kávét ','  teát iszom.','és',''),MKF('Nem megyek, ','  fáradt vagyok.','mert','')])],
  dialogue:{title:'On se voit ce week-end ?',informal:[['Szia! Nincs kedved moziba menni szombaton?','Salut ! Ça te dit d’aller au cinéma samedi ?'],['Szívesen, de délelőtt dolgoznom kell.','Avec plaisir, mais je dois travailler le matin.'],['Akkor délután?','Alors l’après-midi ?'],['Jó, háromkor ráérek.','D’accord, à trois heures je suis libre.']]}
}),
MKM('mk6_5','K6.5','Hurrá, nyaralunk! — Vive les vacances !',{
  rules:[
    MKR('Les saisons et les mois','Saisons : tavasz, nyár, ősz, tél. « Mikor? » — tavasszal, nyáron, ősszel, télen. Mois : január, február, március, április, május, június, július, augusztus, szeptember, október, november, december ; « januárban », « júniusban »…',{table:[['tavasz → tavasszal','au printemps'],['nyár → nyáron','en été'],['ősz → ősszel','en automne'],['tél → télen','en hiver'],['július → júliusban','en juillet']]}),
    MKR('Le passé de « être » : volt','« voltam, voltál, volt, voltunk, voltatok, voltak » : « Tavaly Olaszországban voltam. » (L’an dernier j’étais en Italie.) Question : « Hol voltál nyaralni? »',{table:[['én voltam','j’étais / j’ai été'],['te voltál','tu étais'],['ő / Ön volt','il/elle était'],['mi voltunk','nous étions'],['ti voltatok','vous étiez'],['ők voltak','ils étaient']]})
  ],
  vocab:[['nyaral','passer ses vacances',''],['szabadság','congé, vacances',''],['tavasz','printemps',''],['nyár','été',''],['ősz','automne',''],['tél','hiver',''],['tavaly','l’an dernier',''],['idén','cette année',''],['jövőre','l’an prochain',''],['tenger','mer',''],['hegy','montagne',''],['tó','lac',''],['Balaton','lac Balaton',''],['utazik','voyager',''],['repülőgép','avion','']],
  exercises:[
    MKB('fill','Hol voltál ? (volt)',[MKF('Én tavaly Olaszországban ','.','voltam',''),MKF('Te hol ','?','voltál',''),MKF('Mi a Balatonnál ','.','voltunk',''),MKF('Ők Párizsban ','.','voltak','')]),
    MKB('choice','En été / en hiver',[MKC('en été','nyáron','télen','tavasszal'),MKC('en hiver','télen','ősszel','nyáron'),MKC('en automne','ősszel','tavasszal','nyáron')])
  ]
})
);

MK_CHAPTERS.push({
  id:'a1-6', level:'A1', num:6, hu:'Szolgáltatások, szabadidős programok', fr:'Services et loisirs',
  intro:'Dire ce que l’on fait dans les lieux publics, prendre rendez-vous, parler de ses loisirs, proposer une sortie, raconter ses vacances. Grammaire : kell, -nak/-nek, la possession avec van, hányszor/hányadik, tud/szeret/akar + infinitif, és/de/mert, volt.',
  modules:['mk6_1','mk6_2','mk6_3','mk6_4','mk6_5'],
  grammar:[
    MKG('g6_kell','Segédigék: kell','Devoir : kell','« kell » se met avec un infinitif et signifie « il faut ». Pour préciser la personne : nekem / neked / neki… Négation : « nem kell » = pas besoin.',{
      examples:[['Dolgozni kell.','Il faut travailler.'],['Nekem holnap korán kell kelni.','Je dois me lever tôt demain.'],['Nem kell sietni.','Pas besoin de se dépêcher.']],
      grid:{head:['Personne','Infinitif personnel'],rows:[['én','dolgoznom'],['te','dolgoznod'],['ő / Ön','dolgoznia'],['mi','dolgoznunk'],['ti','dolgoznotok'],['ők / Önök','dolgozniuk']]},
      notes:['L’infinitif personnel se retrouve avec « kell » : « Dolgoznom kell » (je dois travailler).']}),
    MKG('g6_nak','A részeshatározó: -nak/-nek','Le datif','-nak avec voyelles graves, -nek avec aiguës. Indique le destinataire : Péternek adom. S’emploie aussi pour exprimer le possesseur dans « a barátomnak a kocsija ».',{
      grid:{head:['Nom','Datif','Nom','Datif'],rows:[['Péter','Péternek','Anna','Annának'],['a főnök','a főnöknek','a barát','a barátnak'],['a gyerekek','a gyerekeknek','a tanár','a tanárnak']]}}),
    MKG('g6_hatarozatlan','A határozatlan igeragozás (Összefoglalás)','Conjugaison indéfinie : récapitulatif','On utilise la conjugaison indéfinie quand l’objet est indéfini (almát eszem, egy könyvet olvasok) ou quand il n’y a pas d’objet. Récapitulatif : verbes réguliers (tanul), -ik (lakik), -s/-sz/-z (olvas), irréguliers (megy, jön, van).',{
      grid:{head:['Personne','tanul','lakik','olvas','megy'],rows:[['én','tanulok','lakom','olvasok','megyek'],['te','tanulsz','laksz','olvasol','mész'],['ő','tanul','lakik','olvas','megy'],['mi','tanulunk','lakunk','olvasunk','megyünk'],['ti','tanultok','laktok','olvastok','mentek'],['ők','tanulnak','laknak','olvasnak','mennek']]}}),
    MKG('g6_birtoklas','Birtoklás kifejezése: (nekem) van autóm','Exprimer la possession','On met « van » ou « nincs » et le nom possédé avec le suffixe possessif correspondant. Les pronoms « nekem, neked, neki… » sont facultatifs.',{
      grid:{head:['Personne','könyv','ház'],rows:[['én','könyvem','házam'],['te','könyved','házad'],['ő','könyve','háza'],['mi','könyvünk','házunk'],['ti','könyvetek','házatok'],['ők','könyvük','házuk']]},
      examples:[['Van autód?','As-tu une voiture ?'],['Nincs időm.','Je n’ai pas le temps.'],['Nekünk van egy kutyánk.','Nous avons un chien.']]}),
    MKG('g6_szam','A számnév toldalékolása: Hányszor? Hányadik?','Fréquence et ordinaux','« -szor/-szer/-ször » pour le nombre de fois. Ordinaux : első, második, harmadik, negyedik, ötödik, hatodik…',{
      grid:{head:['Nombre','Fois','Ordinal'],rows:[['1','egyszer','első'],['2','kétszer','második'],['3','háromszor','harmadik'],['4','négyszer','negyedik'],['5','ötször','ötödik'],['10','tízszer','tizedik']]},
      examples:[['Hetente kétszer úszom.','Je nage deux fois par semaine.'],['Hányadik emeleten laksz?','À quel étage habites-tu ?']]}),
    MKG('g6_segedige','Segédigék: szeret, tud, akar','Verbes modaux : aimer, savoir/pouvoir, vouloir','Ces trois verbes se combinent avec un infinitif : « Szeretek úszni. » « Tudok főzni. » « Akarok pihenni. »',{
      grid:{head:['Personne','szeret','tud','akar'],rows:[['én','szeretek','tudok','akarok'],['te','szeretsz','tudsz','akarsz'],['ő','szeret','tud','akar'],['mi','szeretünk','tudunk','akarunk'],['ti','szerettek','tudtok','akartok'],['ők','szeretnek','tudnak','akarnak']]}}),
    MKG('g6_ni','A főnévi igenév: -ni','L’infinitif en -ni','On l’obtient en ajoutant -ni au radical. Il s’emploie après les verbes modaux et après des adjectifs ou adverbes : « Jó úszni. » « Fontos tanulni. »',{
      examples:[['Szeretek olvasni.','J’aime lire.'],['Tudsz úszni?','Sais-tu nager ?'],['Jó itt lenni.','Il fait bon être ici.']]}),
    MKG('g6_kotoszo','Kötőszók: és, de, mert','Conjonctions','« és » relie, « de » oppose, « mert » donne la cause. Pas de virgule devant « és » (dans la plupart des cas), mais une virgule devant « de » et « mert ».',{
      examples:[['Kenyeret és sajtot veszek.','J’achète du pain et du fromage.'],['Szeretnék menni, de nincs időm.','J’aimerais y aller, mais je n’ai pas le temps.'],['Otthon maradok, mert beteg vagyok.','Je reste à la maison parce que je suis malade.']]}),
    MKG('g6_mikor','Az időhatározó: Mikor?','Les compléments de temps','Saisons et mois : tavasszal, nyáron, ősszel, télen ; januárban, júliusban. Partie de la journée : reggel, este. Fréquence : hetente, havonta.',{
      grid:{head:['Saison','Quand ?'],rows:[['tavasz','tavasszal'],['nyár','nyáron'],['ősz','ősszel'],['tél','télen']]}}),
    MKG('g6_volt','A létige múlt ideje: volt','Le passé de « être » : volt','voltam, voltál, volt, voltunk, voltatok, voltak. Négation : nem voltam. Emploi : lieu et état au passé.',{
      grid:{head:['Personne','Forme'],rows:[['én','voltam'],['te','voltál'],['ő / Ön','volt'],['mi','voltunk'],['ti','voltatok'],['ők / Önök','voltak']]},
      examples:[['Tavaly Budapesten voltam.','L’an dernier j’étais à Budapest.'],['Hol voltál tegnap?','Où étais-tu hier ?']]}),
    MKG('g6_szorend','Szórend: segédige a mondatban','Ordre des mots avec verbe modal','Le verbe modal est conjugué, l’infinitif le suit : « Tudok úszni. » Dans une question avec élément interrogatif : « Hol tudsz úszni? ». Le mot nié se place devant le modal.',{
      examples:[['Nem tudok úszni.','Je ne sais pas nager.'],['Hol szeretsz főzni?','Où aimes-tu cuisiner ?']]})
  ],
  exercises:[
    MKX('e6_kell','g6_kell','1. kell','Devoir',
      MKB('order','Remets en ordre',[MKO('Il faut travailler.','Dolgozni kell.'),MKO('Je dois me lever tôt.','Nekem korán kell kelni.')]),
      MKB('translate','Traduis',[MKT('Pas besoin de se dépêcher.','Nem kell sietni.')])),
    MKX('e6_nak','g6_nak','2. -nak / -nek','Datif',
      MKB('fill','Ajoute le suffixe',[MKF('Péter','','nek',''),MKF('Anna','','nak',''),MKF('A tanár','','nak',''),MKF('A gyerekek','','nek','')])),
    MKX('e6_hatarozatlan','g6_hatarozatlan','3. Határozatlan ragozás','Conjugaison indéfinie',
      MKB('fill','Conjugue',[MKF('Én magyarul ','.  (tanul)','tanulok',''),MKF('Te hol ','?  (lakik)','laksz',''),MKF('Mi könyvet ','.  (olvas)','olvasunk',''),MKF('Ők moziba ','.  (megy)','mennek','')])),
    MKX('e6_birtok','g6_birtoklas','4. Birtoklás','Avoir',
      MKB('fill','Possessif',[MKF('Van egy ','.  (könyv, mon)','könyvem',''),MKF('Neked van ','?  (ház)','házad',''),MKF('Neki nincs ','.  (idő)','ideje',''),MKF('Nekik van ','.  (kutya)','kutyájuk','')]),
      MKB('choice','Choisis',[MKC('« J’ai une voiture. »','Van autóm.','Van autó vagyok.','Autóm vagyok.')])),
    MKX('e6_szam','g6_szam','5. Hányszor? Hányadik?','Fois et ordinaux',
      MKB('fill','Complète',[MKF('Hetente ','  sportolok. (3 fois)','háromszor',''),MKF('Az ','  emeleten lakom. (1er)','első',''),MKF('A ','  utcában. (2e)','második','')])),
    MKX('e6_segedige','g6_segedige','6. szeret, tud, akar','Verbes modaux',
      MKB('fill','Conjugue',[MKF('Én úszni ','.  (szeret)','szeretek',''),MKF('Te főzni ','?  (tud)','tudsz',''),MKF('Mi pihenni ','.  (akar)','akarunk',''),MKF('Ők sportolni ','.  (szeret)','szeretnek','')])),
    MKX('e6_ni','g6_ni','7. -ni','Infinitif',
      MKB('fill','Infinitif',[MKF('Szeretek ','.  (olvas)','olvasni',''),MKF('Tudok ','.  (főz)','főzni',''),MKF('Jó ','.  (úszik)','úszni',''),MKF('Fontos ','.  (tanul)','tanulni','')])),
    MKX('e6_kotoszo','g6_kotoszo','8. és, de, mert','Conjonctions',
      MKB('fill','Complète',[MKF('Szeretem, ','  drága.','de',''),MKF('Almát ','  banánt veszek.','és',''),MKF('Itthon maradok, ','  beteg vagyok.','mert','')])),
    MKX('e6_mikor','g6_mikor','9. Mikor?','Saisons et mois',
      MKB('fill','Écris la forme',[MKF('tél → ','','télen',''),MKF('nyár → ','','nyáron',''),MKF('tavasz → ','','tavasszal',''),MKF('ősz → ','','ősszel','')])),
    MKX('e6_volt','g6_volt','10. volt','Passé de être',
      MKB('fill','Conjugue',[MKF('Én otthon ','.','voltam',''),MKF('Te hol ','?','voltál',''),MKF('Mi moziban ','.','voltunk',''),MKF('Ők Budapesten ','.','voltak',''),MKF('Ti hol ','?','voltatok','')]),
      MKB('translate','Traduis',[MKT('Hier j’étais au travail.','Tegnap a munkahelyen voltam.')])),
    MKX('e6_szorend','g6_szorend','11. Szórend','Modal + infinitif',
      MKB('order','Remets en ordre',[MKO('Je ne sais pas nager.','Nem tudok úszni.'),MKO('Où aimes-tu cuisiner ?','Hol szeretsz főzni?'),MKO('Je veux me reposer.','Pihenni akarok.')]))
  ]
});
