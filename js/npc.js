var NPC = function(name, location) {
  this.name = name;
  this.maxHP = 10;
  this.currentHP = 10;
  this.attack =  2;
  this.inventory = Item.currentInventory(); //Should NPCs hold items? 
  this.bank = 0;
  this.location = location; //The npc is in this location

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

	this.updateLocation = function(id){
		this.location = id;
	}

  this.getInventory = function() {
    return this.inventory;
  }

  this.talkTo = function() {
    writeText("Why hello there! Welcome to "+this.getLocationName()+"! My name is "+this.getName()+".");
  }

  this.updateTalkToFunc = function(func){
    this.talkTo = func;
  }

}
