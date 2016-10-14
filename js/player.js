var Player = function() {
  this.pname = "Garret";
  this.maxHP = 10;
  this.currentHP = 10;
  this.gold =  100;
  this.items =  ["Bronze Sword", "Leather Shield", "Magic Crystal"];

  this.getMaxHP = function(){
		return this.maxHP;
	}
  this.getCurrentHP = function(){
		return this.currentHP;
	}

  this.takeDamage = function(hp){
    if (this.currentHP > 0) {
      this.currentHP -= hp;
    }
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }
    console.log(this.currentHP);
  }
  this.heal = function(hp){
    if (this.currentHP < this.maxHP) {
      this.currentHP += hp;
    }
    if (this.currentHP > this.maxHP) {
      this.currentHP = this.maxHP;
    }
    console.log(this.currentHP);
  }

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
