//A closure wraps up an entire environment, binding necessary variables from other scopes.
//practice the quiz on this one
function testClosure () {
    var x = 4; //this is a local only variable
    //return x; // These variables are only allowed within the scope of the function
    function closeX () {
        return x; //in the innermost fucntion closex looks for x in it's function and cannot find it, then looks to the higher level function
    }
    return closeX;
}

console.log(testClosure());

