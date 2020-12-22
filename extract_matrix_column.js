/**
Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the
leftmost column is the Oth one).

Example
For matrix = [[1, Wn 2],10,5,0,4],12 1,3, 6]] and column = 2, the output should be extractMatrixColumn(matrix, column) = [1, 0, 3].

Hints
® push()
**/

function extractMatrixColumn(matrix, column) {
    let array = [];
    for(let i=0; i<matrix.length; ++i) {
        for(let j=0; j<matrix.length; ++j){
            if(j === column) {
                array.push(matrix[i][column]);
            }
        }
    }
    
    return array;
}

/**
* Test Suite 
*/
describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        
        // act
        const result = extractMatrixColumn(matrix, column);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 0, 3]);
    });
});
