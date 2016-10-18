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
var spider = new Enemy("Spider", 1, tilth);
var wolf = new Enemy("Wolf", 2, tilth);
var dragon = new Enemy("Dragon", 20, remen);

NPC.numInstances = 0;
var npcObjects = [];
var thomas = new NPC("Thomas", tilth);
thomas.updateTalkToFunc(function (){writeText("I am a unique NPC named "+thomas.getName()+"!"
 +" Should I move to Remen?" + writeConfirmThis("thomas.updateLocation(remen);"
 +" thomas.updateTalkToFunc(function(){writeText(\"Thanks for moving me to Remen earlier!\");});clearText();"));}); //Custom talkTo() function
var bobTheInkeeper = new NPC("Bob the Innkeeper", tilth);
var beggarJoe = new NPC("Beggar Joe", remen);
var debugNPC = new NPC("Debug", remen);
debugNPC.updateTalkToFunc(function (){writeText("I am an NPC named Debug. I am here to help debug problems!");});

//The player variable
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
function writeCurrentLevel(player) {
	$("#currentLevel").html(player.getCurrentLevel());
}
function writeCurrentExperience(player) {
	$("#currentExperience").html(player.getCurrentExperience());
}
function writeMaxHp(player) {
	$("#maxHP").html(player.getMaxHP());
}
function writeCurrentHp(player) {
	$("#currentHP").html(player.getCurrentHP());
}

function writeCurrentIndividuals(location) {
	var btn ="";
	var counter = 0;
	for (var i = 0; i < location.currentIndividuals.length; ++i){
		counter = i;
		var theIndividual = location.currentIndividuals[i];
		btn += '<button class="btn btn-primary npc" id="talkToNPC'+theIndividual.getID()+'">Talk to '
			+theIndividual.getName()+'</button>';
	}
	$(".current-tab").html($(".current-tab").html() + btn);
	for (var i = 0; i < counter+1; ++i){
		var theIndividual = location.currentIndividuals[i];
		var btnFinder = "#talkToNPC"+theIndividual.getID();
		console.log($(btnFinder));
		$(btnFinder).click(theIndividual.getTalkTo());
	}
}

function writeCurrentEnemies(location) {
	var btn ="";
	var counter = 0;
	for (var i = 0; i < location.currentEnemies.length; ++i){
		counter = i;
		var theEnemy = location.currentEnemies[i];
		btn += '<button class="btn btn-warning enemy" id="attackEnemy'+theEnemy.getID()+'">Attack '
			+theEnemy.getName()+'</button>';
	}
	$("#woodsTab").html(btn); //Don't need to include anything but specific enemies
	for (var i = 0; i < counter+1; ++i){
		var theEnemy = location.currentEnemies[i];
		var btnFinder = "#attackEnemy"+theEnemy.getID();
		console.log($(btnFinder));
		$(btnFinder).on('click', function(){ theEnemy.writeAttack(); });
	}
}


function writeConfirmThis(func){ //writeConfirmThis creates a button that calls a function if clicked
	return " <button class='btn btn-primary npc' onclick='"+func+"''>Confirm</button>";
}
function clearText(){
	$('#text-section').html("");
}
function clearAllButtons(){
	$('.current-tab').html("");
}
function clearSpecificButtons(theClass){
	$('.'+theClass).remove();
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
	console.log(Location.getById(thePlayer.getLocation()));
    writeText("You are currently in " + thePlayer.getLocationName());
    writeCurrentIndividuals(Location.getById(thePlayer.getLocation()));
		writeCurrentEnemies(Location.getById(thePlayer.getLocation()));
	writeCurrentLevel(thePlayer);
	writeCurrentExperience(thePlayer);
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
