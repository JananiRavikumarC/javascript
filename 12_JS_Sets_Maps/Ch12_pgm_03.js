const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const countLanguages = (countriesArray) => {
    const languages = new Set();
    
    countriesArray.forEach(country => {
        if (country.languages) {
            country.languages.forEach(language => {
                languages.add(language);
            });
        }
    });
    
    return languages.size;
};

const numLanguages = countLanguages(countries);
console.log("Number of languages:", numLanguages);
const countries1 = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] }
];
const mostSpokenLanguages = (countries1Array, n) => {
    const languageCount = {};

    // Count languages
    countries1Array.forEach(country => {
        if (country.languages) {
            country.languages.forEach(language => {
                if (languageCount[language]) {
                    languageCount[language]++;
                } else {
                    languageCount[language] = 1;
                }
            });
        }
    });
    const sortedLanguages = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map(([language, count]) => ({ [language]: count }));

    return sortedLanguages;
};
console.log(mostSpokenLanguages(countries1,10));
console.log(mostSpokenLanguages(countries1, 3));


// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]