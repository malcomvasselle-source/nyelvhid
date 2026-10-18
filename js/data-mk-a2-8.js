/* MagyarOK A2 — chapitre 8 : Fő az egészség! (La santé avant tout !). Contenu original. */
MKM.use('A2', 8, 'Fő az egészség!', 'La santé avant tout !');

MK_MODULES.push(
MKM('mkb8_1','A2·8.1','Fő az egészség! — Chez le médecin',{
  rules:[
    MKR('Dire où l’on a mal','« Fáj a fejem. » (J’ai mal à la tête.) Le verbe « fáj » s’accorde avec le nom de la partie du corps, qui prend le possessif : fáj a fejem, fáj a hasam, fáj a torkom, fájnak a lábaim. Question du médecin : « Mi a panasza? » (Quel est votre problème ?), « Mióta fáj? » (Depuis quand avez-vous mal ?).',{examples:[['Fáj a fejem és a torkom.','J’ai mal à la tête et à la gorge.'],['Mióta fáj a hasa?','Depuis quand avez-vous mal au ventre ?'],['Három napja lázas vagyok.','Cela fait trois jours que j’ai de la fièvre.']]}),
    MKR('Les conseils du médecin','Le médecin utilise l’impératif : « Pihenjen! » (Reposez-vous), « Igyon sok vizet! » (Buvez beaucoup d’eau), « Vegye be ezt a gyógyszert naponta háromszor! » (Prenez ce médicament trois fois par jour).',{examples:[['Pihenjen sokat!','Reposez-vous beaucoup !'],['Igyon sok teát!','Buvez beaucoup de thé !'],['Ne dolgozzon egy hétig!','Ne travaillez pas pendant une semaine !']]})
  ],
  vocab:[['egészség','santé',''],['beteg','malade',''],['orvos','médecin',''],['rendelő','cabinet médical',''],['gyógyszer','médicament',''],['recept','ordonnance',''],['láz','fièvre',''],['lázas','qui a de la fièvre',''],['fáj','faire mal',''],['fej','tête',''],['has','ventre',''],['torok','gorge',''],['hát','dos',''],['láb','jambe / pied',''],['kéz','main',''],['köhög','tousser',''],['megfázik','attraper froid',''],['pihen','se reposer','']],
  exercises:[MKB('fill','Complète',[MKF('Fáj a ','.  (ma tête)','fejem',''),MKF('Fáj a ','.  (mon ventre)','hasam',''),MKF('Fáj a ','.  (ta gorge)','torkod',''),MKF('Fáj a ','.  (son dos)','háta','')]),MKB('choice','Choisis',[MKC('« Reposez-vous ! (poli) »','Pihenjen!','Pihenj!','Pihenni!')])]
}),
MKM('mkb8_2','A2·8.2','Szuperételek — Les « superaliments »',{
  rules:[
    MKR('Conseils alimentaires à l’impératif','« Egyél több zöldséget! » (Mange plus de légumes), « Igyál sok vizet! » (Bois beaucoup d’eau), « Ne egyél sok cukrot! » (Ne mange pas trop de sucre). Forme : verbe à l’impératif (te) ; négation : ne + impératif.',{table:[['eszik → egyél','mange !'],['iszik → igyál','bois !'],['vesz → vegyél','achète / prends !'],['tesz → tegyél','mets !'],['Ne egyél!','ne mange pas !']]})
  ],
  vocab:[['szuperétel','superaliment',''],['gyümölcs','fruit',''],['zöldség','légume',''],['bogyó','baie',''],['dió','noix',''],['méz','miel',''],['olaj','huile',''],['vitamin','vitamine',''],['rost','fibre',''],['fehérje','protéine',''],['egészséges','sain',''],['ártalmas','nocif',''],['cukor','sucre',''],['só','sel','']],
  exercises:[MKB('fill','Impératif (te)',[MKF('','  több zöldséget! (manger)','Egyél',''),MKF('','  sok vizet! (boire)','Igyál',''),MKF('Ne ','  sok cukrot! (manger)','egyél',''),MKF('','  gyümölcsöt! (acheter)','Vegyél','')])]
}),
MKM('mkb8_3','A2·8.3','Hungarikumok — Spécialités hongroises',{
  rules:[
    MKR('Parler de gastronomie','« A gulyásleves a leghíresebb magyar étel. » (Le goulasch est le plat hongrois le plus célèbre.) Les spécialités : paprika, gulyásleves, halászlé (soupe de poisson), lángos (beignet), pálinka (eau-de-vie), tokaji bor (vin de Tokaj).',{examples:[['Mit szoktak enni a magyarok?','Que mangent d’habitude les Hongrois ?'],['A halászlé halból és paprikából készül.','La halászlé est faite de poisson et de paprika.'],['Kóstold meg a lángost!','Goûte le lángos !']]})
  ],
  vocab:[['hungarikum','spécialité hongroise',''],['paprika','paprika / poivron',''],['gulyás','goulasch',''],['halászlé','soupe de poisson',''],['lángos','beignet frit',''],['pálinka','eau-de-vie de fruits',''],['tokaji','de Tokaj',''],['kóstol','goûter',''],['készül','être préparé',''],['hagyományos','traditionnel',''],['híres','célèbre','']],
  exercises:[MKB('choice','Choisis',[MKC('« Goûte le lángos ! »','Kóstold meg a lángost!','Kóstolj a lángost!','Kóstolni a lángos!'),MKC('« Le plat le plus célèbre »','a leghíresebb étel','a híresebb étel','a híres étel')])]
}),
MKM('mkb8_4','A2·8.4','Segítség! Vendégek jönnek! — Au secours, des invités arrivent !',{
  rules:[
    MKR('Donner des instructions','On donne des consignes à un proche avec l’impératif : « Vedd meg a kenyeret! » (Achète le pain), « Tedd az asztalra a tányérokat! » (Mets les assiettes sur la table), « Nyisd ki az ablakot! » (Ouvre la fenêtre). Avec un objet défini → forme définie (-d), sinon forme indéfinie.',{table:[['Olvass!','Lis ! (indéfini)'],['Olvasd el!','Lis-le ! (défini)'],['Vegyél kenyeret!','Achète du pain ! (indéfini)'],['Vedd meg a kenyeret!','Achète le pain ! (défini)']]}),
    MKR('Impératif et préverbes','À l’impératif, le préverbe se place après le verbe, que la phrase soit affirmative ou négative : « Nyisd ki! », « Ülj le! », « Gyere be! » ; « Ne nyisd ki! », « Ne ülj le! ».',{examples:[['Gyere be!','Entre !'],['Ülj le!','Assieds-toi !'],['Ne menj el!','Ne pars pas !']]})
  ],
  vocab:[['vendég','invité',''],['megérkezik','arriver',''],['takarít','nettoyer',''],['teríti az asztalt','mettre la table',''],['tányér','assiette',''],['pohár','verre',''],['villa','fourchette',''],['kés','couteau',''],['kanál','cuillère',''],['kinyit','ouvrir',''],['becsuk','fermer',''],['siet','se dépêcher',''],['segít','aider','']],
  exercises:[MKB('fill','Impératif défini',[MKF('','  meg a kenyeret! (vesz)','Vedd',''),MKF('','  ki az ablakot! (nyit)','Nyisd',''),MKF('','  el a levelet! (olvas)','Olvasd','')]),MKB('order','Remets en ordre',[MKO('Entre !','Gyere be!'),MKO('Assieds-toi !','Ülj le!'),MKO('Ne pars pas !','Ne menj el!')])]
})
);

MK_CHAPTERS.push({
  id:'a2-8', level:'A2', num:8, hu:'Fő az egészség!', fr:'La santé avant tout !',
  intro:'Santé, conseils du médecin, alimentation et spécialités, instructions du quotidien. Grammaire : l’impératif (formes indéfinies et définies, irréguliers, négation), ordre des mots dans les phrases impératives, verbes à complément.',
  modules:['mkb8_1','mkb8_2','mkb8_3','mkb8_4'],
  grammar:[
    MKG('ga8_forma','A felszólító mód: forma','L’impératif : formes régulières','Radical + -j (ou assimilation : olvas → olvass, néz → nézz). Indéfini : te -j, Ön -jon/-jen, mi -junk/-jünk, ti -jatok/-jetek. Défini : te -d, Ön -ja/-i, mi -juk/-jük, ti -játok/-itek.',{
      grid:{head:['Personne','olvas (indéf.)','olvas (déf.)','néz (indéf.)','néz (déf.)'],rows:[['te','olvass','olvasd','nézz','nézd'],['Ön','olvasson','olvassa','nézzen','nézze'],['mi','olvassunk','olvassuk','nézzünk','nézzük'],['ti','olvassatok','olvassátok','nézzetek','nézzétek']]}}),
    MKG('ga8_rendhagyo','Rendhagyó felszólító alakok','Impératifs irréguliers','Quelques verbes importants ont un impératif particulier.',{
      grid:{head:['Verbe','te','Ön','ti'],rows:[['van','legyél','legyen','legyetek'],['megy','menj','menjen','menjetek'],['jön','gyere','jöjjön','gyertek'],['eszik','egyél','egyen','egyetek'],['iszik','igyál','igyon','igyatok'],['vesz','vegyél','vegyen','vegyetek'],['tesz','tegyél','tegyen','tegyetek'],['visz','vigyél','vigyen','vigyetek']]}}),
    MKG('ga8_funk','Főbb funkciók','Emplois de l’impératif','Instruction (Nyisd ki!), proposition (Gyere velem!), conseil (Pihenj többet!), demande polie (Kérem, üljön le!).',{
      examples:[['Gyere velem!','Viens avec moi !'],['Pihenjen többet!','Reposez-vous davantage !'],['Kérem, üljön le!','Asseyez-vous, je vous prie !']]}),
    MKG('ga8_ne','Tiltás: ne + felszólító','L’interdiction : ne + impératif','On nie l’impératif avec « ne » devant le verbe : Ne menj! Ne olvasd! Le préverbe reste après le verbe : Ne menj el!',{
      examples:[['Ne dohányozzon!','Ne fumez pas !'],['Ne menj el!','Ne pars pas !']]}),
    MKG('ga8_szorend','Szórend: a felszólító mondatok szórendje','Ordre des mots à l’impératif','Affirmatif : verbe + préverbe (Nyisd ki!). Négatif : ne + verbe + préverbe (Ne nyisd ki!). Les compléments suivent.',{
      examples:[['Ülj le!','Assieds-toi !'],['Ne ülj le!','Ne t’assieds pas !'],['Vedd meg a kenyeret!','Achète le pain !']]})
  ],
  exercises:[
    MKX('ea8_forma','ga8_forma','1. A felszólító mód','Impératif régulier',MKB('fill','Impératif (te)',[MKF('','  ! (olvas)','Olvass',''),MKF('','  ! (néz)','Nézz',''),MKF('','  ! (ír)','Írj',''),MKF('','  ! (tanul)','Tanulj',''),MKF('','  ! (főz)','Főzz','')]),MKB('fill','Impératif poli (Ön)',[MKF('','  ! (pihen)','Pihenjen',''),MKF('','  ! (ül)','Üljön',''),MKF('','  ! (ír)','Írjon','')])),
    MKX('ea8_rendhagyo','ga8_rendhagyo','2. Rendhagyó alakok','Irréguliers',MKB('fill','Impératif (te)',[MKF('','  ! (van)','Legyél',''),MKF('','  ! (megy)','Menj',''),MKF('','  ! (jön)','Gyere',''),MKF('','  ! (eszik)','Egyél',''),MKF('','  ! (iszik)','Igyál',''),MKF('','  ! (tesz)','Tegyél','')])),
    MKX('ea8_funk','ga8_funk','3. Főbb funkciók','Emplois',MKB('choice','Choisis',[MKC('« Viens avec moi ! »','Gyere velem!','Jön velem!','Jöjjek velem!'),MKC('« Asseyez-vous, je vous prie ! »','Kérem, üljön le!','Kérem, ülj le!','Kérem, ül le!')])),
    MKX('ea8_ne','ga8_ne','4. Tiltás','ne + impératif',MKB('fill','Négation',[MKF('','  menj! (ne)','Ne',''),MKF('','  dohányozzon! (ne)','Ne',''),MKF('Ne ','  el! (menj)','menj','')]),MKB('truefalse','Vrai ou faux ?',[MKV('« Ne menj el! » est correct.',true,''),MKV('« Menj ne el! » est correct.',false,'« Ne menj el! »')])),
    MKX('ea8_szorend','ga8_szorend','5. Szórend','Ordre à l’impératif',MKB('order','Remets en ordre',[MKO('Assieds-toi !','Ülj le!'),MKO('Achète le pain !','Vedd meg a kenyeret!'),MKO('Ne t’assieds pas !','Ne ülj le!')]))
  ]
});
