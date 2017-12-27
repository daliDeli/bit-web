function humanize(num) {
    if (num % 100 === 1 && num % 100 !== 11) {
        console.log(num + "st");
    } else if (num % 100 === 2 && num % 100 !== 12) {
        console.log(num + "nd");
    } else if (num % 100 === 3 && num % 100 !== 13) {
        console.log(num + "rd");
    } else if (num % 100 >= 11 && num % 100 <= 13) {
        console.log(num + "th");
    } else {
        console.log(num + "th");
    }
}

var num = 13;
humanize(num);