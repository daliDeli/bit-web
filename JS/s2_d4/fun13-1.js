var numString = [];
function convert(arr) {

    for (var i = 0; i < arr.length; i++) {

        numString[i] = parseInt(arr[i]);

    }
    return numString;
}

function isThisNaN(arr) {
    var newString = [];
    var counter = -1;
    for (var i = 0; i < arr.length; i++) {
        counter ++;
        if (isNaN(arr[i]) === false) {
            newString[counter] = arr[i];
            
        } else{
            counter--;
        }

    }
    return newString;

}

var arr = ["s2", "252652", "221512", "22gg2222", "2533", "sss"];

console.log(isThisNaN(convert(arr)));
