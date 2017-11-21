var x = 6 // global access ible from anywhere
var y = 4 // global

function add (a, b) {
    var x = a + b; //local, only accessible within function -- Does NOT affect the var x at the top of the script
    return x;
}

function subtract (a, b) {
    y = a - b; // This will modify the y variable at the top of the page as you havent defined it as a new var like with x
    return y;
}