/* MagyarOK A1 — chapitre 1 : A magyar nyelv (La langue hongroise). Contenu original. */
MKM.use('A1', 1, 'A magyar nyelv', 'La langue hongroise');

MK_MODULES.push(
MKM('mk1_1','K1.1','Az ábécé és a kiejtés — Alphabet et prononciation',{
  rules:[
    MKR('Une langue qui s’écrit comme elle se prononce','Le hongrois est très régulier : chaque lettre correspond à un son. L’accent tonique tombe toujours sur la première syllabe. Les voyelles peuvent être brèves ou longues (a / á, e / é, i / í, o / ó, ö / ő, u / ú, ü / ű), et la durée change le sens : « kar » (bras) ≠ « kár » (dommage).',{table:[['a [o ouvert] · á [a long]','kar (bras) · kár (dommage)'],['e [è] · é [é fermé]','kerek (rond) · kérek (je voudrais)'],['o · ó','kor (âge) · kór (maladie)'],['ö · ő','tör (il casse) · tőr (poignard)'],['u · ú','ujj (doigt) · új (nouveau)'],['ü · ű','ül (il est assis) · űr (espace)']]}),
    MKR('Les consonnes à lire attentivement','Certaines lettres se prononcent différemment du français : s [ch] ; sz [s] ; zs [j] ; cs [tch] ; c [ts] ; gy [dj] ; ny [gn] ; ty [tch doux] ; ly [y] ; j [y]. Les digraphes comptent pour une seule lettre dans l’alphabet.',{table:[['s','[ch] — sál, só'],['sz','[s] — szia, száz'],['zs','[j] — zsemle'],['cs','[tch] — csók'],['c','[ts] — cica'],['gy','[dj] — gyerek'],['ny','[gn] — nyelv'],['ly, j','[y] — lyuk, jó']]})
  ],
  vocab:[['igen','oui',''],['nem','non',''],['szia','salut',''],['jó','bon',''],['kérek','je voudrais',''],['kár','dommage',''],['kar','bras',''],['cica','minou, chat',''],['gyerek','enfant',''],['nyelv','langue',''],['zsemle','petit pain',''],['csók','bisou',''],['só','sel',''],['száz','cent','']],
  exercises:[
    MKB('choice','Quel mot signifie « dommage » ?',[MKC('Dommage :','kár','kar','kor')]),
    MKB('truefalse','Vrai ou faux ?',[MKV('L’accent tonique tombe sur la première syllabe.',true,''),MKV('« sz » se prononce [ch].',false,'« sz » = [s], « s » = [ch]'),MKV('« ő » est une voyelle longue.',true,'')])
  ]
}),
MKM('mk1_2','K1.2','Hangrend — L’harmonie vocalique',{
  rules:[
    MKR('Voyelles graves, aiguës et neutres','Les voyelles se répartissent en deux familles. Graves : a, á, o, ó, u, ú. Aiguës : e, é, i, í, ö, ő, ü, ű (i, í, é sont aussi « neutres »). Un mot hongrois utilise en général des voyelles de la même famille, et les suffixes s’y accordent : ház → házban ; kert → kertben.',{table:[['graves : a, á, o, ó, u, ú','ház → házban, ország → országban'],['aiguës : e, é, i, ö, ő, ü, ű','kert → kertben, szék → székben'],['neutres : i, í, é','mots mixtes, p. ex. hotel → hotelben']]}),
    MKR('Pourquoi c’est utile','Presque tous les suffixes existent en deux (voire trois) variantes : -ban / -ben, -nak / -nek, -val / -vel. L’harmonie vocalique permet de choisir la bonne.',{examples:[['Budapesten, Szegeden, Pécsen','à Budapest, à Szeged, à Pécs'],['a házban, a kertben','dans la maison, dans le jardin'],['Annának, Péternek','à Anna, à Péter']]})
  ],
  vocab:[['ház','maison',''],['kert','jardin',''],['szék','chaise',''],['ország','pays',''],['hang','son, voix',''],['szó','mot',''],['betű','lettre',''],['magánhangzó','voyelle',''],['mássalhangzó','consonne',''],['hosszú','long',''],['rövid','court','']],
  exercises:[
    MKB('choice','-ban ou -ben ?',[MKC('ház +','-ban','-ben','-nak'),MKC('kert +','-ben','-ban','-nek'),MKC('ország +','-ban','-ben','-val'),MKC('szék +','-ben','-ban','-nal')]),
    MKB('fill','Ajoute le suffixe -ban / -ben',[MKF('A ház','  vagyok.','ban',''),MKF('A kert','  vagyunk.','ben',''),MKF('Az iskola','  tanulok.','ban','')])
  ]
}),
MKM('mk1_3','K1.3','Névelő és első szavak — Article et premiers mots',{
  rules:[
    MKR('L’article : a / az / egy','« a » devant consonne, « az » devant voyelle ; « egy » = un, une. Il n’y a pas de genre grammatical.',{table:[['a ház · az asztal','la maison · la table'],['a gyerek · az ember','l’enfant · l’homme'],['egy könyv · egy alma','un livre · une pomme']]}),
    MKR('Mots internationaux','Beaucoup de mots internationaux s’écrivent presque comme en français : taxi, hotel, kávé, tea, bank, metró, telefon, pizza, szendvics (sandwich).',{examples:[['taxi, hotel, bank','taxi, hôtel, banque'],['kávé, tea, pizza','café, thé, pizza']]})
  ],
  vocab:[['a','le, la, les (devant consonne)',''],['az','le, la, les (devant voyelle)',''],['egy','un, une',''],['ember','homme, être humain',''],['asztal','table',''],['könyv','livre',''],['alma','pomme',''],['taxi','taxi',''],['hotel','hôtel',''],['kávé','café',''],['tea','thé',''],['bank','banque',''],['metró','métro',''],['telefon','téléphone','']],
  exercises:[MKB('fill','a ou az ?',[MKF('','ház','a',''),MKF('','asztal','az',''),MKF('','alma','az',''),MKF('','könyv','a',''),MKF('','iskola','az','')])]
}),
MKM('mk1_4','K1.4','Az órán — En classe',{
  rules:[MKR('Les phrases de la classe','Les consignes que l’on entend en cours de langue.',{table:[['Hallgassa meg!','Écoutez !'],['Olvassa el!','Lisez !'],['Írja le!','Écrivez !'],['Ismételje meg!','Répétez !'],['Egészítse ki!','Complétez !'],['Beszélgessenek!','Discutez !'],['Nem értem.','Je ne comprends pas.'],['Hogy mondják magyarul?','Comment dit-on en hongrois ?']]})],
  vocab:[['feladat','exercice, tâche',''],['kérdés','question',''],['válasz','réponse',''],['szótár','dictionnaire',''],['tanár','professeur',''],['diák','étudiant',''],['óra','cours / heure',''],['szünet','pause',''],['hallgat','écouter',''],['olvas','lire',''],['ír','écrire',''],['ismétel','répéter',''],['beszél','parler','']],
  exercises:[MKB('choice','Que veut dire…',[MKC('Hallgassa meg!','Écoutez !','Lisez !','Écrivez !'),MKC('Olvassa el!','Lisez !','Répétez !','Complétez !'),MKC('Ismételje meg!','Répétez !','Écoutez !','Discutez !')])]
})
);

MK_CHAPTERS.push({
  id:'a1-1', level:'A1', num:1, hu:'A magyar nyelv', fr:'La langue hongroise',
  intro:'Un premier regard sur le hongrois : alphabet et prononciation, voyelles longues et brèves, harmonie vocalique, article défini et indéfini, phrases de classe. C’est un chapitre de découverte sans cahier d’exercices dans le manuel : les exercices ci-dessous sont originaux.',
  modules:['mk1_1','mk1_2','mk1_3','mk1_4'],
  grammar:[
    MKG('g1_kiejtes','Kiejtés és helyesírás','Prononciation et orthographe','Le hongrois s’écrit comme il se prononce. Accent sur la 1re syllabe. La durée des voyelles est distinctive. Les digraphes cs, gy, ly, ny, sz, ty, zs, dz, dzs sont des lettres à part entière.',{
      grid:{head:['Lettre','Son','Exemple'],rows:[['s','[ch]','sál'],['sz','[s]','szék'],['zs','[j]','zsák'],['cs','[tch]','csésze'],['gy','[dj]','gyerek'],['ny','[gn]','nyelv'],['ly / j','[y]','lyuk / jó']]}}),
    MKG('g1_hangrend','Hangrend','Harmonie vocalique','Graves : a á o ó u ú. Aiguës : e é i í ö ő ü ű. Les suffixes ont des variantes graves / aiguës, et le mot choisit la sienne.',{
      grid:{head:['Suffixe','Voyelles graves','Voyelles aiguës'],rows:[['dans','-ban','-ben'],['à (datif)','-nak','-nek'],['avec','-val','-vel'],['dans (direction)','-ba','-be']]}}),
    MKG('g1_nevelo','A határozott névelő: a / az','L’article défini','« a » devant consonne, « az » devant voyelle. Pas de genre ni de pluriel pour l’article. Indéfini : egy.',{
      examples:[['a barát','l’ami'],['az iroda','le bureau'],['egy kávé','un café']]})
  ],
  exercises:[
    MKX('e1_kiejtes','g1_kiejtes','1. Kiejtés','Lecture des lettres',
      MKB('choice','Quel son ?',[MKC('« sz » se lit…','[s]','[ch]','[z]'),MKC('« s » se lit…','[ch]','[s]','[ts]'),MKC('« gy » se lit…','[dj]','[g]','[gn]'),MKC('« ny » se lit…','[gn]','[ni]','[n]')])),
    MKX('e1_hangrend','g1_hangrend','2. Hangrend','-ban / -ben',
      MKB('fill','Choisis -ban ou -ben',[MKF('A ház','  van.','ban',''),MKF('A kert','  van.','ben',''),MKF('A szoba','  van.','ban',''),MKF('Az étterem','  vagyok.','ben',''),MKF('A város','  lakom.','ban','')])),
    MKX('e1_nevelo','g1_nevelo','3. A névelő','a / az',
      MKB('fill','a ou az ?',[MKF('','alma','az',''),MKF('','kávé','a',''),MKF('','óra','az',''),MKF('','tanár','a','')]),
      MKB('translate','Traduis',[MKT('un livre','egy könyv'),MKT('la maison','a ház'),MKT('l’école','az iskola')]))
  ]
});
