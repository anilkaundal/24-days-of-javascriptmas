/**
Transform a given sentence into a new one with dashes between each two consecutive letters.

Example
For input="aba caba”, the output should be
“a-b-a c-a-b-a”

Hints
® Join, split
**/

function insertDashes(arr) {
    let wordsWithDashes = [];
    let wordsArray = arr.split(" ");
    wordsArray.forEach((word) => wordsWithDashes.push(word.split("").join("-")));
    return wordsWithDashes.join(" ");
}

/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
