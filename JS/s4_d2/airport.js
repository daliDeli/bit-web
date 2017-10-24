"use strict";



function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function(){
        return this.name + " " + this.surname;
    }
}

function Seat(number, category) {
    this.number = number;
    this.category = category;
    if (this.category === undefined || this.category === null){
        this.category = "e";
    }
    if(this.number === undefined){
        this.number = Math.round(Math.random() * 100 + 1);
    }
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function(){
        var toUpper = this.seat.category.toUpperCase();
        var numOfSeat = this.seat.number;
        return numOfSeat + ", " + toUpper + ", " + this.person.getData();
    }
}

function Flight(relation, date) { // date treba da bude upisano u stringu
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];

    this.getData = function(){
        return this.date + ", " + this.relation;
    }

    this.addPassenger = function(passenger){
        this.listOfPassengers.push(passenger);
    }
}

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];

    this.addFlight = function (flight){
        this.listOfFlights.push(flight);
    }
}

(function () {
    // var paris = new Flight("belgrade-paris", "22nd Oct");

    function createFligth (relation, date){
        var paris = new Flight (relation, date);
        return paris;  
    }
    function createPassenger (name, surname, number, category){
        var pera = new Person (name, surname);
        var thirdRow = new Seat (number, category);
        var makingPassenger = new Passenger (pera, thirdRow);
        return makingPassenger;
    }




    console.log(createPassenger("zile", "miljkovic"));
    
})();

var nikola = new Airport();

console.log(nikola.name);