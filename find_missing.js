const fs = require('fs');

const filePath = '/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts';
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
let currentQuestion = {};
let inConjugationQuestion = false;
let questionStart = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes("type: 'conjugation'")) {
    inConjugationQuestion = true;
    currentQuestion = { hasTranslation: false, verb: '', lineStart: i + 1 };
    questionStart = i;
  }
  
  if (inConjugationQuestion) {
    if (line.includes('verb:')) {
      const verbMatch = line.match(/verb: '([^']+)'/);
      if (verbMatch) {
        currentQuestion.verb = verbMatch[1];
      }
    }
    
    if (line.includes('verbTranslation:')) {
      currentQuestion.hasTranslation = true;
    }
    
    if (line.trim() === '},') {
      if (!currentQuestion.hasTranslation && currentQuestion.verb) {
        console.log(`Missing translation at line ${currentQuestion.lineStart}: verb '${currentQuestion.verb}'`);
      }
      inConjugationQuestion = false;
      currentQuestion = {};
    }
  }
}