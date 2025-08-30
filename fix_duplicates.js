const fs = require('fs');

const filePath = '/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Fix duplicate verb entries like "verb: 'venir',verb: 'venir',"
content = content.replace(/verb: '([^']+)',verb: '\1',/g, "verb: '$1',");

fs.writeFileSync(filePath, content);
console.log('Fixed duplicate verb entries!');