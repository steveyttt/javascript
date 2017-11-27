//objects have secret properties
//These are object prototypes
//protoypes are like blue prints
/*
valueOf
constructor
toLocalString
toString
isPropertyOf
propertyIsEnumerable
hasOwnProperty
*/

//prototypes are like methods you can apply to different types of properties
//for example .trim is a prototype of strings
//.push is a prototype of arrays

//Here is an example of adding an inheritable protoype method to all string objects
String.prototype.countAll = function ( x ) {
    var letterCount = 0;
    for (var i = 0 ; i<this.length; i++ ) {
      if (this.charAt(i).toUpperCase() == x.toUpperCase() ) {
          letterCount++
      }
    }
  return letterCount;
}

var hi = "Well hello there"
var h2 = "Well hello there"
var h3 = "Well hello there"

console.log(hi.countAll("e"));