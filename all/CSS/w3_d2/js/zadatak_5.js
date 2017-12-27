function table(callback){
    for(var i=1; i <= 12 ; i++ ){
        for(var j=1; j <= 12 ; j++){
            console.log(i + " x " + j + " = " + callback(i,j));
        }
    }
}
function multiplication(a,b){
    return a*b;
}

table(multiplication);