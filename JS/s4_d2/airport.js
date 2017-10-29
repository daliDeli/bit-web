"use strict";



function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
};

function Seat(number, category) {
    this.number = number || Math.round(((100 - 10) * Math.random()) + 10);
    this.category = category || "e";
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

}

Passenger.prototype.getData = function () {

    return this.seat.number + ", " + this.seat.category.toUpperCase() + ", " + this.person.getData();
};

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.numOfPassengers = 0;
    this.listOfPassengers = [];
}

Flight.prototype.addPassenger = function (passenger) {

    this.listOfPassengers.push(passenger);
    this.numOfPassengers++;

};

Flight.prototype.getData = function () {
    var output1 = "\t\t Date: " +  this.date + "Relation " + this.relation + "\n";
    for (var i = 0; i < this.listOfPassengers.length; i++) {
        output1 += "\t\t" + this.listOfPassengers[i].getData() + "\n";
        
        
    }
    return output1;

};

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.totalNumOfPassengers = 0;
}

Airport.prototype.addFlight = function (flight) {
    this.listOfFlights.push(flight);
    this.totalNumOfPassengers += flight.numOfPassengers;


};

Airport.prototype.getData = function () {
    var output = "";

    output += "Airport: " + this.name + ", totoal number of passenger: " + this.totalNumOfPassengers + "\n";

    for (var i = 0; i < this.listOfFlights.length; i++) {

        output += "\t" + this.listOfFlights[i].getData() + "\n";
    }

    return output;
};

(function () {

    function createFlight(relation, date) {
        var flight = new Flight(relation, date);
        return flight;
    }

    function createPassenger(name, surname, seatNumber, seatCategory) {

        var p = new Person(name, surname)
        var s = new Seat(seatNumber, seatCategory);
        var passenger = new Passenger(p, s);
        return passenger;
    }

    var airport = new Airport();

    var flightOne = createFlight("Belgrade - New York", "October 25th 2017");
    var flightTwo = createFlight("Barcelona - Belgrade", "November 11th 2017");

    var passengerOne = createPassenger("John", "Snow", 1, "b");
    var passengerTwo = createPassenger("Cercei", "Lannister", 2, "b");
    var passengerThree = createPassenger("Daenerys", "Targeryen", 14);
    var passengerFour = createPassenger("Tyrion", "Lannister");

    flightOne.addPassenger(passengerOne);
    flightOne.addPassenger(passengerTwo);
    flightTwo.addPassenger(passengerThree);
    flightTwo.addPassenger(passengerFour);


    airport.addFlight(flightOne);
    airport.addFlight(flightTwo);



    console.log(airport.getData());


})();






