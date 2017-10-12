function counterChar(string, letter) {
    var tamara = 0;
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            tamara++;
        }
    }
    console.log(tamara);
}

counterChar("Seee Ma", "e");