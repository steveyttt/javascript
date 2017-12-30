
//Notice here the objects are presented in shorthand
//i.e. console.log shows the let variable inside the object
//This means you dont need ot write anywhere near as much text
function buildUser (first, last) {
    let fullName = first + " " + last;
    return {first, last, fullName}
}

//assign FROM variables to OBJECT PROPERTIES
//Object Initializer
let name = "Steve";
let age = 45;
let friends = ["Brook", "Tyler"];
let user22 = { name, age, friends };
console.log(user22)

let user = buildUser("steven", "tyson");
console.log(user.first)
console.log(user.last)
console.log(user.fullName)

//Object Destructuring
//Assign FROM OBJECT PROPERTIES to VARIABLES
let {first, last, fullName} = buildUser("Sam", "Williams")
console.log(first)
console.log(last);
console.log(fullName);

//Adding a function to an object traditional
function buildUser (first, last, postCount) {
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {
        first,
        last,
        fullName,
        isActive: function(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    }
}

//Adding a function to an object ES2015
function buildUser (first, last, postCount) {
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {
        first,
        last,
        fullName,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    }
}

//Adding a function to an object ES2015
//This is called the method initializer shorthand
function buildUser (first, last, postCount) {
    let fullName = `${first} ${last}`
    const ACTIVE_POST_COUNT = 10;
    return {
        first,
        last,
        fullName,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    }
}

//You can use backticks ` to put text on many lines
let myname = "Steve"
console.log(`Hello there
How are you today
I am ok cheers
regards ${myname}
`)