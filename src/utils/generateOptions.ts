import { Question } from '../types';

function generateConjugationOptions(question: any): string[] {
  const { verb, subject, tense, correctAnswer } = question;
  const options = [correctAnswer];
  
  // Realistic wrong answers for common verbs
  const commonMistakes: Record<string, string[]> = {
    'je suis': ['j\'ai', 'je es', 'je suis été'],
    'nous avons': ['nous sommes', 'nous avez', 'nous avoir'],
    'ils vont': ['ils va', 'ils allons', 'ils sont allés'],
    'vous faites': ['vous faisez', 'vous fait', 'vous faisons'],
    'elle peut': ['elle peux', 'elle pouvoir', 'elle pouvez'],
    'tu viens': ['tu venez', 'tu vient', 'tu es venu'],
    'j\'ai parlé': ['je suis parlé', 'j\'ai parler', 'je parlé'],
    'nous finissons': ['nous finons', 'nous finissez', 'nous finirons'],
    'ils prennent': ['ils prends', 'ils prenons', 'ils prendent'],
    'je verrai': ['je verrais', 'je vois', 'je voir'],
    'je mange': ['je mangons', 'je manger', 'je mangé'],
    'nous commençons': ['nous commencez', 'nous commencer', 'nous commençons'],
    'tu dois': ['tu devoir', 'tu devez', 'tu doit'],
    'ils savent': ['ils sais', 'ils savons', 'ils savoir'],
    'elle veut': ['elle veux', 'elle voulez', 'elle vouloir'],
    'je mets': ['je mettre', 'je met', 'je mettez'],
    'vous dites': ['vous disez', 'vous dire', 'vous dit'],
    'nous écrivons': ['nous écrirons', 'nous écrivez', 'nous écrire'],
    'tu lis': ['tu lire', 'tu lisez', 'tu lit'],
    'ils boivent': ['ils bois', 'ils burent', 'ils boire']
  };

  if (commonMistakes[correctAnswer]) {
    commonMistakes[correctAnswer].forEach(mistake => {
      if (options.length < 4) {
        options.push(mistake);
      }
    });
  }
  
  // Fill remaining slots with plausible errors if needed
  while (options.length < 4) {
    let wrongOption = '';
    
    if (tense === 'présent') {
      // Common present tense mistakes
      const mistakes = [
        `${subject} ${verb}`, // infinitive mistake
        correctAnswer.replace(/s$/, ''), // remove final s
        correctAnswer.replace(/ent$/, 'e'), // plural/singular confusion
        correctAnswer + 's' // add extra s
      ];
      
      wrongOption = mistakes[Math.floor(Math.random() * mistakes.length)];
    } else if (tense === 'passé composé') {
      // Wrong auxiliary or participle
      const auxMistakes = [
        correctAnswer.replace('ai ', 'suis '),
        correctAnswer.replace('est ', 'a '),
        correctAnswer.replace('é', 'er')
      ];
      wrongOption = auxMistakes[Math.floor(Math.random() * auxMistakes.length)];
    }
    
    if (wrongOption && !options.includes(wrongOption)) {
      options.push(wrongOption);
    } else {
      // Fallback: add a simple variation
      options.push(`${subject} ${verb.slice(0, -1)}e`);
    }
  }
  
  return options.slice(0, 4);
}

function generateGenderOptions(question: any): string[] {
  const { noun, adjective, correctAnswer } = question;
  const options = [correctAnswer];
  
  // Generate realistic gender agreement mistakes
  const article = noun.split(' ')[0];
  const nounPart = noun.substring(article.length + 1);
  
  // Common mistakes: wrong gender agreement
  const commonMistakes = [];
  
  if (correctAnswer.includes('la ') && adjective !== correctAnswer.split(' ').pop()) {
    // If correct is feminine, add masculine version
    const masculineAdj = adjective;
    commonMistakes.push(`le ${masculineAdj} ${nounPart}`);
    commonMistakes.push(`la ${masculineAdj} ${nounPart}`); // no agreement
  } else if (correctAnswer.includes('le ') && adjective !== correctAnswer.split(' ').pop()) {
    // If correct is masculine, add feminine version
    let feminineName = adjective + 'e';
    if (adjective.endsWith('eux')) feminineName = adjective.replace('eux', 'euse');
    if (adjective.endsWith('if')) feminineName = adjective.replace('if', 'ive');
    if (adjective.endsWith('er')) feminineName = adjective.replace('er', 'ère');
    if (adjective.endsWith('eau')) feminineName = adjective.replace('eau', 'elle');
    
    commonMistakes.push(`la ${feminineName} ${nounPart}`);
    commonMistakes.push(`le ${feminineName} ${nounPart}`); // wrong article
  }
  
  // Position mistakes (adjective before/after noun)
  const adjInAnswer = correctAnswer.split(' ').find((word: string) => word.includes(adjective) || adjective.includes(word.replace('e', '')));
  if (adjInAnswer) {
    if (correctAnswer.includes(`${article} ${adjInAnswer}`)) {
      // Move adjective after noun
      commonMistakes.push(`${article} ${nounPart} ${adjInAnswer}`);
    } else {
      // Move adjective before noun  
      commonMistakes.push(`${article} ${adjInAnswer} ${nounPart}`);
    }
  }
  
  commonMistakes.forEach(mistake => {
    if (!options.includes(mistake) && options.length < 4) {
      options.push(mistake);
    }
  });
  
  // Fill remaining with systematic variations
  while (options.length < 4) {
    const variations = [
      `${article} ${adjective}s ${nounPart}`, // add plural s
      `${article} ${nounPart} ${adjective}s`, // add plural s, different position
      correctAnswer.replace('le ', 'la ').replace('la ', 'le ') // swap articles
    ];
    
    for (const variation of variations) {
      if (!options.includes(variation) && options.length < 4) {
        options.push(variation);
        break;
      }
    }
    
    if (options.length < 4) break; // prevent infinite loop
  }
  
  return options.slice(0, 4);
}

function generateNumberOptions(question: any): string[] {
  const { noun, adjective, correctAnswer } = question;
  const options = [correctAnswer];
  
  const article = noun.split(' ')[0];
  const nounPart = noun.substring(article.length + 1);
  
  // Common number agreement mistakes
  const commonMistakes = [];
  
  if (noun.startsWith('les ')) {
    // Plural noun - common mistakes
    const singularNoun = nounPart.replace(/s$|x$/, '');
    const singularArticle = article === 'les' ? 'le' : article; 
    
    // Forget to make adjective plural
    commonMistakes.push(`les ${adjective} ${nounPart}`);
    commonMistakes.push(`les ${nounPart} ${adjective}`);
    
    // Use singular form entirely  
    commonMistakes.push(`${singularArticle} ${adjective} ${singularNoun}`);
    
    // Wrong plural ending (-s instead of -x, etc.)
    if (correctAnswer.includes('eaux') || correctAnswer.includes('aux')) {
      commonMistakes.push(correctAnswer.replace('eaux', 'eaus').replace('aux', 'als'));
    }
    
  } else {
    // Singular noun - add unnecessary plural
    const adjInAnswer = correctAnswer.split(' ').find((word: string) => 
      word.includes(adjective) || adjective.includes(word)
    );
    
    if (adjInAnswer) {
      // Add unnecessary s to adjective
      commonMistakes.push(correctAnswer.replace(adjInAnswer, adjInAnswer + 's'));
      
      // Change to plural form
      const pluralNoun = nounPart + 's';
      const pluralAdj = adjInAnswer + 's';
      commonMistakes.push(`les ${pluralAdj} ${pluralNoun}`);
      commonMistakes.push(`les ${pluralNoun} ${pluralAdj}`);
    }
  }
  
  // Position mistakes
  const parts = correctAnswer.split(' ');
  if (parts.length >= 3) {
    // Swap adjective position
    const [art, first, second] = parts;
    commonMistakes.push(`${art} ${second} ${first}`);
  }
  
  commonMistakes.forEach(mistake => {
    if (!options.includes(mistake) && options.length < 4) {
      options.push(mistake);
    }
  });
  
  // Fill remaining slots
  while (options.length < 4) {
    const fillers = [
      correctAnswer + 's', // add extra s
      correctAnswer.replace('s ', ' '), // remove s from wrong place
      correctAnswer.replace('les', 'des'), // wrong article
    ];
    
    for (const filler of fillers) {
      if (!options.includes(filler) && options.length < 4) {
        options.push(filler);
        break;
      }
    }
    if (options.length >= 4) break;
  }
  
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