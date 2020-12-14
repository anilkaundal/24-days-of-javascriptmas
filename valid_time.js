/**
Check if the given string is a correct time representation of the 24-hour clock.

Example
® For time = "13:58", the output should be validTime(time) = true.
® For time = "25:51", the output should be validTime(time) = false.
® For time = "02:76", the output should be validTime(time) = false.

Hints
® parselnt()
® split()
**/

function validTime(str) {
    let time = str.split(":");
    if(parseInt(time[0]) < 24 && parseInt(time[1]) < 60){
        return true;   
    }
    else{
        return false;
    }
}

/**
// Another Way
function validTime(str) {
    const [hours, minutes] = str.split(':');
    if(parseInt(hours) > 23 || parseInt(hours) < 0) {
        return false;
    }
    if(parseInt(minutes) > 59 || parseInt(minutes) < 0) {
        return false;
    }
    return true;
}
**/

/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});
