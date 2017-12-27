function dash(str, separator) {
    var novi = " ";
    for(var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element === " ") {
            if (separator === undefined) {
                separator = '-';
            }
            novi += separator;
        } else {
            novi += element;
        }        
    }
    return novi;
}

var str = "Hello my baby hello my honey";
var sep = "+";

console.log(dash(str, sep));
console.log(dash(str));