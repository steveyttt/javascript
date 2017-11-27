//objects are containers of related information (json)
//objects are usually large pieces of data with many individual properties
//objects are sometimes called composite values
//properties within objects can contain mixtures of num, string array, integer, function even more objects

//object literal
//curly brackets tell JS to create a new object
var myBox = { height: 6, width: 3, length: 10, volume: 200, material: "cardboard", contents: ["IT", "Godfather", "Scarlet Letter"] }; 

//objects accept arrays for values
var booksArray = ["IT", "Godfather", "Scarlet Letter"];
var myBox = { height: 6, width: 3, length: 10, volume: 200, material: "cardboard", contents: booksArray }; 

console.log(myBox);
console.log(myBox.width);

//You can change one value for a property inside an object
myBox.width = 12
console.log(myBox.width);

//property values can contain logic
myBox.volume = myBox.length * myBox.height * myBox.width
console.log(myBox.volume);

//You can push onto this like any other array
myBox.contents.push("On the road");
console.log(booksArray);
//whaaaa? That updated the variable even though i referenced the contents
//This is because in a JS object booksArray inside myBox is a pointer to booksArray
//So running push on that property redirects you to the actual VAR

myBox.weigth = 10
console.log(myBox.weigth);

//You can grab a property by name too
//Do it like an array but use a string and not the number
console.log(myBox["material"]);

//Using the array syntax you can add a property with a space in it
myBox["Delivery Address"] = "China"
console.log(myBox);

//This will fail everytime
//There is no such thing as .String
//Only.property or .method()
//console.log(myBox."Delivery Address");

//You can use delete to remove properties from objects
//delete always returns true
delete myBox.contents;
console.log(myBox);

function addBook (box, name, writer ) {
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectation", "Charles Dickens");
addBook(myBox, "Great Expectation2", "Charles Dickens");

console.log(box["# of Books"]);