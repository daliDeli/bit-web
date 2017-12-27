function lastOccur(str, ch) {
    for (var i = str.length - 1; i >= 0; i--) {
        var res = 0;
        if (str[i] === ch) {
            res = i + 1;
            return res;
        }

        if (i === 0 && ch !== str[0]) {
            return -1;
        }
    }
}

var str = "machu pichu";
var ch = "h";
var res = lastOccur(str,ch);

if (res === -1) {
    console.log("-1");
}
else if (res === 1) {
    console.log(res + "st");
} else if (res === 2) {
    console.log(res + "nd");
} else if (res === 3) {
    console.log(res + "rd");
} else {
    console.log(res + "th");
}

