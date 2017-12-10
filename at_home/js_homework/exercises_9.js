"use strict"

function hideEmail(email) {
    var hiddenEmail = "";
    for (var i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            for (var j = 0 + i; j < email.length ; j++) {
                hiddenEmail += email[j];
            }
        }
    }
    return hiddenEmail;
}


function addDots (string){
    var threeDots = "...";
    var newString = threeDots + string;
    return newString;
}

console.log(addDots(hideEmail("myemailaddress@bgit.rs")));