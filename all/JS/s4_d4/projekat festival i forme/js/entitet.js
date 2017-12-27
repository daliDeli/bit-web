function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = (genre[0] + genre[genre.length - 1]).toUpperCase();
}
Movie.prototype.getInfo = function () {
    return this.title + ", " + this.length + "min, " + this.genre;

};

function Program(date){
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype.addMovie = function(movie){
    listOfMovies.push(movie);
}