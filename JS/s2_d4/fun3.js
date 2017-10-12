function conca(str, n) {
    var sum = "";
    for (var i = 0; i < n; i++) {
         sum += str;
    }
    console.log(sum);
}

conca("hello", 3);