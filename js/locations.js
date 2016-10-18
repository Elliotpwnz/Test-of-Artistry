var Location = function (name) {

	this.id = (Location.numInstances++);
	this.name = name;

	this.currentIndividuals = [];

	locationObjects.push(this); //Push new object to collection

	this.getName = function() {
		return this.name;
	}
	this.getID = function() {
		return this.id;
	}

	this.addToCurrentIndividuals = function(individual) {
		this.currentIndividuals.push(individual);
	}

	this.removeFromCurrentIndividuals = function(individual) {
		var index = this.currentIndividuals.indexOf(individual);
		this.currentIndividuals.splice(index, 1);
	}

	Location.getById = function(id) {
		return locationObjects[id];
	}
}
