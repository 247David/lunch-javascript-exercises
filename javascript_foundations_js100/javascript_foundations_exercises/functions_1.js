//1. Sum - Examine the example function invocation below. Write the function sum, such that it accepts
//two arguments and returns the sum of its arguments. You may assume that the function arguments will always
//be numbers.

// sum(22, 10); // 32

// let sum = (arg1, arg2) => arg1 + arg2;

// console.log(sum(22, 10));

//2. Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console.
// What is the return value of the function?
// Ans:

// let brendanEichQuote = function () {
//     console.log('Always bet on JavaScript.');
// }

// brendanEichQuote();

//3. Cite the Author - Let's generalize the function from the previous exercise a bit.
// Implement a function cite that takes two string arguments: the author of the quote and what
// they said. It then logs the quote to the console, as in the following example.

// cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

// const cite = function (author, quote) {
//     console.log(`${author} said: ${quote}`);
// };
// cite('Brendan Eich', 'Always bet on JavaScript.');

//4. Squared Number - Write a function that accepts a single argument, a number, and 
//returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).

// const squaredNumber = (number) => Math.pow(number,2);

// console.log(squaredNumber(3));

// (**) is alo exponential 3 ** 2 = 9

//5. Display Division - Determine the output that the following code will log to the console.
// function multiplesOfThree() {
//     let divisor = 1;
  
//     for (let dividend = 3; dividend <= 30; dividend += 3) {
//       console.log(dividend + ' / ' + divisor + ' = 3');
//       divisor += 1;
//     }
//   }
  
//   multiplesOfThree();
//Output:
// 3 / 1 = 3
// 6 / 2 = 3
// 9 / 3 = 3
// 12 / 4 = 3
// 15 / 5 = 3
// 18 / 6 = 3
// 21 / 7 = 3
// 24 / 8 = 3
// 27 / 9 = 3
// 30 / 10 = 3

//6. Three-way comparison - Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 
//1 if the second string is shorter, and 0 if they're of equal length, as in the following example:


// const compareByLength = function (string1, string2) {
//     return  (string1.length < string2.length) ? -1 
//             : (string2.length < string1.length) ? 1 
//             : 0;      
    
// }
// console.log(compareByLength('patience', 'perseverance'));
// console.log(compareByLength('strength', 'dignity'));
// console.log(compareByLength('humor', 'grace'));
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0

//7.Transformation - Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

// console.log('Captain Ruby'.replace('Ruby','JavaScript'));

//8. Internationalization 1 - Write a function that takes an ISO 639-1 language code and returns a greeting in that language. 
// You can take the examples below or add whatever languages you like.

const greet = function (isoLangCode) {
    return (isoLangCode === 'en') ? 'Hi!'
            : (isoLangCode === 'fr') ? 'Salut!'
            : (isoLangCode === 'pt') ? 'Olà!'
            : (isoLangCode === 'de') ? 'Hallo!'
            : (isoLangCode === 'sv') ? 'Hej!'
            : (isoLangCode === 'af') ? 'Haai!'
            : (isoLangCode === 'yo') ? 'Báwoni!'
            : 'language currently not supported'
};

// console.log(greet('de'));

// // alt solution
// function greet(languageCode) {
//     switch (languageCode) {
//       case 'en': return 'Hi!';
//       case 'fr': return 'Salut!';
//       case 'pt': return 'Olá!';
//       case 'de': return 'Hallo!';
//       case 'sv': return 'Hej!';
//       case 'af': return 'Haai!';
//     }
//   }
  
//9. Locale Part 1 - Write a function that extracts the language code from a locale. 
// A locale is a combination of a language code, a region, and usually also a character set, 
//e.g en_US.UTF-8.
// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'

const extractLanguage = (localeInput) => localeInput.substring(0, 2);
 
// console.log(extractLanguage('en_US.UTF-8'));


//alt ans:
// function extractLanguage(locale) {
//     return locale.split('_')[0];
//   }

//10. Locale Part 2 - Similar to the previous exercise, now write a function that extracts 
// the region code from a locale. For example:

// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16'); // 'KR'

const extractRegion = function (localeInput) {
    return localeInput.substring((localeInput.indexOf('_') + 1), (localeInput.indexOf('.')));
};

// console.log(extractRegion('en_US.UTF-8'));
// console.log(extractRegion('en_GB.UTF-8'));

//alt ans:
//function extractRegion(locale) {
//     return locale.split('.')[0]
//     .split('_')[1];
// }

//==>11. Internationalization 2 - Building on your solutions from the previous exercises, write a function 
//localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people 
//from different countries differently also when they share the language,
//When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet 
//functions from the previous exercises.

// for example:
// localGreet('en_US.UTF-8'); // 'Hey!'
// localGreet('en_GB.UTF-8'); // 'Hello!'
// localGreet('en_AU.UTF-8'); // 'Howdy!'

const localGreet = function (localeInput) {
    switch(extractRegion(localeInput)) {
        case 'US' : return 'Hey!';
        case 'GB' : return 'Hello!';
        case 'AU' : return 'Howdy';
        default : return greet(extractLanguage(localeInput));
    }
};

console.log(localGreet('yo_Ni.UTF-8'));