export type QuestionType = 'conjugation' | 'gender-agreement' | 'number-agreement';

export interface ConjugationQuestion {
  type: 'conjugation';
  verb: string;
  tense: string;
  subject: string;
  correctAnswer: string;
  hint?: string;
}

export interface GenderAgreementQuestion {
  type: 'gender-agreement';
  noun: string;
  gender: 'masculine' | 'feminine';
  adjective: string;
  correctAnswer: string;
  hint?: string;
}

export interface NumberAgreementQuestion {
  type: 'number-agreement';
  noun: string;
  number: 'singular' | 'plural';
  adjective: string;
  correctAnswer: string;
  hint?: string;
}

export type Question = ConjugationQuestion | GenderAgreementQuestion | NumberAgreementQuestion;