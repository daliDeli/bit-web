var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];


function string(array){
    for(var i = 0; i < array.length; i++) {
        var element = array[i];
        var res;
        res += element;
    }
console.log(res);
}
string(x);