
var sum= 0;


function division(x){
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("Deljivo je sa 3 i 5!");
        sum+=x;
    }else{
        console.log("Nije deljivo!")
    }
    
}

function sumDiv (){
    for(var x = 0; x < 1000; x++){
        division(x); 
    }
    console.log(sum);
}
division(15);