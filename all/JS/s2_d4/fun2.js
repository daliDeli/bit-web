function isBlank(maybeBlank) {
    if (maybeBlank === "") {
        return true;
    } else {
        return false;
    }
}


var something = 3;

if (isBlank(something)) {
    console.log("This is a blank string.");
} else {
    console.log("This is not a blank string.");
}