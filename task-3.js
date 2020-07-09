const findLongestWord = function(string) {
  const words = string.split(' ');
  let max = 0;
  let longestWord;
  

  for (const word of words) {
    let wordLength = word.length
    if (wordLength > max) {
      max = wordLength
      longestWord = word;
    } 
  }
   return longestWord;
 }

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'