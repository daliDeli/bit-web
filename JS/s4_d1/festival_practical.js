"use strict";


function Genre(name){
    this.name = name;
    this.getDate = function (){
        var abbrev =  this.name[0] + this.name[name.length - 1] ;
        return abbrev.toUppercase();
    }
        
   
}

function Movie(title, genre, length){
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData =  function (){
        return (this.title + ", " + this.length + ", "+ this.genre.getData());
    }

}
function Program (date, numberOfMovies){
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = [] ;
    this.getData = function (){
        var program = this.date + numberOfMovies.length;
        for(var i = 0; i < numberOfMovies.length; i++){
            
        }
    }

} 
function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
}


(function (ram){
    console.log(ram);
}("Pera"));