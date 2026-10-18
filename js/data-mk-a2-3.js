/* MagyarOK A2 — chapitre 3 : Szabadidős programok (Loisirs). Contenu original. */
MKM.use('A2', 3, 'Szabadidős programok', 'Loisirs');

MK_MODULES.push(
MKM('mkb3_1','A2·3.1','Mi a hobbid? — Quel est ton passe-temps ?',{
  rules:[
    MKR('La fréquence','« Milyen gyakran? » — « naponta » (tous les jours), « hetente » (chaque semaine), « havonta » (chaque mois), « évente » (chaque année), « ritkán » (rarement), « gyakran » (souvent). On peut dire aussi : « minden héten ».',{examples:[['Naponta háromszor eszem.','Je mange trois fois par jour.'],['Hetente kétszer futok.','Je cours deux fois par semaine.'],['Havonta egyszer járok fodrászhoz.','Je vais chez le coiffeur une fois par mois.']]}),
    MKR('Noms d’action : -ás / -és','De nombreux verbes donnent un nom d’action en -ás/-és : olvas → olvasás, úszik → úszás, fut → futás, főz → főzés, utazik → utazás, kirándul → kirándulás. « A kedvenc hobbim az olvasás. »',{table:[['olvas → olvasás','la lecture'],['úszik → úszás','la natation'],['fut → futás','la course'],['főz → főzés','la cuisine'],['utazik → utazás','le voyage'],['kirándul → kirándulás','la randonnée']]})
  ],
  vocab:[['hobbi','passe-temps',''],['olvasás','lecture',''],['úszás','natation',''],['futás','course à pied',''],['főzés','cuisine',''],['utazás','voyage',''],['kirándulás','randonnée',''],['kerékpározás','vélo',''],['fényképezés','photographie',''],['naponta','chaque jour',''],['hetente','chaque semaine',''],['havonta','chaque mois',''],['évente','chaque année',''],['rendszeresen','régulièrement','']],
  exercises:[MKB('fill','Nom d’action',[MKF('olvas → ','','olvasás',''),MKF('úszik → ','','úszás',''),MKF('főz → ','','főzés',''),MKF('utazik → ','','utazás','')]),MKB('choice','Choisis',[MKC('« chaque semaine »','hetente','naponta','évente'),MKC('« chaque mois »','havonta','hetente','évente')])]
}),
MKM('mkb3_2','A2·3.2','Mit csinálunk együtt? — Que faisons-nous ensemble ?',{
  rules:[
    MKR('Pouvoir : -hat / -het','Le suffixe -hat/-het ajouté au verbe exprime la possibilité ou la permission : olvashat (il peut lire), mehetünk (nous pouvons aller). Pour proposer : « Moziba mehetünk. » (On peut aller au cinéma.)',{table:[['tanul → tanulhatok · tanulhatsz · tanulhat','je peux étudier…'],['megy → mehetek · mehetsz · mehet','je peux aller…'],['jön → jöhetek · jöhetsz · jöhet','je peux venir…'],['eszik → ehetek · ehetsz · ehet','je peux manger…']]}),
    MKR('Proposer et se mettre d’accord','« Mikor érsz rá? » (Quand es-tu libre ?) — « Szombaton ráérek. » « Mit csinálunk? » — « Mehetünk moziba, vagy sétálhatunk a parkban. »',{examples:[['Mikor érsz rá?','Quand es-tu libre ?'],['Szombaton délután ráérek.','Samedi après-midi, je suis libre.'],['Mehetünk moziba is.','On peut aussi aller au cinéma.']]})
  ],
  vocab:[['ráér','avoir le temps',''],['javasol','proposer',''],['megbeszél','convenir de',''],['találkozik','se voir',''],['sétál','se promener',''],['kirándul','faire une randonnée',''],['mehet','peut aller',''],['jöhet','peut venir',''],['akkor','alors',''],['vagy','ou',''],['esetleg','éventuellement',''],['inkább','plutôt','']],
  exercises:[MKB('fill','Conjugue avec -hat/-het',[MKF('Én moziba ','.  (megy)','mehetek',''),MKF('Te holnap ','?  (jön)','jöhetsz',''),MKF('Mi itt ','.  (marad)','maradhatunk',''),MKF('Ők sokat ','.  (tanul)','tanulhatnak','')])]
}),
MKM('mkb3_3','A2·3.3','Mozi, zene, sport, múzeum — Culture et sport',{
  rules:[
    MKR('Noms de personnes en -ó / -ő','Un participe actif devenu nom désigne la personne qui fait : úszik → úszó (nageur), fut → futó (coureur), sportol → sportoló (sportif), tanul → tanuló (élève), olvas → olvasó (lecteur), előad → előadó (conférencier / interprète).',{table:[['úszik → úszó','nageur'],['fut → futó','coureur'],['sportol → sportoló','sportif'],['tanul → tanuló','élève'],['olvas → olvasó','lecteur'],['előad → előadó','intervenant']]}),
    MKR('Au cinéma et au musée','« Mi megy a moziban? » (Qu’est-ce qui passe au cinéma ?) « Hány órakor kezdődik a film? » « Két jegyet kérek a kiállításra. »',{examples:[['Mi megy a moziban?','Qu’est-ce qui passe au cinéma ?'],['Mikor nyit a múzeum?','Quand ouvre le musée ?'],['Szeretem a klasszikus zenét.','J’aime la musique classique.']]})
  ],
  vocab:[['film','film',''],['mozi','cinéma',''],['koncert','concert',''],['zenekar','orchestre / groupe',''],['énekes','chanteur',''],['előadó','artiste, conférencier',''],['sportoló','sportif',''],['sportág','discipline sportive',''],['foci','football',''],['kosárlabda','basket',''],['tenisz','tennis',''],['kiállítás','exposition',''],['jegy','billet',''],['kezdődik','commencer',''],['nyit','ouvrir',''],['zár','fermer','']],
  exercises:[MKB('fill','Nom de personne',[MKF('úszik → ','','úszó',''),MKF('fut → ','','futó',''),MKF('sportol → ','','sportoló',''),MKF('tanul → ','','tanuló','')]),MKB('translate','Traduis',[MKT('Quand ouvre le musée ?','Mikor nyit a múzeum?'),MKT('Deux billets pour l’exposition, s’il vous plaît.','Két jegyet kérek a kiállításra.')])]
}),
MKM('mkb3_4','A2·3.4','Cause et conséquence — Azért, ezért',{
  rules:[
    MKR('azért… mert / ezért','« Azért tanulok magyarul, mert Budapesten dolgozom. » (Si j’apprends le hongrois, c’est parce que je travaille à Budapest.) « Szeretek úszni, ezért hetente háromszor megyek az uszodába. » (J’aime nager, c’est pourquoi je vais à la piscine trois fois par semaine.)',{table:[['azért… mert…','c’est pour cela… parce que…'],['ezért','c’est pourquoi (conséquence)']]}),
    MKR('Les pronoms avec postposition','Pour reprendre une personne : « róla » (à son sujet), « vele » (avec elle/lui), « neki » (à elle/lui), « hozzá » (chez elle/lui), « tőle » (de sa part). Pluriel : róluk, velük, nekik, hozzájuk, tőlük.',{table:[['én','rólam · velem · nekem · hozzám'],['te','rólad · veled · neked · hozzád'],['ő','róla · vele · neki · hozzá'],['mi','rólunk · velünk · nekünk · hozzánk'],['ti','rólatok · veletek · nektek · hozzátok'],['ők','róluk · velük · nekik · hozzájuk']]})
  ],
  vocab:[['azért','pour cette raison',''],['ezért','c’est pourquoi',''],['mert','parce que',''],['ugyanis','en effet',''],['tehát','donc',''],['róla','à son sujet',''],['vele','avec lui/elle',''],['neki','à lui/elle',''],['hozzá','chez lui/elle',''],['tőle','de sa part',''],['megnéz','regarder (jusqu’au bout)',''],['elolvas','lire (jusqu’au bout)',''],['megtanul','apprendre (à fond)','']],
  exercises:[MKB('fill','Complète',[MKF('Beszélek ','  . (avec elle/lui)','vele',''),MKF('Gondolok ','  . (à toi)','rád',''),MKF('Mesélek ','  . (de lui/elle)','róla',''),MKF('Megyek ','  . (chez eux)','hozzájuk','')]),MKB('choice','Choisis',[MKC('« J’aime nager, c’est pourquoi je vais à la piscine. »','Szeretek úszni, ezért az uszodába megyek.','Szeretek úszni, azért az uszodába megyek.','Szeretek úszni, mert az uszodába megyek.')])]
})
);

MK_CHAPTERS.push({
  id:'a2-3', level:'A2', num:3, hu:'Szabadidős programok', fr:'Loisirs',
  intro:'Parler de ses loisirs et de leur fréquence, faire des propositions de sortie, culture et sport, exprimer cause et conséquence. Grammaire : fréquence, noms en -ás/-és et -ó/-ő, -hat/-het, préverbes d’achèvement, azért/ezért, pronoms avec postposition.',
  modules:['mkb3_1','mkb3_2','mkb3_3','mkb3_4'],
  grammar:[
    MKG('ga3_gyakori','Gyakoriság, rendszeresség kifejezése: naponta, hetente','Exprimer la fréquence','naponta, hetente, havonta, évente = chaque jour/semaine/mois/année. Avec un nombre : « hetente kétszer ».',{
      grid:{head:['Période','Adverbe','Équivalent'],rows:[['nap','naponta','minden nap'],['hét','hetente','minden héten'],['hónap','havonta','minden hónapban'],['év','évente','minden évben']]}}),
    MKG('ga3_asas','Főnévképzők: -ás/-és','Noms d’action en -ás/-és','Radical + -ás (graves) / -és (aiguës) : olvas → olvasás, főz → főzés.',{
      grid:{head:['Verbe','Nom'],rows:[['olvas','olvasás'],['úszik','úszás'],['fut','futás'],['főz','főzés'],['utazik','utazás'],['kirándul','kirándulás']]}}),
    MKG('ga3_hat','Képzők: -hat/-het','Pouvoir : -hat/-het','Le suffixe se place entre le radical et la marque de personne. Même conjugaison ensuite.',{
      grid:{head:['Personne','tanul','megy','jön'],rows:[['én','tanulhatok','mehetek','jöhetek'],['te','tanulhatsz','mehetsz','jöhetsz'],['ő','tanulhat','mehet','jöhet'],['mi','tanulhatunk','mehetünk','jöhetünk'],['ti','tanulhattok','mehettek','jöhettek'],['ők','tanulhatnak','mehetnek','jöhetnek']]}}),
    MKG('ga3_ni','A főnévi igenév (Ismétlés)','Infinitif (rappel)','Avec les verbes modaux (tud, akar, szeret, kell…) et expressions (jó, fontos…) : Tudok úszni. Jó futni.',{
      examples:[['Szeretek olvasni.','J’aime lire.'],['Nem tudok énekelni.','Je ne sais pas chanter.']]}),
    MKG('ga3_lak','Igeragozás: -lak/-lek (Ismétlés)','Moi → toi (rappel)','Szeretlek, látlak, várlak… Même emploi quand « je » agit sur « toi/vous ».',{
      examples:[['Hívlak holnap.','Je t’appelle demain.'],['Meghívlak a koncertre.','Je t’invite au concert.']]}),
    MKG('ga3_igekoto','Igekötők: befejezettség','Préverbes : l’action terminée','meg-, el-, ki-, be-… indiquent que l’action est accomplie. « Néztem a filmet » (je regardais) / « Megnéztem a filmet » (je l’ai vu en entier).',{
      grid:{head:['Imperfectif','Perfectif'],rows:[['néz','megnéz'],['olvas','elolvas'],['tanul','megtanul'],['ír','megír'],['eszik','megeszik']]}}),
    MKG('ga3_azert','Előreutalás és visszautalás: azért, ezért','Annoncer et rappeler : azért, ezért','« azért… mert » annonce la raison ; « ezért » rappelle la raison déjà donnée et introduit la conséquence.',{
      examples:[['Azért sportolok, mert egészséges akarok lenni.','Je fais du sport parce que je veux être en bonne santé.'],['Egészséges akarok lenni, ezért sportolok.','Je veux être en bonne santé, c’est pourquoi je fais du sport.']]}),
    MKG('ga3_nevmas','A személyes névmás alakjai: belőlük, bennük, rájuk, róluk','Pronoms avec suffixes','Les pronoms personnels se déclinent avec les mêmes suffixes que les noms.',{
      grid:{head:['Cas','ő','ők'],rows:[['-ban','benne','bennük'],['-ból','belőle','belőlük'],['-ra','rá','rájuk'],['-ról','róla','róluk'],['-nak','neki','nekik'],['-val','vele','velük'],['-hoz','hozzá','hozzájuk'],['-tól','tőle','tőlük']]}}),
    MKG('ga3_o','Főnévképzők: -ó/-ő','Noms d’agent en -ó/-ő','Radical + -ó (graves) / -ő (aiguës) : úszó, futó, sportoló, tanuló, olvasó.',{
      grid:{head:['Verbe','Nom'],rows:[['úszik','úszó'],['fut','futó'],['sportol','sportoló'],['tanul','tanuló'],['olvas','olvasó']]}}),
    MKG('ga3_szorend','Szórend: igekötős mondatok (Ismétlés)','Ordre des mots avec préverbe (rappel)','Neutre : préverbe + verbe. Négation / focus : verbe + préverbe.',{
      examples:[['Megnéztem a filmet.','J’ai vu le film.'],['Nem néztem meg a filmet.','Je n’ai pas vu le film.']]})
  ],
  exercises:[
    MKX('ea3_gyakori','ga3_gyakori','1. Gyakoriság','naponta, hetente…',MKB('choice','Choisis',[MKC('« chaque année »','évente','havonta','hetente'),MKC('« deux fois par semaine »','hetente kétszer','naponta kétszer','évente kétszer')])),
    MKX('ea3_asas','ga3_asas','2. -ás/-és','Noms d’action',MKB('fill','Nom d’action',[MKF('kirándul → ','','kirándulás',''),MKF('főz → ','','főzés',''),MKF('fut → ','','futás',''),MKF('utazik → ','','utazás','')])),
    MKX('ea3_hat','ga3_hat','3. -hat/-het','Pouvoir',MKB('fill','Conjugue',[MKF('Mi moziba ','.  (megy)','mehetünk',''),MKF('Ő ma itt ','.  (marad)','maradhat',''),MKF('Én holnap ','.  (jön)','jöhetek',''),MKF('Ti is ','.  (tanul)','tanulhattok','')])),
    MKX('ea3_ni','ga3_ni','4. A főnévi igenév','Infinitif',MKB('fill','Infinitif',[MKF('Szeretek ','.  (ír)','írni',''),MKF('Tudok ','.  (énekel)','énekelni',''),MKF('Jó ','.  (fut)','futni',''),MKF('Nem akarok ','.  (főz)','főzni','')])),
    MKX('ea3_lak','ga3_lak','5. -lak/-lek','Moi → toi',MKB('fill','Complète',[MKF('Meghív','  a koncertre.','lak',''),MKF('Hív','  holnap.','lak',''),MKF('Lát','  .','lak','')])),
    MKX('ea3_igekoto','ga3_igekoto','6. Igekötők: befejezettség','Perfectif',MKB('fill','Ajoute le préverbe',[MKF('','néztem a filmet. (je l’ai vu en entier)','Meg',''),MKF('','olvastam a könyvet. (lu jusqu’au bout)','El',''),MKF('','tanultam a szavakat. (appris à fond)','Meg','')])),
    MKX('ea3_azert','ga3_azert','7. azért, ezért','Cause et conséquence',MKB('choice','Choisis',[MKC('« Je fais du sport parce que j’aime ça. »','Azért sportolok, mert szeretem.','Ezért sportolok, mert szeretem.','Azért sportolok, ezért szeretem.')])),
    MKX('ea3_nevmas','ga3_nevmas','8. Személyes névmás alakjai','benne, róla…',MKB('fill','Complète',[MKF('Beszélek ','  . (avec eux)','velük',''),MKF('Gondolok ','  . (à eux)','rájuk',''),MKF('Mesélek ','  . (d’eux)','róluk',''),MKF('Megyek ','  . (chez lui)','hozzá','')])),
    MKX('ea3_o','ga3_o','9. -ó/-ő','Noms d’agent',MKB('fill','Nom de personne',[MKF('úszik → ','','úszó',''),MKF('olvas → ','','olvasó',''),MKF('sportol → ','','sportoló',''),MKF('tanul → ','','tanuló','')])),
    MKX('ea3_szorend','ga3_szorend','10. Szórend','Préverbes',MKB('order','Remets en ordre',[MKO('J’ai vu le film.','Megnéztem a filmet.'),MKO('Je n’ai pas vu le film.','Nem néztem meg a filmet.')]))
  ]
});
