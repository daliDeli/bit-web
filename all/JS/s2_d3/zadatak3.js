

var arr = [1, 2, 3, 4, 5, 6];

function sum (array){
    var sum = 0;
    for (var i = 0; i < array.length; i ++) {
        sum = sum + array[i];
       
    }
    console.log (sum);
}

function multi (array){
    var multiply = 1;
    for (var i = 0; i < array.length; i ++) {
        multiply = multiply * array[i];
        

    }
    console.log (multiply);
} 
multi(arr);
sum(arr);