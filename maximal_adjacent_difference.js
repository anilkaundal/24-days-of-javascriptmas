/**
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example
For inputArray = [2,4 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.
For inputArray = [2, 9, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8.

Hints
® Math.abs()
**/

function arrayMaximalAdjacentDifference(nums) {
    let maxDiff = 0;
    for(let i = 0; i < nums.length-1; ++i){
        const diff = Math.abs(nums[i] - nums[i-1])
        if(maxDiff < diff){
            maxDiff = diff; 
        }
    }
    return maxDiff;
}

/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
