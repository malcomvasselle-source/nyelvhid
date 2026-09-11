/* Données — Prononciation, Vocabulaire, Grammaire, Phrases, Parcours A1 */

const VOCAB = [
  {id:'greet', label:'Salutations & politesse', words:[
    ['Szia','Salut / Coucou','familier, se dit aussi en partant'],
    ['Szervusz','Salut','un peu plus formel, vieilli'],
    ['Jó napot kívánok','Bonjour','formel'],
    ['Jó reggelt','Bon matin',''],
    ['Jó estét','Bonsoir',''],
    ['Jó éjszakát','Bonne nuit',''],
    ['Viszontlátásra','Au revoir','formel'],
    ['Viszlát','À bientôt','familier'],
    ['Köszönöm','Merci',''],
    ['Szívesen','De rien',''],
    ['Kérem','S’il vous plaît',''],
    ['Bocsánat','Pardon, excusez-moi',''],
    ['Igen','Oui',''],
    ['Nem','Non',''],
    ['Talán','Peut-être',''],
    ['Hogy vagy?','Comment vas-tu ?',''],
    ['Jól vagyok, köszönöm','Je vais bien, merci',''],
  ]},
  {id:'nombres', label:'Nombres', words:[
    ['nulla','zéro',''],['egy','un',''],['kettő','deux','aussi « két » devant un nom'],
    ['három','trois',''],['négy','quatre',''],['öt','cinq',''],['hat','six',''],
    ['hét','sept',''],['nyolc','huit',''],['kilenc','neuf',''],['tíz','dix',''],
    ['tizenegy','onze',''],['tizenkettő','douze',''],['tizenöt','quinze',''],
    ['húsz','vingt',''],['harminc','trente',''],['negyven','quarante',''],
    ['ötven','cinquante',''],['száz','cent',''],['ezer','mille',''],
  ]},
  {id:'famille', label:'Famille', words:[
    ['anya','mère',''],['apa','père',''],['szülők','parents',''],['gyerek','enfant',''],
    ['fiú','fils / garçon',''],['lány','fille',''],['testvér','frère ou sœur','terme générique'],
    ['báty','frère aîné',''],['öcs','frère cadet',''],['nővér','sœur aînée',''],
    ['húg','sœur cadette',''],['nagymama','grand-mère',''],['nagypapa','grand-père',''],
    ['férj','mari',''],['feleség','épouse',''],['család','famille',''],
  ]},
  {id:'nourriture', label:'Nourriture & boissons', words:[
    ['kenyér','pain',''],['víz','eau',''],['tej','lait',''],['kávé','café',''],
    ['tea','thé',''],['bor','vin',''],['sör','bière',''],['hús','viande',''],
    ['csirke','poulet',''],['hal','poisson',''],['sajt','fromage',''],['tojás','œuf',''],
    ['zöldség','légume',''],['gyümölcs','fruit',''],['alma','pomme',''],['leves','soupe',''],
    ['gulyás','goulasch',''],['cukor','sucre',''],['só','sel',''],['bors','poivre',''],
  ]},
  {id:'couleurs', label:'Couleurs', words:[
    ['piros','rouge',''],['kék','bleu',''],['zöld','vert',''],['sárga','jaune',''],
    ['fekete','noir',''],['fehér','blanc',''],['barna','marron',''],
    ['narancssárga','orange',''],['lila','violet',''],['rózsaszín','rose',''],
  ]},
  {id:'temps', label:'Jours & temps', words:[
    ['hétfő','lundi',''],['kedd','mardi',''],['szerda','mercredi',''],['csütörtök','jeudi',''],
    ['péntek','vendredi',''],['szombat','samedi',''],['vasárnap','dimanche',''],
    ['ma','aujourd’hui',''],['holnap','demain',''],['tegnap','hier',''],
    ['most','maintenant',''],['reggel','le matin',''],['este','le soir',''],
    ['hét','semaine','même mot que « sept »'],['hónap','mois',''],['év','année',''],
  ]},
  {id:'corps', label:'Corps humain', words:[
    ['fej','tête',''],['szem','œil',''],['fül','oreille',''],['orr','nez',''],
    ['száj','bouche',''],['kéz','main',''],['láb','jambe / pied',''],['szív','cœur',''],
    ['haj','cheveux',''],['hát','dos',''],['gyomor','estomac',''],['ujj','doigt',''],
  ]},
  {id:'maison', label:'Maison & objets', words:[
    ['ház','maison',''],['lakás','appartement',''],['szoba','pièce / chambre',''],
    ['konyha','cuisine',''],['ágy','lit',''],['asztal','table',''],['szék','chaise',''],
    ['ajtó','porte',''],['ablak','fenêtre',''],['kulcs','clé',''],['könyv','livre',''],
    ['telefon','téléphone',''],['táska','sac',''],['óra','montre / horloge',''],
  ]},
  {id:'verbes', label:'Verbes courants', words:[
    ['lenni','être',''],['enni','manger',''],['inni','boire',''],['menni','aller',''],
    ['jönni','venir',''],['látni','voir',''],['hallani','entendre',''],['tudni','savoir',''],
    ['szeretni','aimer',''],['akarni','vouloir',''],['csinálni','faire',''],['venni','acheter / prendre',''],
    ['adni','donner',''],['mondani','dire',''],['kérni','demander',''],['dolgozni','travailler',''],
    ['tanulni','apprendre',''],['aludni','dormir',''],
  ]},
  {id:'adjectifs', label:'Adjectifs courants', words:[
    ['nagy','grand',''],['kicsi','petit',''],['jó','bon',''],['rossz','mauvais',''],
    ['szép','beau',''],['csúnya','laid',''],['gyors','rapide',''],['lassú','lent',''],
    ['meleg','chaud',''],['hideg','froid',''],['új','neuf / nouveau',''],['régi','vieux / ancien',''],
    ['könnyű','facile / léger',''],['nehéz','difficile / lourd',''],
  ]},
  {id:'voyage', label:'Voyage & directions', words:[
    ['repülőtér','aéroport',''],['vonat','train',''],['busz','bus',''],['autó','voiture',''],
    ['állomás','gare / station',''],['jegy','billet',''],['út','route / chemin',''],
    ['térkép','carte',''],['balra','à gauche',''],['jobbra','à droite',''],
    ['egyenesen','tout droit',''],['közel','proche',''],['messze','loin',''],['szálloda','hôtel',''],
  ]},
  {id:'langues', label:'Nationalités & langues', words:[
    ['Franciaország','la France',''],['Magyarország','la Hongrie',''],
    ['francia','français(e)','nationalité ou adjectif'],['magyar','hongrois(e)','nationalité ou adjectif'],
    ['belga','belge',''],['svájci','suisse',''],['kanadai','canadien(ne)',''],
    ['Hol lakik?','Où habitez-vous ?','formel'],['Honnan jön?','D’où venez-vous ?','formel'],
    ['beszélek','je parle',''],['magyarul','en hongrois','suffixe -ul/-ül = « en langue X »'],
    ['franciául','en français',''],['angolul','en anglais',''],
    ['Beszélsz magyarul?','Tu parles hongrois ?','familier'],['Egy kicsit.','Un peu.',''],
  ]},
  {id:'heure', label:'L’heure', words:[
    ['Hány óra van?','Quelle heure est-il ?',''],['Egy óra van.','Il est une heure.',''],
    ['Öt óra van.','Il est cinq heures.',''],['Fél kettő.','Une heure et demie.','littéralement « demi-deux »'],
    ['Negyed három.','Deux heures et quart.','littéralement « quart de trois »'],
    ['Háromnegyed négy.','Quatre heures moins le quart.','littéralement « trois-quarts de quatre »'],
    ['délelőtt','le matin (avant midi)',''],['délután','l’après-midi',''],
    ['éjfél','minuit',''],['dél','midi',''],['perc','minute',''],['pontosan','précisément, pile',''],
  ]},
  {id:'meteo', label:'Météo', words:[
    ['idő / időjárás','le temps / la météo',''],['napos','ensoleillé',''],['esős','pluvieux',''],
    ['felhős','nuageux',''],['szeles','venteux',''],['havas','neigeux',''],
    ['Süt a nap.','Il fait soleil.',''],['Esik az eső.','Il pleut.',''],['Havazik.','Il neige.',''],
    ['Fúj a szél.','Il y a du vent.',''],['Meleg van.','Il fait chaud.',''],['Hideg van.','Il fait froid.',''],
    ['Hány fok van?','Combien de degrés fait-il ?',''],['fok','degré',''],
  ]},
  {id:'questions', label:'Mots interrogatifs', words:[
    ['Mi?','Quoi ?',''],['Ki?','Qui ?',''],['Hol?','Où ?','position'],['Hova?','Où ?','direction, vers où'],
    ['Honnan?','D’où ?',''],['Mikor?','Quand ?',''],['Miért?','Pourquoi ?',''],
    ['Hogyan? / Hogy?','Comment ?',''],['Milyen?','Comment est... ? / Quel type de... ?',''],
    ['Melyik?','Lequel ?',''],['Mennyi?','Combien ? (quantité)',''],['Hány?','Combien ? (nombre, à compter)',''],
  ]},
  {id:'academie_m4', label:'Académie — Module 4 (être, métiers, nationalités)', words:[
    ['vagyok','je suis','rappel — conjugaison de lenni'],
    ['vagy','tu es',''],
    ['van','il/elle est','ne s’emploie pas devant un nom ou adjectif attribut — voir Académie'],
    ['vagyunk','nous sommes',''],
    ['vagytok','vous êtes',''],
    ['vannak','ils/elles sont',''],
    ['tanár','professeur(e)',''],
    ['diák','étudiant(e) / élève',''],
    ['építész','architecte',''],
    ['színész','acteur / actrice',''],
    ['sportoló','sportif / sportive',''],
    ['programozó','programmeur / programmeuse',''],
    ['focista','footballeur',''],
    ['magyar','hongrois(e)','rappel'],
    ['francia','français(e)','rappel'],
    ['angol','anglais(e)',''],
    ['amerikai','américain(e)',''],
    ['olasz','italien(ne)',''],
    ['szerb','serbe',''],
    ['ukrán','ukrainien(ne)',''],
    ['német','allemand(e)',''],
    ['éves','...ans (âge)','suffixe : húsz éves = vingt ans'],
    ['Hány éves vagy?','Quel âge as-tu ?','familier'],
    ['Nem értem','Je ne comprends pas',''],
    ['Lassabban, legyen szíves','Plus lentement, s’il vous plaît','formel'],
    ['Lassabban, légy szíves','Plus lentement, s’il te plaît','familier'],
    ['Tudsz angolul?','Sais-tu parler anglais ?','familier'],
    ['Érdekes!','Intéressant !',''],
    ['persze / természetesen','bien sûr',''],
  ]},
  {id:'academie_m3', label:'Académie — Module 3 (salutations, présentation, métiers)', words:[
    ['Szia! / Sziasztok!','Salut ! (à une / plusieurs personnes)','familier'],
    ['Jó napot!','Bonjour !','formel'],
    ['Hogy hívnak?','Comment tu t’appelles ?','familier, litt. comment t’appelle-t-on'],
    ['Hogy hívják?','Comment vous appelez-vous ?','formel'],
    ['A nevem...','Je m’appelle... (litt. mon nom est...)',''],
    ['...vagyok','je suis... (avant un nom propre)','ex. Marie vagyok'],
    ['Örülök, hogy megismerhetlek','Ravi(e) de te rencontrer','familier'],
    ['Örülök, hogy megismerhetem','Ravi(e) de vous rencontrer','formel'],
    ['Én is','Moi aussi',''],
    ['Honnan jössz?','D’où viens-tu ?','familier'],
    ['Honnan jön?','D’où venez-vous ?','formel'],
    ['...ból / ...ből jövök','je viens de...','suffixe selon harmonie vocalique'],
    ['Hol laksz?','Où habites-tu ?','familier'],
    ['Hol lakik?','Où habitez-vous ?','formel'],
    ['...ban / ...ben lakom','j’habite à...','suffixe locatif (intérieur)'],
    ['Mennyi idős vagy?','Quel âge as-tu ?','variante de Hány éves vagy?'],
    ['Mi a foglalkozásod?','Quel est ton métier ?','familier'],
    ['Mi a foglalkozása?','Quel est votre métier ?','formel'],
    ['Mivel foglalkozol?','Que fais-tu (dans la vie) ?','familier'],
    ['Hol dolgozol?','Où travailles-tu ?','familier'],
    ['...nál / ...nél dolgozom','je travaille chez...','suffixe locatif (auprès de)'],
    ['orvos','médecin',''],
    ['ápoló','infirmier / infirmière',''],
    ['ügyvéd','avocat(e)',''],
    ['mérnök','ingénieur(e)',''],
    ['pincér / pincérnő','serveur / serveuse',''],
    ['szakács','cuisinier / cuisinière',''],
    ['eladó','vendeur / vendeuse',''],
    ['titkár / titkárnő','secrétaire',''],
    ['újságíró','journaliste',''],
    ['üzletember / üzletasszony','homme / femme d’affaires',''],
    ['nyugdíjas','retraité(e)',''],
    ['munkanélküli','au chômage',''],
    ['háztartásbeli','au foyer',''],
    ['Tetszik a munkád?','Ton travail te plaît-il ?','familier'],
    ['Szeretem a munkámat','J’aime mon travail',''],
    ['Nem szeretem a munkámat','Je n’aime pas mon travail',''],
    ['Szerintem...','Selon moi... / à mon avis...',''],
    ['Szerintem érdekes','À mon avis, c’est intéressant',''],
    ['Szerintem unalmas','À mon avis, c’est ennuyeux',''],
    ['nehéz','difficile',''],
    ['könnyű','facile',''],
    ['fárasztó','fatigant',''],
    ['jól fizetett','bien payé',''],
    ['Franciaország','France',''],
    ['Magyarország','Hongrie',''],
    ['Németország','Allemagne',''],
    ['Olaszország','Italie',''],
    ['Spanyolország','Espagne',''],
    ['Anglia','Angleterre',''],
    ['Amerika','Amérique',''],
    ['Oroszország','Russie',''],
    ['Lengyelország','Pologne',''],
    ['Ausztria','Autriche',''],
    ['Svájc','Suisse',''],
    ['Beszélsz franciául?','Parles-tu français ?','familier'],
    ['Beszél magyarul?','Parlez-vous hongrois ?','formel'],
    ['egy kicsit','un peu',''],
    ['folyékonyan','couramment',''],
    ['magyarul','en hongrois','adverbe de langue, suffixe -ul/-ül'],
    ['franciául','en français',''],
    ['angolul','en anglais',''],
    ['németül','en allemand',''],
  ]},
];


const VOWELS = [
  ['a','ɒ','court, arrondi — entre le « o » ouvert et le « a » français','alma (pomme)'],
  ['á','aː','long, ouvert — comme le « a » de « pâte »','árvíz (inondation)'],
  ['e','ɛ','ouvert — comme le « è » de « mère »','ember (personne)'],
  ['é','eː','long, fermé — comme le « é » de « été »','étel (nourriture)'],
  ['i','i','court — comme le « i » de « ici »','ital (boisson)'],
  ['í','iː','long — même son, tenu plus longtemps','híd (pont)'],
  ['o','o','court, fermé — comme le « o » de « vélo »','bor (vin)'],
  ['ó','oː','long — même son, tenu plus longtemps','óra (heure)'],
  ['ö','ø','court — comme le « eu » de « peu »','öt (cinq)'],
  ['ő','øː','long — même son, tenu plus longtemps','erő (force)'],
  ['u','u','court — comme le « ou » de « fou »','busz (bus)'],
  ['ú','uː','long — même son, tenu plus longtemps','út (route)'],
  ['ü','y','court — comme le « u » de « lune »','üveg (verre)'],
  ['ű','yː','long — même son, tenu plus longtemps','tűz (feu)'],
];

const MINPAIRS = [
  ['kor','kór','âge / maladie'],
  ['agy','ágy','cerveau / lit'],
  ['hat','hát','six / dos'],
  ['tör','tőr','il casse / poignard'],
];

const CONS = [
  ['s','ʃ','comme le « ch » de « chat »','sör (bière)'],
  ['sz','s','comme le « s » de « salade »','szép (beau)'],
  ['cs','tʃ','comme le « tch » de « tchèque »','csak (seulement)'],
  ['zs','ʒ','comme le « j » de « jour »','zsemle (petit pain)'],
  ['gy','ɟ','« d » palatalisé, proche de « dieu »','gyerek (enfant)'],
  ['ny','ɲ','comme le « gn » de « agneau »','nyár (été)'],
  ['ty','c','« t » palatalisé, proche de « tieu »','tyúk (poule)'],
  ['ly','j','se prononce comme un simple « y »','lyuk (trou)'],
  ['j','j','comme le « y » de « yaourt »','jó (bon)'],
  ['dzs','dʒ','comme le « j » anglais de « job »','dzsungel (jungle)'],
  ['h','h','aspiré, comme le « h » anglais','ház (maison)'],
];

const CASES = [
  {suf:'-t', name:'Accusatif (COD)', ex:'Látom a házat.', tr:'Je vois la maison.'},
  {suf:'-ban / -ben', name:'« dans » (position)', ex:'A házban vagyok.', tr:'Je suis dans la maison.'},
  {suf:'-ba / -be', name:'« vers l’intérieur de »', ex:'A házba megyek.', tr:'Je vais dans la maison.'},
  {suf:'-ból / -ből', name:'« hors de »', ex:'A házból jövök.', tr:'Je viens de la maison.'},
  {suf:'-on / -en / -ön', name:'« sur » (position)', ex:'Az asztalon van.', tr:'C’est sur la table.'},
  {suf:'-ra / -re', name:'« vers la surface de »', ex:'Az asztalra teszem.', tr:'Je le pose sur la table.'},
  {suf:'-ról / -ről', name:'« de dessus » / « au sujet de »', ex:'Az asztalról beszélünk.', tr:'On parle de la table.'},
  {suf:'-nál / -nél', name:'« chez, à côté de »', ex:'Péternél vagyok.', tr:'Je suis chez Péter.'},
  {suf:'-hoz / -hez / -höz', name:'« vers, chez » (direction)', ex:'Péterhez megyek.', tr:'Je vais chez Péter.'},
  {suf:'-tól / -től', name:'« depuis, de la part de »', ex:'Pétertől jövök.', tr:'Je viens de chez Péter.'},
  {suf:'-nak / -nek', name:'Datif — « à, pour »', ex:'Péternek adom.', tr:'Je le donne à Péter.'},
  {suf:'-val / -vel', name:'« avec »', ex:'Késsel eszem.', tr:'Je mange avec un couteau.'},
  {suf:'-ért', name:'« pour, à cause de »', ex:'A gyerekért teszem.', tr:'Je le fais pour l’enfant.'},
  {suf:'-ig', name:'« jusqu’à »', ex:'Hétig dolgozom.', tr:'Je travaille jusqu’à sept heures.'},
  {suf:'-ként', name:'« en tant que »', ex:'Tanárként dolgozik.', tr:'Il travaille en tant que professeur.'},
  {suf:'-kor', name:'« à » (heure)', ex:'Hétkor indulunk.', tr:'On part à sept heures.'},
];

const CONJ = {
  indef:[['látok','je vois (qqch.)'],['látsz','tu vois'],['lát','il/elle voit'],['látunk','nous voyons'],['láttok','vous voyez'],['látnak','ils/elles voient']],
  def:[['látom','je le/la vois'],['látod','tu le/la vois'],['látja','il/elle le/la voit'],['látjuk','nous le/la voyons'],['látjátok','vous le/la voyez'],['látják','ils/elles le/la voient']],
};

const LENNI = [['vagyok','je suis'],['vagy','tu es'],['van','il/elle est'],['vagyunk','nous sommes'],['vagytok','vous êtes'],['vannak','ils/elles sont']];
const POSS_HAZ = [['házam','ma maison'],['házad','ta maison'],['háza','sa maison'],['házunk','notre maison'],['házatok','votre maison'],['házuk','leur maison']];
const POSS_KERT = [['kertem','mon jardin'],['kerted','ton jardin'],['kertje','son jardin'],['kertünk','notre jardin'],['kertetek','votre jardin'],['kertjük','leur jardin']];

// Regular present-tense (indefinite) conjugation patterns, one example verb per vowel-harmony class
const VERB_PATTERNS = [
  {group:'Mots graves (a, á, o, ó, u, ú)', verb:'vár', meaning:'attendre', rows:[
    ['várok','j’attends'],['vársz','tu attends'],['vár','il/elle attend'],['várunk','nous attendons'],['vártok','vous attendez'],['várnak','ils/elles attendent']]},
  {group:'Mots aigus non arrondis (e, é, i, í)', verb:'kér', meaning:'demander', rows:[
    ['kérek','je demande'],['kérsz','tu demandes'],['kér','il/elle demande'],['kérünk','nous demandons'],['kértek','vous demandez'],['kérnek','ils/elles demandent']]},
  {group:'Mots aigus arrondis (ö, ő, ü, ű)', verb:'köszön', meaning:'saluer / remercier', rows:[
    ['köszönök','je salue'],['köszönsz','tu salues'],['köszön','il/elle salue'],['köszönünk','nous saluons'],['köszöntök','vous saluez'],['köszönnek','ils/elles saluent']]},
];

const DIALOGUES = [
  {title:'Se présenter', lines:[
    ['Szia! Hogy hívnak?','Salut ! Comment tu t’appelles ?'],
    ['A nevem Éva. És téged hogy hívnak?','Je m’appelle Éva. Et toi, comment tu t’appelles ?'],
    ['Engem Marknak hívnak. Örülök, hogy megismertelek.','Moi, on m’appelle Marc. Ravi de te rencontrer.'],
    ['Honnan jössz?','D’où viens-tu ?'],
    ['Franciaországból jövök, Párizsból.','Je viens de France, de Paris.'],
  ]},
  {title:'Au restaurant', lines:[
    ['Jó napot! Egy asztalt szeretnék két főre.','Bonjour ! Je voudrais une table pour deux.'],
    ['Mit szeretne inni?','Que voulez-vous boire ?'],
    ['Egy kávét kérek, legyen szíves.','Un café, s’il vous plaît.'],
    ['Készen állnak rendelni?','Êtes-vous prêts à commander ?'],
    ['Igen, a gulyáslevest kérem.','Oui, je prends la soupe goulasch.'],
    ['Fizetni szeretnék.','Je voudrais payer.'],
  ]},
  {title:'Demander son chemin', lines:[
    ['Elnézést, hol van a vasútállomás?','Excusez-moi, où est la gare ?'],
    ['Menjen egyenesen, majd forduljon jobbra.','Allez tout droit, puis tournez à droite.'],
    ['Messze van innen?','C’est loin d’ici ?'],
    ['Nem, csak öt perc gyalog.','Non, seulement cinq minutes à pied.'],
    ['Köszönöm szépen a segítséget!','Merci beaucoup pour votre aide !'],
  ]},
  {title:'Faire des courses', lines:[
    ['Mennyibe kerül ez a sajt?','Combien coûte ce fromage ?'],
    ['Ezer forintba kerül kilónként.','Ça coûte mille forints le kilo.'],
    ['Kérek egy fél kilót.','Je voudrais un demi-kilo.'],
    ['Van még valami, amit szeretne?','Il vous faut autre chose ?'],
    ['Nem, ez minden, köszönöm.','Non, c’est tout, merci.'],
  ]},
  {title:'Chez le médecin', lines:[
    ['Jól érzi magát?','Vous vous sentez bien ?'],
    ['Nem nagyon, fáj a fejem.','Pas trop, j’ai mal à la tête.'],
    ['Mióta fáj?','Depuis quand ça fait mal ?'],
    ['Tegnap óta.','Depuis hier.'],
    ['Igyon sok vizet és pihenjen.','Buvez beaucoup d’eau et reposez-vous.'],
  ]},
  {title:'Parler du temps qu’il fait', lines:[
    ['Milyen szép idő van ma!','Quel beau temps aujourd’hui !'],
    ['Igen, süt a nap. Tegnap esett az eső.','Oui, il fait soleil. Hier il pleuvait.'],
    ['Szereted a telet?','Tu aimes l’hiver ?'],
    ['Igen, szeretem, ha havazik.','Oui, j’aime quand il neige.'],
  ]},
];

/* ============================================================
   NIVEAUX CECRL & PARCOURS DE FORMATION
   Heures cumulées depuis zéro, cohérentes avec le barème CECRL usuel
   pour les langues « éloignées » du français (comme le hongrois).
   ============================================================ */
const LEVELS = [
  {id:'a1', label:'A1', name:'Faux débutant', hoursMin:100, hoursMax:150, cando:'Se présenter, commander à manger, utiliser les formules de politesse de base.'},
  {id:'a2', label:'A2', name:'Élémentaire', hoursMin:250, hoursMax:350, cando:'Gérer des situations simples du quotidien (achats, transports) et phrases courtes.'},
  {id:'b1', label:'B1', name:'Intermédiaire', hoursMin:500, hoursMax:650, cando:'Tenir une conversation courante, exprimer une opinion, voyager en autonomie.'},
  {id:'b2', label:'B2', name:'Intermédiaire supérieur', hoursMin:800, hoursMax:1100, cando:'Travailler en hongrois, comprendre des textes complexes, parler avec fluidité.'},
  {id:'c1', label:'C1', name:'Avancé', hoursMin:1200, hoursMax:1500, cando:'Maîtrise fluide des nuances, de l’argot et des concepts professionnels abstraits.'},
  {id:'c2', label:'C2', name:'Maîtrise', hoursMin:1800, hoursMax:1800, cando:'Niveau quasi-natif.'},
];

// Parcours A1 : ~136h réparties sur 13 unités (récits + quiz inclus), dans la fourchette 100-150h indiquée.
const CURRICULUM_A1 = [
  {id:'u0', title:'Prise en main : lire et prononcer le hongrois', hours:3,
    objectives:['Connaître l’alphabet hongrois et ses sons particuliers','Distinguer les voyelles courtes et longues','Savoir où placer l’accent tonique (toujours la 1ère syllabe)'],
    lesson:'Lire les règles ne prend qu’une dizaine de minutes — le vrai travail, c’est l’oreille. Ces heures se répartissent en courtes séances (10-15 min) où l’on ré-écoute chaque voyelle et chaque consonne du module Prononciation, où l’on répète à voix haute, et où l’on s’entraîne sur les paires minimales (kor/kór, agy/ágy...) jusqu’à bien entendre la différence. Ce n’est qu’un point de départ : l’oreille continue de s’affiner tout au long du parcours, à chaque mot écouté dans les unités suivantes.',
    links:[{type:'pron', label:'Ouvrir le module Prononciation'}]},
  {id:'u1', title:'Salutations et politesse', hours:9,
    objectives:['Saluer selon le moment de la journée et le degré de formalité','Remercier, s’excuser, dire oui/non','Distinguer le tutoiement (te) du vouvoiement (Ön)'],
    lesson:'Le hongrois distingue nettement le registre familier (<b>tegezés</b>, avec « te ») du registre formel (<b>magázás</b>, avec « Ön » ou « Maga ») — on ne les mélange pas dans une même phrase. « Szia » et « Hogy vagy? » sont pour les proches ; « Jó napot kívánok » et « Hogy van? » pour un commerçant, un collègue ou une personne âgée. Dans le doute, on commence toujours par le formel.',
    links:[{type:'vocab', cat:'greet', label:'Réviser le vocabulaire (Salutations)'}],
    story:{title:"Chapitre 1 — Premiers pas", lines:[
      ["Jó napot kívánok! Ön Éva?", "Bonjour ! Vous êtes Éva ?"],
      ["Igen, én vagyok. Szia, Marc!", "Oui, c'est moi. Salut, Marc !"],
      ["Szia! Hogy vagy?", "Salut ! Comment vas-tu ?"],
      ["Jól vagyok, köszönöm. És te?", "Je vais bien, merci. Et toi ?"],
      ["Köszönöm, jól.", "Merci, bien."],
      ["Szívesen! Gyere, megmutatom a szobát.", "De rien ! Viens, je te montre la chambre."],
      ["Köszönöm szépen. Viszlát ma este!", "Merci beaucoup. À ce soir !"]
    ], checks:[
      {q:"« Hogy vagy? » veut dire…", options:["Comment vas-tu ?", "Comment tu t'appelles ?", "Où habites-tu ?"], correct:0},
      {q:"« Jó napot kívánok » est plutôt…", options:["une formule formelle pour dire bonjour", "une façon de dire au revoir", "une façon de remercier"], correct:0}
    ]}},
  {id:'u2', title:'Se présenter en détail', hours:11,
    objectives:['Dire son nom, sa nationalité, d’où l’on vient','Dire quelles langues on parle, et à quel niveau'],
    lesson:'Pour dire dans quelle langue on s’exprime, le hongrois ajoute le suffixe <b>-ul / -ül</b> au nom de la langue : <b>magyarul</b> (en hongrois), <b>franciául</b> (en français), <b>angolul</b> (en anglais). C’est le même principe d’harmonie vocalique que pour les cas grammaticaux du module Grammaire — un suffixe, deux formes selon les voyelles du mot.',
    links:[{type:'vocab', cat:'langues', label:'Réviser le vocabulaire (Langues)'},{type:'dialogue', idx:0, label:'Revoir le dialogue « Se présenter »'}],
    story:{title:"Chapitre 2 — Une nouvelle rencontre", lines:[
      ["Marc, ő itt Kati, a barátnőm.", "Marc, voici Kati, mon amie."],
      ["Szia! Te vagy a francia barát?", "Salut ! C'est toi l'ami français ?"],
      ["Igen, francia vagyok, Párizsból jövök.", "Oui, je suis français, je viens de Paris."],
      ["Beszélsz magyarul?", "Tu parles hongrois ?"],
      ["Egy kicsit, tanulok!", "Un peu, j'apprends !"],
      ["Nagyszerű! És angolul beszélsz?", "Génial ! Et tu parles anglais ?"],
      ["Igen, angolul is beszélek.", "Oui, je parle aussi anglais."],
      ["Én csak magyarul és egy kicsit franciául beszélek.", "Moi je parle seulement hongrois et un peu français."]
    ], checks:[
      {q:"« Beszélsz magyarul? » veut dire…", options:["Tu parles hongrois ?", "Tu comprends le hongrois ?", "Tu apprends le hongrois ?"], correct:0},
      {q:"Comment dit-on « un peu » en hongrois ?", options:["Egy kicsit", "Nagyon", "Talán"], correct:0}
    ]}},
  {id:'u3', title:'Nombres et l’heure', hours:11,
    objectives:['Compter et utiliser les nombres au quotidien','Demander et donner l’heure'],
    lesson:'La façon hongroise de dire l’heure surprend au début : on ne compte pas les minutes après l’heure pleine, mais on annonce vers quelle heure on se dirige. <b>Fél kettő</b> (littéralement « demi-deux ») veut dire 1h30, pas 2h30 — on est à mi-chemin <em>vers</em> deux heures. De même, <b>negyed három</b> (« quart de trois ») est 2h15, et <b>háromnegyed négy</b> (« trois-quarts de quatre ») est 3h45.',
    links:[{type:'vocab', cat:'nombres', label:'Réviser le vocabulaire (Nombres)'},{type:'vocab', cat:'heure', label:'Réviser le vocabulaire (L’heure)'}],
    story:{title:"Chapitre 3 — Le train de 9h15", lines:[
      ["Hány óra van?", "Quelle heure est-il ?"],
      ["Nyolc óra van. A vonat negyed tízkor indul.", "Il est huit heures. Le train part à neuf heures et quart."],
      ["Tehát egy óránk van.", "Donc on a une heure."],
      ["Igen, pontosan. Ne késsünk el!", "Oui, exactement. Ne soyons pas en retard !"],
      ["Rendben, induljunk!", "D'accord, allons-y !"],
      ["Nézd, öt perc múlva itt a vonat.", "Regarde, dans cinq minutes le train est là."],
      ["Szuper, pontosan érkezünk!", "Super, on arrive pile à l'heure !"]
    ], checks:[
      {q:"« Hány óra van? » veut dire…", options:["Quelle heure est-il ?", "Quel jour sommes-nous ?", "À quelle heure pars-tu ?"], correct:0},
      {q:"Dans l'histoire, à quelle heure part le train ?", options:["9h15 (negyed tíz)", "8h00 (nyolc óra)", "10h30 (fél tizenegy)"], correct:0}
    ]}},
  {id:'u4', title:'Famille et description des personnes', hours:11,
    objectives:['Parler de sa famille','Décrire une personne physiquement','Exprimer la possession (« j’ai un/une... »)'],
    lesson:'Le hongrois n’a pas de verbe « avoir » séparé pour exprimer la possession : on utilise <b>van</b> (« il y a ») avec un suffixe possessif sur l’objet possédé. « J’ai un chien » se dit <b>Van egy kutyám</b> — littéralement « il y a un chien-à-moi ». C’est le même suffixe possessif que dans les tableaux házam / kertem du module Grammaire.',
    links:[{type:'vocab', cat:'famille', label:'Réviser le vocabulaire (Famille)'},{type:'vocab', cat:'corps', label:'Réviser le vocabulaire (Corps)'},{type:'grammar', label:'Revoir les suffixes possessifs'}],
    story:{title:"Chapitre 4 — La famille d'Éva", lines:[
      ["Nézd, ez itt az én családom.", "Regarde, voici ma famille."],
      ["Ki ez?", "Qui est-ce ?"],
      ["Ez az anyám és az apám.", "C'est ma mère et mon père."],
      ["És ő?", "Et elle ?"],
      ["Ő a nővérem, és ez itt az öcsém.", "Elle, c'est ma sœur aînée, et voici mon petit frère."],
      ["Szép család! Kék szemed van, mint az anyádnak.", "Belle famille ! Tu as les yeux bleus, comme ta mère."],
      ["Igen! És az apámnak barna haja van.", "Oui ! Et mon père a les cheveux marron."]
    ], checks:[
      {q:"« anyám » veut dire…", options:["ma mère", "mon père", "ma sœur"], correct:0},
      {q:"De quelle couleur sont les yeux d'Éva, selon Marc ?", options:["kék (bleus)", "zöld (verts)", "barna (marron)"], correct:0}
    ]}},
  {id:'u5', title:'Verbes et actions du quotidien', hours:17,
    objectives:['Conjuguer un verbe régulier au présent','Comprendre la distinction conjugaison définie / indéfinie','Utiliser les verbes les plus courants'],
    lesson:'Deux choses à mener de front ici. D’abord la conjugaison régulière au présent, qui suit l’harmonie vocalique comme les suffixes (trois familles de terminaisons selon le verbe). Ensuite la particularité la plus déroutante du hongrois pour un francophone : le verbe change de forme selon que son complément est défini ou non — « Látok egy kutyát » (je vois un chien) contre « Látom a kutyát » (je vois le chien). Les deux tableaux sont dans le module Grammaire.',
    links:[{type:'vocab', cat:'verbes', label:'Réviser le vocabulaire (Verbes)'},{type:'grammar', label:'Revoir la conjugaison'}],
    story:{title:"Chapitre 5 — Une journée bien remplie", lines:[
      ["Mit csinálsz ma?", "Qu'est-ce que tu fais aujourd'hui ?"],
      ["Reggel dolgozom, aztán tanulok magyarul.", "Le matin je travaille, ensuite j'étudie le hongrois."],
      ["Látsz egy kutyát az ablaknál?", "Tu vois un chien près de la fenêtre ?"],
      ["Igen, látok egy kutyát! Nagyon szép.", "Oui, je vois un chien ! Il est très beau."],
      ["És látod a kutyámat is? Az az enyém.", "Et tu vois aussi mon chien ? C'est le mien."],
      ["Igen, most már látom!", "Oui, maintenant je le vois !"],
      ["Szeretem őt nagyon.", "Je l'aime beaucoup."]
    ], checks:[
      {q:"« Látom a kutyát » veut dire…", options:["Je vois LE chien (précis)", "Je vois UN chien (non précis)", "Je n'ai pas de chien"], correct:0},
      {q:"Ici, « Szeretem » veut dire…", options:["je l'aime (lui/elle, précis)", "j'aime (en général)", "je le/la vois"], correct:0}
    ]}},
  {id:'u6', title:'Au café et au restaurant', hours:11,
    objectives:['Commander à manger et à boire poliment','Demander l’addition'],
    lesson:'Deux formules à connaître pour commander : <b>kérek</b> + nom à l’accusatif (« je demande, je prends ») est direct et courant ; <b>szeretnék</b> + nom à l’accusatif (« j’aimerais ») est un peu plus poli, à privilégier au restaurant. « Egy kávét kérek » et « Szeretnék egy kávét » sont tous deux corrects et se croisent dans le dialogue ci-dessous.',
    links:[{type:'vocab', cat:'nourriture', label:'Réviser le vocabulaire (Nourriture)'},{type:'dialogue', idx:1, label:'Revoir le dialogue « Au restaurant »'}],
    story:{title:"Chapitre 6 — Au café Central", lines:[
      ["Jó napot! Mit kérnek?", "Bonjour ! Que prenez-vous ?"],
      ["Egy kávét kérek, kérem.", "Un café, s'il vous plaît."],
      ["Nekem egy teát, és egy kis kenyeret sajttal.", "Pour moi un thé, et un peu de pain avec du fromage."],
      ["Isznak vizet is?", "Vous buvez de l'eau aussi ?"],
      ["Igen, kérünk egy üveg vizet.", "Oui, on prend une bouteille d'eau."],
      ["Milyen finom ez a sajt!", "Comme ce fromage est délicieux !"],
      ["Igen! És a kávé is nagyon jó.", "Oui ! Et le café aussi est très bon."],
      ["Kérnek még valamit?", "Vous voulez autre chose ?"],
      ["Nem, köszönjük, csak a számlát kérjük.", "Non, merci, juste l'addition s'il vous plaît."]
    ], checks:[
      {q:"« Egy kávét kérek » veut dire…", options:["Je prends un café", "J'aime le café", "Je n'aime pas le café"], correct:0},
      {q:"Que demande Éva à la fin, au serveur ?", options:["l'addition", "un dessert", "un autre café"], correct:0}
    ]}},
  {id:'u7', title:'Cas grammaticaux essentiels', hours:17,
    objectives:['Situer un lieu (dans, sur, chez)','Exprimer un déplacement (vers, depuis)','Reconnaître les six cas les plus fréquents'],
    lesson:'C’est le cœur grammatical du niveau A1 : les suffixes de lieu remplacent entièrement les prépositions françaises. -ban/-ben (dans, position), -ba/-be (vers l’intérieur), -ból/-ből (hors de), -on/-en/-ön (sur, position), -ra/-re (vers la surface), -nál/-nél (chez, à côté de) suffisent à situer la plupart des choses du quotidien. Le module Grammaire les présente tous avec un exemple.',
    links:[{type:'vocab', cat:'maison', label:'Réviser le vocabulaire (Maison)'},{type:'grammar', label:'Revoir les cas grammaticaux'}],
    story:{title:"Chapitre 7 — Où est la clé ?", lines:[
      ["Nem találom a kulcsot! Hol van?", "Je ne trouve pas la clé ! Où est-elle ?"],
      ["Nézd meg az asztalon.", "Regarde sur la table."],
      ["Nincs az asztalon. Talán a szobában van?", "Elle n'est pas sur la table. Elle est peut-être dans la chambre ?"],
      ["Nézd meg az ágy mellett, vagy a táskádban.", "Regarde à côté du lit, ou dans ton sac."],
      ["Megvan! A táskámban volt.", "Je l'ai trouvée ! Elle était dans mon sac."],
      ["Látod? Mindig a legutolsó helyen van, ahol keresed.", "Tu vois ? C'est toujours au dernier endroit où on cherche."]
    ], checks:[
      {q:"« az asztalon » veut dire…", options:["sur la table", "sous la table", "à côté de la table"], correct:0},
      {q:"« a szobában » veut dire…", options:["dans la chambre", "devant la chambre", "sur la chambre"], correct:0}
    ]}},
  {id:'u8', title:'Achats et argent', hours:9,
    objectives:['Demander un prix et comprendre la réponse','Faire des courses simples'],
    lesson:'La monnaie hongroise est le forint (Ft, HUF) ; les prix se disent avec le suffixe -ba/-be (« ça coûte tant ») : « Ezer forintba kerül » (ça coûte mille forints). Les grands nombres (száz = cent, ezer = mille) reviennent constamment dès qu’on parle d’argent.',
    links:[{type:'dialogue', idx:3, label:'Revoir le dialogue « Faire des courses »'},{type:'vocab', cat:'couleurs', label:'Réviser le vocabulaire (Couleurs)'}],
    story:{title:"Chapitre 8 — Au marché", lines:[
      ["Milyen szép piros almák!", "Comme ces pommes rouges sont belles !"],
      ["Igen, és nagyon édesek! Mennyit kér belőle?", "Oui, et très sucrées ! Vous en voulez combien ?"],
      ["Egy kilót kérek, legyen szíves.", "Un kilo, s'il vous plaît."],
      ["Van sárga banán is, friss.", "J'ai aussi des bananes jaunes, fraîches."],
      ["Jó, kérek egy kilót abból is.", "D'accord, j'en prends un kilo aussi."],
      ["Ez összesen ezerötszáz forint.", "Ça fait 1500 forints en tout."],
      ["Tessék, köszönöm szépen!", "Voilà, merci beaucoup !"]
    ], checks:[
      {q:"De quelle couleur sont les pommes que Marc achète ?", options:["piros (rouges)", "sárga (jaunes)", "zöld (vertes)"], correct:0},
      {q:"Combien coûte le tout, au total ?", options:["1500 forint", "1000 forint", "500 forint"], correct:0}
    ]}},
  {id:'u9', title:'Se déplacer', hours:9,
    objectives:['Demander son chemin','Comprendre des indications simples','Utiliser les moyens de transport'],
    lesson:'Pour les déplacements s’ajoutent trois cas supplémentaires à ceux de l’unité 7 : -hoz/-hez/-höz (vers quelqu’un/quelque chose), -tól/-től (depuis, en provenance de) et -ig (jusqu’à). Combinés à balra/jobbra/egyenesen (gauche/droite/tout droit), ils suffisent à suivre et donner un itinéraire simple.',
    links:[{type:'vocab', cat:'voyage', label:'Réviser le vocabulaire (Voyage)'},{type:'dialogue', idx:2, label:'Revoir le dialogue « Demander son chemin »'}],
    story:{title:"Chapitre 9 — Perdu dans la ville", lines:[
      ["Elnézést, hogyan jutok el a piachoz?", "Excusez-moi, comment j'arrive au marché ?"],
      ["Menjen egyenesen, majd forduljon balra.", "Allez tout droit, puis tournez à gauche."],
      ["Balra, értem. Messze van?", "À gauche, je comprends. C'est loin ?"],
      ["Nem, közel van, öt perc gyalog.", "Non, c'est proche, cinq minutes à pied."],
      ["És busszal is mehetek?", "Et je peux y aller en bus aussi ?"],
      ["Igen, a busz megállója ott van, a sarkon.", "Oui, l'arrêt de bus est là-bas, au coin."],
      ["Köszönöm szépen a segítséget!", "Merci beaucoup pour votre aide !"]
    ], checks:[
      {q:"« balra » veut dire…", options:["à gauche", "à droite", "tout droit"], correct:0},
      {q:"« messze » veut dire…", options:["loin", "proche", "tout droit"], correct:0}
    ]}},
  {id:'u10', title:'Santé et sensations', hours:9,
    objectives:['Dire comment on se sent','Exprimer un malaise simple','Nommer les parties du corps'],
    lesson:'« Fáj a fejem » (j’ai mal à la tête) suit la même logique possessive que « van egy kutyám » : littéralement « ma tête fait mal ». C’est une structure à retenir, très productive — elle marche avec n’importe quelle partie du corps du module Vocabulaire.',
    links:[{type:'vocab', cat:'corps', label:'Réviser le vocabulaire (Corps)'},{type:'dialogue', idx:4, label:'Revoir le dialogue « Chez le médecin »'}],
    story:{title:"Chapitre 10 — Pas en forme", lines:[
      ["Jól vagy? Sápadtnak tűnsz.", "Ça va ? Tu as l'air pâle."],
      ["Nem nagyon. Fáj a fejem és a torkom.", "Pas trop. J'ai mal à la tête et à la gorge."],
      ["Talán menjünk orvoshoz.", "Peut-être qu'on devrait aller chez le médecin."],
      ["Mi a panasza?", "Quel est votre problème ?"],
      ["Fáj a fejem, a torkom, és kicsit hidegrázok.", "J'ai mal à la tête, à la gorge, et j'ai un peu froid."],
      ["Igyon sok vizet és pihenjen.", "Buvez beaucoup d'eau et reposez-vous."],
      ["Köszönöm, doktor úr.", "Merci, docteur."]
    ], checks:[
      {q:"« Fáj a fejem » veut dire…", options:["J'ai mal à la tête", "J'ai mal au ventre", "Je suis fatigué"], correct:0},
      {q:"Que conseille le médecin à Marc ?", options:["Boire de l'eau et se reposer", "Prendre des médicaments", "Aller à l'hôpital"], correct:0}
    ]}},
  {id:'u11', title:'Météo et petit bavardage', hours:7,
    objectives:['Parler du temps qu’il fait','Faire la conversation sur un sujet léger'],
    lesson:'La météo est un excellent terrain d’entraînement parce que les phrases sont courtes et très répétitives : « Süt a nap » (il fait soleil), « Esik az eső » (il pleut), « Havazik » (il neige). De quoi tenir une petite conversation de politesse dès l’unité 1.',
    links:[{type:'vocab', cat:'meteo', label:'Réviser le vocabulaire (Météo)'},{type:'dialogue', idx:5, label:'Revoir le dialogue « Parler du temps »'}],
    story:{title:"Chapitre 11 — Un dimanche pluvieux", lines:[
      ["Milyen az idő ma?", "Quel temps fait-il aujourd'hui ?"],
      ["Esik az eső, és hideg van.", "Il pleut, et il fait froid."],
      ["Ó ne, azt hittem, süt a nap.", "Oh non, je pensais qu'il faisait soleil."],
      ["Holnap jobb lesz, napos lesz az idő.", "Demain ce sera mieux, le temps sera ensoleillé."],
      ["Remélem! Ma inkább otthon maradunk.", "J'espère ! Aujourd'hui on reste plutôt à la maison."],
      ["Jó ötlet. Teázunk és beszélgetünk.", "Bonne idée. On boit du thé et on discute."]
    ], checks:[
      {q:"« Esik az eső » veut dire…", options:["Il pleut", "Il neige", "Il fait du vent"], correct:0},
      {q:"Quel temps est annoncé pour demain ?", options:["napos (ensoleillé)", "esős (pluvieux)", "havas (neigeux)"], correct:0}
    ]}},
  {id:'u12', title:'Questions et récapitulatif', hours:12,
    objectives:['Poser des questions avec les mots interrogatifs','Réviser l’ensemble des acquis du niveau A1'],
    lesson:'Douze mots interrogatifs couvrent l’essentiel : mi/ki (quoi/qui), hol/hova/honnan (où, dans ses trois nuances), mikor/miért/hogyan (quand/pourquoi/comment), milyen/melyik (quel/lequel), mennyi/hány (combien, selon que c’est dénombrable ou non). Cette dernière unité est aussi l’occasion de repasser en revue tout ce qui précède avec le quiz.',
    links:[{type:'vocab', cat:'questions', label:'Réviser le vocabulaire (Questions)'},{type:'quiz', cat:'all', label:'S’entraîner (Quiz général)'}],
    story:{title:"Chapitre 12 — Le grand récapitulatif", lines:[
      ["Szóval, milyen volt a hét?", "Alors, comment était la semaine ?"],
      ["Nagyon jó volt! Mit tanultam? Mindent: köszönni, enni, venni, kérdezni...", "Très bien ! Qu'est-ce que j'ai appris ? Tout : saluer, manger, acheter, demander..."],
      ["És hány szót tanultál meg, mit gondolsz?", "Et combien de mots as-tu appris, à ton avis ?"],
      ["Nem tudom pontosan, de sokat! És melyik volt a kedvenc napom? A piac, azt hiszem.", "Je ne sais pas exactement, mais beaucoup ! Et quel a été mon jour préféré ? Le marché, je crois."],
      ["Miért pont a piac?", "Pourquoi justement le marché ?"],
      ["Mert ott beszéltem a legtöbbet magyarul!", "Parce que c'est là que j'ai le plus parlé hongrois !"],
      ["Hova mész most, vissza Franciaországba?", "Où vas-tu maintenant, retour en France ?"],
      ["Igen, de mikor jövök vissza, folytatjuk a leckéket, jó?", "Oui, mais quand je reviendrai, on continue les leçons, d'accord ?"],
      ["Persze! Viszlát hamarosan, Marc.", "Bien sûr ! À bientôt, Marc."]
    ], checks:[
      {q:"« Miért » veut dire…", options:["Pourquoi", "Comment", "Combien"], correct:0},
      {q:"« Hova mész? » veut dire…", options:["Où vas-tu ?", "D'où viens-tu ?", "Quand pars-tu ?"], correct:0},
      {q:"Quel a été le jour préféré de Marc, dans toute l'histoire ?", options:["Le marché (le jour des courses)", "Le café", "Chez le médecin"], correct:0}
    ]}}
];
