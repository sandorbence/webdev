//jshint esversion:6

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySupe = superheroes.random();
var myVillain = supervillains.random();
console.log(mySupe + " vs " + myVillain);
