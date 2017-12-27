function maxElement(array) {
    var bigOne = 0;
    for (var i = 0; i < array.length; i++) {

        if (array[i] >= bigOne) {
            bigOne = array[i];
        }
    }
    return bigOne;
}

console.log(maxElement([212,22,15,908,3,15,2]));