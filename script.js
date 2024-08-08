// Write your JavaScript code here!



window.addEventListener("load", function() {

    const pName = document.getElementById("pilotName");
    const cName = document.getElementById("copilotName");
    const fLevel = document.getElementById("fuelLevel");
    const cMass = document.getElementById("cargoMass");
    const submit = document.getElementById("formSubmit");
    const shuttleList = document.getElementById("faultyItems");


    submit.addEventListener('click', function(event) {
        submit.backgroundColor = 'red';
        event.preventDefault();  
        let alerter = formSubmission(document, shuttleList, pName, cName, fLevel, cMass);
        if(alerter != ""||alerter === null){
            alert(alerter);
        }
        //let listedPlanetsResponse = myFetch();
        addDestinationInfo(document, "Tatooine","10465 km", "Tatoo I & Tatoo II", "43000 light years from galactic core", 3  ,"https://www.nasa.gov/wp-content/uploads/2023/03/earthsun20170412.png" );
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
