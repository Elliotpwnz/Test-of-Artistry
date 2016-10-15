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

Item.numInstances = 0; //Location static variable
var itemObjects = []; //Collection of item objects
var inventoryItems = []; //Collection of item objects in players inventory
var bankItems = []; //Collection of item objects in players bank
var bronzeSword = new Item("Bronze Sword");
var letherShield = new Item("Leather Shield");
var magicCrystal = new Item("Magic Crystal");
bronzeSword.addToInventory();
letherShield.addToInventory();
magicCrystal.addToInventory();

var thePlayer = new Player();

//----- Game functions -----
function writeInventory(arr) {
	var updatedInventory = "";
	arr.map(function(val){
		updatedInventory += "<div class='inventoryItem'>" + val + "</div>";
	});
	$('#currentInventory').html(updatedInventory);
}
function writeText(string) {
	$('#text-section').html(string);
}
function writeLocation(player) {
	$('#location-section').html(player.getLocationName());
}
function writeMaxHp(player) {
	$("#maxHP").html(player.getMaxHP());
}
function writeCurrentHp(player) {
	$("#currentHP").html(player.getCurrentHP());
}

console.log(thePlayer.getInventory());


$(document).ready(function(){
	//write all initial data to the page
	writeInventory(thePlayer.getInventory());
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

	$("#giveCrystal").click(function(){
		$(this).remove();
		magicCrystal.removeFromInventory();
		writeInventory(thePlayer.getInventory());
	});

	$("#stealLocketInsight").click(function(){
		$(this).remove();
		locketOfInsight = new Item("Locket Of Insight");
		locketOfInsight.addToInventory();
		writeInventory(thePlayer.getInventory());
	});

});
