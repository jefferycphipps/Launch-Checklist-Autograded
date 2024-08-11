// Write your JavaScript code here!

window.addEventListener("load", function() {
    const form = document.querySelector("testForm");
    const shuttleList = document.getElementById("faultyItems");
    const submit = document.getElementById("formSubmit");
    let pName = document.querySelector("input[name=pilotName]");
    let cName = document.querySelector("input[name=copilotName]");
    let fLevel = document.querySelector("input[name=fuelLevel]");
    let cMass = document.querySelector("input[name=cargoMass]");

    submit.addEventListener('click', function(event) {

        let alerter = formSubmission(document, shuttleList, pName.value, cName.value, fLevel.value, cMass.value);
        event.preventDefault();
        if (alerter!=""){
            event.preventDefault();
            alert(alerter);
        }
        
        let listedPlanets;
        let planet;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
        }).then(function () {
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            planet = pickPlanet(listedPlanets);
            console.log(planet);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        })


        //name, diameter, star, distance, moons, imageUrl


        
    });
    

   
    
    /*let listedPlanets = [];
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
    })*/
    
 });
