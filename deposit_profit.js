/**
You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out
how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

Example
For deposit = 100, rate = 20 and threshold = 170, the output should be depositProfit(deposit, rate, threshold) = 3.
Each year the amount of money oryour account increases by 20%. It means that throughout the years your balance would be:
® year 0: 100;
® year 1: 120;
® year 2: 144;
® year 3: 172.8.
Thus, it will take 3 years for your balance to pass the threshold, which is the answer.
**/

function depositProfit(deposit, rate, threshold) {
    let years = 0;
    for(let i=1; ;i++){
        inc = (rate/100)*deposit;
        deposit += inc;
        if( deposit >= threshold){
            return i;
        }
    }
}

/**
* Test Suite 
*/
describe('depositProfit()', () => {
    it('returns number of years it will take to hit threshold based off of deposit & rate', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        // act
        const result = depositProfit(deposit, rate, threshold)

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});
