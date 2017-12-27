
//function constructor
function Foot(lenght, nails){
    this.lenght = length;
    this.nails = nails;
    this.walk = function(){
        console.log("Walking slow");
    }
}

var left = new Foot(123, 5);

//function returning object
function hero(city){
    return {    // vraca citav objekat kad se pozove
        name:city
    }
}


console.log(hero("hi"))
var h1 = hero("hi");
h1.name;