var person1 = {
    name: "jon",
    lastName:  "Doe",
    age: function (year) {
        var yob = prompt("Year of birth");
        result = 2017 - yob;
        alert(result);

    }

}

var person2 = Object.create(person1);


var person3 = {
    name: "pero"
};

person1.age.call(person3,1999);




