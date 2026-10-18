/* MagyarOK A2 — chapitre 4 : Hétvégék és hétköznapok (Week-ends et jours de semaine). Contenu original. */
MKM.use('A2', 4, 'Hétvégék és hétköznapok', 'Week-ends et jours de semaine');

MK_MODULES.push(
MKM('mkb4_1','A2·4.1','Milyen volt a hétvégéd? — Comment était ton week-end ?',{
  rules:[
    MKR('Le passé : formation','Passé = radical + -t- + terminaisons (-tam/-tem, -tál/-tél, 3e pers. -t ou -ott/-ett/-ött, -tunk/-tünk, -tatok/-tetek, -tak/-tek). À la 3e personne du singulier : -t après les radicaux en l, r, n, ny, m, j, ly (kért, várt, tanult, írt) ; -ott/-ett/-ött après les autres (olvasott, nézett, főzött, kapott).',{table:[['tanul → tanult','il a étudié'],['kér → kért','il a demandé'],['ír → írt','il a écrit'],['olvas → olvasott','il a lu'],['néz → nézett','il a regardé'],['dolgozik → dolgozott','il a travaillé']]}),
    MKR('Raconter son week-end','« Milyen volt a hétvégéd? » — « Nagyon jó volt! Szombaton kirándultunk, vasárnap pihentem. » Mots de temps : szombaton, vasárnap délután, tegnap, múlt héten, tavaly.',{examples:[['Szombaton kirándultunk.','Samedi nous avons fait une randonnée.'],['Vasárnap otthon pihentem.','Dimanche je me suis reposé à la maison.'],['Mit csináltál a hétvégén?','Qu’as-tu fait ce week-end ?']]})
  ],
  vocab:[['hétvége','week-end',''],['múlt hét','la semaine dernière',''],['tavaly','l’an dernier',''],['kirándul','faire une randonnée',''],['pihen','se reposer',''],['alszik','dormir',''],['vásárol','faire des courses',''],['találkozik','se retrouver',''],['sütkérezik','se prélasser au soleil',''],['barátok','amis',''],['közös','commun, ensemble',''],['élmény','expérience, souvenir','']],
  exercises:[MKB('fill','Passé (3e personne)',[MKF('Ő tegnap sokat ','.  (olvas)','olvasott',''),MKF('Anna levelet ','.  (ír)','írt',''),MKF('Péter filmet ','.  (néz)','nézett',''),MKF('Ő sokat ','.  (tanul)','tanult','')]),MKB('fill','Passé (1re personne)',[MKF('Én tegnap ','.  (pihen)','pihentem',''),MKF('Mi szombaton ','.  (kirándul)','kirándultunk',''),MKF('Én levelet ','.  (ír)','írtam','')])]
}),
MKM('mkb4_2','A2·4.2','Hétvége a Bükkben — Un week-end dans les monts Bükk',{
  rules:[
    MKR('Verbes irréguliers au passé','Quelques verbes ont un passé irrégulier à mémoriser : megy → mentem, ment ; jön → jöttem, jött ; eszik → ettem, evett ; iszik → ittam, ivott ; van → voltam, volt ; vesz → vettem, vett ; tesz → tettem, tett ; visz → vittem, vitt ; lesz → lettem, lett.',{table:[['megy','mentem · mentél · ment · mentünk · mentetek · mentek'],['jön','jöttem · jöttél · jött · jöttünk · jöttetek · jöttek'],['eszik','ettem · ettél · evett · ettünk · ettetek · ettek'],['iszik','ittam · ittál · ivott · ittunk · ittatok · ittak'],['van','voltam · voltál · volt · voltunk · voltatok · voltak'],['vesz','vettem · vettél · vett · vettünk · vettetek · vettek']]}),
    MKR('Raconter une excursion','On enchaîne : « Reggel busszal mentünk a hegyekbe. Sokat gyalogoltunk, aztán a menedékházban ebédeltünk. Este fáradtan érkeztünk haza. »',{examples:[['Sokat gyalogoltunk.','Nous avons beaucoup marché.'],['A menedékházban ebédeltünk.','Nous avons déjeuné au refuge.'],['Este érkeztünk haza.','Nous sommes rentrés le soir.']]})
  ],
  vocab:[['hegy','montagne',''],['erdő','forêt',''],['út','chemin / route',''],['gyalogol','marcher',''],['menedékház','refuge',''],['túra','randonnée',''],['térkép','carte',''],['kilátás','vue',''],['fárad','se fatiguer',''],['fáradt','fatigué',''],['érkezik','arriver',''],['indul','partir',''],['haza','vers la maison',''],['szép','beau','']],
  exercises:[MKB('fill','Passé irrégulier',[MKF('Mi busszal ','.  (megy)','mentünk',''),MKF('Ő is ','.  (jön)','jött',''),MKF('Én sok vizet ','.  (iszik)','ittam',''),MKF('Ők hol ','?  (van)','voltak',''),MKF('Te mit ','?  (eszik)','ettél','')])]
}),
MKM('mkb4_3','A2·4.3','Hétvége a reptéren, Tihanyban — Voyager le week-end',{
  rules:[
    MKR('Rapporter une question','Pour rapporter une question, on utilise « hogy » (ou directement le mot interrogatif) : « Megkérdezte, mikor jövök. » (Il a demandé quand je venais.) Question oui/non : on ajoute -e au verbe : « Megkérdezte, hogy ráérek-e. » (Il a demandé si j’étais libre.)',{examples:[['Megkérdezte, hol vagyok.','Il a demandé où j’étais.'],['Megkérdezte, hogy van-e időm.','Il a demandé si j’avais du temps.'],['Nem tudom, mikor indul a vonat.','Je ne sais pas quand part le train.']]}),
    MKR('Rapporter une réponse','« Azt mondta, hogy fáradt. » (Il a dit qu’il était fatigué.) « Azt válaszolta, hogy nem ér rá. » (Il a répondu qu’il n’était pas libre.) « azt » annonce la proposition introduite par « hogy ».',{examples:[['Azt mondta, hogy Tihanyban volt.','Il a dit qu’il était à Tihany.'],['Azt hiszem, hogy késik a gép.','Je crois que l’avion a du retard.']]})
  ],
  vocab:[['repülőtér','aéroport',''],['gép','avion / machine',''],['járat','vol / ligne',''],['késik','être en retard',''],['csomag','bagage, colis',''],['útlevél','passeport',''],['beszáll','embarquer',''],['Balaton','lac Balaton',''],['apátság','abbaye',''],['megkérdez','demander (une question)',''],['válaszol','répondre',''],['mond','dire',''],['hisz','croire','']],
  exercises:[MKB('fill','Complète',[MKF('Megkérdezte, ','  jövök. (quand)','mikor',''),MKF('Azt mondta, ','  fáradt.','hogy',''),MKF('Megkérdezte, hogy van-','  időm. (si)','e','van-e')]),MKB('choice','Choisis',[MKC('« Il a dit qu’il était fatigué. »','Azt mondta, hogy fáradt.','Mondta, hogy fáradt volt.','Azt mondta fáradt.')])]
}),
MKM('mkb4_4','A2·4.4','Hétvége otthon — Un week-end à la maison',{
  rules:[
    MKR('Le passé avec objet défini','Quand l’objet est défini, on utilise les terminaisons définies : olvastam / olvastad / olvasta / olvastuk / olvastátok / olvasták. Exemples : « Elolvastam a levelet. » « Megnézték a filmet. »',{table:[['én','olvastam (a könyvet)'],['te','olvastad'],['ő','olvasta'],['mi','olvastuk'],['ti','olvastátok'],['ők','olvasták']]})
  ],
  vocab:[['takarít','faire le ménage',''],['mosogat','faire la vaisselle',''],['főz','cuisiner',''],['süt','cuire',''],['elolvas','lire en entier',''],['megnéz','regarder en entier',''],['felhív','appeler',''],['meglátogat','rendre visite',''],['rendbe tesz','mettre en ordre','']],
  exercises:[MKB('fill','Passé défini',[MKF('Én tegnap elolvastam a ','.  (könyv)','könyvet',''),MKF('Ő megnézte a ','.  (film)','filmet','')]),MKB('fill','Conjugue (défini)',[MKF('Te a levelet ','.  (olvas)','olvastad',''),MKF('Mi a filmet ','.  (néz)','néztük',''),MKF('Ők a vacsorát ','.  (főz)','főzték','')])]
})
);

MK_CHAPTERS.push({
  id:'a2-4', level:'A2', num:4, hu:'Hétvégék és hétköznapok', fr:'Week-ends et jours de semaine',
  intro:'Raconter son week-end au passé, rapporter des questions et des réponses. Grammaire : le passé complet (régulier, irrégulier, avec objet défini), questions indirectes avec -e, phrases rapportées avec « hogy ».',
  modules:['mkb4_1','mkb4_2','mkb4_3','mkb4_4'],
  grammar:[
    MKG('ga4_mult','A múlt idő','Le passé : formation','Radical + -t- + terminaisons. 3e pers. sg. : -t ou -ott/-ett/-ött.',{
      grid:{head:['Personne','tanul','néz','olvas'],rows:[['én','tanultam','néztem','olvastam'],['te','tanultál','néztél','olvastál'],['ő','tanult','nézett','olvasott'],['mi','tanultunk','néztünk','olvastunk'],['ti','tanultatok','néztetek','olvastatok'],['ők','tanultak','néztek','olvastak']]}}),
    MKG('ga4_mult_rendhagyo','A múlt idő: rendhagyó igék','Le passé : verbes irréguliers','Verbes à connaître par cœur.',{
      grid:{head:['Verbe','én','ő','mi'],rows:[['megy','mentem','ment','mentünk'],['jön','jöttem','jött','jöttünk'],['eszik','ettem','evett','ettünk'],['iszik','ittam','ivott','ittunk'],['van','voltam','volt','voltunk'],['vesz','vettem','vett','vettünk'],['tesz','tettem','tett','tettünk'],['visz','vittem','vitt','vittünk']]}}),
    MKG('ga4_mult_hat','A múlt idő: határozott ragozás','Le passé : conjugaison définie','Avec objet défini, les terminaisons changent aux personnes autres que « je ».',{
      grid:{head:['Personne','indéfini','défini'],rows:[['én','olvastam','olvastam'],['te','olvastál','olvastad'],['ő','olvasott','olvasta'],['mi','olvastunk','olvastuk'],['ti','olvastatok','olvastátok'],['ők','olvastak','olvasták']]}}),
    MKG('ga4_idezett','Idézett kérdések','Questions indirectes','Mot interrogatif sans « hogy » (Megkérdezte, mikor jövök) ; question oui/non : « hogy … -e » (Megkérdezte, hogy ráérek-e).',{
      examples:[['Megkérdezte, hol dolgozom.','Il a demandé où je travaille.'],['Megkérdezte, hogy dolgozom-e.','Il a demandé si je travaille.']]}),
    MKG('ga4_valasz','Válaszok és más idézett mondatok','Réponses et phrases rapportées','azt mondta, hogy… ; azt válaszolta, hogy… ; azt hiszem, hogy…. Le verbe de la subordonnée garde son temps.',{
      examples:[['Azt mondta, hogy nem ért rá.','Il a dit qu’il n’était pas libre.'],['Azt hiszem, hogy igaza van.','Je crois qu’il a raison.']]}),
    MKG('ga4_szorend','Szórend: vonzatos igék semleges (narratív) mondatokban 1.','Ordre des mots dans le récit','Dans une phrase narrative neutre, le verbe vient après le sujet ; les compléments suivent : « Anna tegnap moziba ment. »',{
      examples:[['Péter tegnap moziba ment.','Péter est allé au cinéma hier.'],['A gyerekek a parkban játszottak.','Les enfants ont joué dans le parc.']]})
  ],
  exercises:[
    MKX('ea4_mult','ga4_mult','1. A múlt idő','Passé régulier',MKB('fill','Conjugue au passé',[MKF('Én ','  tegnap. (tanul)','tanultam',''),MKF('Te ','  a filmet. (néz)','néztél',''),MKF('Ő ','  sokat. (olvas)','olvasott',''),MKF('Ők ','  . (dolgozik)','dolgoztak',''),MKF('Ti ','  . (főz)','főztetek',''),MKF('Mi ','  . (pihen)','pihentünk',''),MKF('Ő levelet ','  . (ír)','írt','')])),
    MKX('ea4_rendhagyo','ga4_mult_rendhagyo','2. Rendhagyó igék','Passé irrégulier',MKB('fill','Conjugue',[MKF('Én moziba ','.  (megy)','mentem',''),MKF('Te hol ','?  (van)','voltál',''),MKF('Ő sokat ','.  (iszik)','ivott',''),MKF('Mi pizzát ','.  (eszik)','ettünk',''),MKF('Ők kenyeret ','.  (vesz)','vettek',''),MKF('Ti is ','.  (jön)','jöttetek','')])),
    MKX('ea4_hat','ga4_mult_hat','3. Határozott ragozás múlt idő','Passé défini',MKB('fill','Conjugue (défini)',[MKF('Te a könyvet ','.  (olvas)','olvastad',''),MKF('Ő a filmet ','.  (néz)','nézte',''),MKF('Mi a levelet ','.  (ír)','írtuk',''),MKF('Ők az ebédet ','.  (főz)','főzték',''),MKF('Ti a házat ','.  (néz)','néztétek','')])),
    MKX('ea4_idezett','ga4_idezett','4. Idézett kérdések','Questions indirectes',MKB('choice','Choisis',[MKC('« Il a demandé quand je viens. »','Megkérdezte, mikor jövök.','Megkérdezte, mikor jövök-e.','Megkérdezte, hogy mikor-e jövök.'),MKC('« Il a demandé si j’ai du temps. »','Megkérdezte, hogy van-e időm.','Megkérdezte, hogy van időm.','Megkérdezte, hogy időm-e van.')])),
    MKX('ea4_valasz','ga4_valasz','5. Idézett mondatok','Phrases rapportées',MKB('order','Remets en ordre',[MKO('Il a dit qu’il était fatigué.','Azt mondta, hogy fáradt.'),MKO('Je crois qu’il a raison.','Azt hiszem, hogy igaza van.')])),
    MKX('ea4_szorend','ga4_szorend','6. Szórend','Récit',MKB('order','Remets en ordre',[MKO('Péter est allé au cinéma hier.','Péter tegnap moziba ment.'),MKO('Les enfants ont joué dans le parc.','A gyerekek a parkban játszottak.')]))
  ]
});
