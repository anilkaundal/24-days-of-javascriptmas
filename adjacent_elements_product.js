/**
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
**/

function adjacentElementsProduct(nums) {
    let largestProduct = 0;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] * nums[i+1] > largestProduct){
            largestProduct = nums[i] * nums[i+1];
        }
    }
    return largestProduct;
}

/**
//Another Way
function adjacentElementsProduct(nums) {
    let largestProduct = nums[0] * nums[1];
    
    for(let i = 1; i < nums.length - 1; i++) {
        const adjacentProduct = nums[i] * nums[i + 1];
        
        if(largestProduct < adjacentProduct) {
            largestProduct = adjacentProduct;
        }
    }
    
    return largestProduct;
}
**/

/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});
