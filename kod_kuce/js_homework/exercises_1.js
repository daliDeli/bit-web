
"use strict"

function putAStringIn(index, string){

    var startingString = "My random string";
    var arr = [];
    for (var i = 0; i < startingString.length; i++) {
        arr[i] = startingString[i];
        
    }
    arr[index] += string;
    var allTogether ="";
    for (var i = 0; i < arr.length; i++) {
        allTogether += arr[i];   
    }
    return allTogether;
    
}

console.log(putAStringIn(3, "JS"));

// NE MOZE SE U STRING UBACITI SEM NA KRAJ PA SAM PREBACIO SVE U NIZ, UBACIO I VRATIO U STRING