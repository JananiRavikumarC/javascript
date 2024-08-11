// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

function tenMostFrequentWords(paragraph, topN = 10) {
    const words = paragraph.match(/\b\w+\b/g);
    const wordCounts = {};
    words.forEach(word => {
      const lowerCaseWord = word.toLowerCase();
      wordCounts[lowerCaseWord] = (wordCounts[lowerCaseWord] || 0) + 1;
    });
    const sortedWords = Object.entries(wordCounts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count);
    return sortedWords.slice(0, topN);
  }
  
  // Example usage
  const paragraph = `I love teaching. If you do not love teaching what else can you love. 
  I love Python if you do not love something which can give you all the capabilities 
  to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  console.log(tenMostFrequentWords(paragraph, 10));
  
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

[
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}
]


console.log(tenMostFrequentWords(paragraph, 10))

[{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]