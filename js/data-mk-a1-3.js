/* MagyarOK A1 — chapitre 3 : Ismerkedés az irodában (Faire connaissance au bureau). Contenu original. */
MKM.use('A1', 3, 'Ismerkedés az irodában', 'Faire connaissance au bureau');

MK_MODULES.push(
MKM('mk3_1','K3.1','Hogy vagy? Hogy van? — Comment vas-tu ?',{
  rules:[
    MKR('Demander comment ça va','On demande l’état d’une personne avec « Hogy vagy? » (tu) ou « Hogy van? » (forme polie, 3e personne). Pour répondre, on dit « jól vagyok » (je vais bien) ; avec un état de santé ou de forme, le verbe « van » apparaît à la 3e personne.',{examples:[
      ['Hogy vagy? — Köszönöm, jól vagyok.','Comment vas-tu ? — Merci, je vais bien.'],
      ['Hogy van, Kovács úr? — Köszönöm, jól.','Comment allez-vous, M. Kovács ? — Merci, bien.'],
      ['Anna ma fáradt, de jól van.','Anna est fatiguée aujourd’hui, mais elle va bien.']]}),
    MKR('Dire où l’on est','« Hol vagy? » (tu) / « Hol van? » (il, elle, vous poli) : la réponse porte un suffixe de lieu (-ban/-ben, -n). Lieux du quotidien : otthon (à la maison), az irodában, a munkahelyen.',{examples:[
      ['Hol vagy most? — Otthon vagyok.','Où es-tu en ce moment ? — Je suis à la maison.'],
      ['Hol van a főnök? — Az irodában van.','Où est le chef ? — Il est au bureau.']]})
  ],
  vocab:[['Hogy vagy?','Comment vas-tu ?',''],['Hogy van?','Comment va-t-il / allez-vous ?',''],['jól','bien',''],['nagyon jól','très bien',''],
    ['nem rossz','pas mal',''],['rosszul','mal',''],['fáradt','fatigué(e)',''],['beteg','malade',''],['éhes','affamé(e)',''],['szomjas','assoiffé(e)',''],
    ['otthon','à la maison',''],['itt','ici',''],['ott','là-bas',''],['most','maintenant',''],['főnök','chef, patron',''],['kolléga','collègue','']],
  exercises:[
    MKB('fill','Complète avec vagyok, vagy, van, vagyunk',[
      MKF('Hogy ',' te?','vagy','tu'),MKF('Én jól ','.','vagyok','je'),MKF('Hol ',' a főnök?','van','il / elle'),MKF('Mi otthon ','.','vagyunk','nous')]),
    MKB('choice','Choisis la bonne réponse',[
      MKC('« Hogy vagy? » — réponse naturelle :','Köszönöm, jól vagyok.','Köszönöm, jól van.','Jól vagytok.'),
      MKC('« Où est Anna ? »','Hol van Anna?','Hol vagy Anna?','Hol vagyok Anna?')])
  ],
  dialogue:{title:'Un café avec une collègue',
    formal:[['Jó napot, Kovács úr! Hogy van?','Bonjour, M. Kovács ! Comment allez-vous ?'],['Köszönöm, jól. És Ön?','Merci, bien. Et vous ?'],['Köszönöm, én is jól vagyok.','Merci, moi aussi je vais bien.'],['Hol van most a főnök?','Où est le chef en ce moment ?'],['Az irodájában van.','Il est dans son bureau.']],
    informal:[['Szia, Anna! Hogy vagy?','Salut Anna ! Comment vas-tu ?'],['Köszi, jól vagyok. És te?','Merci, je vais bien. Et toi ?'],['Én is jól, csak egy kicsit fáradt vagyok.','Moi aussi, juste un peu fatigué.'],['Hol vagy most?','Où es-tu maintenant ?'],['A munkahelyen vagyok.','Je suis au travail.']]}
}),
MKM('mk3_2','K3.2','Használati tárgyak — Objets du quotidien',{
  rules:[
    MKR('L’article défini : a / az','L’article défini est « a » devant une consonne et « az » devant une voyelle. Il s’accorde avec le mot qui le suit immédiatement (même un adjectif) : « az új telefon », « a régi telefon ». L’article indéfini est « egy ».',{table:[['a toll, a könyv, a szék','le stylo, le livre, la chaise'],['az asztal, az iroda, az ablak','la table, le bureau, la fenêtre'],['az új lámpa / a nagy lámpa','la nouvelle lampe / la grande lampe']]}),
    MKR('Décrire un objet','Pas de verbe « être » à la 3e personne : « Az asztal kicsi. » (La table est petite.) Pour poser la question à l’oral, on garde l’ordre et on monte la voix : « Új a számítógép? »',{examples:[
      ['A telefon új, de nem drága.','Le téléphone est neuf, mais pas cher.'],['Kényelmes a szék?','La chaise est-elle confortable ?'],['Az asztal nagy és szép.','La table est grande et belle.']]})
  ],
  vocab:[['asztal','table',''],['szék','chaise',''],['számítógép','ordinateur',''],['laptop','ordinateur portable',''],['telefon','téléphone',''],['lámpa','lampe',''],
    ['toll','stylo',''],['könyv','livre',''],['táska','sac',''],['szemüveg','lunettes',''],['kulcs','clé',''],['pénztárca','portefeuille',''],
    ['kicsi','petit',''],['nagy','grand',''],['új','nouveau, neuf',''],['régi','ancien, vieux',''],['szép','beau',''],['olcsó','bon marché',''],['drága','cher',''],
    ['könnyű','léger, facile',''],['nehéz','lourd, difficile',''],['kényelmes','confortable','']],
  exercises:[
    MKB('fill','a ou az ?',[MKF('','telefon','a','consonne'),MKF('','iroda','az','voyelle'),MKF('','új lámpa','az','le mot suivant est « új »'),MKF('','régi szék','a','consonne'),MKF('','ablak','az','voyelle')]),
    MKB('truefalse','Vrai ou faux ?',[MKV('« Új a számítógép? » est une question possible (intonation montante).',true,''),MKV('« Az asztal vagyok kicsi. » est correct.',false,'On dit : « Az asztal kicsi. »'),MKV('« kényelmes » signifie « confortable ».',true,'')])
  ],
  dialogue:{title:'Dans le magasin d’informatique',formal:[
    ['Jó napot kívánok! Új a laptop?','Bonjour ! Cet ordinateur portable est neuf ?'],['Igen, új és nagyon könnyű.','Oui, neuf et très léger.'],['És drága?','Et il est cher ?'],['Nem, nem drága.','Non, pas cher.'],['Akkor kérem ezt.','Alors je prends celui-ci.']]}
}),
MKM('mk3_3','K3.3','Az iroda — Le bureau',{
  rules:[
    MKR('Il y a / il n’y a pas','« Mi van az irodában? » — « Az irodában van egy asztal és két szék. » Pour l’inexistence, on utilise « nincs » (contraction de « nem van »), pluriel « nincsenek » : « Nincs nyomtató. »',{examples:[['Mi van a táskádban?','Qu’y a-t-il dans ton sac ?'],['A táskámban van egy könyv.','Dans mon sac il y a un livre.'],['Az irodában nincs nyomtató.','Dans le bureau il n’y a pas d’imprimante.']]}),
    MKR('Le possesseur à la 3e personne : -ja/-je, -a/-e','Pour « son / sa / leur de quelqu’un », on ajoute -a/-e (après consonne) ou -ja/-je (après voyelle ou pour certains mots). Le possesseur reste simple : « Nóra irodája » (le bureau de Nóra). On peut y accrocher d’autres suffixes : « Nóra irodájában » (dans le bureau de Nóra).',{table:[['iroda → irodája','le bureau (de qqn)'],['főnök → főnöke','le chef (de qqn)'],['munka → munkája','le travail (de qqn)'],['telefon → telefonja','le téléphone (de qqn)'],['asztal → asztala','la table (de qqn)']]}),
    MKR('Demander un prix','« Mennyibe kerül? » (Combien ça coûte ?) — « Ötszáz forintba kerül. » Les centaines : száz, kétszáz, háromszáz… ezer (1000).',{examples:[['Mennyibe kerül ez a toll?','Combien coûte ce stylo ?'],['Háromszáz forintba kerül.','Il coûte 300 forints.']]})
  ],
  vocab:[['iroda','bureau (pièce)',''],['nyomtató','imprimante',''],['ablak','fenêtre',''],['polc','étagère',''],['papír','papier',''],['mappa','classeur, dossier',''],
    ['kávéfőző','machine à café',''],['nincs','il n’y a pas / n’est pas',''],['Mennyibe kerül?','Combien ça coûte ?',''],['forint','forint (monnaie)',''],['ezer','mille',''],['száz','cent','']],
  exercises:[
    MKB('fill','Ajoute la terminaison possessive (3e personne)',[
      MKF('Nóra iroda','.','ja','iroda → irodája'),MKF('A főnök','.','e','főnök → főnöke'),MKF('Az Ön munkahely',' nagyon jó.','e','munkahely → munkahelye'),MKF('Péter telefon','.','ja','telefon → telefonja')]),
    MKB('choice','van ou nincs ?',[MKC('« Il n’y a pas d’imprimante. »','Nincs nyomtató.','Van nyomtató.','Nem nyomtató van.'),MKC('« Dans le bureau il y a une table. »','Az irodában van egy asztal.','Az irodában nincs asztal.','Az iroda van asztal.')])
  ],
  dialogue:{title:'Visite du bureau',formal:[['Ez az Ön irodája?','C’est votre bureau ?'],['Igen. Az irodámban van egy asztal és két szék.','Oui. Dans mon bureau il y a une table et deux chaises.'],['Van nyomtató is?','Il y a une imprimante aussi ?'],['Nincs, a nyomtató a folyosón van.','Non, l’imprimante est dans le couloir.']]}
}),
MKM('mk3_4','K3.4','Milyen ember? — Quel genre de personne ?',{
  rules:[
    MKR('Décrire quelqu’un','Les adjectifs se placent avant le nom (« egy kedves kolléga ») ou après le sujet, sans verbe à la 3e personne : « A főnök kedves. » Question : « Milyen a főnököd? » (Comment est ton chef ?).',{examples:[['Milyen ember Ön?','Quel genre de personne êtes-vous ?'],['Nóra főnöke rokonszenves.','Le chef de Nóra est sympathique.'],['A kollégám vicces és szorgalmas.','Mon collègue est drôle et travailleur.']]}),
    MKR('Ton chef / votre chef','Pour « ton » on ajoute -d/-od/-ed/-öd, pour « son / votre (poli) » -a/-e/-ja/-je : « a főnököd » (ton chef) / « a főnöke » (son chef ; votre chef).',{table:[['a főnököd','ton chef'],['a főnöke','son chef / votre chef'],['a barátod','ton ami'],['a barátja','son ami / votre ami']]})
  ],
  vocab:[['magas','grand (taille)',''],['alacsony','petit (taille)',''],['vékony','mince',''],['kövér','gros',''],['fiatal','jeune',''],['idős','âgé',''],['jóképű','beau (visage)',''],
    ['kedves','gentil, aimable',''],['rokonszenves','sympathique',''],['vicces','drôle',''],['okos','intelligent',''],['udvarias','poli',''],['türelmes','patient',''],['szorgalmas','travailleur',''],['lusta','paresseux','']],
  exercises:[
    MKB('choice','Contraire',[MKC('magas ≠','alacsony','okos','fiatal'),MKC('vékony ≠','kövér','kedves','régi'),MKC('fiatal ≠','idős','szép','új'),MKC('szorgalmas ≠','lusta','vicces','udvarias')]),
    MKB('fill','Complète avec la terminaison',[MKF('Milyen a főnök','? (ton chef)','öd','főnök → főnököd'),MKF('A barát','? (ton ami)','od','barát → barátod'),MKF('Nóra főnök',' kedves.','e','son chef')])
  ]
}),
MKM('mk3_5','K3.5','Hasznos kifejezések — Phrases utiles',{
  rules:[MKR('En classe et au bureau','Quelques phrases pour demander de l’aide quand on ne comprend pas.',{table:[['Bocsánat! / Elnézést!','Pardon !'],['Nem értem.','Je ne comprends pas.'],['Megismételné, kérem?','Pourriez-vous répéter, s’il vous plaît ?'],['Lassabban, kérem.','Plus lentement, s’il vous plaît.'],['Mit jelent ez?','Qu’est-ce que ça veut dire ?'],['Hogy mondják magyarul…?','Comment dit-on en hongrois… ?'],['Köszönöm szépen.','Merci beaucoup.'],['Szívesen.','Avec plaisir / de rien.']]})],
  vocab:[['Elnézést!','Excusez-moi !',''],['Nem értem.','Je ne comprends pas.',''],['kérem','s’il vous plaît / je vous prie',''],['lassabban','plus lentement',''],['köszönöm szépen','merci beaucoup',''],['szívesen','de rien',''],['jelent','signifier','']],
  exercises:[MKB('choice','Que dis-tu ?',[MKC('Tu n’as pas compris :','Nem értem.','Köszönöm szépen.','Szívesen.'),MKC('Quelqu’un te remercie :','Szívesen.','Nem értem.','Elnézést!'),MKC('Tu veux que l’on parle moins vite :','Lassabban, kérem.','Hol van?','Hogy vagy?')])]
})
);

MK_CHAPTERS.push({
  id:'a1-3', level:'A1', num:3, hu:'Ismerkedés az irodában', fr:'Faire connaissance au bureau',
  intro:'Demander comment va quelqu’un, parler des objets du bureau, de ce qu’il y a et de ce qu’il n’y a pas, décrire ses collègues et son chef. Grammaire : van/nincs, l’article, le possesseur -ja/-je, l’infinitif -ni, ce/cette.',
  modules:['mk3_1','mk3_2','mk3_3','mk3_4','mk3_5'],
  grammar:[
    MKG('g3_van','A létige: van, vannak','Le verbe « être » : lieu et état','À la 3e personne, « van » (pluriel « vannak ») apparaît quand on parle d’un lieu ou d’un état (« Anna az irodában van », « Hogy van? »). Avec un nom ou un adjectif qui décrit une qualité, il est omis.',{
      grid:{head:['Personne','Forme','Personne','Forme'],rows:[['én','vagyok','mi','vagyunk'],['te','vagy','ti','vagytok'],['ő / Ön','van','ők / Önök','vannak']]},
      funkcio:[['Hol van?','A kulcs az asztalon van.'],['Hogy van?','Jól van.'],['Hol vannak?','A könyvek a táskában vannak.']],
      notes:['Qualité ou identité : pas de verbe (« A telefon új »).','Lieu ou état : « van » (« A telefon az asztalon van »).']}),
    MKG('g3_nevelo','A névelő: a / az','L’article défini','« a » devant consonne, « az » devant voyelle (selon le mot qui suit). L’article indéfini est « egy ». L’article défini s’emploie quand on parle de quelque chose de connu ou déjà mentionné.',{
      grid:{head:['Devant','Article','Exemples'],rows:[['consonne','a','a toll, a nagy asztal, a barát'],['voyelle','az','az iroda, az új lámpa, az ablak'],['indéfini','egy','egy könyv, egy szék']]},
      notes:['Attention : « az új telefon » mais « a régi telefon » : c’est l’adjectif qui décide.']}),
    MKG('g3_birtok3','Birtokos személyjel: -ja/-je, -a/-e','Le possesseur à la 3e personne','Pour « son » on ajoute au nom possédé -a/-e (souvent après consonne) ou -ja/-je (après voyelle, ou certains mots en consonne). Les suffixes de lieu et autres se placent après : « irodájában ».',{
      grid:{head:['Nom','3e personne','Avec -ban'],rows:[['iroda','irodája','irodájában'],['főnök','főnöke','főnökében'],['munkahely','munkahelye','munkahelyén'],['munka','munkája','munkájában'],['kolléga','kollégája','kollégájában'],['telefon','telefonja','telefonjában']]},
      funkcio:[['Kié?','Nóra irodája nagy.'],['Milyen a főnöke?','A főnöke rokonszenves.']],
      notes:['Le possesseur reste sans suffixe : « Nóra irodája ».','« Az Ön irodája » : votre bureau (poli).']}),
    MKG('g3_tagad','A létige tagadása: nem, nincs','La négation de « être » et « il n’y a pas »','Identité / qualité : « nem » devant le nom ou l’adjectif (« Nem tanár vagyok »). Pour « van » (lieu, existence), « nincs » (pluriel « nincsenek ») remplace « nem van ».',{
      grid:{head:['Personne','Négation','Personne','Négation'],rows:[['én','nem vagyok','mi','nem vagyunk'],['te','nem vagy','ti','nem vagytok'],['ő / Ön','nincs / nem','ők / Önök','nincsenek']]},
      examples:[['A főnök nincs az irodában.','Le chef n’est pas au bureau.'],['Nincs nyomtató.','Il n’y a pas d’imprimante.'],['Ez nem a telefonom.','Ce n’est pas mon téléphone.']]}),
    MKG('g3_szam','Számnév a főnév előtt','Le nombre devant le nom','Après un numéral, le nom reste au singulier : « három asztal », « két ablak » (jamais le pluriel). Question : « Hány …? » — « Hány toll van? Négy toll van. »',{
      grid:{head:['Nombre','Exemple'],rows:[['2 → két','két szék'],['3','három könyv'],['5','öt toll'],['100','száz forint'],['300','háromszáz forint'],['1000','ezer forint']]}}),
    MKG('g3_ni','A főnévi igenév: -ni, tud','L’infinitif et « savoir / pouvoir »','On forme l’infinitif en ajoutant -ni au radical : olvas → olvasni. Avec « tud », on met l’infinitif : « Tudok olvasni. » Négation : « Nem tudok olvasni. »',{
      grid:{head:['Verbe','Infinitif','Verbe','Infinitif'],rows:[['olvas','olvasni','ír','írni'],['beszél','beszélni','tanul','tanulni'],['főz','főzni','néz','nézni']]},
      examples:[['Tudok olvasni, de nem tudok írni.','Je sais lire, mais je ne sais pas écrire.'],['Nem tudok főzni.','Je ne sais pas cuisiner.']]}),
    MKG('g3_kotohang','Szabályos igék kötőhanggal','Verbes réguliers à voyelle de liaison','Les verbes en -s, -sz, -z (olvas, néz, főz) ont à la 2e pers. sg. la terminaison avec voyelle de liaison : -ol / -el / -öl. Les autres terminaisons suivent les règles du chapitre 2.',{
      grid:{head:['Personne','olvas','néz','főz'],rows:[['én','olvasok','nézek','főzök'],['te','olvasol','nézel','főzöl'],['ő / Ön','olvas','néz','főz'],['mi','olvasunk','nézünk','főzünk'],['ti','olvastok','néztek','főztök'],['ők / Önök','olvasnak','néznek','főznek']]}}),
    MKG('g3_mutato','Mutató névmás a főnév előtt','Ce / cette / celui-ci, celui-là','« ez a » = ce… -ci, « az a » = ce… -là. Devant une voyelle : « ez az », « az az ». Le nom reste au singulier.',{
      grid:{head:['','Devant consonne','Devant voyelle'],rows:[['proche','ez a telefon','ez az iroda'],['loin','az a telefon','az az iroda']]},
      examples:[['Ez a te telefonod?','C’est ton téléphone ?'],['Ez az Ön telefonja?','C’est votre téléphone ?'],['Az a lámpa szép.','Cette lampe-là est belle.']]}),
    MKG('g3_szorend','Szórend: a tagadás','L’ordre des mots : la négation','« Nem » se place directement devant le mot nié. Pour nier le verbe : « Nem dolgozom. » Pour contredire un élément, on le place devant le verbe : « Nem az irodában dolgozom, hanem otthon. »',{
      examples:[['Nem tudok olvasni.','Je ne sais pas lire.'],['Nem Anna olvas, hanem Péter.','Ce n’est pas Anna qui lit, mais Péter.'],['Nem a főnök van itt.','Ce n’est pas le chef qui est ici.']]})
  ],
  exercises:[
    MKX('e3_van','g3_van','1. A létige: van','van / vagyok / vannak',
      MKB('fill','Complète',[MKF('Hol ',' a kulcs?','van',''),MKF('A könyvek a táskában ','.','vannak',''),MKF('Én az irodában ','.','vagyok',''),MKF('Mi most otthon ','.','vagyunk','')]),
      MKB('choice','Choisis',[MKC('« Le chef est au bureau. »','A főnök az irodában van.','A főnök az irodában vagyok.','A főnök az irodában vannak.'),MKC('« Les clés sont sur la table. »','A kulcsok az asztalon vannak.','A kulcsok az asztalon van.','A kulcsok az asztalon vagyok.')])),
    MKX('e3_nevelo','g3_nevelo','2. A névelő','a / az',
      MKB('fill','a ou az ?',[MKF('',' kolléga','a',''),MKF('',' ablak','az',''),MKF('',' új főnök','az',''),MKF('',' kicsi iroda','a',''),MKF('',' olcsó telefon','az','')]),
      MKB('order','Remets en ordre',[MKO('Le téléphone est neuf.','A telefon új.'),MKO('La table est petite.','Az asztal kicsi.')])),
    MKX('e3_birtok','g3_birtok3','3. Birtokos: -ja/-je, -a/-e','Le possesseur (3e)',
      MKB('fill','Complète avec la terminaison',[MKF('Nóra főnök','','e','főnök → főnöke'),MKF('Péter iroda','','ja','iroda → irodája'),MKF('Anna munka','','ja','munka → munkája'),MKF('Éva telefon','','ja','telefon → telefonja')]),
      MKB('translate','Traduis',[MKT('le bureau de Nóra','Nóra irodája'),MKT('dans le bureau de Nóra','Nóra irodájában'),MKT('Votre chef est sympathique.','Az Ön főnöke rokonszenves.')])),
    MKX('e3_tagad','g3_tagad','4. A létige tagadása','nem / nincs',
      MKB('choice','Choisis',[MKC('« Il n’y a pas de stylo. »','Nincs toll.','Nem toll van.','Nem van toll vagyok.'),MKC('« Je ne suis pas fatigué. »','Nem vagyok fáradt.','Nincs fáradt.','Nem van fáradt vagyok.')]),
      MKB('truefalse','Vrai ou faux ?',[MKV('« Az irodában nincs nyomtató. » = Il n’y a pas d’imprimante dans le bureau.',true,''),MKV('« Nincs » est la contraction de « nem van ».',true,'')])),
    MKX('e3_szam','g3_szam','5. Számnév a főnév előtt','nombre + nom',
      MKB('fill','Complète (singulier après le nombre)',[MKF('két ',' (asztal)','asztal','le nom ne prend pas de pluriel'),MKF('három ',' (könyv)','könyv',''),MKF('öt ',' (toll)','toll','')]),
      MKB('choice','Choisis',[MKC('« trois chaises »','három szék','három székek','hármat szék'),MKC('« deux fenêtres »','két ablak','két ablakok','kettő ablak')])),
    MKX('e3_ni','g3_ni','6. -ni és tud','Infinitif + tud',
      MKB('fill','Infinitif',[MKF('Tudok ','. (főz)','főzni',''),MKF('Nem tudok ','. (ír)','írni',''),MKF('Tudsz ','? (beszél)','beszélni','')]),
      MKB('order','Remets en ordre',[MKO('Je ne sais pas lire.','Nem tudok olvasni.'),MKO('Sais-tu cuisiner ?','Tudsz főzni?')])),
    MKX('e3_koto','g3_kotohang','7. Kötőhangos igék','olvas, néz, főz',
      MKB('fill','Conjugue',[MKF('Te sokat ','. (olvas)','olvasol',''),MKF('Én tévét ','. (néz)','nézek',''),MKF('Ti jól ','. (főz)','főztök',''),MKF('Ők sokat ','. (néz)','néznek','')])),
    MKX('e3_mutato','g3_mutato','8. Mutató névmás','ez a / az az',
      MKB('fill','ez a / ez az / az a / az az',[MKF('','iroda nagy. (celle-ci)','ez az',''),MKF('','telefon új. (celui-là)','az a',''),MKF('','ablak kicsi. (celle-là)','az az','')]),
      MKB('translate','Traduis',[MKT('Ce stylo est cher.','Ez a toll drága.'),MKT('C’est votre bureau ?','Ez az Ön irodája?')])),
    MKX('e3_szorend','g3_szorend','9. Szórend: tagadás','nem + mot nié',
      MKB('order','Remets en ordre',[MKO('Je ne travaille pas au bureau, mais à la maison.','Nem az irodában dolgozom, hanem otthon.'),MKO('Ce n’est pas Anna qui lit.','Nem Anna olvas, hanem Péter.')]))
  ]
});
