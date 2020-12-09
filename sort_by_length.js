/**
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same
as in the initial array.

Example
For
® inputArray = ["abc", **, "aaa", "a", "zz"]
the output should be
® sortByLength(inputArray) = [**, "a", "zz", "abc", “aaa"]

Hints
® sort()
**/

function sortByLength(strs) {
    return strs.sort((str1, str2) => str1.length - str2.length);
}

/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});
