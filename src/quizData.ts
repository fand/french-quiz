import { Question } from './types';

export const questions: Question[] = [
  // Conjugation questions
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je suis',
    hint: 'être is an irregular verb'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous avons',
    hint: 'avoir is an irregular verb'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils vont',
    hint: 'aller is highly irregular'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'présent',
    subject: 'vous',
    correctAnswer: 'vous faites',
    hint: 'faire has an irregular stem'
  },
  {
    type: 'conjugation',
    verb: 'pouvoir',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle peut',
    hint: 'pouvoir is a modal verb'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu viens',
    hint: 'venir follows the pattern of tenir'
  },
  {
    type: 'conjugation',
    verb: 'parler',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'j\'ai parlé',
    hint: 'parler uses avoir as auxiliary'
  },
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous finissons',
    hint: '-ir verbs add -iss- in plural forms'
  },
  {
    type: 'conjugation',
    verb: 'prendre',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils prennent',
    hint: 'prendre doubles the n in plural forms'
  },
  {
    type: 'conjugation',
    verb: 'voir',
    tense: 'futur simple',
    subject: 'je',
    correctAnswer: 'je verrai',
    hint: 'voir has an irregular future stem: verr-'
  },

  // Gender agreement questions
  {
    type: 'gender-agreement',
    noun: 'la voiture',
    gender: 'feminine',
    adjective: 'nouveau',
    correctAnswer: 'la nouvelle voiture',
    hint: 'nouveau becomes nouvelle in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le chat',
    gender: 'masculine',
    adjective: 'blanc',
    correctAnswer: 'le chat blanc',
    hint: 'blanc stays the same in masculine'
  },
  {
    type: 'gender-agreement',
    noun: 'la maison',
    gender: 'feminine',
    adjective: 'grand',
    correctAnswer: 'la grande maison',
    hint: 'add -e for feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le livre',
    gender: 'masculine',
    adjective: 'intéressant',
    correctAnswer: 'le livre intéressant',
    hint: 'no change for masculine'
  },
  {
    type: 'gender-agreement',
    noun: 'la table',
    gender: 'feminine',
    adjective: 'beau',
    correctAnswer: 'la belle table',
    hint: 'beau becomes belle in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'la femme',
    gender: 'feminine',
    adjective: 'heureux',
    correctAnswer: 'la femme heureuse',
    hint: '-eux becomes -euse in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le garçon',
    gender: 'masculine',
    adjective: 'sportif',
    correctAnswer: 'le garçon sportif',
    hint: 'no change for masculine'
  },
  {
    type: 'gender-agreement',
    noun: 'la fille',
    gender: 'feminine',
    adjective: 'sportif',
    correctAnswer: 'la fille sportive',
    hint: '-if becomes -ive in feminine'
  },

  // Number agreement questions
  {
    type: 'number-agreement',
    noun: 'les chats',
    number: 'plural',
    adjective: 'noir',
    correctAnswer: 'les chats noirs',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les maisons',
    number: 'plural',
    adjective: 'grande',
    correctAnswer: 'les grandes maisons',
    hint: 'add -s for plural (already feminine with -e)'
  },
  {
    type: 'number-agreement',
    noun: 'le cheval',
    number: 'singular',
    adjective: 'rapide',
    correctAnswer: 'le cheval rapide',
    hint: 'no change for singular'
  },
  {
    type: 'number-agreement',
    noun: 'les chevaux',
    number: 'plural',
    adjective: 'rapide',
    correctAnswer: 'les chevaux rapides',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les hommes',
    number: 'plural',
    adjective: 'nouveau',
    correctAnswer: 'les nouveaux hommes',
    hint: '-eau becomes -eaux in plural'
  },
  {
    type: 'number-agreement',
    noun: 'les femmes',
    number: 'plural',
    adjective: 'belle',
    correctAnswer: 'les belles femmes',
    hint: 'add -s for plural (already feminine)'
  },
  {
    type: 'number-agreement',
    noun: 'les enfants',
    number: 'plural',
    adjective: 'intelligent',
    correctAnswer: 'les enfants intelligents',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'le jardin',
    number: 'singular',
    adjective: 'beau',
    correctAnswer: 'le beau jardin',
    hint: 'no change for singular'
  },

  // Additional conjugation questions - present tense
  {
    type: 'conjugation',
    verb: 'manger',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je mange',
    hint: '-ger verbs add e before -ons'
  },
  {
    type: 'conjugation',
    verb: 'commencer',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous commençons',
    hint: '-cer verbs add ç before -ons'
  },
  {
    type: 'conjugation',
    verb: 'devoir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu dois',
    hint: 'devoir is irregular'
  },
  {
    type: 'conjugation',
    verb: 'savoir',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils savent',
    hint: 'savoir is irregular'
  },
  {
    type: 'conjugation',
    verb: 'vouloir',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle veut',
    hint: 'vouloir is irregular'
  },
  {
    type: 'conjugation',
    verb: 'mettre',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je mets',
    hint: 'mettre has one t in singular'
  },
  {
    type: 'conjugation',
    verb: 'dire',
    tense: 'présent',
    subject: 'vous',
    correctAnswer: 'vous dites',
    hint: 'dire has irregular vous form'
  },
  {
    type: 'conjugation',
    verb: 'écrire',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous écrivons',
    hint: 'écrire changes to écriv- stem'
  },
  {
    type: 'conjugation',
    verb: 'lire',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu lis',
    hint: 'lire is regular in singular'
  },
  {
    type: 'conjugation',
    verb: 'boire',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils boivent',
    hint: 'boire has buv-/boiv- stems'
  },
  {
    type: 'conjugation',
    verb: 'connaître',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je connais',
    hint: 'connaître drops the î in conjugation'
  },
  {
    type: 'conjugation',
    verb: 'recevoir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous recevons',
    hint: 'recevoir changes c to ç before o'
  },
  {
    type: 'conjugation',
    verb: 'vivre',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle vit',
    hint: 'vivre follows regular -re pattern'
  },
  {
    type: 'conjugation',
    verb: 'croire',
    tense: 'présent',
    subject: 'vous',
    correctAnswer: 'vous croyez',
    hint: 'croire changes oi to oy in some forms'
  },
  {
    type: 'conjugation',
    verb: 'sortir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je sors',
    hint: 'sortir drops the t in singular'
  },

  // Passé composé questions
  {
    type: 'conjugation',
    verb: 'arriver',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle est arrivée',
    hint: 'arriver uses être and agrees'
  },
  {
    type: 'conjugation',
    verb: 'partir',
    tense: 'passé composé',
    subject: 'nous',
    correctAnswer: 'nous sommes partis',
    hint: 'partir uses être as auxiliary'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'passé composé',
    subject: 'tu',
    correctAnswer: 'tu as fait',
    hint: 'faire has irregular past participle'
  },
  {
    type: 'conjugation',
    verb: 'prendre',
    tense: 'passé composé',
    subject: 'ils',
    correctAnswer: 'ils ont pris',
    hint: 'prendre → pris'
  },
  {
    type: 'conjugation',
    verb: 'voir',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'j\'ai vu',
    hint: 'voir → vu'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle est venue',
    hint: 'venir uses être and agrees'
  },
  {
    type: 'conjugation',
    verb: 'mourir',
    tense: 'passé composé',
    subject: 'il',
    correctAnswer: 'il est mort',
    hint: 'mourir uses être'
  },
  {
    type: 'conjugation',
    verb: 'naître',
    tense: 'passé composé',
    subject: 'je',
    correctAnswer: 'je suis né',
    hint: 'naître uses être'
  },
  {
    type: 'conjugation',
    verb: 'devenir',
    tense: 'passé composé',
    subject: 'elles',
    correctAnswer: 'elles sont devenues',
    hint: 'devenir uses être and agrees'
  },
  {
    type: 'conjugation',
    verb: 'ouvrir',
    tense: 'passé composé',
    subject: 'nous',
    correctAnswer: 'nous avons ouvert',
    hint: 'ouvrir → ouvert'
  },

  // Imparfait questions
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'imparfait',
    subject: 'je',
    correctAnswer: 'j\'étais',
    hint: 'être has irregular imparfait stem'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'imparfait',
    subject: 'nous',
    correctAnswer: 'nous avions',
    hint: 'avoir imparfait: av- + endings'
  },
  {
    type: 'conjugation',
    verb: 'parler',
    tense: 'imparfait',
    subject: 'ils',
    correctAnswer: 'ils parlaient',
    hint: 'imparfait ending: -aient for ils'
  },
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'imparfait',
    subject: 'tu',
    correctAnswer: 'tu finissais',
    hint: 'finir keeps -iss- in imparfait'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'imparfait',
    subject: 'vous',
    correctAnswer: 'vous faisiez',
    hint: 'faire imparfait: fais- stem'
  },

  // Futur simple questions
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'futur simple',
    subject: 'je',
    correctAnswer: 'je serai',
    hint: 'être futur: ser- stem'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'futur simple',
    subject: 'ils',
    correctAnswer: 'ils auront',
    hint: 'avoir futur: aur- stem'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'futur simple',
    subject: 'nous',
    correctAnswer: 'nous irons',
    hint: 'aller futur: ir- stem'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'futur simple',
    subject: 'tu',
    correctAnswer: 'tu feras',
    hint: 'faire futur: fer- stem'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'futur simple',
    subject: 'elle',
    correctAnswer: 'elle viendra',
    hint: 'venir futur: viendr- stem'
  },

  // Conditionnel questions
  {
    type: 'conjugation',
    verb: 'pouvoir',
    tense: 'conditionnel',
    subject: 'je',
    correctAnswer: 'je pourrais',
    hint: 'pouvoir conditionnel: pourr- stem'
  },
  {
    type: 'conjugation',
    verb: 'vouloir',
    tense: 'conditionnel',
    subject: 'tu',
    correctAnswer: 'tu voudrais',
    hint: 'vouloir conditionnel: voudr- stem'
  },
  {
    type: 'conjugation',
    verb: 'devoir',
    tense: 'conditionnel',
    subject: 'nous',
    correctAnswer: 'nous devrions',
    hint: 'devoir conditionnel: devr- stem'
  },

  // More gender agreement questions
  {
    type: 'gender-agreement',
    noun: 'la rue',
    gender: 'feminine',
    adjective: 'long',
    correctAnswer: 'la longue rue',
    hint: 'long → longue in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le problème',
    gender: 'masculine',
    adjective: 'difficile',
    correctAnswer: 'le problème difficile',
    hint: 'difficile doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la solution',
    gender: 'feminine',
    adjective: 'simple',
    correctAnswer: 'la solution simple',
    hint: 'simple doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le travail',
    gender: 'masculine',
    adjective: 'dur',
    correctAnswer: 'le dur travail',
    hint: 'dur stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la vie',
    gender: 'feminine',
    adjective: 'dur',
    correctAnswer: 'la dure vie',
    hint: 'dur → dure in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le château',
    gender: 'masculine',
    adjective: 'ancien',
    correctAnswer: 'l\'ancien château',
    hint: 'ancien before noun means former'
  },
  {
    type: 'gender-agreement',
    noun: 'la ville',
    gender: 'feminine',
    adjective: 'ancien',
    correctAnswer: 'l\'ancienne ville',
    hint: 'ancien → ancienne in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le pays',
    gender: 'masculine',
    adjective: 'européen',
    correctAnswer: 'le pays européen',
    hint: 'européen stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la nation',
    gender: 'feminine',
    adjective: 'européen',
    correctAnswer: 'la nation européenne',
    hint: 'européen → européenne'
  },
  {
    type: 'gender-agreement',
    noun: 'le professeur',
    gender: 'masculine',
    adjective: 'sérieux',
    correctAnswer: 'le professeur sérieux',
    hint: '-eux stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la personne',
    gender: 'feminine',
    adjective: 'sérieux',
    correctAnswer: 'la personne sérieuse',
    hint: '-eux → -euse'
  },
  {
    type: 'gender-agreement',
    noun: 'le film',
    gender: 'masculine',
    adjective: 'américain',
    correctAnswer: 'le film américain',
    hint: 'américain stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la série',
    gender: 'feminine',
    adjective: 'américain',
    correctAnswer: 'la série américaine',
    hint: '-ain → -aine'
  },
  {
    type: 'gender-agreement',
    noun: 'le restaurant',
    gender: 'masculine',
    adjective: 'cher',
    correctAnswer: 'le restaurant cher',
    hint: 'cher stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la boutique',
    gender: 'feminine',
    adjective: 'cher',
    correctAnswer: 'la boutique chère',
    hint: 'cher → chère'
  },
  {
    type: 'gender-agreement',
    noun: 'le musée',
    gender: 'masculine',
    adjective: 'moderne',
    correctAnswer: 'le musée moderne',
    hint: 'moderne doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la galerie',
    gender: 'feminine',
    adjective: 'moderne',
    correctAnswer: 'la galerie moderne',
    hint: 'moderne doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le parc',
    gender: 'masculine',
    adjective: 'public',
    correctAnswer: 'le parc public',
    hint: 'public stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la place',
    gender: 'feminine',
    adjective: 'public',
    correctAnswer: 'la place publique',
    hint: 'public → publique'
  },
  {
    type: 'gender-agreement',
    noun: 'le marché',
    gender: 'masculine',
    adjective: 'local',
    correctAnswer: 'le marché local',
    hint: 'local stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la production',
    gender: 'feminine',
    adjective: 'local',
    correctAnswer: 'la production locale',
    hint: 'local → locale'
  },

  // More number agreement questions
  {
    type: 'number-agreement',
    noun: 'les arbres',
    number: 'plural',
    adjective: 'vert',
    correctAnswer: 'les arbres verts',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les fleurs',
    number: 'plural',
    adjective: 'rouge',
    correctAnswer: 'les fleurs rouges',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les oiseaux',
    number: 'plural',
    adjective: 'petit',
    correctAnswer: 'les petits oiseaux',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les montagnes',
    number: 'plural',
    adjective: 'haute',
    correctAnswer: 'les hautes montagnes',
    hint: 'add -s (already feminine)'
  },
  {
    type: 'number-agreement',
    noun: 'les lacs',
    number: 'plural',
    adjective: 'profond',
    correctAnswer: 'les lacs profonds',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les rivières',
    number: 'plural',
    adjective: 'longue',
    correctAnswer: 'les longues rivières',
    hint: 'add -s (already feminine)'
  },
  {
    type: 'number-agreement',
    noun: 'les journaux',
    number: 'plural',
    adjective: 'national',
    correctAnswer: 'les journaux nationaux',
    hint: '-al → -aux in plural'
  },
  {
    type: 'number-agreement',
    noun: 'les animaux',
    number: 'plural',
    adjective: 'sauvage',
    correctAnswer: 'les animaux sauvages',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les châteaux',
    number: 'plural',
    adjective: 'royal',
    correctAnswer: 'les châteaux royaux',
    hint: '-al → -aux'
  },
  {
    type: 'number-agreement',
    noun: 'les bateaux',
    number: 'plural',
    adjective: 'blanc',
    correctAnswer: 'les bateaux blancs',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les travaux',
    number: 'plural',
    adjective: 'manuel',
    correctAnswer: 'les travaux manuels',
    hint: '-el → -els'
  },
  {
    type: 'number-agreement',
    noun: 'les jeux',
    number: 'plural',
    adjective: 'dangereux',
    correctAnswer: 'les jeux dangereux',
    hint: '-eux doesn\'t change in plural'
  },
  {
    type: 'number-agreement',
    noun: 'les feux',
    number: 'plural',
    adjective: 'rouge',
    correctAnswer: 'les feux rouges',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les voeux',
    number: 'plural',
    adjective: 'sincère',
    correctAnswer: 'les voeux sincères',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les cieux',
    number: 'plural',
    adjective: 'bleu',
    correctAnswer: 'les cieux bleus',
    hint: 'add -s for plural'
  },

  // Mixed advanced questions
  {
    type: 'conjugation',
    verb: 'se lever',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je me lève',
    hint: 'reflexive verb + è in je form'
  },
  {
    type: 'conjugation',
    verb: 'se coucher',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle s\'est couchée',
    hint: 'reflexive uses être and agrees'
  },
  {
    type: 'conjugation',
    verb: 's\'appeler',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu t\'appelles',
    hint: 'double l in tu form'
  },
  {
    type: 'conjugation',
    verb: 'acheter',
    tense: 'présent',
    subject: 'j\'',
    correctAnswer: 'j\'achète',
    hint: 'e → è before silent ending'
  },
  {
    type: 'conjugation',
    verb: 'préférer',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous préférons',
    hint: 'é stays in nous form'
  },
  {
    type: 'conjugation',
    verb: 'espérer',
    tense: 'futur simple',
    subject: 'tu',
    correctAnswer: 'tu espéreras',
    hint: 'regular future formation'
  },
  {
    type: 'conjugation',
    verb: 'jeter',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle jette',
    hint: 'double t before silent e'
  },
  {
    type: 'conjugation',
    verb: 'appeler',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils appellent',
    hint: 'double l before silent ending'
  },
  {
    type: 'conjugation',
    verb: 'envoyer',
    tense: 'futur simple',
    subject: 'j\'',
    correctAnswer: 'j\'enverrai',
    hint: 'envoyer futur: enverr- stem'
  },
  {
    type: 'conjugation',
    verb: 'payer',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous payons',
    hint: 'y → y (no change) in nous'
  },
  {
    type: 'conjugation',
    verb: 'essayer',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu essaies',
    hint: 'y → i before silent e'
  },
  {
    type: 'conjugation',
    verb: 'employer',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils emploient',
    hint: 'y → i before silent ending'
  },
  {
    type: 'conjugation',
    verb: 'nettoyer',
    tense: 'imparfait',
    subject: 'vous',
    correctAnswer: 'vous nettoyiez',
    hint: 'y + iez ending'
  },
  {
    type: 'conjugation',
    verb: 'tenir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je tiens',
    hint: 'tenir like venir'
  },
  {
    type: 'conjugation',
    verb: 'obtenir',
    tense: 'passé composé',
    subject: 'nous',
    correctAnswer: 'nous avons obtenu',
    hint: 'obtenir uses avoir'
  },
  {
    type: 'conjugation',
    verb: 'appartenir',
    tense: 'présent',
    subject: 'cela',
    correctAnswer: 'cela appartient',
    hint: 'appartenir conjugates like tenir'
  },
  {
    type: 'conjugation',
    verb: 'courir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je cours',
    hint: 'courir has single r in present'
  },
  {
    type: 'conjugation',
    verb: 'dormir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu dors',
    hint: 'dormir drops m in singular'
  },
  {
    type: 'conjugation',
    verb: 'servir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous servons',
    hint: 'servir without -iss-'
  },
  {
    type: 'conjugation',
    verb: 'mentir',
    tense: 'présent',
    subject: 'il',
    correctAnswer: 'il ment',
    hint: 'mentir drops t in singular'
  },
  {
    type: 'conjugation',
    verb: 'sentir',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'j\'ai senti',
    hint: 'sentir uses avoir'
  },
  {
    type: 'conjugation',
    verb: 'offrir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu offres',
    hint: 'offrir conjugates like -er verb'
  },
  {
    type: 'conjugation',
    verb: 'souffrir',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle a souffert',
    hint: 'souffrir → souffert'
  },
  {
    type: 'conjugation',
    verb: 'découvrir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous découvrons',
    hint: 'découvrir like ouvrir'
  },
  {
    type: 'conjugation',
    verb: 'suivre',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je suis',
    hint: 'suivre: je suis (not être!)'
  },
  {
    type: 'conjugation',
    verb: 'vivre',
    tense: 'passé composé',
    subject: 'ils',
    correctAnswer: 'ils ont vécu',
    hint: 'vivre → vécu'
  },
  {
    type: 'conjugation',
    verb: 'conduire',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu conduis',
    hint: 'conduire regular in singular'
  },
  {
    type: 'conjugation',
    verb: 'traduire',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous traduisons',
    hint: 'traduire like conduire'
  },
  {
    type: 'conjugation',
    verb: 'produire',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle a produit',
    hint: 'produire → produit'
  },
  {
    type: 'conjugation',
    verb: 'plaire',
    tense: 'présent',
    subject: 'cela',
    correctAnswer: 'cela plaît',
    hint: 'plaire takes î in 3rd person'
  },
  {
    type: 'conjugation',
    verb: 'se taire',
    tense: 'présent',
    subject: 'vous',
    correctAnswer: 'vous vous taisez',
    hint: 'se taire: reflexive'
  },
  {
    type: 'conjugation',
    verb: 'craindre',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je crains',
    hint: 'craindre: -aindre → -ains'
  },
  {
    type: 'conjugation',
    verb: 'peindre',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils peignent',
    hint: 'peindre: -eindre → -eignent'
  },
  {
    type: 'conjugation',
    verb: 'joindre',
    tense: 'passé composé',
    subject: 'nous',
    correctAnswer: 'nous avons joint',
    hint: 'joindre → joint'
  },
  {
    type: 'conjugation',
    verb: 'résoudre',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu résous',
    hint: 'résoudre drops d in singular'
  },
  {
    type: 'conjugation',
    verb: 'coudre',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle coud',
    hint: 'coudre regular pattern'
  },
  {
    type: 'conjugation',
    verb: 'battre',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je bats',
    hint: 'battre: one t in singular'
  },
  {
    type: 'conjugation',
    verb: 'permettre',
    tense: 'passé composé',
    subject: 'tu',
    correctAnswer: 'tu as permis',
    hint: 'permettre → permis'
  },
  {
    type: 'conjugation',
    verb: 'promettre',
    tense: 'futur simple',
    subject: 'je',
    correctAnswer: 'je promettrai',
    hint: 'promettre regular future'
  },
  {
    type: 'conjugation',
    verb: 'rompre',
    tense: 'présent',
    subject: 'il',
    correctAnswer: 'il rompt',
    hint: 'rompre keeps t in 3rd person'
  },
  {
    type: 'conjugation',
    verb: 'vaincre',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous vainquons',
    hint: 'vaincre: c → qu before ons'
  },
  {
    type: 'conjugation',
    verb: 'convaincre',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'j\'ai convaincu',
    hint: 'convaincre → convaincu'
  }
];