const fs = require('fs');

// Complete translation dictionary for all nouns (without articles)
const nounTranslations = {
  // Basic words from the original set
  'voiture': { english: 'car', japanese: '車' },
  'chat': { english: 'cat', japanese: '猫' },
  'chats': { english: 'cats', japanese: '猫たち' },
  'maison': { english: 'house', japanese: '家' },
  'maisons': { english: 'houses', japanese: '家々' },
  'livre': { english: 'book', japanese: '本' },
  'table': { english: 'table', japanese: 'テーブル' },
  'femme': { english: 'woman', japanese: '女性' },
  'femmes': { english: 'women', japanese: '女性たち' },
  'garçon': { english: 'boy', japanese: '男の子' },
  'fille': { english: 'girl', japanese: '女の子' },
  'cheval': { english: 'horse', japanese: '馬' },
  'chevaux': { english: 'horses', japanese: '馬たち' },
  'hommes': { english: 'men', japanese: '男性たち' },
  'enfants': { english: 'children', japanese: '子供たち' },
  'jardin': { english: 'garden', japanese: '庭' },
  
  // More complex words
  'rue': { english: 'street', japanese: '通り' },
  'problème': { english: 'problem', japanese: '問題' },
  'solution': { english: 'solution', japanese: '解決策' },
  'travail': { english: 'work', japanese: '仕事' },
  'vie': { english: 'life', japanese: '人生' },
  'château': { english: 'castle', japanese: '城' },
  'ville': { english: 'city/town', japanese: '都市' },
  'pays': { english: 'country', japanese: '国' },
  'nation': { english: 'nation', japanese: '国家' },
  'professeur': { english: 'teacher/professor', japanese: '先生' },
  'personne': { english: 'person', japanese: '人' },
  'film': { english: 'film/movie', japanese: '映画' },
  'série': { english: 'series', japanese: 'シリーズ' },
  'restaurant': { english: 'restaurant', japanese: 'レストラン' },
  'boutique': { english: 'shop/boutique', japanese: '店' },
  'musée': { english: 'museum', japanese: '博物館' },
  'galerie': { english: 'gallery', japanese: 'ギャラリー' },
  'parc': { english: 'park', japanese: '公園' },
  'place': { english: 'square/place', japanese: '広場' },
  'marché': { english: 'market', japanese: '市場' },
  'production': { english: 'production', japanese: '生産' },
  
  // Nature words
  'arbres': { english: 'trees', japanese: '木々' },
  'fleurs': { english: 'flowers', japanese: '花々' },
  'oiseaux': { english: 'birds', japanese: '鳥たち' },
  'montagnes': { english: 'mountains', japanese: '山々' },
  'montagne': { english: 'mountain', japanese: '山' },
  'lacs': { english: 'lakes', japanese: '湖々' },
  'rivières': { english: 'rivers', japanese: '川々' },
  'animaux': { english: 'animals', japanese: '動物たち' },
  
  // Media and communication
  'journaux': { english: 'newspapers', japanese: '新聞紙' },
  
  // Transportation and objects
  'châteaux': { english: 'castles', japanese: '城々' },
  'bateaux': { english: 'boats', japanese: '船々' },
  'travaux': { english: 'works/construction', japanese: '工事' },
  
  // Games and activities
  'jeux': { english: 'games', japanese: 'ゲーム' },
  'feux': { english: 'fires/lights', japanese: '火・信号' },
  'voeux': { english: 'wishes', japanese: '願い' },
  'cieux': { english: 'skies', japanese: '空' },
  
  // Academic and professional
  'roman': { english: 'novel', japanese: '小説' },
  'réponse': { english: 'answer', japanese: '答え' },
  'calcul': { english: 'calculation', japanese: '計算' },
  'température': { english: 'temperature', japanese: '温度' },
  'prix': { english: 'price', japanese: '価格' },
  'bâtiment': { english: 'building', japanese: '建物' },
  'musique': { english: 'music', japanese: '音楽' },
  'climat': { english: 'climate', japanese: '気候' },
  'voix': { english: 'voice', japanese: '声' },
  'témoignage': { english: 'testimony', japanese: '証言' },
  'découverte': { english: 'discovery', japanese: '発見' },
  'couleur': { english: 'color', japanese: '色' },
  'débat': { english: 'debate', japanese: '討論' },
  'discussion': { english: 'discussion', japanese: '議論' },
  'résumé': { english: 'summary', japanese: '要約' },
  'réunion': { english: 'meeting', japanese: '会議' },
  'code': { english: 'code', japanese: 'コード' },
  'méthode': { english: 'method', japanese: '方法' },
  'robe': { english: 'dress', japanese: 'ドレス' },
  'costume': { english: 'suit', japanese: 'スーツ' },
  'histoire': { english: 'story/history', japanese: '話・歴史' },
  'monde': { english: 'world', japanese: '世界' },
  'jeune fille': { english: 'young girl', japanese: '若い女の子' },
  'caractère': { english: 'character', japanese: '性格' },
  'événement': { english: 'event', japanese: 'イベント' },
  
  // Complex plurals and groups
  'détails': { english: 'details', japanese: '詳細' },
  'informations': { english: 'information', japanese: '情報' },
  'généraux': { english: 'generals', japanese: '将軍たち' },
  'armées': { english: 'armies', japanese: '軍隊' },
  'hôpitaux': { english: 'hospitals', japanese: '病院' },
  'routes': { english: 'roads', japanese: '道路' },
  'festivals': { english: 'festivals', japanese: 'フェスティバル' },
  'émissions': { english: 'programs/emissions', japanese: '番組' },
  'signaux': { english: 'signals', japanese: '信号' },
  'panneaux': { english: 'signs/panels', japanese: '看板' },
  'vitres': { english: 'windows/glass', japanese: 'ガラス' },
  'chapeaux': { english: 'hats', japanese: '帽子' },
  'idées': { english: 'ideas', japanese: 'アイデア' },
  'tableaux': { english: 'paintings/tables', japanese: '絵・表' },
  'scènes': { english: 'scenes', japanese: '場面' },
  'forces': { english: 'forces', japanese: '力' },
  'remarques': { english: 'remarks', japanese: 'コメント' },
  
  // Abstract concepts
  'recherche': { english: 'research', japanese: '研究' },
  'progrès': { english: 'progress', japanese: '進歩' },
  'support': { english: 'support', japanese: 'サポート' },
  'politique': { english: 'politics/policy', japanese: '政治' },
  'développement': { english: 'development', japanese: '開発' },
  'situation': { english: 'situation', japanese: '状況' },
  'parti': { english: 'party', japanese: '政党' },
  'culture': { english: 'culture', japanese: '文化' },
  'monument': { english: 'monument', japanese: '記念碑' },
  'nature': { english: 'nature', japanese: '自然' },
  'formation': { english: 'training/formation', japanese: '訓練' },
  'milieu': { english: 'environment/middle', japanese: '環境' },
  'ensemble': { english: 'set/group', japanese: 'セット・グループ' },
  'espace': { english: 'space', japanese: '空間' }
};

// Complete translation dictionary for adjectives (including all forms)
const adjectiveTranslations = {
  // Basic adjectives
  'nouveau': { english: 'new', japanese: '新しい' },
  'nouvelle': { english: 'new', japanese: '新しい' },
  'nouveaux': { english: 'new', japanese: '新しい' },
  'nouvelles': { english: 'new', japanese: '新しい' },
  'blanc': { english: 'white', japanese: '白い' },
  'blanche': { english: 'white', japanese: '白い' },
  'blancs': { english: 'white', japanese: '白い' },
  'blanches': { english: 'white', japanese: '白い' },
  'grand': { english: 'big/tall', japanese: '大きい・高い' },
  'grande': { english: 'big/tall', japanese: '大きい・高い' },
  'grands': { english: 'big/tall', japanese: '大きい・高い' },
  'grandes': { english: 'big/tall', japanese: '大きい・高い' },
  'intéressant': { english: 'interesting', japanese: '面白い' },
  'intéressante': { english: 'interesting', japanese: '面白い' },
  'beau': { english: 'beautiful/handsome', japanese: '美しい・ハンサムな' },
  'belle': { english: 'beautiful/handsome', japanese: '美しい・ハンサムな' },
  'beaux': { english: 'beautiful/handsome', japanese: '美しい・ハンサムな' },
  'belles': { english: 'beautiful/handsome', japanese: '美しい・ハンサムな' },
  'heureux': { english: 'happy', japanese: '幸せな' },
  'heureuse': { english: 'happy', japanese: '幸せな' },
  'sportif': { english: 'sporty/athletic', japanese: 'スポーツ好きな' },
  'sportive': { english: 'sporty/athletic', japanese: 'スポーツ好きな' },
  'noir': { english: 'black', japanese: '黒い' },
  'noire': { english: 'black', japanese: '黒い' },
  'noirs': { english: 'black', japanese: '黒い' },
  'noires': { english: 'black', japanese: '黒い' },
  'rapide': { english: 'fast', japanese: '速い' },
  'rapides': { english: 'fast', japanese: '速い' },
  'intelligent': { english: 'intelligent', japanese: '賢明な' },
  'intelligente': { english: 'intelligent', japanese: '賢明な' },
  'intelligents': { english: 'intelligent', japanese: '賢明な' },
  'intelligentes': { english: 'intelligent', japanese: '賢明な' },
  
  // Complex adjectives
  'long': { english: 'long', japanese: '長い' },
  'longue': { english: 'long', japanese: '長い' },
  'longs': { english: 'long', japanese: '長い' },
  'longues': { english: 'long', japanese: '長い' },
  'difficile': { english: 'difficult', japanese: '難しい' },
  'difficiles': { english: 'difficult', japanese: '難しい' },
  'simple': { english: 'simple', japanese: '簡単な' },
  'simples': { english: 'simple', japanese: '簡単な' },
  'dur': { english: 'hard/tough', japanese: '難しい・きつい' },
  'dure': { english: 'hard/tough', japanese: '難しい・きつい' },
  'durs': { english: 'hard/tough', japanese: '難しい・きつい' },
  'dures': { english: 'hard/tough', japanese: '難しい・きつい' },
  'ancien': { english: 'old/ancient', japanese: '古い・古代の' },
  'ancienne': { english: 'old/ancient', japanese: '古い・古代の' },
  'anciens': { english: 'old/ancient', japanese: '古い・古代の' },
  'anciennes': { english: 'old/ancient', japanese: '古い・古代の' },
  'européen': { english: 'European', japanese: 'ヨーロッパの' },
  'européenne': { english: 'European', japanese: 'ヨーロッパの' },
  'européens': { english: 'European', japanese: 'ヨーロッパの' },
  'européennes': { english: 'European', japanese: 'ヨーロッパの' },
  'sérieux': { english: 'serious', japanese: '真面目な' },
  'sérieuse': { english: 'serious', japanese: '真面目な' },
  'américain': { english: 'American', japanese: 'アメリカの' },
  'américaine': { english: 'American', japanese: 'アメリカの' },
  'américains': { english: 'American', japanese: 'アメリカの' },
  'américaines': { english: 'American', japanese: 'アメリカの' },
  'cher': { english: 'expensive/dear', japanese: '高価な・愛しい' },
  'chère': { english: 'expensive/dear', japanese: '高価な・愛しい' },
  'chers': { english: 'expensive/dear', japanese: '高価な・愛しい' },
  'chères': { english: 'expensive/dear', japanese: '高価な・愛しい' },
  'moderne': { english: 'modern', japanese: '現代的な' },
  'modernes': { english: 'modern', japanese: '現代的な' },
  'public': { english: 'public', japanese: '公的な' },
  'publique': { english: 'public', japanese: '公的な' },
  'publics': { english: 'public', japanese: '公的な' },
  'publiques': { english: 'public', japanese: '公的な' },
  'local': { english: 'local', japanese: '地元の' },
  'locale': { english: 'local', japanese: '地元の' },
  'locaux': { english: 'local', japanese: '地元の' },
  'locales': { english: 'local', japanese: '地元の' },
  
  // Colors
  'vert': { english: 'green', japanese: '緑の' },
  'verte': { english: 'green', japanese: '緑の' },
  'verts': { english: 'green', japanese: '緑の' },
  'vertes': { english: 'green', japanese: '緑の' },
  'rouge': { english: 'red', japanese: '赤い' },
  'rouges': { english: 'red', japanese: '赤い' },
  'bleu': { english: 'blue', japanese: '青い' },
  'bleue': { english: 'blue', japanese: '青い' },
  'bleus': { english: 'blue', japanese: '青い' },
  'bleues': { english: 'blue', japanese: '青い' },
  'violet': { english: 'purple', japanese: '紫の' },
  'violette': { english: 'purple', japanese: '紫の' },
  'violets': { english: 'purple', japanese: '紫の' },
  'violettes': { english: 'purple', japanese: '紫の' },
  
  // Size and physical properties
  'petit': { english: 'small', japanese: '小さい' },
  'petite': { english: 'small', japanese: '小さい' },
  'petits': { english: 'small', japanese: '小さい' },
  'petites': { english: 'small', japanese: '小さい' },
  'haute': { english: 'high/tall', japanese: '高い' },
  'hautes': { english: 'high/tall', japanese: '高い' },
  'haut': { english: 'high', japanese: '高い' },
  'hauts': { english: 'high', japanese: '高い' },
  'profond': { english: 'deep', japanese: '深い' },
  'profonde': { english: 'deep', japanese: '深い' },
  'profonds': { english: 'deep', japanese: '深い' },
  'profondes': { english: 'deep', japanese: '深い' },
  'bas': { english: 'low', japanese: '低い' },
  'basse': { english: 'low', japanese: '低い' },
  
  // Special adjectives with -al endings
  'national': { english: 'national', japanese: '国内の' },
  'nationale': { english: 'national', japanese: '国内の' },
  'nationaux': { english: 'national', japanese: '国内の' },
  'nationales': { english: 'national', japanese: '国内の' },
  'royal': { english: 'royal', japanese: '王室の' },
  'royale': { english: 'royal', japanese: '王室の' },
  'royaux': { english: 'royal', japanese: '王室の' },
  'royales': { english: 'royal', japanese: '王室の' },
  
  // Nature and characteristics
  'sauvage': { english: 'wild', japanese: '野生の' },
  'sauvages': { english: 'wild', japanese: '野生の' },
  'manuel': { english: 'manual', japanese: '手動の' },
  'manuelle': { english: 'manual', japanese: '手動の' },
  'manuels': { english: 'manual', japanese: '手動の' },
  'manuelles': { english: 'manual', japanese: '手動の' },
  'dangereux': { english: 'dangerous', japanese: '危険な' },
  'dangereuse': { english: 'dangerous', japanese: '危険な' },
  'sincère': { english: 'sincere', japanese: '誠実な' },
  'sincères': { english: 'sincere', japanese: '誠実な' },
  
  // Academic and descriptive adjectives
  'passionnant': { english: 'exciting', japanese: '興奮させる' },
  'passionnante': { english: 'exciting', japanese: '興奮させる' },
  'exact': { english: 'exact', japanese: '正確な' },
  'exacte': { english: 'exact', japanese: '正確な' },
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
  'scientifiques': { english: 'scientific', japanese: '科学的な' },
  'technique': { english: 'technical', japanese: '技術的な' },
  'techniques': { english: 'technical', japanese: '技術的な' },
  'économique': { english: 'economic', japanese: '経済的な' },
  'économiques': { english: 'economic', japanese: '経済的な' },
  'politique': { english: 'political', japanese: '政治的な' },
  'politiques': { english: 'political', japanese: '政治的な' },
  'historique': { english: 'historical', japanese: '歴史的な' },
  'historiques': { english: 'historical', japanese: '歴史的な' },
  'géographique': { english: 'geographical', japanese: '地理的な' },
  'géographiques': { english: 'geographical', japanese: '地理的な' },
  'professionnel': { english: 'professional', japanese: '職業の' },
  'professionnelle': { english: 'professional', japanese: '職業の' },
  'professionnels': { english: 'professional', japanese: '職業の' },
  'professionnelles': { english: 'professional', japanese: '職業の' },
  'personnel': { english: 'personal', japanese: '個人的な' },
  'personnelle': { english: 'personal', japanese: '個人的な' },
  'personnels': { english: 'personal', japanese: '個人的な' },
  'personnelles': { english: 'personal', japanese: '個人的な' }
};

// Extract noun from full noun phrase (remove article)
function extractNoun(nounPhrase) {
  return nounPhrase.replace(/^(le|la|les|l')\s+/, '');
}

// Function to add translations to a question if not already present
function addTranslationToQuestion(questionText) {
  // Skip if already has translations
  if (questionText.includes('translations:')) {
    return questionText;
  }
  
  // Extract noun and adjective using regex
  const nounMatch = questionText.match(/noun: '([^']+)'/);
  const adjectiveMatch = questionText.match(/adjective: '([^']+)'/);
  
  if (!nounMatch || !adjectiveMatch) {
    return questionText;
  }
  
  const nounPhrase = nounMatch[1];
  const adjective = adjectiveMatch[1];
  const noun = extractNoun(nounPhrase);
  
  const nounTranslation = nounTranslations[noun];
  const adjectiveTranslation = adjectiveTranslations[adjective];
  
  if (nounTranslation && adjectiveTranslation) {
    // Find the position before the closing brace
    const insertPos = questionText.lastIndexOf('\n  }');
    if (insertPos !== -1) {
      const beforeBrace = questionText.substring(0, insertPos);
      const afterBrace = questionText.substring(insertPos);
      
      const translationBlock = `,
    translations: {
      noun: { english: '${nounTranslation.english}', japanese: '${nounTranslation.japanese}' },
      adjective: { english: '${adjectiveTranslation.english}', japanese: '${adjectiveTranslation.japanese}' }
    }`;
      
      return beforeBrace + translationBlock + afterBrace;
    }
  } else {
    console.log(`Missing translation: noun="${noun}", adjective="${adjective}"`);
  }
  
  return questionText;
}

// Process the file
let content = fs.readFileSync('/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts', 'utf8');

// Split into questions and process each one
const questionRegex = /(\{\s*type: '(?:gender|number)-agreement',[\s\S]*?\}),/g;
let newContent = content;
let match;
let processedCount = 0;

while ((match = questionRegex.exec(content)) !== null) {
  const originalQuestion = match[1] + ',';
  const updatedQuestion = addTranslationToQuestion(originalQuestion);
  
  if (originalQuestion !== updatedQuestion) {
    newContent = newContent.replace(originalQuestion, updatedQuestion);
    processedCount++;
  }
}

// Write the updated content back to the file
fs.writeFileSync('/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts', newContent);

console.log(`Successfully added translations to ${processedCount} questions.`);