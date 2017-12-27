// Array to store all our movies
var movies = [];

function createMovie() {
    // Get references to elements
    var titleElement = document.getElementById("movie-title");
    var lengthElement = document.getElementById("movie-length");
    var genreSelectElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById("movie-list");
    var errorElement = document.getElementById("error");

    // Get element values
    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

    // Validate form
    var isInvalidForm = !title || !length || (genre === "none");
    if (isInvalidForm) {
        errorElement.textContent = "Error";
        return;
    }

    // Reset error if any
    errorElement.textContent = "";

    // Create movie object
    var movie = new Movie(title, length, genre);

    // Add movie to list of movies
    movies.push(movie);

    // 
    movieListElement.innerHTML = createListHTML(movies);

    titleElement.value = "";
    lengthElement.value = "";

}

function createListHTML(array) {

    // Building our HTML starting with 
    // open <ul> tag
    var movieListHTML = "<ul>";

    // Iterate array and for each element create
    // new <li> element and append to string
    for (var i = 0; i < array.length; i++) {
        var film = array[i];
        movieListHTML += "<li>" + film.getInfo() + "</li>"
    }

    // Finish list by closed </ul>
    movieListHTML += "</ul>"

    // Return formated html string 
    return movieListHTML;
}