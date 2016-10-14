/****************************
**	  Test of Artistry
**	     master.js 
**
**	  Elliot Simpson 
**	  Garret Corbett
*****************************/


//----- Game Objects -----

//Player Constructor
var Player = function (){
	this.location = tilth.getID(); //The player starts in this location

	this.getLocation = function(){
		return this.location;
	}

	this.getLocationName = function(){
		return Location.getById(this.location).getName();
	}

	this.updateLocation = function(id){
		this.location = id;
	}
}

//Location Constructor
var Location = function (name){ 

	this.id = (Location.numInstances++);
	this.name = name;

	locationObjects.push(this); //Push new object to collection

	this.getName = function(){
		return this.name;
	}

	this.getID = function(){
		return this.id;
	}

	Location.getById = function(id){
		return locationObjects[id];
	}
}

//----- Game functions -----
function writeText(string){
	$('#text-section').html(string);
}

function writeLocation(player){
	$('#location-section').html(player.getLocationName());
}

//----- Game Variables ------
Location.numInstances = 0; //Location static variable
var locationObjects = []; //Collection of location objects
var turth = new Location("Turth");
var remen = new Location("Remen");
var tilth = new Location("Tilth");

var thePlayer = new Player();

$(document).ready(function(){

	//UI Management
	$('#left-container').draggable().resizable();
	$('#center-container').draggable().resizable();
	$('#right-container').draggable().resizable();

	writeLocation(thePlayer);

	writeText("You are currently in" + thePlayer.getLocationName());

});