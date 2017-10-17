"use strict"

function purgeArr(array) {
    var purgedArray = [];
    var counter = -1;
    for (var i = 0; i < array.length; i++) {
        counter++;
        if (array[i] !== undefined && array[i] !== null && array[i] !== Infinity) {// ispisuje undefined!!!
            if (!isNaN(array[i])) {
                purgedArray[counter] = array[i];
            } else {
                counter--;
            }
        }else{
            counter--;
        }
    }
    return purgedArray;
}


// function inToAString(array) {
//     var inToAString = [];
//     for (var i = 0; i < array.length; i++) {
//         inToAString = String(array[i]);
        
//     }
//     return inToAString;
// }

function concatStr(array){
    var concatStr= "";
    for (var i = 0; i < array.length; i++) {
        concatStr += array[i] ;
        
    }
    return concatStr;
}

var arr = [NaN, 0, 15, false, -22, ' ', undefined, 47, null];
console.log(concatStr(purgeArr(arr)));




 


