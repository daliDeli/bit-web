function primeNum(num) {
    var counter = 0;
    for (var i = 1; i <= num; i++) {
        if(num % i === 0){
            counter++;
        }
        
    }
    if(counter === 2){
        console.log("This is a prime number");
    }
}

primeNum(7);