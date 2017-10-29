var movies = [];
var programs = [];

function createMovies() {

    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreSelectedElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectedElement[genreSelectedElement.selectedIndex];

    var selectedOptionElement = document.getElementById("chooseMovie");

    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;
    // var option = selectedOptionElement.value;

    var movie = new Movie(title, length, genre);
    // console.log(movie);
    movies.push(movie);

    var movieListHTML = "<ul>";
    var movieOptions;

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];

        movieListHTML += "<li>" + film.getInfo() + "</li>";

        movieOptions +="<option>"  + film.title + "</option>";
    }

    movieListHTML += "</ul>";

    selectedOptionElement.innerHTML = movieOptions;


    if (!title || !length || genre === "none") {
        var error = document.getElementById("error");
        error.textContent ="Please enter all info!";
        return;

        
    }

    var listOfMovies = document.getElementById("listOfMovies");
    listOfMovies.innerHTML = movieListHTML;

    //clears input and select fields
    // titleElement = "";
    // length = "";
    // genre = "none";
    
}



function createProgram(){
    var date = document.getElementById("date");
    var listOfDates = document.getElementById("listOfDates");

    var dateValue = date.value;

    var fullDate =new Date(dateValue);
    
    var createDate = document.createElement("p");
    var valueDate = createDate.textContent = fullDate.toDateString();

    listOfDates.appendChild(createDate);

    var selectedOptionElement = document.getElementById("chooseProgram");

    var program = new Program(dateValue);
    programs.push(program);
    var movieOptions;

    for (var i = 0; i < programs.length; i++) {
        var element = programs[i];

        movieOptions +="<option>"  + element.date + "</option>";
  
    }

    selectedOptionElement.innerHTML = movieOptions;

}



function addMovieToProgram(){
    var movieElement = document.getElementById("chooseMovie");
    var movieSelectElement = movieElement[movieElement.selectedIndex];
    var programElement = document.getElementById("chooseProgram");
    var programSelectElement = programElement[programElement.selectedIndex];
    var programInfo = document.getElementById("programInfo");

    var movieValue = movieSelectElement.value;
    var programValue = programSelectElement.value;

    programs[programValue].addMovie(movies[movieValue]);
    programInfo.textContent = "Film " + movies[movieValue].title.toUpperCase() + " je dodat programu: " + programs[programValue].date;


}



    