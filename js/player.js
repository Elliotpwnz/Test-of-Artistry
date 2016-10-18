var Player = function() {
  this.pname = "Garret";
  this.level = 1;
  this.experience = 0;
  this.maxHP = 10;
  this.currentHP = 10;
  this.attack =  2;
  this.gold =  100;
  this.inventory = Item.currentInventory();
  this.bank = 0;
  this.location = tilth.getID(); //The player starts in this location

  //HighScore Variables
  this.allTimeKills = 0;
  this.allTimeGoldEarned = 0;


  this.gainExperience = function(exp){
		this.experience += exp;
	}
  this.addGold = function(gold){
    this.gold += gold;
  }
  this.removeGold = function(gold){
    this.gold -= gold;
  }

  this.getCurrentLevel = function(){
		return this.level;
	}
  this.getCurrentExperience = function(){
		return this.experience;
	}
  this.getMaxHP = function(){
		return this.maxHP;
	}
  this.getCurrentHP = function(){
		return this.currentHP;
	}

  this.getAttack = function() {
    return this.attack;
  }
  this.takeDamage = function(hp){
    if (this.currentHP > 0) {
      this.currentHP -= hp;
    }
    if (this.currentHP < 0) {
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
    clearAllButtons();
    writeLocation(this);
    writeCurrentIndividuals(Location.getById(id));
    writeCurrentEnemies(Location.getById(id));
	}

  this.getInventory = function() {
    return this.inventory;
  }

}
