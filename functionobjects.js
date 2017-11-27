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
    },
    //I have added another function that counts properties inside objects
    countFish: function ( ) {
        var numFish = 0;
        for (x in this) {
            if ( this[x].type == "fish") {
                numFish++;
            }
        }
    return numFish;
    }
}

//how to call function
aquarium.addCritter("Bubbles", "Fish", "YellowTang", 6.3);
aquarium.takeOut("Marlin");
console.log(aquarium);

//This is called enumeration
//key references every property inisde aquarium
var numFish = 0
for (x in aquarium) {
  //console.log(x)
  //x becomes the name - nemo or marlin
  //then we check the .type of each key to see if it is a "fish" string
  if ( aquarium[x].type == "fish") {
      numFish++
  }

}

aquarium.countFish();
console.log(aquarium.countFish());
