/**
Given a string, find the number of different characters in it.

Example
For s = “cabca”, the output should be 3
There are 3 different characters: a, b, and c.

Hints
includes(), split(), push()
**/

function differentSymbolsNaive(str) {
    return Array.from(new Set(str)).length;
}

/**
// Another Way No. 1
function differentSymbolsNaive(str) {
   const chars = str.split('');
   
   return new Set(chars).size;
}

// Another Way No. 2
function differentSymbolsNaive(str) {
    const uniqueChars = [];
    const chars = str.split('');
    
    chars.forEach((char) => {
        if(!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        } 
    });
    
    return uniqueChars.length;
}
**/

/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});
