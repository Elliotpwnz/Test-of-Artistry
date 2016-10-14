var player = {
  "name": "Garret",
  "maxHP": "10",
  "currentHP": "10",
  "gold": 100,
  "items": ["Bronze Sword", "Leather Shield", "Magic Crystal"],

  "takeDamage": function(hp){
    if (this.currentHP > 0) {
      this.currentHP -= hp;
    }
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }
  },

  "heal": function(hp){
    if (this.currentHP < this.maxHP) {
      this.currentHP += hp;
    }
    if (this.currentHP > this.maxHP) {
      this.currentHP = this.maxHP;
    }
  }
}
