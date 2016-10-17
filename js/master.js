/****************************
**	  Test of Artistry
**	     master.js
**
**	  Elliot Simpson
**	  Garret Corbett
*****************************/

//----- Game Variables ------
Item.numInstances = 0;
var itemObjects = []; //Collection of item objects
var inventoryItems = []; //Collection of item objects in players inventory
var bankItems = []; //Collection of item objects in players bank
var bronzeSword = new Item("Bronze Sword");
var letherShield = new Item("Leather Shield");
var magicCrystal = new Item("Magic Crystal");
bronzeSword.addToInventory();
letherShield.addToInventory();
magicCrystal.addToInventory();

Location.numInstances = 0; //Location static variable
var locationObjects = []; //Collection of location objects
var turth = new Location("Turth");
var remen = new Location("Remen");
var tilth = new Location("Tilth");

Enemy.numInstances = 0;
var enemyObjects = []; //Collection of location objects
var spider = new Enemy("Spider", 8);
var wolf = new Enemy("Wolf", 25);

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
function writeEnemy(enemy) {
	var enemyFighting = enemy.getName();
	string = "<span class='text-danger'> You are now Fighting a " + enemyFighting + "!</span>";
	string += " <button class='btn btn-danger' onClick='playerAttack("+enemyFighting.toLowerCase()+", thePlayer)'>Attack " +enemyFighting + "</button> "
	string += " <button class='btn btn-info'>Run</button> "
	string += enemyFighting + "'s Current HP: <span id='currentEnemyHealth'>" + enemy.getHealth() + "</span>";
	$('#text-section').html(string);
}
function playerAttack(enemy, player) {
	var dmgTaken = enemy.dealDamage();
	var dmgDelt = player.getAttack();
	player.takeDamage(dmgTaken);
	enemy.takeDamage(dmgDelt);
  writeCurrentHp(player);
	$("#currentEnemyHealth").html(enemy.getHealth());
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

	$("#town").click(function(){
		$(this).parent().children("li").removeClass("active");
		$(this).addClass("active");
		$(".tab-display").removeClass("current-tab");
		$("#townTab").addClass("current-tab");
	});
	$("#woods").click(function(){
		$(this).parent().children("li").removeClass("active");
		$(this).addClass("active");
		$(".tab-display").removeClass("current-tab");
		$("#woodsTab").addClass("current-tab");
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
