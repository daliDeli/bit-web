"use strict";

function Country(name,odds,continent){
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}

function Person(name,surname, dateOfBirth){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(dateOfBirth);
}

Person.prototype.getData = function(){
    return "Name: " + this.name + "\n Surname: " + this.surname + " \n Date of birth: " + this.dateOfBirth;
}

function Player(person, betAmount, country){
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}

Player.prototype.

function Address(country, city, postalCode, street, number){
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}

Address.prototype.getData = function(){
    var abbreviation = this.country[0] + this.country[1].toUpperCase() 
    return this.street + " " +this.number + ", " +this.postalCode + " " + this.city + ", " + abbreviation;
}

function BettingPlace(address){
    this.address = address;
    this.listOfPlayers = [];
}

function BettingHouse(competition){
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numOfPlayers = 0;
}

var Continent  = Object.freeze({
    EU: "Europa",
    AS: "Asia",
    AF: "Africa",
    SA: "South America",
    NA: "North America",
    AU: "Australia"
})


(function (){
    
    })();