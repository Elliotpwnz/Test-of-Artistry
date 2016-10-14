/****************************
**	  Test of Artistry
**	     master.js
**
**	  Elliot Simpson
**	  Garret Corbett
*****************************/

//----- Game Variables ------
Location.numInstances = 0; //Location static variable
var locationObjects = []; //Collection of location objects
var turth = new Location("Turth");
var remen = new Location("Remen");
var tilth = new Location("Tilth");

var thePlayer = new Player();

//----- Game functions -----
function writeText(string){
	$('#text-section').html(string);
}
function writeLocation(player){
	$('#location-section').html(player.getLocationName());
}
function writeMaxHp(player){
	$("#maxHP").html(player.getMaxHP());
}
function writeCurrentHp(player){
	$("#currentHP").html(player.getCurrentHP());
}


$(document).ready(function(){
	//write all initial data to the page
	writeLocation(thePlayer);
  writeText("You are currently in " + thePlayer.getLocationName());
	writeMaxHp(thePlayer);
	writeCurrentHp(thePlayer);

	$('#left-container').draggable().resizable();
	$('#center-container').draggable().resizable();
	$('#right-container').draggable().resizable();

  $(".updateHPDisplay").click(function(){
		writeCurrentHp(thePlayer);
	});

	$("#travelToRemen").click(function(){
		writeLocation(thePlayer);
	  writeText("You are currently in " + thePlayer.getLocationName());
	});

});
