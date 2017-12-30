//with var's they are HOISTED so they are moved to the top of the function
//This means a var is accessible from the whole function
//let is accessible only from the block is resides in
function loadProfiles (userNames) {
    if (userNames.length > 3){
        let loadingMessage = "This may take a while...";
        console.log(loadingMessage);
        console.log(flashMessage);
    }
    else {
        let flashMessage = "Load Profiles";
        //You can reassign a let if necessary after creation
        flashMessage = "Reassigned Load Profiles"
        console.log(flashMessage);
    }
    //console.log(flashMessage); // This causes an error - let stays within the block it is assigned and connot be accessed outside the else block
}

loadProfiles(["Rita", "Jim", "Frank"]);