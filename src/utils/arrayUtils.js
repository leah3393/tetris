export function copy(old2DArray){
    let new2dArray = [];
    old2DArray.forEach(row => {
        let newRow = [];
        row.forEach(elem => newRow.push(elem));
        new2dArray.push(newRow);
    });
    return new2dArray;
}
export function create2dArray(lengthOfRow,numOfRows){
    let twoDimArr = [];
    for(let x = 0; x < lengthOfRow; x++){
        twoDimArr.push(Array(numOfRows).fill(null));
    }
    return twoDimArr;
}