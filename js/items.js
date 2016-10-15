var Item = function (name) {

	this.id = (Item.numInstances++);
	this.name = name;

	itemObjects.push(this); //Push new object to collection

	this.getName = function() {
		return this.name;
	}
	this.getID = function() {
		return this.id;
	}

	Item.getById = function(id) {
		return itemsObjects[id];
	}

  Item.currentInventory = function () {
    return inventoryItems;
  }
  this.addToInventory = function() {
    inventoryItems.push(this.name);
  }
  this.removeFromInventory = function() {
    var index = inventoryItems.indexOf(this.name);
    if (index >= 0) {
      inventoryItems.splice( index, 1 );
    }
  }

}
