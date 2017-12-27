function times2(array, callback){
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i] * 2;
        result[i] = callback(element);
    }
    return result;
}

function onSquare(num){
    return num * num;
}

console.log(onSquare(2))
console.log(times2([1,2,2,3,4], onSquare));
 
function add1(){
    
}
