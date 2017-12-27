function convert(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {

        if (str[i] === " ") {
            arr[i] = "null";
        } else {
            arr[i] = str[i];
        }
    }
    return arr;
}
var str = "hello ma how r ya";

console.log(convert(str));

