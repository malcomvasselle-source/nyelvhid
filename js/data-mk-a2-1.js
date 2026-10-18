/* MagyarOK A2 — chapitre 1 : Magunkról és másokról (Parler de soi et des autres). Contenu original. */
MKM.use('A2', 1, 'Magunkról és másokról', 'Parler de soi et des autres');

MK_MODULES.push(
MKM('mkb1_1','A2·1.1','Hol dolgozol? Mivel foglalkozol? — Où travailles-tu ?',{
  rules:[
    MKR('Où travaille-t-on ? -ban / -nál / -on','Pour dire où l’on travaille ou étudie : « -ban/-ben » (dans un lieu fermé : étteremben, bankban), « -nál/-nél » (chez une entreprise ou une personne : egy cégnél), « -on/-en/-ön » (lieu de type institution/surface : a bíróságon, a városházán). Question : « Hol dolgozol? ».',{table:[['egy bankban','dans une banque'],['egy cégnél','dans une entreprise'],['egy étteremben','dans un restaurant'],['a bíróságon','au tribunal'],['a városházán','à la mairie'],['egy humanitárius szervezetnél','dans une ONG']]}),
    MKR('Parler de son activité','« Mivel foglalkozol? » (Que fais-tu comme activité ?) — « Grafikussal dolgozom. » Le verbe « foglalkozik » demande -val/-vel : « informatikával foglalkozom » (je m’occupe d’informatique).',{examples:[['Mivel foglalkozol? — Informatikával.','Que fais-tu ? — De l’informatique.'],['Egy cégnél dolgozom.','Je travaille dans une entreprise.'],['A városházán dolgozik a nővérem.','Ma sœur travaille à la mairie.']]})
  ],
  vocab:[['cég','entreprise',''],['szervezet','organisation',''],['nagykövetség','ambassade',''],['bíróság','tribunal',''],['városháza','mairie',''],['ügyvéd','avocat',''],['iroda','bureau / cabinet',''],['foglalkozik','s’occuper de, exercer',''],['állás','poste, emploi',''],['pályakezdő','jeune diplômé',''],['vállalkozó','entrepreneur',''],['főiskola','école supérieure',''],['szakma','métier, profession','']],
  exercises:[MKB('fill','Complète',[MKF('Egy bank','  dolgozom.','ban',''),MKF('Egy cég','  dolgozik.','nél',''),MKF('A bíróság','  van.','on',''),MKF('A városház','  dolgozik.','án','')]),MKB('choice','Choisis',[MKC('« Je travaille dans une ONG. »','Egy szervezetnél dolgozom.','Egy szervezetben dolgozom.','Egy szervezeten dolgozom.')])]
}),
MKM('mkb1_2','A2·1.2','Téged mi érdekel? — Qu’est-ce qui t’intéresse ?',{
  rules:[
    MKR('Les centres d’intérêt','« Mi érdekel? » (Qu’est-ce qui t’intéresse ?) — « Engem érdekel a zene. » (La musique m’intéresse.) Forme polie : « Önt mi érdekli? ». Autre construction : « érdeklődöm a történelem iránt » (je m’intéresse à l’histoire).',{examples:[['Téged mi érdekel?','Qu’est-ce qui t’intéresse ?'],['Engem a sport érdekel.','C’est le sport qui m’intéresse.'],['Érdeklődöm a művészet iránt.','Je m’intéresse à l’art.']]})
  ],
  vocab:[['érdekel','intéresser',''],['érdeklődik','s’intéresser à',''],['iránt','pour, envers',''],['történelem','histoire',''],['művészet','art',''],['zene','musique',''],['sport','sport',''],['utazás','voyage',''],['természet','nature',''],['tudomány','science',''],['hobbi','loisir','']],
  exercises:[MKB('fill','Complète',[MKF('Engem a zene ','.','érdekel',''),MKF('Téged mi ','?','érdekel',''),MKF('Érdeklődöm a művészet ','.','iránt','')])]
}),
MKM('mkb1_3','A2·1.3','Barátok, családtagok, tulajdonságok — Amis, famille, traits',{
  rules:[
    MKR('Décrire avec -s et -ú/-ű','On peut former des adjectifs descriptifs : -s (szakállas = barbu, szemüveges = à lunettes, inges = en chemise), -ú/-ű (hosszú hajú = aux cheveux longs, kék szemű = aux yeux bleus).',{table:[['szakáll → szakállas','barbu'],['szemüveg → szemüveges','à lunettes'],['ing → inges','en chemise'],['haj → hajú (hosszú hajú nő)','aux cheveux longs'],['szem → szemű (kék szemű lány)','aux yeux bleus']]}),
    MKR('Plusieurs possessions : -i-','Pour plusieurs choses possédées, on insère -i- : barátom → barátaim (mes amis), testvérem → testvéreim, kollégám → kollégáim.',{table:[['barátaim · barátaid · barátai','mes · tes · ses amis'],['barátaink · barátaitok · barátaik','nos · vos · leurs amis'],['testvéreim · testvéreid · testvérei','mes · tes · ses frères et sœurs']]})
  ],
  vocab:[['szakállas','barbu',''],['szemüveges','à lunettes',''],['barna szemű','aux yeux marron',''],['szőke','blond',''],['barna hajú','aux cheveux bruns',''],['magas','grand',''],['alacsony','petit',''],['kedves','gentil',''],['vicces','drôle',''],['komoly','sérieux',''],['nyugodt','calme',''],['szorgalmas','travailleur',''],['barát','ami',''],['barátnő','amie / petite amie',''],['rokon','parent (famille)','']],
  exercises:[MKB('fill','Pluriel du possédé',[MKF('A barátom → a ','','barátaim',''),MKF('A testvéred → a ','','testvéreid',''),MKF('A kollégánk → a ','','kollégáink','')]),MKB('choice','Choisis',[MKC('« une fille aux yeux bleus »','kék szemű lány','kék szemes lány','kékszem lány'),MKC('« un garçon à lunettes »','szemüveges fiú','szemüvegű fiú','szemüveg fiú')])]
})
);

MK_CHAPTERS.push({
  id:'a2-1', level:'A2', num:1, hu:'Magunkról és másokról', fr:'Parler de soi et des autres',
  intro:'Dire où l’on travaille, ce qui nous intéresse, décrire ses proches et exprimer la possession. Grammaire : suffixes de lieu (rappel), système de conjugaison, plusieurs possessions (-i), adjectifs en -s/-ú/-ű, possessif absolu (Lizáé, az enyém), verbes à complément, ordre des mots.',
  modules:['mkb1_1','mkb1_2','mkb1_3'],
  grammar:[
    MKG('ga1_hely','A helyhatározó ragjai: Hol tanulsz? Hol dolgozol?','Suffixes de lieu : où étudies-tu ? travailles-tu ?','-ban/-ben pour l’intérieur, -nál/-nél pour entreprises et personnes, -on/-en/-ön pour institutions et surfaces.',{
      grid:{head:['Suffixe','Exemple'],rows:[['-ban/-ben','egy bankban, egy étteremben'],['-nál/-nél','egy cégnél, Péternél'],['-on/-en/-ön','a bíróságon, a városházán, az egyetemen']]}}),
    MKG('ga1_ige','Az igeragozás rendszere (Ismétlés)','Le système de conjugaison (rappel)','Le choix de la forme dépend : de l’objet (indéfini/défini), du type de verbe (régulier, -ik, -s/-sz/-z, irrégulier) et de l’harmonie vocalique.',{
      grid:{head:['Personne','visz','tesz','vesz'],rows:[['én','viszek','teszek','veszek'],['te','viszel','teszel','veszel'],['ő','visz','tesz','vesz'],['mi','viszünk','teszünk','veszünk'],['ti','visztek','tesztek','vesztek'],['ők','visznek','tesznek','vesznek']]},
      notes:['Défini : viszem, teszem, veszem.']}),
    MKG('ga1_tobb','Több birtok: -i','Plusieurs possessions','-i- s’insère entre le radical et la marque de personne : barátom → barátaim.',{
      grid:{head:['Personne','1 chose','plusieurs'],rows:[['én','barátom','barátaim'],['te','barátod','barátaid'],['ő','barátja','barátai'],['mi','barátunk','barátaink'],['ti','barátotok','barátaitok'],['ők','barátjuk','barátaik']]}}),
    MKG('ga1_mnk','Melléknévképzők: kék szemű lány, piros inges fiú','Adjectifs dérivés','-s (szakállas), -ú/-ű (hajú, szemű). On les combine : « barna hajú, kék szemű lány ».',{
      grid:{head:['Nom','Adjectif'],rows:[['szakáll','szakállas'],['szemüveg','szemüveges'],['ing','inges'],['haj','hajú'],['szem','szemű']]}}),
    MKG('ga1_enyem','Birtoklás kifejezése: Lizáé, az enyém, a tied','Possessif absolu','« -é » après un nom : Lizáé (celui de Liza). Pronoms : az enyém, a tied, az övé, a miénk, a tiétek, az övék.',{
      grid:{head:['Personne','Forme'],rows:[['én','az enyém'],['te','a tied'],['ő / Ön','az övé'],['mi','a miénk'],['ti','a tiétek'],['ők','az övék']]},
      examples:[['Kié ez a telefon? — Az enyém.','À qui est ce téléphone ? — C’est le mien.'],['Ez Lizáé.','C’est à Liza.']]}),
    MKG('ga1_vonzat','Vonzatos igék','Verbes à complément','Certains verbes demandent un suffixe précis sur leur complément.',{
      grid:{head:['Verbe','Complément'],rows:[['foglalkozik','valamivel'],['találkozik','valakivel'],['érdeklődik','valami iránt'],['segít','valakinek'],['gondol','valakire'],['hisz','valamiben']]}}),
    MKG('ga1_szorend','Szórend: a hangsúlyszabály (Ismétlés)','Ordre des mots : la règle du focus','L’élément focalisé précède le verbe. Le mot interrogatif aussi. Dans les phrases neutres, le sujet vient en tête.',{
      examples:[['Mit csinálsz? — Tanulok.','Que fais-tu ? — J’étudie.'],['Ki dolgozik itt? — Anna dolgozik itt.','Qui travaille ici ? — C’est Anna.']]})
  ],
  exercises:[
    MKX('ea1_hely','ga1_hely','1. Hol dolgozol?','Suffixes de lieu',MKB('fill','Complète',[MKF('Egy cég','  dolgozom.','nél',''),MKF('Az egyetem','  tanulok.','en',''),MKF('Egy étterem','  dolgozik.','ben',''),MKF('A városház','  van.','án','')])),
    MKX('ea1_ige','ga1_ige','2. Igeragozás','Récapitulatif',MKB('fill','Conjugue',[MKF('Én kenyeret ','.  (vesz)','veszek',''),MKF('Te a táskát ','.  (visz)','viszed',''),MKF('Ők sokat ','.  (tesz)','tesznek',''),MKF('Mi a levelet ','.  (visz)','visszük','')])),
    MKX('ea1_tobb','ga1_tobb','3. Több birtok','-i-',MKB('fill','Pluriel du possédé',[MKF('a barátom → a ','','barátaim',''),MKF('a kollégád → a ','','kollégáid',''),MKF('a testvére → a ','','testvérei',''),MKF('a barátunk → a ','','barátaink','')])),
    MKX('ea1_mnk','ga1_mnk','4. Melléknévképzők','-s, -ú/-ű',MKB('choice','Choisis',[MKC('« une fille aux cheveux longs »','hosszú hajú lány','hosszú hajas lány','hosszú haj lány'),MKC('« un homme barbu »','szakállas férfi','szakállú férfi','szakáll férfi')])),
    MKX('ea1_enyem','ga1_enyem','5. Az enyém, a tied','Possessif absolu',MKB('fill','Complète',[MKF('Kié ez? — Ez az ','.  (le mien)','enyém',''),MKF('A telefon a ','.  (le tien)','tied',''),MKF('Ez az ','.  (le sien)','övé','')])),
    MKX('ea1_vonzat','ga1_vonzat','6. Vonzatos igék','Verbes + complément',MKB('choice','Choisis',[MKC('« Je m’occupe d’informatique. »','Informatikával foglalkozom.','Informatikát foglalkozom.','Informatikában foglalkozom.'),MKC('« Je rencontre Anna. »','Annával találkozom.','Annát találkozom.','Annának találkozom.')])),
    MKX('ea1_szorend','ga1_szorend','7. Szórend','Focus',MKB('order','Remets en ordre',[MKO('Qui travaille ici ? C’est Anna.','Anna dolgozik itt.'),MKO('Que fais-tu ?','Mit csinálsz?')]))
  ]
});
