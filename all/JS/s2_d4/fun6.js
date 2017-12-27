function firstOccur(str, ch) {
    var res = 0;

    for (var i = 0; i < str.length; i++) {
        if(str[i] === ch) {
            res = i + 1;
            if (res === 1) {
                console.log(res + "st");
            } else if (res === 2) {
                console.log(res + "nd");
            } else if (res === 3) {
                console.log(res + "rd");
            } else {
                console.log(res + "th");
            }
            return 0;
        }

        if (i === (str.length - 1) && ch !== str[i]) {
            return -1;
        }
    }
}

var ch = "k";
var str = "sakura";

firstOccur(str, ch);