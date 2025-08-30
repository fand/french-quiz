import { Question } from './types';

export const questions: Question[] = [
  // Conjugation questions
  {
    type: 'conjugation',
    verb: 'être',
    tense: 'présent',
    subject: 'je',
    correctAnswer: 'suis',
    hint: 'être is an irregular verb'
  },
  {
    type: 'conjugation',
    verb: 'avoir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'avons',
    hint: 'avoir is an irregular verb'
  },
  {
    type: 'conjugation',
    verb: 'aller',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'vont',
    hint: 'aller is highly irregular'
  },
  {
    type: 'conjugation',
    verb: 'faire',
    tense: 'présent',
    subject: 'vous',
    correctAnswer: 'faites',
    hint: 'faire has an irregular stem'
  },
  {
    type: 'conjugation',
    verb: 'pouvoir',
    tense: 'présent',
    subject: 'elle',
    correctAnswer: 'peut',
    hint: 'pouvoir is a modal verb'
  },
  {
    type: 'conjugation',
    verb: 'venir',
    tense: 'présent',
    subject: 'tu',
    correctAnswer: 'viens',
    hint: 'venir follows the pattern of tenir'
  },
  {
    type: 'conjugation',
    verb: 'parler',
    tense: 'passé composé',
    subject: 'j\'',
    correctAnswer: 'ai parlé',
    hint: 'parler uses avoir as auxiliary'
  },
  {
    type: 'conjugation',
    verb: 'finir',
    tense: 'présent',
    subject: 'nous',
    correctAnswer: 'finissons',
    hint: '-ir verbs add -iss- in plural forms'
  },
  {
    type: 'conjugation',
    verb: 'prendre',
    tense: 'présent',
    subject: 'ils',
    correctAnswer: 'prennent',
    hint: 'prendre doubles the n in plural forms'
  },
  {
    type: 'conjugation',
    verb: 'voir',
    tense: 'futur simple',
    subject: 'je',
    correctAnswer: 'verrai',
    hint: 'voir has an irregular future stem: verr-'
  },

  // Gender agreement questions
  {
    type: 'gender-agreement',
    noun: 'la voiture',
    gender: 'feminine',
    adjective: 'nouveau',
    correctAnswer: 'nouvelle',
    hint: 'nouveau becomes nouvelle in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le chat',
    gender: 'masculine',
    adjective: 'blanc',
    correctAnswer: 'blanc',
    hint: 'blanc stays the same in masculine'
  },
  {
    type: 'gender-agreement',
    noun: 'la maison',
    gender: 'feminine',
    adjective: 'grand',
    correctAnswer: 'grande',
    hint: 'add -e for feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le livre',
    gender: 'masculine',
    adjective: 'intéressant',
    correctAnswer: 'intéressant',
    hint: 'no change for masculine'
  },
  {
    type: 'gender-agreement',
    noun: 'la table',
    gender: 'feminine',
    adjective: 'beau',
    correctAnswer: 'belle',
    hint: 'beau becomes belle in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'la femme',
    gender: 'feminine',
    adjective: 'heureux',
    correctAnswer: 'heureuse',
    hint: '-eux becomes -euse in feminine'
  },
  {
    type: 'gender-agreement',
    noun: 'le garçon',
    gender: 'masculine',
    adjective: 'sportif',
    correctAnswer: 'sportif',
    hint: 'no change for masculine'
  },
  {
    type: 'gender-agreement',
    noun: 'la fille',
    gender: 'feminine',
    adjective: 'sportif',
    correctAnswer: 'sportive',
    hint: '-if becomes -ive in feminine'
  },

  // Number agreement questions
  {
    type: 'number-agreement',
    noun: 'les chats',
    number: 'plural',
    adjective: 'noir',
    correctAnswer: 'noirs',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les maisons',
    number: 'plural',
    adjective: 'grande',
    correctAnswer: 'grandes',
    hint: 'add -s for plural (already feminine with -e)'
  },
  {
    type: 'number-agreement',
    noun: 'le cheval',
    number: 'singular',
    adjective: 'rapide',
    correctAnswer: 'rapide',
    hint: 'no change for singular'
  },
  {
    type: 'number-agreement',
    noun: 'les chevaux',
    number: 'plural',
    adjective: 'rapide',
    correctAnswer: 'rapides',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'les hommes',
    number: 'plural',
    adjective: 'nouveau',
    correctAnswer: 'nouveaux',
    hint: '-eau becomes -eaux in plural'
  },
  {
    type: 'number-agreement',
    noun: 'les femmes',
    number: 'plural',
    adjective: 'belle',
    correctAnswer: 'belles',
    hint: 'add -s for plural (already feminine)'
  },
  {
    type: 'number-agreement',
    noun: 'les enfants',
    number: 'plural',
    adjective: 'intelligent',
    correctAnswer: 'intelligents',
    hint: 'add -s for plural'
  },
  {
    type: 'number-agreement',
    noun: 'le jardin',
    number: 'singular',
    adjective: 'beau',
    correctAnswer: 'beau',
    hint: 'no change for singular'
  }
];