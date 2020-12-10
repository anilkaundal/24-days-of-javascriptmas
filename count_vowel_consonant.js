/**
You are given a string s that consists of only lowercase English letters. If vowels (‘a', 'e’, 'i', ‘0’, and 'u’) are given a value of 1 and consonants are
given a value of 2, return the sum of all of the letters in the input string.

Example
® Fors = "abcde", the output should be countVowelConsonant(s) = 8.

Hints
® split()
® reduce()
**/

function countVowelConsonant(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = str.split('');
  const total = chars.reduce((acc, char) => {
      if(vowels.includes(char)) {
          return acc + 1;
      }      
      return acc + 2;
  }, 0);
  
  return total;
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
