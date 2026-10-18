/* MagyarOK A1 — chapitre 7 : Aktív napok (Journées actives). Contenu original. */
MKM.use('A1', 7, 'Aktív napok', 'Journées actives');

MK_MODULES.push(
MKM('mk7_1','K7.1','Egy átlagos munkanap — Une journée de travail',{
  rules:[
    MKR('Raconter sa journée','On enchaîne les verbes avec les heures (-kor) et les connecteurs « aztán » (ensuite), « utána » (après), « délben » (à midi), « este » (le soir). Beaucoup de verbes de routine ont un préverbe : felkel, lefekszik.',{examples:[['Hatkor kelek fel.','Je me lève à six heures.'],['Utána reggelizem, aztán elmegyek dolgozni.','Après je prends le petit-déjeuner, puis je pars travailler.'],['Este tévét nézek, tizenegykor lefekszem.','Le soir je regarde la télé, à onze heures je me couche.']]})
  ],
  vocab:[['felkel','se lever',''],['lefekszik','se coucher',''],['fürdik','se baigner, se laver',''],['reggelizik','prendre le petit-déjeuner',''],['ebédel','déjeuner',''],['vacsorázik','dîner',''],['dolgozik','travailler',''],['indul','partir',''],['hazamegy','rentrer chez soi',''],['sétál','se promener',''],['utána','après',''],['aztán','ensuite',''],['korán','tôt',''],['későn','tard',''],['napirend','emploi du temps de la journée','']],
  exercises:[
    MKB('order','Remets en ordre',[MKO('Je me lève à six heures.','Hatkor kelek fel.'),MKO('Il déjeune à midi.','Délben ebédel.'),MKO('Le soir je regarde la télé.','Este tévét nézek.')]),
    MKB('fill','Conjugue',[MKF('Én korán ','.  (felkel — écris « kelek fel »)','kelek fel',''),MKF('Mi hétkor ','.  (reggelizik)','reggelizünk',''),MKF('Ő későn ','.  (lefekszik — écris « fekszik le »)','fekszik le','')])
  ],
  dialogue:{title:'Le planning de Dénes',informal:[['Mikor kelsz fel?','À quelle heure te lèves-tu ?'],['Fél hétkor kelek fel, aztán reggelizem.','À six heures et demie, puis je prends le petit-déjeuner.'],['És mikor indulsz dolgozni?','Et quand pars-tu travailler ?'],['Fél nyolckor.','À sept heures et demie.'],['Mikor érsz haza?','Quand rentres-tu ?'],['Ötkor.','À cinq heures.']]}
}),
MKM('mk7_2','K7.2','Igekötők — Les préverbes de direction',{
  rules:[
    MKR('fel / le, be / ki','Les préverbes indiquent la direction : fel- (vers le haut), le- (vers le bas), be- (vers l’intérieur), ki- (vers l’extérieur). Ex. : felmegy (monter), lemegy (descendre), bemegy (entrer), kimegy (sortir).',{table:[['felmegy / lemegy','monter / descendre'],['bemegy / kimegy','entrer / sortir'],['feláll / leül','se lever / s’asseoir'],['beszáll / kiszáll','monter dans / descendre d’un véhicule'],['elmegy','partir'],['visszajön','revenir']]}),
    MKR('Ordre des mots avec préverbe','Dans une phrase neutre, le préverbe précède le verbe : « Felkelek. » Mais si on nie ou met un élément en avant, le préverbe passe après le verbe : « Nem kelek fel. », « Hatkor kelek fel. »',{examples:[['Felmegyek az emeletre.','Je monte à l’étage.'],['Nem megyek el.','Je ne pars pas.'],['Mikor jössz vissza?','Quand reviens-tu ?']]})
  ],
  vocab:[['felmegy','monter',''],['lemegy','descendre',''],['bemegy','entrer',''],['kimegy','sortir',''],['feláll','se lever (debout)',''],['leül','s’asseoir',''],['beszáll','monter (véhicule)',''],['kiszáll','descendre (véhicule)',''],['elmegy','partir',''],['visszajön','revenir',''],['emelet','étage',''],['lift','ascenseur','']],
  exercises:[
    MKB('choice','Choisis le préverbe',[MKC('« monter à l’étage »','felmegy','lemegy','kimegy'),MKC('« entrer dans la pièce »','bemegy','kimegy','elmegy'),MKC('« s’asseoir »','leül','feláll','kimegy')]),
    MKB('fill','Négation : place le préverbe après',[MKF('Nem megyek ','  az emeletre.','fel',''),MKF('Nem kelek ','  korán.','fel',''),MKF('Nem jövök ','  ma.','vissza','')])
  ]
}),
MKM('mk7_3','K7.3','Mit csinálunk a munkahelyen? — Au travail',{
  rules:[
    MKR('Parler de son travail','« Mivel foglalkozol? » (Que fais-tu comme métier ?) — « Informatikus vagyok. Számítógépeket javítok. » (…je répare des ordinateurs.) Ce qui est important : « Fontos nekem a jó fizetés. » ; « Elégedett vagyok a munkámmal. »',{examples:[['Orvos vagyok, betegeket gyógyítok.','Je suis médecin, je soigne des malades.'],['E-maileket írok és telefonálok.','J’écris des e-mails et je téléphone.'],['Elégedett vagyok a munkámmal.','Je suis satisfait de mon travail.']]})
  ],
  vocab:[['munka','travail',''],['munkahely','lieu de travail',''],['fizetés','salaire',''],['főnök','chef',''],['kolléga','collègue',''],['ügyfél','client',''],['értekezlet','réunion',''],['e-mail','e-mail',''],['levél','lettre',''],['cég','entreprise',''],['elégedett','satisfait',''],['stresszes','stressant',''],['szabadság','congé',''],['javít','réparer',''],['gyógyít','soigner',''],['tárgyal','négocier',''],['vezet','diriger, conduire','']],
  exercises:[MKB('choice','Complète',[MKC('« Je suis satisfait de mon travail. »','Elégedett vagyok a munkámmal.','Elégedett vagyok a munkám.','Elégedett van a munkámmal.'),MKC('« Je téléphone aux clients. »','Az ügyfeleknek telefonálok.','Az ügyfeleket telefonálok.','Az ügyfelekkel telefonálok.')])]
}),
MKM('mk7_4','K7.4','Nyelvtanulás — Apprendre une langue',{
  rules:[
    MKR('Conjugaison définie','Quand l’objet est défini (article, ce/cette, possessif, nom propre), le verbe prend des terminaisons spéciales. « Olvasok egy könyvet. » (un livre — indéfini) mais « Olvasom a könyvet. » (le livre — défini). Terminaisons : -om/-em/-öm, -od/-ed/-öd, -ja/-i, -juk/-jük, -játok/-itek, -ják/-ik.',{table:[['olvasom a könyvet','je lis le livre'],['nézem a filmet','je regarde le film'],['szeretem a magyar nyelvet','j’aime la langue hongroise'],['értem a nyelvtant','je comprends la grammaire'],['ismerem őt','je le/la connais']]}),
    MKR('Parler de ses études','« Mióta tanulsz magyarul? » (Depuis quand apprends-tu le hongrois ?) — « Két éve tanulok magyarul. » ou « Tavaly óta. »',{examples:[['Mióta tanulsz magyarul?','Depuis quand apprends-tu le hongrois ?'],['Három éve tanulom a magyar nyelvet.','Cela fait trois ans que j’apprends le hongrois.'],['Értem a szöveget, de nem értem a szavakat.','Je comprends le texte, mais pas les mots.']]})
  ],
  vocab:[['nyelv','langue',''],['nyelvtan','grammaire',''],['szó','mot',''],['szöveg','texte',''],['ért','comprendre',''],['ismer','connaître',''],['tud','savoir',''],['lát','voir',''],['hall','entendre',''],['tanít','enseigner',''],['tanár','professeur',''],['diák','étudiant, élève',''],['házi feladat','devoirs',''],['mióta','depuis quand',''],['éve','cela fait … ans','']],
  exercises:[
    MKB('fill','Conjugaison définie',[MKF('Olvasom ','  könyvet.','a',''),MKF('Szeretem ','  nyelvet.','a',''),MKF('Értem ','  nyelvtant.','a','')]),
    MKB('choice','Indéfini ou défini ?',[MKC('« Je lis un livre. »','Olvasok egy könyvet.','Olvasom egy könyvet.','Olvasok a könyvet.'),MKC('« Je lis le livre. »','Olvasom a könyvet.','Olvasok a könyvet.','Olvasom egy könyvet.')])
  ]
})
);

MK_CHAPTERS.push({
  id:'a1-7', level:'A1', num:7, hu:'Aktív napok', fr:'Journées actives',
  intro:'Raconter sa journée, parler de son travail et de l’apprentissage des langues. Grammaire : préverbes (fel-, le-, be-, ki-), objet défini ou indéfini et conjugaison définie, depuis quand ?, ordre des mots avec préverbe.',
  modules:['mk7_1','mk7_2','mk7_3','mk7_4'],
  grammar:[
    MKG('g7_igekoto','Irányt jelző igekötők: fel-, le-, be-, ki-','Les préverbes de direction','Les préverbes complètent le verbe et en précisent la direction : fel- (haut), le- (bas), be- (dedans), ki- (dehors). Leur place varie selon la phrase.',{
      grid:{head:['Préverbe','Sens','Exemple'],rows:[['fel-','vers le haut','felmegy, felkel'],['le-','vers le bas','lemegy, leül'],['be-','vers l’intérieur','bemegy, beül'],['ki-','vers l’extérieur','kimegy, kiszáll']]}}),
    MKG('g7_targy','A tárgy típusa és az igeragozás','Type d’objet et conjugaison','Objet indéfini (egy, szám, valami, semmi…) → conjugaison indéfinie. Objet défini (article a/az, ez/az, possessif, nom propre, őt) → conjugaison définie.',{
      grid:{head:['Objet','Conjugaison','Exemple'],rows:[['indéfini','indéfinie','Almát eszem. Egy könyvet olvasok.'],['défini','définie','Az almát eszem. A könyvet olvasom.']]}}),
    MKG('g7_hat_sing','A határozott ragozás: egyes szám','Conjugaison définie : singulier','Voici les terminaisons pour les verbes réguliers.',{
      grid:{head:['Personne','olvas (graves)','néz (aiguës)','kér'],rows:[['én','olvasom','nézem','kérem'],['te','olvasod','nézed','kéred'],['ő / Ön','olvassa','nézi','kéri']]},
      notes:['Pour les verbes en -s/-sz/-z, la consonne se double : olvassa, nézzük.']}),
    MKG('g7_hat_tobbes','A határozott ragozás: többes szám','Conjugaison définie : pluriel','Au pluriel, les terminaisons sont -juk/-jük (mi), -játok/-itek (ti), -ják/-ik (ők) ; avec s/sz/z la consonne se double.',{
      grid:{head:['Personne','olvas','néz','kér'],rows:[['mi','olvassuk','nézzük','kérjük'],['ti','olvassátok','nézitek','kéritek'],['ők / Önök','olvassák','nézik','kérik']]}}),
    MKG('g7_mikor','Időhatározók: Mikor? Mióta?','Quand ? Depuis quand ?','« Mióta? » (depuis quand) → « X óta » (tavaly óta, hétfő óta) ou « X éve » (két éve : cela fait deux ans). « Hány éve? » → durée écoulée.',{
      examples:[['Mióta tanulsz magyarul?','Depuis quand apprends-tu le hongrois ?'],['Két éve tanulok.','Cela fait deux ans que j’apprends.'],['Tavaly óta lakom itt.','J’habite ici depuis l’an dernier.']]}),
    MKG('g7_szorend','Szórend: igekötős mondatok','Ordre des mots avec préverbes','Neutre : préverbe + verbe (Felkelek.). Négation ou élément en focus : verbe + préverbe (Nem kelek fel. Hatkor kelek fel.).',{
      examples:[['Felmegyek az emeletre.','Je monte à l’étage.'],['Nem megyek fel.','Je ne monte pas.'],['Mikor mész el?','Quand pars-tu ?']]})
  ],
  exercises:[
    MKX('e7_igekoto','g7_igekoto','1. Igekötők','fel-, le-, be-, ki-',
      MKB('fill','Complète le préverbe',[MKF('','megyek az emeletre. (monter)','Fel',''),MKF('','megyek a szobába. (entrer)','Be',''),MKF('','ülök a székre. (s’asseoir)','Le',''),MKF('','szállok a buszból. (descendre)','Ki','')]),
      MKB('choice','Contraire',[MKC('felmegy ≠','lemegy','kimegy','elmegy'),MKC('bemegy ≠','kimegy','lemegy','felmegy')])),
    MKX('e7_targy','g7_targy','2. A tárgy típusa','Défini / indéfini',
      MKB('truefalse','Vrai ou faux ?',[MKV('« Almát eszem. » (indéfini) est correct.',true,''),MKV('« Az almát eszek. » est correct.',false,'« Az almát eszem. »'),MKV('« Egy könyvet olvasok. » est correct.',true,'')]),
      MKB('choice','Choisis',[MKC('« Je vois le professeur. »','Látom a tanárt.','Látok a tanárt.','Látom tanárt.')])),
    MKX('e7_hat_sing','g7_hat_sing','3. Határozott ragozás (sg.)','Singulier',
      MKB('fill','Conjugue (défini)',[MKF('Én ','  a filmet. (néz)','nézem',''),MKF('Te ','  a levelet. (ír)','írod',''),MKF('Ő ','  a könyvet. (olvas)','olvassa',''),MKF('Én ','  a kávét. (kér)','kérem','')])),
    MKX('e7_hat_tobbes','g7_hat_tobbes','4. Határozott ragozás (pl.)','Pluriel',
      MKB('fill','Conjugue (défini)',[MKF('Mi ','  a filmet. (néz)','nézzük',''),MKF('Ti ','  a könyvet. (olvas)','olvassátok',''),MKF('Ők ','  a levelet. (ír)','írják',''),MKF('Mi ','  a kávét. (kér)','kérjük','')])),
    MKX('e7_mikor','g7_mikor','5. Mióta?','Depuis quand',
      MKB('translate','Traduis',[MKT('Cela fait trois ans que j’apprends le hongrois.','Három éve tanulok magyarul.'),MKT('Depuis quand habites-tu ici ?','Mióta laksz itt?')]),
      MKB('order','Remets en ordre',[MKO('Cela fait deux ans que je travaille ici.','Két éve dolgozom itt.')])),
    MKX('e7_szorend','g7_szorend','6. Szórend: igekötők','Préverbe et ordre',
      MKB('order','Remets en ordre',[MKO('Je ne monte pas.','Nem megyek fel.'),MKO('Je me lève à six heures.','Hatkor kelek fel.'),MKO('Je monte à l’étage.','Felmegyek az emeletre.')]))
  ]
});
