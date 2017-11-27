//prototypeinheritance.js
var shoe = {size: "9", Gender: "male", construction: "slipper"};
var magicShoe = Object.create(shoe);
magicShoe.jewels = "Ruby";
magicShoe.travelAction = "click heels";

console.log(magicShoe);
console.log(shoe);

//This checks if magic shoe is a prototype of shoe
console.log(shoe.isPrototypeOf( magicShoe));


//class - a set of objects that all share and inherit from the same prototype
//build a constructor function
//sets up inheritance whilst also assigning specific property values

//Capitol S on the function tells JS it is 
//A Maker of an entire class object.... A constructor!!!!
function Shoe (shoeSize, shoeColour, forGender, constructorStyle) {

    this.size = shoeSize;
    this.colour = shoeColour;
    this.gender = forGender;
    this.construction = constructorStyle;
    // this.putOn = function () {console.log("putting the shoe on")};
    // this.takeOff = function () {console.log("Taking the shoe off")};
}

//by putting these functions inside the shoe prototype
//we are forcing all show objects to inherit these functions
//You can ever reference the prototype properties inside the functions
Shoe.prototype = { 
    putOn: function () {console.log("Shoes On");},
    putOnClever: function () {console.log("Putting my " + this.construction + "'s on!");},
    takeOff: function () {console.log("Shoes Off");}
};

//The new keyword creates a new instance of show
var beachShoe = new Shoe(10, "blue", "women", "flipflop")
console.log(beachShoe.putOn());
console.log(beachShoe);
beachShoe.strapCount = 2
console.log(beachShoe.strapCount);

console.log(beachShoe.putOnClever());

