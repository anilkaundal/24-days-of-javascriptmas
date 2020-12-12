/**
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Example
® sumOddFibonacciNums(10) should return 10
® sumOddFibonacciNums(1000) should return 1785
® sumOddFibonacciNums(4000000) should return 4613732
**/

function sumOddFibonacciNumbers(num) {
    let num1 = 0, num2 = 1, nextTerm = 0, arr = [];
    
    for(let i=0; i<num; ++i){
        num1 = num2;
        num2 = nextTerm;
        nextTerm = num1+num2;
        arr.push(nextTerm);
    }
    
    var oddNumbers = arr.filter((item) => {
        return (item % 2 != 0 && item<=num);
    });
    
    return oddNumbers.reduce((a, b) => a+b);
}

/**
// Another Way
function sumOddFibonacciNumbers(num) {
    let sum = 0;
    let previous = 0;
    let current = 1;
    
    while(current <= num) {
        if(current % 2 === 1) {
            sum += current;
        }
        
        const nextValue = current + previous;
        previous = current;
        current = nextValue;
    }
    
    return sum;
}
**/

/**
* Test Suite 
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});
