/* MagyarOK A1 — chapitre 5 : Vásárlás, étterem (Achats et restaurant). Contenu original. */
MKM.use('A1', 5, 'Vásárlás, étterem', 'Achats et restaurant');

MK_MODULES.push(
MKM('mk5_1','K5.1','Élelmiszerek és mennyiségek — Aliments et quantités',{
  rules:[
    MKR('Les quantités','On dit la quantité + le nom au singulier : « egy kiló alma » (un kilo de pommes), « fél liter tej » (un demi-litre de lait), « húsz deka sonka » (200 g de jambon ; 1 deka = 10 g). Questions : « Hány kiló? » (combien de kilos — nombre) et « Mennyi? » (quelle quantité).',{table:[['egy kiló alma','un kilo de pommes'],['fél kiló vaj','500 g de beurre'],['egy liter tej','un litre de lait'],['tíz deka sajt','100 g de fromage'],['egy üveg bor','une bouteille de vin'],['egy doboz tojás','une boîte d’œufs'],['egy csomag rizs','un paquet de riz']]}),
    MKR('Verbes utiles au magasin','On demande : « Kérek egy kiló almát. » (Je voudrais un kilo de pommes.) Le complément prend le suffixe -t (voir la grammaire). Pour acheter : vesz (veszek, veszel…).',{examples:[['Mit vesz a boltban?','Que prenez-vous au magasin ?'],['Kenyeret és tejet veszek.','J’achète du pain et du lait.'],['Mennyibe kerül egy kiló alma?','Combien coûte un kilo de pommes ?']]})
  ],
  vocab:[['kenyér','pain',''],['tej','lait',''],['vaj','beurre',''],['sajt','fromage',''],['tojás','œuf',''],['hús','viande',''],['hal','poisson',''],['sonka','jambon',''],['alma','pomme',''],['banán','banane',''],['narancs','orange',''],['paradicsom','tomate',''],['hagyma','oignon',''],['krumpli','pomme de terre',''],['rizs','riz',''],['tészta','pâtes',''],['cukor','sucre',''],['só','sel',''],['víz','eau',''],['kiló','kilo',''],['deka','dix grammes',''],['liter','litre','']],
  exercises:[
    MKB('choice','Choisis',[MKC('« Un kilo de pommes »','egy kiló alma','egy kiló almák','egy kilók alma'),MKC('« Un demi-litre de lait »','fél liter tej','fél liter tejek','félliter tejet'),MKC('Qui demande de la quantité ?','Hány kiló?','Mennyibe kerül?','Hol van?')]),
    MKB('translate','Traduis',[MKT('Je voudrais un kilo de tomates.','Kérek egy kiló paradicsomot.'),MKT('un paquet de riz','egy csomag rizs'),MKT('Combien coûte le fromage ?','Mennyibe kerül a sajt?')])
  ]
}),
MKM('mk5_2','K5.2','A piacon — Au marché',{
  rules:[
    MKR('Le complément d’objet : -t','Dans une phrase avec un verbe transitif, l’objet prend -t : « Almát kérek. » Après voyelle : -t (alma → almát, a et e s’allongent). Après consonne : voyelle de liaison + t (kenyér → kenyeret, tej → tejet, sajt → sajtot, bor → bort). Beaucoup de mots en -s/-sz/-z prennent seulement -t : hús → húst, tojás → tojást.',{table:[['alma → almát','pomme'],['tea → teát','thé'],['kenyér → kenyeret','pain'],['tej → tejet','lait'],['sajt → sajtot','fromage'],['hús → húst','viande'],['tojás → tojást','œuf'],['víz → vizet','eau']]}),
    MKR('Ce / cela avec suffixe','Le démonstratif se décline comme un nom : ezt/azt (objet), ebből/abból (de ceci / de cela), ebbe/abba (dans ceci / cela). « Ebből a sajtból kérek egy kilót. » (De ce fromage-ci, je voudrais un kilo.)',{examples:[['Ezt az almát kérem.','Je prends cette pomme-ci.'],['Abból a hagymából kérek.','Je voudrais de cet oignon-là.'],['Ebből a boltból veszek kenyeret.','J’achète du pain dans ce magasin.']]})
  ],
  vocab:[['piac','marché',''],['árus','vendeur (sur un marché)',''],['vevő','client',''],['friss','frais',''],['érett','mûr',''],['olcsó','bon marché',''],['drága','cher',''],['kérek','je voudrais / je prends',''],['tessék','voici / je vous écoute',''],['fizet','payer',''],['összesen','au total',''],['pénz','argent',''],['visszajáró','monnaie rendue','']],
  exercises:[
    MKB('fill','Ajoute -t (écris le mot avec -t)',[MKF('Kérek egy kiló ','.  (alma)','almát',''),MKF('Veszek ','.  (kenyér)','kenyeret',''),MKF('Kérek tíz deka ','.  (sajt)','sajtot',''),MKF('Kérek fél kiló ','.  (hús)','húst',''),MKF('Kérek egy ','.  (tojás)','tojást','')]),
    MKB('choice','Choisis',[MKC('« De ce fromage-ci, je voudrais 20 dkg. »','Ebből a sajtból kérek húsz dekát.','Ezt a sajtot kérek húsz dekát.','Ebben a sajtban kérek húsz dekát.')])
  ],
  dialogue:{title:'Au marché',formal:[['Jó napot kívánok! Mit adhatok?','Bonjour ! Que puis-je vous servir ?'],['Egy kiló almát kérek, és fél kiló paradicsomot.','Un kilo de pommes, s’il vous plaît, et un demi-kilo de tomates.'],['Tessék. Még valamit?','Voilà. Autre chose ?'],['Köszönöm, ez minden. Mennyit fizetek?','Merci, ce sera tout. Combien dois-je ?'],['Ezerhatszáz forintot.','Mille six cents forints.']]}
}),
MKM('mk5_3','K5.3','Mit eszünk? Mit iszunk? — Manger et boire',{
  rules:[
    MKR('Verbes de la table','« eszik » (manger) et « iszik » (boire) sont des verbes en -ik. « főz » (cuisiner), « süt » (cuire au four / faire des pâtisseries), « vesz » (acheter, prendre). Verbes en -s/-sz/-z : à la 2e pers. -ol/-el/-öl (veszel, főzöl).',{table:[['eszem, eszel, eszik','je mange, tu manges, il mange'],['iszom, iszol, iszik','je bois, tu bois, il boit'],['főzök, főzöl, főz','je cuisine…'],['veszek, veszel, vesz','j’achète…'],['sütök, sütsz, süt','je cuis…']]}),
    MKR('Adjectifs au pluriel','Un adjectif attribut s’accorde au pluriel : -ak/-ek après consonne, -k après voyelle (voyelle longue en fin de mot : drága → drágák). « A gyümölcsök egészségesek. » (Les fruits sont sains.)',{table:[['zsíros → zsírosak','gras'],['egészséges → egészségesek','sain'],['finom → finomak','délicieux'],['édes → édesek','sucré'],['olcsó → olcsók','bon marché'],['drága → drágák','cher']]})
  ],
  vocab:[['eszik','manger',''],['iszik','boire',''],['főz','cuisiner',''],['süt','cuire (au four)',''],['reggeli','petit-déjeuner',''],['ebéd','déjeuner',''],['vacsora','dîner',''],['leves','soupe',''],['saláta','salade',''],['gyümölcs','fruit',''],['zöldség','légumes',''],['kávé','café',''],['tea','thé',''],['sör','bière',''],['finom','délicieux',''],['édes','sucré',''],['sós','salé',''],['zsíros','gras',''],['egészséges','sain','']],
  exercises:[
    MKB('fill','Conjugue',[MKF('Én kávét ','.  (iszik)','iszom',''),MKF('Te sokat ','.  (eszik)','eszel',''),MKF('Ők levest ','.  (eszik)','esznek',''),MKF('Mi vacsorát ','.  (főz)','főzünk','')]),
    MKB('fill','Adjectif au pluriel',[MKF('A levesek ','.  (finom)','finomak',''),MKF('A gyümölcsök ','.  (egészséges)','egészségesek',''),MKF('A sütemények ','.  (édes)','édesek',''),MKF('A boltok ','.  (drága)','drágák','')])
  ]
}),
MKM('mk5_4','K5.4','Étterem — Au restaurant',{
  rules:[
    MKR('Commander poliment','« Szeretnék egy levest. » (Je voudrais une soupe.) « szeretne » exprime le souhait poli (szeretnék, szeretnél, szeretne, szeretnénk, szeretnétek, szeretnének). Le serveur : « Mit hozhatok? » (Que puis-je vous apporter ?). Pour payer : « A számlát kérem. » — « Kártyával vagy készpénzzel? »',{examples:[['Mit szeretne inni?','Que voulez-vous boire ?'],['Egy kávét és egy vizet kérek.','Un café et une eau, s’il vous plaît.'],['A számlát kérem.','L’addition, s’il vous plaît.']]}),
    MKR('Mots du menu','Étlap (carte), előétel (entrée), főétel (plat principal), desszert, ital (boisson), számla (addition), borravaló (pourboire). « Jó étvágyat! » = Bon appétit ! « Egészségedre! » = À ta santé !',{})
  ],
  vocab:[['étlap','carte, menu',''],['előétel','entrée',''],['főétel','plat principal',''],['desszert','dessert',''],['ital','boisson',''],['számla','addition, facture',''],['borravaló','pourboire',''],['pincér','serveur',''],['szeretne','il/elle voudrait, vous voudriez',''],['hoz','apporter',''],['rendel','commander',''],['kártya','carte (bancaire)',''],['készpénz','espèces',''],['Jó étvágyat!','Bon appétit !','']],
  exercises:[
    MKB('choice','Au restaurant, tu dis…',[MKC('Tu veux l’addition :','A számlát kérem.','Jó étvágyat!','Egészségedre!'),MKC('Le serveur demande ce que tu veux boire :','Mit szeretne inni?','Hol van a posta?','Mennyibe kerül?'),MKC('Tu veux une soupe :','Szeretnék egy levest.','Szeretnék egy levesek.','Szeretnék egy leves vagyok.')]),
    MKB('fill','Conjugue szeretne',[MKF('Én egy kávét ','.','szeretnék',''),MKF('Mi levest ','.','szeretnénk',''),MKF('Ő mit ','?','szeretne','')])
  ],
  dialogue:{title:'Commander à midi',formal:[['Jó napot! Mit hozhatok?','Bonjour ! Que puis-je vous apporter ?'],['Szeretnék egy gulyáslevest és egy vizet.','Je voudrais un goulasch et une eau.'],['Még valamit?','Autre chose ?'],['Nem, köszönöm. A számlát kérem.','Non merci. L’addition, s’il vous plaît.'],['Kártyával vagy készpénzzel?','Par carte ou en espèces ?'],['Kártyával.','Par carte.']]}
}),
MKM('mk5_5','K5.5','Ruhavásárlás — Acheter des vêtements',{
  rules:[
    MKR('Décrire un vêtement','« Milyen színű? » (De quelle couleur ?) — « Piros. » Taille et forme : szűk (étroit), bő (ample), hosszú (long), rövid (court). Pour essayer : « Felpróbálhatom? » Compliment : « Ez a nadrág jól áll neked. »',{examples:[['Milyen színű a kabát?','De quelle couleur est le manteau ?'],['A pulóver kék és meleg.','Le pull est bleu et chaud.'],['Felpróbálhatom ezt a nadrágot?','Puis-je essayer ce pantalon ?']]}),
    MKR('Possessif + objet : -t','Quand le nom a déjà un possessif, le -t s’ajoute après : « a telefonomat », « a barátomat », « a kabátodat ».',{table:[['telefon → telefonom → telefonomat','mon téléphone (objet)'],['barát → barátom → barátomat','mon ami (objet)'],['kabát → kabátod → kabátodat','ton manteau (objet)']]})
  ],
  vocab:[['póló','t-shirt',''],['ing','chemise',''],['nadrág','pantalon',''],['szoknya','jupe',''],['ruha','robe / vêtement',''],['kabát','manteau',''],['pulóver','pull',''],['cipő','chaussure',''],['zokni','chaussette',''],['sapka','bonnet / casquette',''],['piros','rouge',''],['kék','bleu',''],['zöld','vert',''],['sárga','jaune',''],['fehér','blanc',''],['fekete','noir',''],['szürke','gris',''],['barna','marron',''],['szűk','étroit',''],['bő','ample',''],['hosszú','long',''],['rövid','court',''],['felpróbál','essayer','']],
  exercises:[
    MKB('choice','Couleurs',[MKC('rouge','piros','kék','sárga'),MKC('noir','fekete','fehér','szürke'),MKC('vert','zöld','barna','piros'),MKC('blanc','fehér','fekete','sárga')]),
    MKB('translate','Traduis',[MKT('De quelle couleur est le pantalon ?','Milyen színű a nadrág?'),MKT('Puis-je essayer cette chemise ?','Felpróbálhatom ezt az inget?'),MKT('Le manteau est trop court.','A kabát túl rövid.')])
  ]
})
);

MK_CHAPTERS.push({
  id:'a1-5', level:'A1', num:5, hu:'Vásárlás, étterem', fr:'Achats et restaurant',
  intro:'Faire ses courses, demander des quantités, parler de ce que l’on mange et boit, commander au restaurant, acheter des vêtements. Grammaire : l’objet en -t, verbes transitifs, ceci/cela avec suffixes, adjectifs au pluriel, szeretne.',
  modules:['mk5_1','mk5_2','mk5_3','mk5_4','mk5_5'],
  grammar:[
    MKG('g5_hany','Hány? Mennyi? Tárgyatlan és tárgyas igék','Combien ? Verbes intransitifs et transitifs','« Hány + nom » : nombre dénombrable (Hány alma?). « Mennyi » : quantité. Un verbe transitif a un complément d’objet direct (Almát eszem) ; un intransitif non (Alszom).',{
      examples:[['Hány kiló almát kérsz?','Combien de kilos de pommes veux-tu ?'],['Mennyi cukrot teszel bele?','Combien de sucre y mets-tu ?'],['Almát eszem.','Je mange des pommes. (transitif)'],['Dolgozom.','Je travaille. (intransitif)']]}),
    MKG('g5_t','A tárgyrag: -t','Le complément d’objet : -t','Après voyelle : -t (voyelle finale allongée). Après consonne : -ot/-et/-öt (ou -at, -et), parfois directement -t. Retiens par catégories d’exemples.',{
      grid:{head:['Nom','Objet','Nom','Objet'],rows:[['alma','almát','kenyér','kenyeret'],['kávé','kávét','tej','tejet'],['saláta','salátát','sajt','sajtot'],['tea','teát','bor','bort'],['hús','húst','tojás','tojást'],['gyümölcs','gyümölcsöt','víz','vizet']]},
      notes:['Quand le nom est précédé d’un nombre, le nom reste au singulier : « két almát ».','Les formes avec liaison sont à apprendre mot par mot.']}),
    MKG('g5_sszz','Igeragozás: -s, -sz, -z végű igék','Verbes en -s, -sz, -z','À la 2e pers. sg., ces verbes prennent -ol/-el/-öl (et non -sz) : olvas → olvasol, néz → nézel, főz → főzöl, vesz → veszel. Les autres personnes sont régulières.',{
      grid:{head:['Personne','vesz','eszik','iszik'],rows:[['én','veszek','eszem','iszom'],['te','veszel','eszel','iszol'],['ő','vesz','eszik','iszik'],['mi','veszünk','eszünk','iszunk'],['ti','vesztek','esztek','isztok'],['ők','vesznek','esznek','isznak']]}}),
    MKG('g5_mutato','A mutató névmás toldalékolása','Ceci / cela avec suffixes','Le démonstratif se décline : ezt/azt (objet), ebben/abban (dans), ebbe/abba (dans — direction), ebből/abból (de).',{
      grid:{head:['Cas','proche','éloigné'],rows:[['objet','ezt','azt'],['dans (hol)','ebben','abban'],['dans (hova)','ebbe','abba'],['de (honnan)','ebből','abból']]},
      examples:[['Ebből a sajtból kérek.','Je voudrais de ce fromage-ci.'],['Abba a boltba megyek.','Je vais dans ce magasin-là.']]}),
    MKG('g5_ikes','Ikes igék (ismétlés)','Verbes en -ik (rappel)','eszik, iszik, lakik, dolgozik… 1re pers. sg. -om/-em/-öm, 3e pers. sg. -ik.',{
      examples:[['Mit eszel? — Levest eszem.','Que manges-tu ? — Je mange de la soupe.'],['Mit iszik? — Teát iszik.','Que boit-il ? — Il boit du thé.']]}),
    MKG('g5_mn','A melléknév többes száma','Le pluriel de l’adjectif','Quand l’adjectif est attribut d’un sujet pluriel, il prend aussi la marque du pluriel : A levesek finomak. Devant le nom, l’adjectif reste invariable : finom levesek.',{
      grid:{head:['Singulier','Pluriel','Singulier','Pluriel'],rows:[['finom','finomak','olcsó','olcsók'],['édes','édesek','drága','drágák'],['zsíros','zsírosak','friss','frissek'],['egészséges','egészségesek','jó','jók']]}}),
    MKG('g5_szeretne','Segédigék: szeretne','Le souhait poli : szeretne','« szeretne » (je voudrais) se conjugue : szeretnék, szeretnél, szeretne, szeretnénk, szeretnétek, szeretnének. Il se combine avec un infinitif ou un objet.',{
      grid:{head:['Personne','szeretne'],rows:[['én','szeretnék'],['te','szeretnél'],['ő / Ön','szeretne'],['mi','szeretnénk'],['ti','szeretnétek'],['ők / Önök','szeretnének']]},
      examples:[['Szeretnék enni valamit.','Je voudrais manger quelque chose.'],['Mit szeretnétek inni?','Que voudriez-vous boire ?']]}),
    MKG('g5_tobbszoros','Többszörös toldalékolás: -t','Suffixes multiples : possessif + -t','Quand un nom a déjà un suffixe possessif, on ajoute -t : a telefonom → a telefonomat, a barátod → a barátodat, az irodája → az irodáját.',{
      grid:{head:['Possessif','+ objet'],rows:[['a telefonom','a telefonomat'],['a barátom','a barátomat'],['a kabátod','a kabátodat'],['a főnöke','a főnökét']]}})
  ],
  exercises:[
    MKX('e5_hany','g5_hany','1. Hány? Mennyi?','Questions de quantité',
      MKB('choice','Choisis',[MKC('« Combien de kilos ? »','Hány kiló?','Mennyi kiló?','Hány kilók?'),MKC('Phrase avec verbe transitif :','Almát eszem.','Alszom.','Dolgozom.')]),
      MKB('translate','Traduis',[MKT('Combien coûte le lait ?','Mennyibe kerül a tej?'),MKT('Je mange une pomme.','Egy almát eszem.')])),
    MKX('e5_t','g5_t','2. A tárgyrag','Objet en -t',
      MKB('fill','Écris l’objet',[MKF('Kávé → Kérek egy ','.','kávét',''),MKF('Saláta → Eszem ','.','salátát',''),MKF('Bor → Iszom egy pohár ','.','bort',''),MKF('Gyümölcs → Eszem ','.','gyümölcsöt',''),MKF('Víz → Iszom ','.','vizet','')]),
      MKB('order','Remets en ordre',[MKO('Je voudrais un café.','Kérek egy kávét.'),MKO('Je mange de la soupe.','Levest eszem.')])),
    MKX('e5_sszz','g5_sszz','3. -s, -sz, -z igék','vesz, eszik, iszik',
      MKB('fill','Conjugue',[MKF('Te mit ','?  (vesz)','veszel',''),MKF('Ők kenyeret ','.  (vesz)','vesznek',''),MKF('Mi levest ','.  (eszik)','eszünk',''),MKF('Ti vizet ','.  (iszik)','isztok','')])),
    MKX('e5_mutato','g5_mutato','4. Mutató névmás','ezt, ebből, abba…',
      MKB('fill','Complète',[MKF('','  az almát kérem. (celle-ci, objet)','Ezt',''),MKF('','  a sajtból kérek. (de celui-ci)','Ebből',''),MKF('Megyek ','  a boltba. (dans celui-là)','abba','')]),
      MKB('choice','Choisis',[MKC('« De cette soupe-là »','abból a levesből','abban a levesben','azt a levest')])),
    MKX('e5_ikes','g5_ikes','5. Ikes igék','eszik, iszik',
      MKB('fill','Complète',[MKF('Én kávét ','.','iszom',''),MKF('Te levest ','.','eszel',''),MKF('Ő sört ','.','iszik','')])),
    MKX('e5_mn','g5_mn','6. A melléknév többes száma','Adjectif au pluriel',
      MKB('fill','Pluriel',[MKF('A tojások ','.  (friss)','frissek',''),MKF('A sütemények ','.  (finom)','finomak',''),MKF('A zöldségek ','.  (egészséges)','egészségesek',''),MKF('A cipők ','.  (olcsó)','olcsók','')])),
    MKX('e5_szeretne','g5_szeretne','7. szeretne','Souhait poli',
      MKB('fill','Conjugue',[MKF('Én egy teát ','.','szeretnék',''),MKF('Te mit ','?','szeretnél',''),MKF('Mi enni ','.','szeretnénk',''),MKF('Ők sört ','.','szeretnének','')]),
      MKB('translate','Traduis',[MKT('Je voudrais une soupe.','Szeretnék egy levest.'),MKT('Que voudriez-vous boire ?','Mit szeretne inni?')])),
    MKX('e5_tobbszoros','g5_tobbszoros','8. Possessif + -t','a telefonomat',
      MKB('fill','Ajoute -t',[MKF('Látom a telefonod','.','at',''),MKF('Szeretem a barátom','.','at',''),MKF('Keresem a kulcsom','.','at','')]))
  ]
});
