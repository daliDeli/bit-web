var anonimusno = function (string) {
    var counter = 0;
    var array = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] === string[i]) {
                counter++;
            }

        }

    }
    return counter;
}

var string = "Moze i ovako Mia draga";

console.log(anonimusno(string));


