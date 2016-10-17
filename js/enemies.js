var Enemy = function (name, health) {

	this.id = (Enemy.numInstances++);
	this.name = name;
  this.health = health;

	enemyObjects.push(this); //Push new object to collection

	this.getName = function() {
		return this.name;
	}
  this.getHealth = function() {
    return this.health;
  }
	this.getID = function() {
		return this.id;
	}

	Enemy.getById = function(id) {
		return enemyObjects[id];
	}

  this.dealDamage = function() {
    var dmg = Math.floor(Math.random() * (this.health / 2));
    return dmg;
  }
  this.takeDamage = function(hp){
    if (this.health > 0) {
      this.health -= hp;
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }

}
