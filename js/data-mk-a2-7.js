/* MagyarOK A2 — chapitre 7 : Közel és távol (Près et loin). Contenu original. */
MKM.use('A2', 7, 'Közel és távol', 'Près et loin');

MK_MODULES.push(
MKM('mkb7_1','A2·7.1','A szállodában — À l’hôtel',{
  rules:[
    MKR('Réserver une chambre','« Szeretnék egy kétágyas szobát foglalni három éjszakára. » (Je voudrais réserver une chambre double pour trois nuits.) « Van szabad szobájuk? » « Reggelit is tartalmaz az ár? » (Le petit-déjeuner est-il inclus ?)',{examples:[['Van szabad szobájuk?','Avez-vous une chambre libre ?'],['Hány éjszakára szeretné?','Pour combien de nuits ?'],['A reggeli benne van az árban.','Le petit-déjeuner est inclus dans le prix.']]}),
    MKR('Les compléments de durée','« három éjszakára » (pour trois nuits) : -ra/-re pour la durée prévue ; « három napig » (pendant trois jours) : -ig pour la durée écoulée.',{table:[['három éjszakára','pour trois nuits (prévu)'],['három napig','pendant trois jours'],['jövő hétre','pour la semaine prochaine']]})
  ],
  vocab:[['szálloda','hôtel',''],['szoba','chambre',''],['egyágyas','simple',''],['kétágyas','double',''],['foglal','réserver',''],['foglalás','réservation',''],['érkezik','arriver',''],['távozik','partir',''],['kulcs','clé',''],['recepció','réception',''],['reggeli','petit-déjeuner',''],['éjszaka','nuit',''],['számla','facture',''],['lift','ascenseur',''],['wifi','wifi','']],
  exercises:[MKB('choice','Choisis',[MKC('« pour trois nuits »','három éjszakára','három éjszakáig','három éjszakában'),MKC('« une chambre double »','kétágyas szoba','egyágyas szoba','kétszobás szoba')]),MKB('translate','Traduis',[MKT('Avez-vous une chambre libre ?','Van szabad szobájuk?'),MKT('Le petit-déjeuner est inclus.','A reggeli benne van az árban.')])]
}),
MKM('mkb7_2','A2·7.2','Utazási szokások — Habitudes de voyage',{
  rules:[
    MKR('Les habitudes : szokott','« szokott » + infinitif exprime l’habitude : szoktam, szoktál, szokott, szoktunk, szoktatok, szoktak. « Nyáron általában a tengerhez szoktunk utazni. » (L’été nous avons l’habitude d’aller à la mer.) Négation : « Nem szoktam repülni. »',{table:[['én szoktam','j’ai l’habitude'],['te szoktál','tu as l’habitude'],['ő szokott','il a l’habitude'],['mi szoktunk','nous avons l’habitude'],['ti szoktatok','vous avez l’habitude'],['ők szoktak','ils ont l’habitude']]}),
    MKR('Où ? Où vers ? D’où ? — itt / ide / innen','Les adverbes de lieu font aussi trois formes : itt – ide – innen (ici), ott – oda – onnan (là), hol – hova – honnan (où), otthon – haza – otthonról (maison).',{table:[['itt · ide · innen','ici'],['ott · oda · onnan','là-bas'],['hol · hova · honnan','où'],['otthon · haza · otthonról','à la maison'],['valahol · valahova · valahonnan','quelque part'],['sehol · sehova · sehonnan','nulle part']]})
  ],
  vocab:[['utazás','voyage',''],['úticél','destination',''],['jegy','billet',''],['repülőjegy','billet d’avion',''],['vonat','train',''],['repülő','avion',''],['autóbusz','autocar',''],['bőrönd','valise',''],['poggyász','bagages',''],['szabadság','congé',''],['általában','en général',''],['szokott','avoir l’habitude de',''],['rendszeresen','régulièrement',''],['ritkán','rarement','']],
  exercises:[MKB('fill','Habitude',[MKF('Én gyakran ','  utazni. (szoktam)','szoktam',''),MKF('Ő nyáron ','  nyaralni.','szokott',''),MKF('Mi hétvégén ','  kirándulni.','szoktunk',''),MKF('Ők nem ','  repülni.','szoktak','')]),MKB('fill','Adverbes de lieu',[MKF('Hova mész? — ','  (là-bas)','oda',''),MKF('Honnan jössz? — ','  (d’ici)','innen',''),MKF('Hol vagy? — ','  (à la maison)','otthon','')])]
}),
MKM('mkb7_3','A2·7.3','Udvarias kérdések — Poser poliment une question',{
  rules:[
    MKR('Questions polies','On adoucit une question avec le conditionnel : « Meg tudná mondani, hol van a posta? » (Pourriez-vous me dire où est la poste ?), « Elmondaná, hogyan jutok el az állomásra? », « Nem tudja véletlenül, hány óra van? » (Vous ne sauriez pas par hasard quelle heure il est ?).',{examples:[['Meg tudná mondani, hol van a posta?','Pourriez-vous me dire où est la poste ?'],['Tudna segíteni?','Pourriez-vous m’aider ?'],['Nem tudja véletlenül, mikor indul a vonat?','Vous ne savez pas par hasard quand part le train ?']]}),
    MKR('Question négative, réponse positive','Quand on répond « oui » à une question négative, on dit « de » (ou « dehogynem », « de igen »). « Nem jössz? — De, megyek! » (Tu ne viens pas ? — Si, j’arrive !) Pour confirmer le non : « Nem, nem megyek. »',{table:[['Nem jössz? — De, megyek.','Tu ne viens pas ? — Si, je viens.'],['Nem vagy fáradt? — Dehogynem!','Tu n’es pas fatigué ? — Mais si !'],['Nem szereted? — Nem, nem szeretem.','Tu n’aimes pas ? — Non, je n’aime pas.']]})
  ],
  vocab:[['véletlenül','par hasard',''],['segít','aider',''],['megmond','dire (indiquer)',''],['elmond','expliquer',''],['dehogynem','mais si !',''],['de igen','mais si',''],['bocsánat','pardon',''],['elnézést','excusez-moi',''],['kérem','s’il vous plaît','']],
  exercises:[MKB('choice','Choisis',[MKC('« Pourriez-vous m’aider ? »','Tudna segíteni?','Tud segíteni?','Segítene tud?'),MKC('Nem jössz? → « Si, je viens. »','De, megyek.','Nem, megyek.','Igen, nem megyek.')])]
}),
MKM('mkb7_4','A2·7.4','Javaslatok közös programra — Proposer une sortie',{
  rules:[
    MKR('Proposer avec -hat + conditionnel','« Elmehetnénk moziba. » (On pourrait aller au cinéma.) « Kirándulhatnánk a hétvégén. » Forme : radical + -hat/-het + -nánk/-nénk. Variante : « Mi lenne, ha elmennénk? » (Et si nous y allions ?).',{table:[['elmehetnénk','nous pourrions aller'],['kirándulhatnánk','nous pourrions faire une randonnée'],['találkozhatnánk','nous pourrions nous voir'],['Mi lenne, ha…?','Et si… ?']]})
  ],
  vocab:[['elmehetnénk','nous pourrions aller',''],['megnézhetnénk','nous pourrions voir',''],['találkozhatnánk','nous pourrions nous retrouver',''],['mi lenne, ha','et si',''],['javaslat','proposition',''],['közös','commun, ensemble','']],
  exercises:[MKB('fill','Proposition',[MKF('Mi moziba ','.  (megy)','mehetnénk',''),MKF('Mi a hétvégén ','.  (kirándul)','kirándulhatnánk',''),MKF('Mi ','  a barátainkkal. (találkozik)','találkozhatnánk','')])]
})
);

MK_CHAPTERS.push({
  id:'a2-7', level:'A2', num:7, hu:'Közel és távol', fr:'Près et loin',
  intro:'Voyager, réserver à l’hôtel, parler de ses habitudes de voyage, poser des questions polies, faire des propositions. Grammaire : relatifs amelyik/ahol/ahova, questions polies, propositions au conditionnel, szokott, système des compléments de lieu, question négative / réponse positive.',
  modules:['mkb7_1','mkb7_2','mkb7_3','mkb7_4'],
  grammar:[
    MKG('ga7_amelyik','A vonatkozó névmás: amelyik, ahol, ahova','Relatifs : amelyik, ahol, ahova','amelyik = lequel ; ahol = où ; ahova = vers où ; ahonnan = d’où.',{
      examples:[['A város, ahol lakom, kicsi.','La ville où j’habite est petite.'],['A szálloda, ahova mentünk, szép volt.','L’hôtel où nous sommes allés était beau.'],['A hely, ahonnan jövök, messze van.','L’endroit d’où je viens est loin.']]}),
    MKG('ga7_udvarias','Udvarias kérdések','Questions polies','Conditionnel + forme polie : Meg tudná mondani…? Tudna segíteni? Nem tudja véletlenül…?',{
      examples:[['Meg tudná mondani, hol a posta?','Pourriez-vous me dire où est la poste ?']]}),
    MKG('ga7_javaslat','Javaslatok közös programra: elmehetnénk, kirándulhatnánk','Propositions','-hat/-het + -nánk/-nénk : nous pourrions…',{
      grid:{head:['Verbe','Proposition'],rows:[['megy','elmehetnénk'],['kirándul','kirándulhatnánk'],['néz','megnézhetnénk'],['találkozik','találkozhatnánk']]}}),
    MKG('ga7_szokott','Segédigék: szokott','Habitude : szokott','szokott + infinitif. Conjugaison régulière : szoktam, szoktál, szokott, szoktunk, szoktatok, szoktak.',{
      examples:[['Reggel kávét szoktam inni.','Le matin j’ai l’habitude de boire du café.'],['Nem szoktam későn feküdni.','Je n’ai pas l’habitude de me coucher tard.']]}),
    MKG('ga7_helyhat','A helyhatározók rendszere','Le système des compléments de lieu','Récapitulatif des trois séries selon le type de lieu.',{
      grid:{head:['Type','Hol?','Hova?','Honnan?'],rows:[['intérieur','-ban/-ben','-ba/-be','-ból/-ből'],['surface / institution','-on/-en/-ön','-ra/-re','-ról/-ről'],['personne','-nál/-nél','-hoz/-hez/-höz','-tól/-től'],['adverbes','itt, ott, hol','ide, oda, hova','innen, onnan, honnan']]}}),
    MKG('ga7_de','Negatív kérdés, pozitív válasz: de, dehogynem, de igen','Question négative, réponse positive','Pour contredire une question négative : « de », « dehogynem », « de igen ».',{
      examples:[['Nem szereted? — De, szeretem!','Tu n’aimes pas ? — Si, j’aime !'],['Nem vagy éhes? — Dehogynem!','Tu n’as pas faim ? — Mais si !']]}),
    MKG('ga7_szorend','Szórend: igekötős igék','Ordre des mots : verbes à préverbe','Neutre : préverbe + verbe. Focus / négation : préverbe après le verbe.',{
      examples:[['Elmegyek moziba.','Je vais au cinéma.'],['Nem megyek el.','Je ne vais pas y aller.']]})
  ],
  exercises:[
    MKX('ea7_amelyik','ga7_amelyik','1. ahol, ahova, ahonnan','Relatifs',MKB('fill','Complète',[MKF('A város, ','  lakom, szép. (où)','ahol',''),MKF('A hely, ','  megyek, messze van. (vers où)','ahova',''),MKF('A város, ','  jövök, nagy. (d’où)','ahonnan','')])),
    MKX('ea7_udvarias','ga7_udvarias','2. Udvarias kérdések','Politesse',MKB('choice','Choisis',[MKC('« Pourriez-vous me dire où est la poste ? »','Meg tudná mondani, hol van a posta?','Megmondod, hol van a posta?','Megmond hol a posta?')])),
    MKX('ea7_javaslat','ga7_javaslat','3. Javaslatok','On pourrait…',MKB('fill','Complète',[MKF('Mi elmehetnénk ','.  (cinéma)','moziba',''),MKF('Mi moziba ','.  (mehet)','mehetnénk',''),MKF('Mi ','  a parkban. (sétál)','sétálhatnánk','')])),
    MKX('ea7_szokott','ga7_szokott','4. szokott','Habitude',MKB('fill','Conjugue',[MKF('Én reggel kávét ','  inni.','szoktam',''),MKF('Te mit ','  csinálni?','szoktál',''),MKF('Ő este ','  olvasni.','szokott',''),MKF('Ők hétvégén ','  kirándulni.','szoktak','')])),
    MKX('ea7_helyhat','ga7_helyhat','5. A helyhatározók rendszere','Hol? Hova? Honnan?',MKB('fill','Complète',[MKF('Péter','  vagyok. (chez)','nél',''),MKF('Péter','  megyek. (vers)','hez',''),MKF('Péter','  jövök. (de chez)','től',''),MKF('Budapest','  lakom.','en',''),MKF('Budapest','  megyek.','re','')])),
    MKX('ea7_de','ga7_de','6. de, dehogynem','Réponse positive',MKB('choice','Choisis',[MKC('Nem vagy éhes? — « Si, j’ai faim. »','De, éhes vagyok.','Nem, éhes vagyok.','Igen, nem vagyok éhes.'),MKC('Nem szereted? — « Non, je n’aime pas. »','Nem, nem szeretem.','De, nem szeretem.','De, szeretem.')])),
    MKX('ea7_szorend','ga7_szorend','7. Szórend','Préverbes',MKB('order','Remets en ordre',[MKO('Je vais au cinéma.','Elmegyek moziba.'),MKO('Je n’y vais pas.','Nem megyek el.')]))
  ]
});
