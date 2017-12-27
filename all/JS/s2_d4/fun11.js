function dots(str, n) {
    var dado = "";
    for (var i = 0; i < n; i++) {
        var element = str[i];
        dado += element;
    }
    dado += "...";
    return dado;
}

var n = 5;
var s = "Here i go again on the road";

console.log(dots(s, n));
