function howManyTimes(numOfRepetition, objectOfRepetition) {
    var array = [];
    for (var i = 0; i < numOfRepetition; i++) {
        array[i] = objectOfRepetition;

    }
    return array;
}

console.log(howManyTimes(6, "none"));