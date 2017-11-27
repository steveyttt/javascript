//you can put functions inside objects

var aquarium = {
    Nemo: { type: "fish", species: "clownfish", length: 3.7 },
    Marlin: { type: "fish", species: "clownfish", length: 4.1 },
    //this always refers to the owner object of the function in which this is used
    //so this means aquarium
    //add a fish
    addCritter: function ( name, type, species, length) {
        this[name] = { type: type, species: species, length: length };
    },
    //remove a fish
    takeOut: function ( name ) {
        this[name].name = name;
        var temp = this[name]
        delete this[name]
        return temp
    }
}

//how to call function
aquarium.addCritter("Bubbles", "Fish", "YellowTang", 6.3);
aquarium.takeOut("Marlin");

console.log(aquarium);