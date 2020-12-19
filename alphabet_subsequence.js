/**
Check whether the given string is a subsequence of the plaintext alphabet.

Example
® Fors = "effg" ors = "cdce”, the output should be alphabetSubsequence(s) = false
® Fors = "ace" ors = "bxz", the output should be alphabetSubsequence(s) = true.

Hints
® size property
® charCodeAt()
® split()
**/

function alphabetSubsequence(str) {
    let wordSeqSize =  new Set(str.split("")).size;
    
    if(wordSeqSize !== str.length) {
        return false;
    }
    else{
        for(let i = 0; i < str.length-1; ++i) {
            // charCodeAt() returns the Unicode of a character in a string
            if(str.charCodeAt(i+1) > str.charCodeAt(i)) {
                return true;
            }
        }
    }
}

/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'effg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdce';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'ace';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});
