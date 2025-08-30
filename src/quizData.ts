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
  },

  // Additional conjugation questions - subjunctive
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'subjonctif présent',
    subject: 'que je',
    correctAnswer: 'que je sois',
    hint: 'être subjunctive is irregular'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'subjonctif présent',
    subject: 'que tu',
    correctAnswer: 'que tu aies',
    hint: 'avoir subjunctive is irregular'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'subjonctif présent',
    subject: 'qu\'il',
    correctAnswer: 'qu\'il aille',
    hint: 'aller subjunctive is irregular'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'subjonctif présent',
    subject: 'que nous',
    correctAnswer: 'que nous fassions',
    hint: 'faire subjunctive stem: fass-'
  },
  {
    type: 'conjugation',
    verb: 'pouvoir',
    tense: 'subjonctif présent',
    subject: 'que vous',
    correctAnswer: 'que vous puissiez',
    hint: 'pouvoir subjunctive: puiss-'
  },
  {
    type: 'conjugation',
    verb: 'savoir',
    tense: 'subjonctif présent',
    subject: 'qu\'ils',
    correctAnswer: 'qu\'ils sachent',
    hint: 'savoir subjunctive: sach-'
  },
  {
    type: 'conjugation',
    verb: 'vouloir',
    tense: 'subjonctif présent',
    subject: 'que je',
    correctAnswer: 'que je veuille',
    hint: 'vouloir subjunctive: veuill-/voul-'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'subjonctif présent',
    subject: 'qu\'elle',
    correctAnswer: 'qu\'elle vienne',
    hint: 'venir subjunctive: vienn-/ven-'
  },
  {
    type: 'conjugation',
    verb: 'prendre',
    tense: 'subjonctif présent',
    subject: 'que nous',
    correctAnswer: 'que nous prenions',
    hint: 'prendre subjunctive: pren-'
  },
  {
    type: 'conjugation',
    verb: 'boire',
    tense: 'subjonctif présent',
    subject: 'que tu',
    correctAnswer: 'que tu boives',
    hint: 'boire subjunctive: boiv-/buv-'
  },

  // More irregular verbs in present
  {
    type: 'conjugation',
    verb: 'rire',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous rions',
    hint: 'rire: irregular stem'
  },
  {
    type: 'conjugation',
    verb: 'sourire',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle sourit',
    hint: 'sourire like rire'
  },
  {
    type: 'conjugation',
    verb: 'mourir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je meurs',
    hint: 'mourir: irregular stem'
  },
  {
    type: 'conjugation',
    verb: 'acquérir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu acquiers',
    hint: 'acquérir: change é to ie'
  },
  {
    type: 'conjugation',
    verb: 'conquérir',
    tense: 'présent',
    subject: 'il',
    correctAnswer: 'il conquiert',
    hint: 'conquérir like acquérir'
  },
  {
    type: 'conjugation',
    verb: 'cueillir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je cueille',
    hint: 'cueillir conjugates like -er verb'
  },
  {
    type: 'conjugation',
    verb: 'accueillir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous accueillons',
    hint: 'accueillir like cueillir'
  },
  {
    type: 'conjugation',
    verb: 'recueillir',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'j\'ai recueilli',
    hint: 'recueillir → recueilli'
  },
  {
    type: 'conjugation',
    verb: 'bouillir',
    tense: 'présent',
    subject: 'il',
    correctAnswer: 'il bout',
    hint: 'bouillir: irregular stem'
  },
  {
    type: 'conjugation',
    verb: 'fuir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu fuis',
    hint: 'fuir: regular in singular'
  },
  {
    type: 'conjugation',
    verb: 's\'enfuir',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle s\'est enfuie',
    hint: 'reflexive with être + agreement'
  },
  {
    type: 'conjugation',
    verb: 'haïr',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je hais',
    hint: 'haïr loses ï in singular'
  },
  {
    type: 'conjugation',
    verb: 'gésir',
    tense: 'présent',
    subject: 'il',
    correctAnswer: 'il gît',
    hint: 'gésir: defective verb'
  },
  {
    type: 'conjugation',
    verb: 'ouïr',
    tense: 'présent',
    subject: 'j\'',
    correctAnswer: 'j\'ois',
    hint: 'ouïr: archaic verb'
  },
  {
    type: 'conjugation',
    verb: 'choir',
    tense: 'passé composé',
    subject: 'il',
    correctAnswer: 'il est chu',
    hint: 'choir: rare, uses être'
  },

  // More passé composé with être
  {
    type: 'conjugation',
    verb: 'entrer',
    tense: 'passé composé',
    subject: 'nous',
    correctAnswer: 'nous sommes entrés',
    hint: 'entrer uses être'
  },
  {
    type: 'conjugation',
    verb: 'sortir',
    tense: 'passé composé',
    subject: 'elles',
    correctAnswer: 'elles sont sorties',
    hint: 'sortir uses être + agreement'
  },
  {
    type: 'conjugation',
    verb: 'monter',
    tense: 'passé composé',
    subject: 'tu',
    correctAnswer: 'tu es monté',
    hint: 'monter uses être'
  },
  {
    type: 'conjugation',
    verb: 'descendre',
    tense: 'passé composé',
    subject: 'je',
    correctAnswer: 'je suis descendu',
    hint: 'descendre uses être'
  },
  {
    type: 'conjugation',
    verb: 'retourner',
    tense: 'passé composé',
    subject: 'il',
    correctAnswer: 'il est retourné',
    hint: 'retourner uses être'
  },
  {
    type: 'conjugation',
    verb: 'rester',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle est restée',
    hint: 'rester uses être + agreement'
  },
  {
    type: 'conjugation',
    verb: 'tomber',
    tense: 'passé composé',
    subject: 'ils',
    correctAnswer: 'ils sont tombés',
    hint: 'tomber uses être'
  },
  {
    type: 'conjugation',
    verb: 'passer',
    tense: 'passé composé',
    subject: 'nous',
    correctAnswer: 'nous sommes passés',
    hint: 'passer can use être (intransitive)'
  },
  {
    type: 'conjugation',
    verb: 'rentrer',
    tense: 'passé composé',
    subject: 'vous',
    correctAnswer: 'vous êtes rentrés',
    hint: 'rentrer uses être'
  },
  {
    type: 'conjugation',
    verb: 'intervenir',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'je suis intervenu',
    hint: 'intervenir uses être'
  },
  {
    type: 'conjugation',
    verb: 'parvenir',
    tense: 'passé composé',
    subject: 'tu',
    correctAnswer: 'tu es parvenu',
    hint: 'parvenir uses être'
  },
  {
    type: 'conjugation',
    verb: 'survenir',
    tense: 'passé composé',
    subject: 'il',
    correctAnswer: 'il est survenu',
    hint: 'survenir uses être'
  },
  {
    type: 'conjugation',
    verb: 'advenir',
    tense: 'passé composé',
    subject: 'il',
    correctAnswer: 'il est advenu',
    hint: 'advenir uses être (impersonal)'
  },
  {
    type: 'conjugation',
    verb: 'échoir',
    tense: 'passé composé',
    subject: 'il',
    correctAnswer: 'il est échu',
    hint: 'échoir uses être (rare)'
  },

  // More reflexive verbs
  {
    type: 'conjugation',
    verb: 'se laver',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu te laves',
    hint: 'reflexive pronoun te'
  },
  {
    type: 'conjugation',
    verb: 'se brosser',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous nous brossons',
    hint: 'reflexive pronoun nous'
  },
  {
    type: 'conjugation',
    verb: 'se réveiller',
    tense: 'passé composé',
    subject: 'je',
    correctAnswer: 'je me suis réveillé',
    hint: 'reflexive uses être'
  },
  {
    type: 'conjugation',
    verb: 'se dépêcher',
    tense: 'impératif',
    subject: 'tu',
    correctAnswer: 'dépêche-toi',
    hint: 'imperative: pronoun after verb'
  },
  {
    type: 'conjugation',
    verb: 'se souvenir',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'elle se souvient',
    hint: 'se souvenir like venir'
  },
  {
    type: 'conjugation',
    verb: 'se plaindre',
    tense: 'présent',
    subject: 'vous',
    correctAnswer: 'vous vous plaignez',
    hint: 'se plaindre: reflexive'
  },
  {
    type: 'conjugation',
    verb: 's\'asseoir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'je m\'assieds',
    hint: 's\'asseoir has two conjugations'
  },
  {
    type: 'conjugation',
    verb: 's\'en aller',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'tu t\'en vas',
    hint: 's\'en aller: en + reflexive'
  },
  {
    type: 'conjugation',
    verb: 'se rendre compte',
    tense: 'passé composé',
    subject: 'ils',
    correctAnswer: 'ils se sont rendu compte',
    hint: 'no agreement with compte (COD after)'
  },
  {
    type: 'conjugation',
    verb: 'se faire mal',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle s\'est fait mal',
    hint: 'no agreement with faire + infinitive'
  },

  // Impératif forms
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'impératif',
    subject: 'tu',
    correctAnswer: 'sois',
    hint: 'être imperative is irregular'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'impératif',
    subject: 'nous',
    correctAnswer: 'ayons',
    hint: 'avoir imperative is irregular'
  },
  {
    type: 'conjugation',
    verb: 'savoir',
    tense: 'impératif',
    subject: 'vous',
    correctAnswer: 'sachez',
    hint: 'savoir imperative: sach-'
  },
  {
    type: 'conjugation',
    verb: 'vouloir',
    tense: 'impératif',
    subject: 'vous',
    correctAnswer: 'veuillez',
    hint: 'vouloir imperative: veuillez (polite)'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'impératif',
    subject: 'tu',
    correctAnswer: 'va',
    hint: 'aller imperative: va'
  },

  // Plus-que-parfait
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'plus-que-parfait',
    subject: 'j\'',
    correctAnswer: 'j\'avais fini',
    hint: 'plus-que-parfait: imparfait + past participle'
  },
  {
    type: 'conjugation',
    verb: 'partir',
    tense: 'plus-que-parfait',
    subject: 'elle',
    correctAnswer: 'elle était partie',
    hint: 'partir uses être in compound tenses'
  },
  {
    type: 'conjugation',
    verb: 'voir',
    tense: 'plus-que-parfait',
    subject: 'nous',
    correctAnswer: 'nous avions vu',
    hint: 'voir → vu in compound tenses'
  },
  {
    type: 'conjugation',
    verb: 'comprendre',
    tense: 'plus-que-parfait',
    subject: 'tu',
    correctAnswer: 'tu avais compris',
    hint: 'comprendre → compris'
  },
  {
    type: 'conjugation',
    verb: 'écrire',
    tense: 'plus-que-parfait',
    subject: 'ils',
    correctAnswer: 'ils avaient écrit',
    hint: 'écrire → écrit'
  },

  // Futur antérieur
  {
    type: 'conjugation',
    verb: 'manger',
    tense: 'futur antérieur',
    subject: 'j\'',
    correctAnswer: 'j\'aurai mangé',
    hint: 'futur antérieur: futur + past participle'
  },
  {
    type: 'conjugation',
    verb: 'arriver',
    tense: 'futur antérieur',
    subject: 'elle',
    correctAnswer: 'elle sera arrivée',
    hint: 'arriver uses être + agreement'
  },
  {
    type: 'conjugation',
    verb: 'dire',
    tense: 'futur antérieur',
    subject: 'vous',
    correctAnswer: 'vous aurez dit',
    hint: 'dire → dit'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'futur antérieur',
    subject: 'ils',
    correctAnswer: 'ils seront venus',
    hint: 'venir uses être'
  },
  {
    type: 'conjugation',
    verb: 'naître',
    tense: 'futur antérieur',
    subject: 'tu',
    correctAnswer: 'tu seras né',
    hint: 'naître uses être'
  },

  // Conditionnel passé
  {
    type: 'conjugation',
    verb: 'aimer',
    tense: 'conditionnel passé',
    subject: 'j\'',
    correctAnswer: 'j\'aurais aimé',
    hint: 'conditionnel passé: conditionnel + past participle'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'conditionnel passé',
    subject: 'nous',
    correctAnswer: 'nous serions allés',
    hint: 'aller uses être + agreement'
  },
  {
    type: 'conjugation',
    verb: 'pouvoir',
    tense: 'conditionnel passé',
    subject: 'elle',
    correctAnswer: 'elle aurait pu',
    hint: 'pouvoir → pu'
  },
  {
    type: 'conjugation',
    verb: 'devoir',
    tense: 'conditionnel passé',
    subject: 'tu',
    correctAnswer: 'tu aurais dû',
    hint: 'devoir → dû (circumflex)'
  },
  {
    type: 'conjugation',
    verb: 'vouloir',
    tense: 'conditionnel passé',
    subject: 'ils',
    correctAnswer: 'ils auraient voulu',
    hint: 'vouloir → voulu'
  },

  // Passé simple (literary tense)
  {
    type: 'conjugation',
    verb: 'parler',
    tense: 'passé simple',
    subject: 'il',
    correctAnswer: 'il parla',
    hint: 'passé simple: -er verbs use -a'
  },
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'passé simple',
    subject: 'elle',
    correctAnswer: 'elle finit',
    hint: 'passé simple: -ir verbs use -it'
  },
  {
    type: 'conjugation',
    verb: 'prendre',
    tense: 'passé simple',
    subject: 'ils',
    correctAnswer: 'ils prirent',
    hint: 'prendre passé simple: prirent'
  },
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'passé simple',
    subject: 'je',
    correctAnswer: 'je fus',
    hint: 'être passé simple: fu-'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'passé simple',
    subject: 'tu',
    correctAnswer: 'tu eus',
    hint: 'avoir passé simple: eu-'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'passé simple',
    subject: 'nous',
    correctAnswer: 'nous fîmes',
    hint: 'faire passé simple: fîmes'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'passé simple',
    subject: 'vous',
    correctAnswer: 'vous allâtes',
    hint: 'aller passé simple: allâtes'
  },
  {
    type: 'conjugation',
    verb: 'voir',
    tense: 'passé simple',
    subject: 'il',
    correctAnswer: 'il vit',
    hint: 'voir passé simple: vit'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'passé simple',
    subject: 'elle',
    correctAnswer: 'elle vint',
    hint: 'venir passé simple: vint'
  },
  {
    type: 'conjugation',
    verb: 'savoir',
    tense: 'passé simple',
    subject: 'ils',
    correctAnswer: 'ils surent',
    hint: 'savoir passé simple: surent'
  },

  // More complex gender agreements
  {
    type: 'gender-agreement',
    noun: 'l\'histoire',
    gender: 'feminine',
    adjective: 'passionnant',
    correctAnswer: 'l\'histoire passionnante',
    hint: '-ant becomes -ante in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le roman',
    gender: 'masculine',
    adjective: 'passionnant',
    correctAnswer: 'le roman passionnant',
    hint: 'passionnant stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la réponse',
    gender: 'feminine',
    adjective: 'exact',
    correctAnswer: 'la réponse exacte',
    hint: 'exact → exacte'
  },
  {
    type: 'gender-agreement',
    noun: 'le calcul',
    gender: 'masculine',
    adjective: 'exact',
    correctAnswer: 'le calcul exact',
    hint: 'exact stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la température',
    gender: 'feminine',
    adjective: 'bas',
    correctAnswer: 'la basse température',
    hint: 'bas → basse'
  },
  {
    type: 'gender-agreement',
    noun: 'le prix',
    gender: 'masculine',
    adjective: 'bas',
    correctAnswer: 'le bas prix',
    hint: 'bas stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la montagne',
    gender: 'feminine',
    adjective: 'haut',
    correctAnswer: 'la haute montagne',
    hint: 'haut → haute'
  },
  {
    type: 'gender-agreement',
    noun: 'le bâtiment',
    gender: 'masculine',
    adjective: 'haut',
    correctAnswer: 'le haut bâtiment',
    hint: 'haut stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la musique',
    gender: 'feminine',
    adjective: 'doux',
    correctAnswer: 'la douce musique',
    hint: 'doux → douce'
  },
  {
    type: 'gender-agreement',
    noun: 'le climat',
    gender: 'masculine',
    adjective: 'doux',
    correctAnswer: 'le doux climat',
    hint: 'doux stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la voix',
    gender: 'feminine',
    adjective: 'faux',
    correctAnswer: 'la fausse voix',
    hint: 'faux → fausse'
  },
  {
    type: 'gender-agreement',
    noun: 'le témoignage',
    gender: 'masculine',
    adjective: 'faux',
    correctAnswer: 'le faux témoignage',
    hint: 'faux stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la découverte',
    gender: 'feminine',
    adjective: 'récent',
    correctAnswer: 'la récente découverte',
    hint: 'récent → récente'
  },
  {
    type: 'gender-agreement',
    noun: 'l\'événement',
    gender: 'masculine',
    adjective: 'récent',
    correctAnswer: 'le récent événement',
    hint: 'récent stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la couleur',
    gender: 'feminine',
    adjective: 'vif',
    correctAnswer: 'la vive couleur',
    hint: 'vif → vive'
  },
  {
    type: 'gender-agreement',
    noun: 'le débat',
    gender: 'masculine',
    adjective: 'vif',
    correctAnswer: 'le vif débat',
    hint: 'vif stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la discussion',
    gender: 'feminine',
    adjective: 'bref',
    correctAnswer: 'la brève discussion',
    hint: 'bref → brève'
  },
  {
    type: 'gender-agreement',
    noun: 'le résumé',
    gender: 'masculine',
    adjective: 'bref',
    correctAnswer: 'le bref résumé',
    hint: 'bref stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la réunion',
    gender: 'feminine',
    adjective: 'secret',
    correctAnswer: 'la réunion secrète',
    hint: 'secret → secrète'
  },
  {
    type: 'gender-agreement',
    noun: 'le code',
    gender: 'masculine',
    adjective: 'secret',
    correctAnswer: 'le code secret',
    hint: 'secret stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la méthode',
    gender: 'feminine',
    adjective: 'complet',
    correctAnswer: 'la méthode complète',
    hint: 'complet → complète'
  },
  {
    type: 'gender-agreement',
    noun: 'l\'ensemble',
    gender: 'masculine',
    adjective: 'complet',
    correctAnswer: 'l\'ensemble complet',
    hint: 'complet stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la robe',
    gender: 'feminine',
    adjective: 'violet',
    correctAnswer: 'la robe violette',
    hint: 'violet → violette'
  },
  {
    type: 'gender-agreement',
    noun: 'le costume',
    gender: 'masculine',
    adjective: 'violet',
    correctAnswer: 'le costume violet',
    hint: 'violet stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la histoire',
    gender: 'feminine',
    adjective: 'rigolo',
    correctAnswer: 'l\'histoire rigolote',
    hint: 'rigolo → rigolote'
  },
  {
    type: 'gender-agreement',
    noun: 'le film',
    gender: 'masculine',
    adjective: 'rigolo',
    correctAnswer: 'le film rigolo',
    hint: 'rigolo stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la personne',
    gender: 'feminine',
    adjective: 'fou',
    correctAnswer: 'la folle personne',
    hint: 'fou → folle'
  },
  {
    type: 'gender-agreement',
    noun: 'le monde',
    gender: 'masculine',
    adjective: 'fou',
    correctAnswer: 'le fou monde',
    hint: 'fou stays the same (becomes fol before vowel)'
  },
  {
    type: 'gender-agreement',
    noun: 'la jeune fille',
    gender: 'feminine',
    adjective: 'mou',
    correctAnswer: 'la molle jeune fille',
    hint: 'mou → molle'
  },
  {
    type: 'gender-agreement',
    noun: 'le caractère',
    gender: 'masculine',
    adjective: 'mou',
    correctAnswer: 'le mou caractère',
    hint: 'mou stays the same (becomes mol before vowel)'
  },

  // More number agreements with complex cases
  {
    type: 'number-agreement',
    noun: 'les détails',
    number: 'plural',
    adjective: 'précis',
    correctAnswer: 'les détails précis',
    hint: 'précis doesn\'t change in masculine plural'
  },
  {
    type: 'number-agreement',
    noun: 'les informations',
    number: 'plural',
    adjective: 'précise',
    correctAnswer: 'les informations précises',
    hint: 'add -s to feminine adjective'
  },
  {
    type: 'number-agreement',
    noun: 'les généraux',
    number: 'plural',
    adjective: 'français',
    correctAnswer: 'les généraux français',
    hint: 'français doesn\'t change'
  },
  {
    type: 'number-agreement',
    noun: 'les armées',
    number: 'plural',
    adjective: 'française',
    correctAnswer: 'les armées françaises',
    hint: 'add -s to française'
  },
  {
    type: 'number-agreement',
    noun: 'les hôpitaux',
    number: 'plural',
    adjective: 'principal',
    correctAnswer: 'les hôpitaux principaux',
    hint: '-al → -aux in masculine plural'
  },
  {
    type: 'number-agreement',
    noun: 'les routes',
    number: 'plural',
    adjective: 'principale',
    correctAnswer: 'les principales routes',
    hint: 'add -s to principale'
  },
  {
    type: 'number-agreement',
    noun: 'les festivals',
    number: 'plural',
    adjective: 'musical',
    correctAnswer: 'les festivals musicaux',
    hint: '-al → -aux in plural'
  },
  {
    type: 'number-agreement',
    noun: 'les émissions',
    number: 'plural',
    adjective: 'musicale',
    correctAnswer: 'les émissions musicales',
    hint: 'add -s to musicale'
  },
  {
    type: 'number-agreement',
    noun: 'les signaux',
    number: 'plural',
    adjective: 'lumineux',
    correctAnswer: 'les signaux lumineux',
    hint: '-eux doesn\'t change'
  },
  {
    type: 'number-agreement',
    noun: 'les panneaux',
    number: 'plural',
    adjective: 'lumineux',
    correctAnswer: 'les panneaux lumineux',
    hint: '-eux doesn\'t change'
  },
  {
    type: 'number-agreement',
    noun: 'les vitres',
    number: 'plural',
    adjective: 'lumineuse',
    correctAnswer: 'les vitres lumineuses',
    hint: 'add -s to lumineuse'
  },
  {
    type: 'number-agreement',
    noun: 'les chapeaux',
    number: 'plural',
    adjective: 'original',
    correctAnswer: 'les chapeaux originaux',
    hint: '-al → -aux'
  },
  {
    type: 'number-agreement',
    noun: 'les idées',
    number: 'plural',
    adjective: 'originale',
    correctAnswer: 'les idées originales',
    hint: 'add -s to originale'
  },
  {
    type: 'number-agreement',
    noun: 'les tableaux',
    number: 'plural',
    adjective: 'final',
    correctAnswer: 'les tableaux finals',
    hint: 'final → finals (exception to -al rule)'
  },
  {
    type: 'number-agreement',
    noun: 'les scènes',
    number: 'plural',
    adjective: 'finale',
    correctAnswer: 'les scènes finales',
    hint: 'add -s to finale'
  },
  {
    type: 'number-agreement',
    noun: 'les festivals',
    number: 'plural',
    adjective: 'naval',
    correctAnswer: 'les festivals navals',
    hint: 'naval → navals (exception)'
  },
  {
    type: 'number-agreement',
    noun: 'les forces',
    number: 'plural',
    adjective: 'navale',
    correctAnswer: 'les forces navales',
    hint: 'add -s to navale'
  },
  {
    type: 'number-agreement',
    noun: 'les festivals',
    number: 'plural',
    adjective: 'banal',
    correctAnswer: 'les festivals banals',
    hint: 'banal → banals (exception)'
  },
  {
    type: 'number-agreement',
    noun: 'les remarques',
    number: 'plural',
    adjective: 'banale',
    correctAnswer: 'les remarques banales',
    hint: 'add -s to banale'
  },

  // Additional vocabulary-based questions
  {
    type: 'gender-agreement',
    noun: 'la recherche',
    gender: 'feminine',
    adjective: 'scientifique',
    correctAnswer: 'la recherche scientifique',
    hint: 'scientifique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le progrès',
    gender: 'masculine',
    adjective: 'scientifique',
    correctAnswer: 'le progrès scientifique',
    hint: 'scientifique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la solution',
    gender: 'feminine',
    adjective: 'technique',
    correctAnswer: 'la solution technique',
    hint: 'technique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le support',
    gender: 'masculine',
    adjective: 'technique',
    correctAnswer: 'le support technique',
    hint: 'technique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la politique',
    gender: 'feminine',
    adjective: 'économique',
    correctAnswer: 'la politique économique',
    hint: 'économique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le développement',
    gender: 'masculine',
    adjective: 'économique',
    correctAnswer: 'le développement économique',
    hint: 'économique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la situation',
    gender: 'feminine',
    adjective: 'politique',
    correctAnswer: 'la situation politique',
    hint: 'politique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le parti',
    gender: 'masculine',
    adjective: 'politique',
    correctAnswer: 'le parti politique',
    hint: 'politique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la culture',
    gender: 'feminine',
    adjective: 'historique',
    correctAnswer: 'la culture historique',
    hint: 'historique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'le monument',
    gender: 'masculine',
    adjective: 'historique',
    correctAnswer: 'le monument historique',
    hint: 'historique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la nature',
    gender: 'feminine',
    adjective: 'géographique',
    correctAnswer: 'la nature géographique',
    hint: 'géographique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'l\'espace',
    gender: 'masculine',
    adjective: 'géographique',
    correctAnswer: 'l\'espace géographique',
    hint: 'géographique doesn\'t change'
  },
  {
    type: 'gender-agreement',
    noun: 'la formation',
    gender: 'feminine',
    adjective: 'professionnel',
    correctAnswer: 'la formation professionnelle',
    hint: 'professionnel → professionnelle'
  },
  {
    type: 'gender-agreement',
    noun: 'le milieu',
    gender: 'masculine',
    adjective: 'professionnel',
    correctAnswer: 'le milieu professionnel',
    hint: 'professionnel stays the same'
  },
  {
    type: 'gender-agreement',
    noun: 'la vie',
    gender: 'feminine',
    adjective: 'personnel',
    correctAnswer: 'la vie personnelle',
    hint: 'personnel → personnelle'
  },
  {
    type: 'gender-agreement',
    noun: 'le développement',
    gender: 'masculine',
    adjective: 'personnel',
    correctAnswer: 'le développement personnel',
    hint: 'personnel stays the same'
  },

  // More advanced subjunctive
  {
    type: 'conjugation',
    verb: 'falloir',
    tense: 'subjonctif présent',
    subject: 'qu\'il',
    correctAnswer: 'qu\'il faille',
    hint: 'falloir subjunctive is irregular'
  },
  {
    type: 'conjugation',
    verb: 'valoir',
    tense: 'subjonctif présent',
    subject: 'que cela',
    correctAnswer: 'que cela vaille',
    hint: 'valoir subjunctive: vaill-'
  },
  {
    type: 'conjugation',
    verb: 'pleuvoir',
    tense: 'subjonctif présent',
    subject: 'qu\'il',
    correctAnswer: 'qu\'il pleuve',
    hint: 'pleuvoir subjunctive: pleuve'
  },
  {
    type: 'conjugation',
    verb: 'mourir',
    tense: 'subjonctif présent',
    subject: 'que je',
    correctAnswer: 'que je meure',
    hint: 'mourir subjunctive: meur-/mour-'
  },
  {
    type: 'conjugation',
    verb: 'acquérir',
    tense: 'subjonctif présent',
    subject: 'qu\'elle',
    correctAnswer: 'qu\'elle acquière',
    hint: 'acquérir subjunctive: acquier-'
  },

  // Past subjunctive
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'subjonctif passé',
    subject: 'que j\'',
    correctAnswer: 'que j\'aie fini',
    hint: 'subjonctif passé: subjunctive avoir/être + past participle'
  },
  {
    type: 'conjugation',
    verb: 'partir',
    tense: 'subjonctif passé',
    subject: 'qu\'elle',
    correctAnswer: 'qu\'elle soit partie',
    hint: 'partir uses être in compound forms'
  },
  {
    type: 'conjugation',
    verb: 'comprendre',
    tense: 'subjonctif passé',
    subject: 'que nous',
    correctAnswer: 'que nous ayons compris',
    hint: 'comprendre → compris'
  },

  // Gérondif and participe présent
  {
    type: 'conjugation',
    verb: 'marcher',
    tense: 'gérondif',
    subject: '',
    correctAnswer: 'en marchant',
    hint: 'gérondif: en + present participle'
  },
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'participe présent',
    subject: '',
    correctAnswer: 'finissant',
    hint: 'participe présent: -ant ending'
  },
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'participe présent',
    subject: '',
    correctAnswer: 'étant',
    hint: 'être participe présent: étant'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'participe présent',
    subject: '',
    correctAnswer: 'ayant',
    hint: 'avoir participe présent: ayant'
  },
  {
    type: 'conjugation',
    verb: 'savoir',
    tense: 'participe présent',
    subject: '',
    correctAnswer: 'sachant',
    hint: 'savoir participe présent: sachant'
  },

  // More complex cases
  {
    type: 'conjugation',
    verb: 'apercevoir',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'j\'aperçois',
    hint: 'apercevoir like recevoir'
  },
  {
    type: 'conjugation',
    verb: 'concevoir',
    tense: 'futur simple',
    subject: 'nous',
    correctAnswer: 'nous concevrons',
    hint: 'concevoir regular future'
  },
  {
    type: 'conjugation',
    verb: 'décevoir',
    tense: 'conditionnel',
    subject: 'tu',
    correctAnswer: 'tu décevrais',
    hint: 'décevoir regular conditional'
  },
  {
    type: 'conjugation',
    verb: 'percevoir',
    tense: 'passé composé',
    subject: 'ils',
    correctAnswer: 'ils ont perçu',
    hint: 'percevoir → perçu'
  },
  {
    type: 'conjugation',
    verb: 'émouvoir',
    tense: 'présent',
    subject: 'cela',
    correctAnswer: 'cela émeut',
    hint: 'émouvoir like mouvoir'
  },
  {
    type: 'conjugation',
    verb: 'promouvoir',
    tense: 'passé composé',
    subject: 'elle',
    correctAnswer: 'elle a promu',
    hint: 'promouvoir → promu'
  },
  {
    type: 'conjugation',
    verb: 'asseoir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'nous asseyons',
    hint: 'asseoir: two possible conjugations'
  },
  {
    type: 'conjugation',
    verb: 'rasseoir',
    tense: 'futur simple',
    subject: 'je',
    correctAnswer: 'je rassiérai',
    hint: 'rasseoir future form'
  },
  {
    type: 'conjugation',
    verb: 'surseoir',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'ils surseoient',
    hint: 'surseoir: irregular'
  }
];