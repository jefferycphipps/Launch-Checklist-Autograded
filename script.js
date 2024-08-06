// Write your JavaScript code here!


window.addEventListener("load", function() {
    //const helper = require('./scriptHelper.js');

    const pName = document.getElementById("pilotName");
    const cName = document.getElementById("copilotName");
    const fLevel = document.getElementById("fuelLevel");
    const cMass = document.getElementById("cargoMass");
    const submit = document.getElementById("formSubmit");
    const shuttleList = document.getElementById("faultyItems");
    //let list = [['pilotName', 'Pilot Name'],['copilotName', 'Co-pilot Name'], ['fuelLevel', 'Fuel Level (L)'],['cargoMass', 'Cargo Mass (kg)']];


    submit.addEventListener('click', function(event) {
        submit.backgroundColor = 'red';
        event.preventDefault();  
        if(!formSubmission(document, shuttleList, pName, cName, fLevel, cMass)){
            event.preventDefault();  
        }
        event.preventDefault();
        //updater(pName, cName, fLevel, cMass);
        document.getElementById("launchStatus").style.visibility = "visible";
    });
    
    /*let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })*/
    
 });

 function updater(pName, cName, fLevel, cMass){
    let color = "green";
    document.getElementById("pilotStatus").innerHTML = `${pName.value} is ready for launch.`
    document.getElementById("copilotStatus").innerHTML = `${cName.value} is ready for launch.`
    if(fLevel.value<10000){
        document.getElementById("fuelStatus").innerHTML = 'There is not enough fuel for the journey.'
        color = "red";
    }
    if(cMass.value>10000){
        document.getElementById("cargoStatus").innerHTML = 'There is too much mass to take off.'
        color = "red";
        
    }
    if(color==="green"){
        document.getElementById("launchStatus").style.backgroundColor = color;
        document.getElementById("launchStatus").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!"
    }else{
        document.getElementById("launchStatus").style.backgroundColor = color;
        document.getElementById("launchStatus").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
    }
    

 }