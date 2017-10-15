function reverseNum(num) {
    var reversed = "";
    var counter = 0;
    for (var i = num.length - 1; i >= 0; i--) {
        reversed += num[i];
        counter++;
    }
    return parseInt(reversed);
}


console.log(reverseNum("12345"));