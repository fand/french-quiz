const fs = require('fs');

// Translation dictionary for nouns (without articles)
const nounTranslations = {
  'voiture': { english: 'car', japanese: '車' },
  'chat': { english: 'cat', japanese: '猫' },
  'maison': { english: 'house', japanese: '家' },
  'livre': { english: 'book', japanese: '本' },
  'table': { english: 'table', japanese: 'テーブル' },
  'femme': { english: 'woman', japanese: '女性' },
  'garçon': { english: 'boy', japanese: '男の子' },
  'fille': { english: 'girl', japanese: '女の子' },
  'cheval': { english: 'horse', japanese: '馬' },
  'hommes': { english: 'men', japanese: '男性たち' },
  'femmes': { english: 'women', japanese: '女性たち' },
  'enfants': { english: 'children', japanese: '子供たち' },
  'jardin': { english: 'garden', japanese: '庭' },
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
  'arbres': { english: 'trees', japanese: '木々' },
  'fleurs': { english: 'flowers', japanese: '花々' },
  'oiseaux': { english: 'birds', japanese: '鳥たち' },
  'montagnes': { english: 'mountains', japanese: '山々' },
  'lacs': { english: 'lakes', japanese: '湖々' },
  'rivières': { english: 'rivers', japanese: '川々' },
  'journaux': { english: 'newspapers', japanese: '新聞紙' },
  'animaux': { english: 'animals', japanese: '動物たち' },
  'châteaux': { english: 'castles', japanese: '城々' },
  'bateaux': { english: 'boats', japanese: '船々' },
  'travaux': { english: 'works/construction', japanese: '工事' },
  'jeux': { english: 'games', japanese: 'ゲーム' },
  'feux': { english: 'fires/lights', japanese: '火・信号' },
  'voeux': { english: 'wishes', japanese: '願い' },
  'cieux': { english: 'skies', japanese: '空' },
  'chats': { english: 'cats', japanese: '猫たち' },
  'maisons': { english: 'houses', japanese: '家々' },
  'chevaux': { english: 'horses', japanese: '馬たち' },
  'roman': { english: 'novel', japanese: '小説' },
  'réponse': { english: 'answer', japanese: '答え' },
  'calcul': { english: 'calculation', japanese: '計算' },
  'température': { english: 'temperature', japanese: '温度' },
  'prix': { english: 'price', japanese: '価格' },
  'montagne': { english: 'mountain', japanese: '山' },
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
  'bateaux': { english: 'boats', japanese: '船々' },
  'événement': { english: 'event', japanese: 'イベント' },
  'ensemble': { english: 'set/group', japanese: 'セット・グループ' },
  'espace': { english: 'space', japanese: '空間' }
};

// Translation dictionary for adjectives (base masculine form)
const adjectiveTranslations = {
  'nouveau': { english: 'new', japanese: '新しい' },
  'blanc': { english: 'white', japanese: '白い' },
  'grand': { english: 'big/tall', japanese: '大きい・高い' },
  'intéressant': { english: 'interesting', japanese: '面白い' },
  'beau': { english: 'beautiful/handsome', japanese: '美しい・ハンサムな' },
  'heureux': { english: 'happy', japanese: '幸せな' },
  'sportif': { english: 'sporty/athletic', japanese: 'スポーツ好きな' },
  'noir': { english: 'black', japanese: '黒い' },
  'grande': { english: 'big/tall', japanese: '大きい・高い' },
  'rapide': { english: 'fast', japanese: '速い' },
  'belle': { english: 'beautiful/handsome', japanese: '美しい・ハンサムな' },
  'intelligent': { english: 'intelligent', japanese: '賢明な' },
  'long': { english: 'long', japanese: '長い' },
  'difficile': { english: 'difficult', japanese: '難しい' },
  'simple': { english: 'simple', japanese: '簡単な' },
  'dur': { english: 'hard/tough', japanese: '難しい・きつい' },
  'ancien': { english: 'old/ancient', japanese: '古い・古代の' },
  'européen': { english: 'European', japanese: 'ヨーロッパの' },
  'sérieux': { english: 'serious', japanese: '真面目な' },
  'américain': { english: 'American', japanese: 'アメリカの' },
  'cher': { english: 'expensive/dear', japanese: '高価な・愛しい' },
  'moderne': { english: 'modern', japanese: '現代的な' },
  'public': { english: 'public', japanese: '公的な' },
  'local': { english: 'local', japanese: '地元の' },
  'vert': { english: 'green', japanese: '緑の' },
  'rouge': { english: 'red', japanese: '赤い' },
  'petit': { english: 'small', japanese: '小さい' },
  'haute': { english: 'high/tall', japanese: '高い' },
  'profond': { english: 'deep', japanese: '深い' },
  'longue': { english: 'long', japanese: '長い' },
  'national': { english: 'national', japanese: '国内の' },
  'sauvage': { english: 'wild', japanese: '野生の' },
  'royal': { english: 'royal', japanese: '王室の' },
  'manuel': { english: 'manual', japanese: '手動の' },
  'dangereux': { english: 'dangerous', japanese: '危険な' },
  'sincère': { english: 'sincere', japanese: '誠実な' },
  'bleu': { english: 'blue', japanese: '青い' },
  'passionnant': { english: 'exciting', japanese: '興奮させる' },
  'exact': { english: 'exact', japanese: '正確な' },
  'bas': { english: 'low', japanese: '低い' },
  'haut': { english: 'high', japanese: '高い' },
  'doux': { english: 'soft/sweet', japanese: '柔らかい・甘い' },
  'faux': { english: 'false', japanese: '偽の' },
  'récent': { english: 'recent', japanese: '最近の' },
  'vif': { english: 'bright/lively', japanese: '鮮やかな' },
  'bref': { english: 'brief', japanese: '短い' },
  'secret': { english: 'secret', japanese: '秘密の' },
  'complet': { english: 'complete', japanese: '完全な' },
  'violet': { english: 'purple', japanese: '紫の' },
  'rigolo': { english: 'funny', japanese: '面白い' },
  'fou': { english: 'crazy', japanese: '狂った' },
  'mou': { english: 'soft', japanese: '柔らかい' },
  'précis': { english: 'precise', japanese: '正確な' },
  'précise': { english: 'precise', japanese: '正確な' },
  'français': { english: 'French', japanese: 'フランスの' },
  'française': { english: 'French', japanese: 'フランスの' },
  'principal': { english: 'main', japanese: '主要な' },
  'principale': { english: 'main', japanese: '主要な' },
  'musical': { english: 'musical', japanese: '音楽の' },
  'musicale': { english: 'musical', japanese: '音楽の' },
  'lumineux': { english: 'bright', japanese: '明るい' },
  'lumineuse': { english: 'bright', japanese: '明るい' },
  'original': { english: 'original', japanese: '独創的な' },
  'originale': { english: 'original', japanese: '独創的な' },
  'final': { english: 'final', japanese: '最終的な' },
  'finale': { english: 'final', japanese: '最終的な' },
  'naval': { english: 'naval', japanese: '海軍の' },
  'navale': { english: 'naval', japanese: '海軍の' },
  'banal': { english: 'banal/ordinary', japanese: '平凡な' },
  'banale': { english: 'banal/ordinary', japanese: '平凡な' },
  'scientifique': { english: 'scientific', japanese: '科学的な' },
  'technique': { english: 'technical', japanese: '技術的な' },
  'économique': { english: 'economic', japanese: '経済的な' },
  'politique': { english: 'political', japanese: '政治的な' },
  'historique': { english: 'historical', japanese: '歴史的な' },
  'géographique': { english: 'geographical', japanese: '地理的な' },
  'professionnel': { english: 'professional', japanese: '職業の' },
  'personnel': { english: 'personal', japanese: '個人的な' }
};

// Extract noun from full noun phrase (remove article)
function extractNoun(nounPhrase) {
  return nounPhrase.replace(/^(le|la|les|l')\s+/, '');
}

// Process file
let content = fs.readFileSync('/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts', 'utf8');

// Find all gender-agreement and number-agreement questions that don't have translations
const questionRegex = /(\{\s*type: '(gender|number)-agreement',\s*noun: '([^']+)',\s*(?:gender|number): '[^']+',\s*adjective: '([^']+)',\s*correctAnswer: '[^']+',\s*hint: '[^']+'\s*\}),/g;

let match;
let replacements = [];

while ((match = questionRegex.exec(content)) !== null) {
  const fullMatch = match[1];
  const nounPhrase = match[3];
  const adjective = match[4];
  
  // Check if this question already has translations
  if (content.indexOf(fullMatch + ',\n    translations:') === -1) {
    const noun = extractNoun(nounPhrase);
    const nounTranslation = nounTranslations[noun];
    const adjectiveTranslation = adjectiveTranslations[adjective];
    
    if (nounTranslation && adjectiveTranslation) {
      const newContent = fullMatch + `,
    translations: {
      noun: { english: '${nounTranslation.english}', japanese: '${nounTranslation.japanese}' },
      adjective: { english: '${adjectiveTranslation.english}', japanese: '${adjectiveTranslation.japanese}' }
    }`;
      
      replacements.push({
        old: fullMatch,
        new: newContent
      });
    } else {
      console.log(`Missing translation for: noun="${noun}", adjective="${adjective}"`);
    }
  }
}

// Apply all replacements
let newContent = content;
for (const replacement of replacements) {
  newContent = newContent.replace(replacement.old, replacement.new);
}

// Write back to file
fs.writeFileSync('/Users/amagi/src/github.com/fand/french-quiz/src/quizData.ts', newContent);

console.log(`Added translations to ${replacements.length} questions.`);