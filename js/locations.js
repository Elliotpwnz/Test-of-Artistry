var Location = function (name) {

	this.id = (Location.numInstances++);
	this.name = name;

	locationObjects.push(this); //Push new object to collection

	this.getName = function() {
		return this.name;
	}
	this.getID = function() {
		return this.id;
	}

	Location.getById = function(id) {
		return locationObjects[id];
	}
}
