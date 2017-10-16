function retirement(gender, yearOfBirth) {
    var age = 2017 - yearOfBirth;
    var retirementM = 65;
    var retirementF = 60;
    var yearsLeft;

    if (age > retirementF && age > retirementM) {
        yearsLeft = "This person is already in retirement.";}
    else if (gender === "f" || gender === "female") {
        yearsLeft = retirementF - age;
    } else if (gender === "m" || gender === "male") {
        yearsLeft = retirementM - age;
    } else {
        console.log("Please enter your gender in f/m or female/male format.");
        // return 1;
    }
    return yearsLeft;
}

var gender = "m";
var year = 1923;

console.log(retirement(gender, year));