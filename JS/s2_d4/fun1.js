function isString(maybeString) {
    return typeof maybeString === 'string';
}

var something = "3";

if (isString(something)) {
    console.log("This is a string.");
} else {
    console.log("This is not a string.");
}

