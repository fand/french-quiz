const fs = require('fs');

// Additional translations for missing words
const additionalNounTranslations = {
  'bateaux': { english: 'boats', japanese: '船々' },
  'événement': { english: 'event', japanese: 'イベント' },
  'ensemble': { english: 'set/group', japanese: 'セット・グループ' },
  'espace': { english: 'space', japanese: '空間' }
};

const additionalAdjectiveTranslations = {
  'manuel': { english: 'manual', japanese: '手動の' },
  'passionnant': { english: 'exciting', japanese: '興奮させる' },
  'exact': { english: 'exact', japanese: '正確な' },
  'bas': { english: 'low', japanese: '低い' },
  'basse': { english: 'low', japanese: '低い' },
  'haut': { english: 'high', japanese: '高い' },
  'haute': { english: 'high', japanese: '高い' },
  'doux': { english: 'soft/sweet', japanese: '柔らかい・甘い' },
  'douce': { english: 'soft/sweet', japanese: '柔らかい・甘い' },
  'faux': { english: 'false', japanese: '偽の' },
  'fausse': { english: 'false', japanese: '偽の' },
  'récent': { english: 'recent', japanese: '最近の' },
  'récente': { english: 'recent', japanese: '最近の' },
  'vif': { english: 'bright/lively', japanese: '鮮やかな' },
  'vive': { english: 'bright/lively', japanese: '鮮やかな' },
  'bref': { english: 'brief', japanese: '短い' },
  'brève': { english: 'brief', japanese: '短い' },
  'secret': { english: 'secret', japanese: '秘密の' },
  'secrète': { english: 'secret', japanese: '秘密の' },
  'complet': { english: 'complete', japanese: '完全な' },
  'complète': { english: 'complete', japanese: '完全な' },
  'violet': { english: 'purple', japanese: '紫の' },
  'violette': { english: 'purple', japanese: '紫の' },
  'rigolo': { english: 'funny', japanese: '面白い' },
  'rigolote': { english: 'funny', japanese: '面白い' },
  'fou': { english: 'crazy', japanese: '狂った' },
  'folle': { english: 'crazy', japanese: '狂った' },
  'mou': { english: 'soft', japanese: '柔らかい' },
  'molle': { english: 'soft', japanese: '柔らかい' },
  'précis': { english: 'precise', japanese: '正確な' },
  'précise': { english: 'precise', japanese: '正確な' },
  'français': { english: 'French', japanese: 'フランスの' },
  'française': { english: 'French', japanese: 'フランスの' },
  'principal': { english: 'main', japanese: '主要な' },
  'principale': { english: 'main', japanese: '主要な' },
  'principaux': { english: 'main', japanese: '主要な' },
  'principales': { english: 'main', japanese: '主要な' },
  'musical': { english: 'musical', japanese: '音楽の' },
  'musicale': { english: 'musical', japanese: '音楽の' },
  'musicaux': { english: 'musical', japanese: '音楽の' },
  'musicales': { english: 'musical', japanese: '音楽の' },
  'lumineux': { english: 'bright', japanese: '明るい' },
  'lumineuse': { english: 'bright', japanese: '明るい' },
  'original': { english: 'original', japanese: '独創的な' },
  'originale': { english: 'original', japanese: '独創的な' },
  'originaux': { english: 'original', japanese: '独創的な' },
  'originales': { english: 'original', japanese: '独創的な' },
  'final': { english: 'final', japanese: '最終的な' },
  'finale': { english: 'final', japanese: '最終的な' },
  'finals': { english: 'final', japanese: '最終的な' },
  'finales': { english: 'final', japanese: '最終的な' },
  'naval': { english: 'naval', japanese: '海軍の' },
  'navale': { english: 'naval', japanese: '海軍の' },
  'navals': { english: 'naval', japanese: '海軍の' },
  'navales': { english: 'naval', japanese: '海軍の' },
  'banal': { english: 'banal/ordinary', japanese: '平凡な' },
  'banale': { english: 'banal/ordinary', japanese: '平凡な' },
  'banals': { english: 'banal/ordinary', japanese: '平凡な' },
  'banales': { english: 'banal/ordinary', japanese: '平凡な' },
  'scientifique': { english: 'scientific', japanese: '科学的な' },
  'technique': { english: 'technical', japanese: '技術的な' },
  'économique': { english: 'economic', japanese: '経済的な' },
  'politique': { english: 'political', japanese: '政治的な' },
  'historique': { english: 'historical', japanese: '歴史的な' },
  'géographique': { english: 'geographical', japanese: '地理的な' },
  'professionnel': { english: 'professional', japanese: '職業の' },
  'professionnelle': { english: 'professional', japanese: '職業の' },
  'personnel': { english: 'personal', japanese: '個人的な' },
  'personnelle': { english: 'personal', japanese: '個人的な' }
};

// Process file to manually add remaining translations
let content = fs.readFileSync('/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts', 'utf8');

// List of specific question patterns to fix manually
const specificFixes = [
  {
    pattern: `    type: 'number-agreement',
    noun: 'les bateaux',
    number: 'plural',
    adjective: 'blanc',
    correctAnswer: 'les bateaux blancs',
    hint: 'add -s for plural'
  },`,
    replacement: `    type: 'number-agreement',
    noun: 'les bateaux',
    number: 'plural',
    adjective: 'blanc',
    correctAnswer: 'les bateaux blancs',
    hint: 'add -s for plural',
    translations: {
      noun: { english: 'boats', japanese: '船々' },
      adjective: { english: 'white', japanese: '白い' }
    }
  },`
  },
  {
    pattern: `    type: 'number-agreement',
    noun: 'les travaux',
    number: 'plural',
    adjective: 'manuel',
    correctAnswer: 'les travaux manuels',
    hint: '-el → -els'
  },`,
    replacement: `    type: 'number-agreement',
    noun: 'les travaux',
    number: 'plural',
    adjective: 'manuel',
    correctAnswer: 'les travaux manuels',
    hint: '-el → -els',
    translations: {
      noun: { english: 'works/construction', japanese: '工事' },
      adjective: { english: 'manual', japanese: '手動の' }
    }
  },`
  },
  {
    pattern: `    type: 'number-agreement',
    noun: 'les jeux',
    number: 'plural',
    adjective: 'dangereux',
    correctAnswer: 'les jeux dangereux',
    hint: '-eux doesn\\'t change in plural'
  },`,
    replacement: `    type: 'number-agreement',
    noun: 'les jeux',
    number: 'plural',
    adjective: 'dangereux',
    correctAnswer: 'les jeux dangereux',
    hint: '-eux doesn\\'t change in plural',
    translations: {
      noun: { english: 'games', japanese: 'ゲーム' },
      adjective: { english: 'dangerous', japanese: '危険な' }
    }
  },`
  },
  {
    pattern: `    type: 'number-agreement',
    noun: 'les feux',
    number: 'plural',
    adjective: 'rouge',
    correctAnswer: 'les feux rouges',
    hint: 'add -s for plural'
  },`,
    replacement: `    type: 'number-agreement',
    noun: 'les feux',
    number: 'plural',
    adjective: 'rouge',
    correctAnswer: 'les feux rouges',
    hint: 'add -s for plural',
    translations: {
      noun: { english: 'fires/lights', japanese: '火・信号' },
      adjective: { english: 'red', japanese: '赤い' }
    }
  },`
  },
  {
    pattern: `    type: 'number-agreement',
    noun: 'les voeux',
    number: 'plural',
    adjective: 'sincère',
    correctAnswer: 'les voeux sincères',
    hint: 'add -s for plural'
  },`,
    replacement: `    type: 'number-agreement',
    noun: 'les voeux',
    number: 'plural',
    adjective: 'sincère',
    correctAnswer: 'les voeux sincères',
    hint: 'add -s for plural',
    translations: {
      noun: { english: 'wishes', japanese: '願い' },
      adjective: { english: 'sincere', japanese: '誠実な' }
    }
  },`
  },
  {
    pattern: `    type: 'number-agreement',
    noun: 'les cieux',
    number: 'plural',
    adjective: 'bleu',
    correctAnswer: 'les cieux bleus',
    hint: 'add -s for plural'
  },`,
    replacement: `    type: 'number-agreement',
    noun: 'les cieux',
    number: 'plural',
    adjective: 'bleu',
    correctAnswer: 'les cieux bleus',
    hint: 'add -s for plural',
    translations: {
      noun: { english: 'skies', japanese: '空' },
      adjective: { english: 'blue', japanese: '青い' }
    }
  },`
  }
];

// Apply specific fixes
let newContent = content;
for (const fix of specificFixes) {
  newContent = newContent.replace(fix.pattern, fix.replacement);
}

// Apply more complex patterns using regex
const complexPatterns = [
  // Gender agreement patterns
  {
    regex: /(\{\s*type: 'gender-agreement',\s*noun: 'l'histoire',\s*gender: 'feminine',\s*adjective: 'passionnant',\s*correctAnswer: 'l'histoire passionnante',\s*hint: '-ant becomes -ante in feminine'\s*\}),/,
    replacement: `$1,
    translations: {
      noun: { english: 'story/history', japanese: '話・歴史' },
      adjective: { english: 'exciting', japanese: '興奮させる' }
    }`
  },
  // Add more complex patterns here...
];

for (const pattern of complexPatterns) {
  newContent = newContent.replace(pattern.regex, pattern.replacement);
}

fs.writeFileSync('/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts', newContent);

console.log('Applied manual fixes for remaining translations.');