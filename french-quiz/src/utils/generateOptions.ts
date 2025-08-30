import { Question } from '../types';

function generateConjugationOptions(question: any): string[] {
  const { verb, subject, tense, correctAnswer } = question;
  const options = [correctAnswer];
  
  const verbRoot = verb.replace(/er$|ir$|re$/, '');
  const wrongEndings = {
    'je': ['e', 'es', 'ons', 'ez', 'ent'],
    'tu': ['s', 'e', 'ons', 'ez', 'ent'], 
    'il': ['e', 's', 'ons', 'ez', 'ent'],
    'elle': ['e', 's', 'ons', 'ez', 'ent'],
    'nous': ['e', 's', 't', 'ez', 'ent'],
    'vous': ['e', 's', 't', 'ons', 'ent'],
    'ils': ['e', 's', 't', 'ons', 'ez'],
    'elles': ['e', 's', 't', 'ons', 'ez'],
    'j\'': ['e', 'es', 'ons', 'ez', 'ent']
  };
  
  const endings = wrongEndings[subject] || ['e', 's', 't'];
  
  if (tense === 'présent') {
    endings.forEach(ending => {
      const option = `${subject} ${verbRoot}${ending}`;
      if (option !== correctAnswer && options.length < 4) {
        options.push(option);
      }
    });
  } else if (tense === 'passé composé') {
    const auxOptions = ['ai', 'as', 'a', 'avons', 'avez', 'ont', 'suis', 'es', 'est'];
    auxOptions.forEach(aux => {
      const option = `${subject}${aux} ${verb.replace(/er$/, 'é')}`;
      if (option !== correctAnswer && options.length < 4) {
        options.push(option);
      }
    });
  } else if (tense === 'futur simple') {
    const futureEndings = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];
    futureEndings.forEach(ending => {
      const option = `${subject} ${verb}${ending}`;
      if (option !== correctAnswer && options.length < 4) {
        options.push(option);
      }
    });
  }
  
  while (options.length < 4) {
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];
    const option = `${subject} ${verbRoot}${randomEnding}`;
    if (!options.includes(option)) {
      options.push(option);
    }
  }
  
  return options.slice(0, 4);
}

function generateGenderOptions(question: any): string[] {
  const { noun, adjective, correctAnswer } = question;
  const options = [correctAnswer];
  
  const variations: Record<string, string[]> = {
    'nouveau': ['le nouveau', 'la nouvelle', 'le nouvel', 'la nouveau'],
    'beau': ['le beau', 'la belle', 'le bel', 'la beau'],
    'grand': ['le grand', 'la grande', 'le grande', 'la grand'],
    'blanc': ['le blanc', 'la blanche', 'le blanche', 'la blanc'],
    'heureux': ['le heureux', 'la heureuse', 'le heureuse', 'la heureux'],
    'sportif': ['le sportif', 'la sportive', 'le sportive', 'la sportif'],
    'intéressant': ['le intéressant', 'la intéressante', 'le intéressante', 'la intéressant']
  };
  
  const nounBase = noun.replace(/^(le |la |les |l')/, '');
  const defaultVariations = [
    `le ${adjective} ${nounBase}`,
    `la ${adjective} ${nounBase}`,
    `le ${adjective}e ${nounBase}`,
    `la ${adjective}e ${nounBase}`,
    `le ${nounBase} ${adjective}`,
    `la ${nounBase} ${adjective}`,
    `le ${nounBase} ${adjective}e`,
    `la ${nounBase} ${adjective}e`
  ];
  
  const possibleOptions = variations[adjective] ? 
    variations[adjective].map(v => v + ' ' + nounBase) : 
    defaultVariations;
  
  possibleOptions.forEach(option => {
    if (option !== correctAnswer && !options.includes(option) && options.length < 4) {
      options.push(option);
    }
  });
  
  return options.slice(0, 4);
}

function generateNumberOptions(question: any): string[] {
  const { noun, adjective, correctAnswer } = question;
  const options = [correctAnswer];
  
  const nounBase = noun.replace(/^(le |la |les |l')/, '');
  const singularArticle = noun.startsWith('les ') ? 'le' : noun.split(' ')[0];
  
  const variations = [
    `${noun} ${adjective}`,
    `${noun} ${adjective}s`,
    `${noun} ${adjective}x`,
    `${singularArticle} ${adjective} ${nounBase.replace(/s$|x$/, '')}`,
    `les ${adjective}s ${nounBase}`,
    `les ${adjective}x ${nounBase}`,
    `les ${adjective} ${nounBase}`
  ];
  
  variations.forEach(option => {
    if (option !== correctAnswer && !options.includes(option) && options.length < 4) {
      options.push(option);
    }
  });
  
  return options.slice(0, 4);
}

export function generateOptions(question: Question): string[] {
  let options: string[] = [];
  
  switch (question.type) {
    case 'conjugation':
      options = generateConjugationOptions(question);
      break;
    case 'gender-agreement':
      options = generateGenderOptions(question);
      break;
    case 'number-agreement':
      options = generateNumberOptions(question);
      break;
  }
  
  return options.sort(() => Math.random() - 0.5);
}