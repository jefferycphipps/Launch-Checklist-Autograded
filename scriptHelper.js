// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === null || testInput === '')
        return "Empty";
    if(!isNaN(testInput))
        return "Is a Number";
    else 
        return "Not a Number";
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let flag = true;
    console.log(pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    if(!(validateInput(pilot.value)==="Empty"||validateInput(pilot.value)==="Is a Number")){
        document.getElementById("pilotStatus").innerHTML = `${pilot.value} is ready for launch.`;
    }else{
        alert("The pilot has to have a name.");
        flag = false;
    }
    if(!(validateInput(copilot.value)==="Empty"||validateInput(copilot.value)==="Is a Number")){
        document.getElementById("copilotStatus").innerHTML = `${copilot.value} is ready for launch.`;
    }else{
        alert("The co-pilot has to have a name.");
        flag = false;
    }
    if(!(validateInput(fuelLevel.value)==="Empty"||validateInput(fuelLevel.value)==="Not a Number")){
        if(fuelLevel.value<10000){
            document.getElementById("fuelStatus").innerHTML = 'There is not enough fuel for the journey.'
            document.getElementById("launchStatus").style.backgroundColor = 'red';
        }
    }else{
        alert("The fuel value must be a number.");
        flag = false;
    }
    if(!(validateInput(cargoLevel.value)==="Empty"||validateInput(cargoLevel.value)==="Not a Number")){
        if(cargoLevel.value>10000){
            document.getElementById("cargoStatus").innerHTML = 'There is too much mass to take off.'
            document.getElementById("launchStatus").style.backgroundColor = 'red';
        }
    }else{
        alert("The cargo status value must be a number.");
        flag = false;
    }
    
    return flag;
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;