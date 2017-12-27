

function oddOrEven(x){
    
        if (x === 0) {
            console.log(x + " is even");
        } else if (x % 2 === 0) {
            console.log(x + " is even");
        } else {
            console.log(x + " is odd");
        }
}

function range(r){ 

    for(var x = 0; x <= r; x++){
    oddOrEven(x);
    }
    
}

range(7);