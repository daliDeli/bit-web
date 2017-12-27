"use strict";


function Genre(name) {
    this.name = name;
    this.getDate = function () {
        var abbrev = this.name[0] + this.name[name.length - 1];
        return abbrev.toUppercase();
    }


}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return (this.title + ", " + this.length + ", " + this.genre.getData());
    }

}

function Program(date, numberOfMovies) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    this.totalLength = 0;

    this.getData = function () {
        var program = this.date + this.listOfMovies.length;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            
        }
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.numberOfMovies++;
        this.totalLength += movie.length;
    }

}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;

    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
}


(function (ram) {
    // var spiderman = new Movie("Spiderman", new Genre("drama"), 123);

    function createMovie(movieTitle, movieLength, movieGenre) {
        var zanr = new Genre(movieGenre);
        var movie = new Movie(movieTitle, movieLength, zanr);
        console.log(movie);
        return movie;
    }

    function addProgram(date){
        var program = new Program(date,)
    }

    var batman = createMovie("Batman", 120, "action");

})();