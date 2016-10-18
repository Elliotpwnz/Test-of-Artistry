var NPC = function(name, location) {
  this.id = (NPC.numInstances++);
  this.name = name;
  this.maxHP = 10;
  this.currentHP = 10;
  this.attack =  2;
  this.inventory = Item.currentInventory(); //Should NPCs hold items? 
  this.bank = 0;
  this.location = location.getID(); //The npc is in this location
  location.addToCurrentIndividuals(this); //Add the npc to the locations list of individuals

  this.getID = function(){
    return this.id;
  }

  this.getName = function(){
    return this.name;
  }

  this.getMaxHP = function(){
		return this.maxHP;
	}
  this.getCurrentHP = function(){
		return this.currentHP;
	}

  this.setMaxHP = function(hp){
    this.maxHP = hp;
  }

  this.setCurrentHP = function(hp){
    this.currentHP = hp;
  }

  this.getAttack = function() {
    return this.attack;
  }

  this.setAttack = function(attack) {
    this.attack = attack;
  }

  this.takeDamage = function(dmg){
    if (this.currentHP > 0) {
      this.currentHP -= dmg;
    }
    else {
      this.currentHP = 0;
    }
  }
  this.heal = function(hp){
    if (this.currentHP < this.maxHP) {
      this.currentHP += hp;
    }
    if (this.currentHP > this.maxHP) {
      this.currentHP = this.maxHP;
    }
  }

	this.getLocation = function(){
		return this.location;
	}

	this.getLocationName = function(){
		return Location.getById(this.location).getName();
	}

	this.updateLocation = function(location){
    Location.getById(this.location).removeFromCurrentIndividuals(this);
    this.location = location.getID();
    location.addToCurrentIndividuals(this);
    clearSpecificButtons('npc');
    writeCurrentIndividuals(Location.getById(thePlayer.getLocation()));
	}

  this.getInventory = function() {
    return this.inventory;
  }

  this.talkTo = function() {
    writeText("Why hello there! I am a generic NPC.");
  }

  this.getTalkTo = function() {
    return this.talkTo;
  }

  this.updateTalkToFunc = function(func){
    this.talkTo = func;
  }

}
