var arr = [
    [1, 2, 1, 24,22,121,323],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];



function printElement(array){

    for (var i = 0; i <array.length; i++) {
       
        for (var j = 0; i <array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

printElement(arr);