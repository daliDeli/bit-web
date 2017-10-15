function noFalsy(array) {
    var purgedArray = [];
    var counter = -1;
    for (var i = 0; i < array.length; i++) {
        counter++;
        if (!array[i] === true) {
            counter--;
        } else {
            purgedArray[counter] = array[i];
        }
    }
    return purgedArray;
}

var example = [ NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(noFalsy(example));

