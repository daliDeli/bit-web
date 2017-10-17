"use strict"

function perfectNumber(number) {
    var sum = 0;
    for (var i = 0; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }

    }
    if ((sum + number) / 2 === number) {
        console.log("This is a perfect number :)")
    } else {
        console.log("This is NOT a perfect number!!!")
    }
}

perfectNumber(496 );