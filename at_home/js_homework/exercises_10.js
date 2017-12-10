"use strict"

function mostFrequentElement(array) {
    
    //var frequency =[];
    for (var i = 0; i < array.length; i++) {
        var counter = 0;
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
            }
            
        }
        console.log("Element " + array[i] + " se ponavlja " + counter + " puta.");
    }
    //return frequency;
}


var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
mostFrequentElement(array);