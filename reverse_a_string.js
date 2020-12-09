/**
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Example
® reverseAString(‘hello') returns 'olleh’;
® reverseAString('Howdy') returns 'ydwoH';
 
Hints
® join()
® split()
® reverse()
**/

function reverseAString(str) {

    //  Easy way: return str.split('').reverse().join('');
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

/**
* Test Suite 
*/
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';
        
        // act
        const result = reverseAString(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('olleh');
    });
});
