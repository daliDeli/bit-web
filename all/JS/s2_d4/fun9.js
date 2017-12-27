function isPrime(num) {
    if (typeof num !== "number") {
        console.log("Uneti parametar nije broj")
    }
    var counter = 0;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            counter++;
        }

        }

        if (counter <= 1) {
            console.log("This is a prime number.")
        } else {
            console.log("This is not a prime number.")
        }
    }
    isPrime(55655);