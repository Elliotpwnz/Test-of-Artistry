var Enemy = function (name, level, location) {

	this.id = (Enemy.numInstances++);
	this.name = name;
	this.level = level;
	this.maxHP = level * 10;
	this.currentHP = this.maxHP;
	this.expWorth = level * 5;
	this.location = location.getID();
	location.addToCurrentEnemies(this);

	enemyObjects.push(this); //Push new object to collection

	this.getID = function() {
		return this.id;
	}
	this.getName = function() {
		return this.name;
	}
	this.getLevel = function() {
		return this.level;
	}
  this.getHealth = function() {
    return this.currentHP;
  }
	this.getExpWorth = function() {
		return this.expWorth;
	}

	Enemy.getById = function(id) {
		return enemyObjects[id];
	}


	this.getLocation = function(){
		return this.location;
	}
	this.getLocationName = function(){
		return Location.getById(this.location).getName();
	}
  //I have not included updateLocation because I think it makes more sense
	//to just add a new instance of each monster in each location if they
	//are found in more than one place

	this.writeAttack = function () {
		$('#text-section').html("<span class='text-danger'> You are now Fighting a " + this.name + "!</span>"
		+ " <button class='btn btn-danger' onClick='playerAttack("+ this.name.toLowerCase() +", thePlayer)'>Attack " + this.name + "</button> "
		+ " <button class='btn btn-info'>Run</button> "
	  + this.name + "'s Current HP: <span id='currentEnemyHealth'>" + this.currentHP + "</span>");
	}

  this.dealDamage = function() {
	  var dmg = Math.ceil(Math.random() * this.level);
		var miss = Math.floor(Math.random() * 5);
		if (miss == 1) {dmg = 0;} //Makes it easier (miss 20% of time) can change if too easy/hard
    return dmg;
  }
  this.takeDamage = function(hp){
		this.currentHP -= hp;
    if (this.currentHP <= 0) {
      this.die();
    }
  }

	this.die = function(){
		  $('#text-section').html("You have killed the "+ this.name +" and have gained " + this.expWorth + " experience!" );
      thePlayer.gainExperience(this.expWorth);
			writeCurrentExperience(thePlayer);
			this.currentHP = this.maxHP;
	}

}
