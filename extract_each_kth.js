/**
Extract Each Kth
Given array of integers, remove each kth element from it.

Example
For inputArray = [1,2, 3,4, 5,6,7,8,9, 10] and k = 3, the output should be extractEachKth(inputArray, k) = [1, 2,4, 5,7, 8, 10].

Hints
® filter()
**/

function extractEachKth(nums, index) {
    return nums.filter((num) => {
       return num % index != 0;
    });
}

/**
* Test Suite 
*/
describe('extractEachKth()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const index = 3;
        
        // act
        const result = extractEachKth(nums, index);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
});
