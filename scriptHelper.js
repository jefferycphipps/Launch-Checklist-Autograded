// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>`Name: ${name}`</li>
                     <li>`Diameter: ${diameter}`</li>
                     <li>`Star: ${star}`</li>
                     <li>`Distance from Earth: ${moons}`</li>
                     <li>`Number of Moons: ${moons}`</li>
                 </ol>
                 <img src="">
    */
   const div = document.getElementById("missionTarget");
   div.innerHTML = "";
    const h2 = document.createElement('h2');
    h2.innerHTML = "Mission Destination";
    document.getElementById("missionTarget").appendChild(h2);

    const ol = document.createElement('ol');
    const liName = document.createElement('li');
    liName.innerHTML = `Name: ${name}`;
    ol.appendChild(liName);

    const liDia = document.createElement('li');
    liDia.innerHTML = `Diameter: ${diameter}`;
    ol.appendChild(liDia);

    const liStar = document.createElement('li');
    liStar.innerHTML = `Star: ${star}`;
    ol.appendChild(liStar);

    const liDis = document.createElement('li');
    liDis.innerHTML = `Distance from Earth: ${distance}`;
    ol.appendChild(liDis);

    const liMoon = document.createElement('li');
    liMoon.innerHTML = `Number of Moons: ${moons}`;
    ol.appendChild(liMoon);
    document.getElementById("missionTarget").appendChild(ol);
    let img = document.createElement("IMG");
    img.src = imageUrl;
    document.getElementById("missionTarget").appendChild(img);


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
    let pilotV = validateInput(pilot);
    let copilotV = validateInput(copilot);
    let fuelV = validateInput(fuelLevel);
    let cargoV = validateInput(cargoLevel);
    let pilotWords; 
    let copilotWords;
    let fuelWords;
    let cargoWords;
    let vis;
    let status;
    let color;
    const faulty = document.getElementById("faultyItems");
    const launchStat = document.getElementById("launchStatus");
    const pilotStat = document.getElementById("pilotStatus");
    const copilotStat = document.getElementById("copilotStatus");
    const fuelStat = document.getElementById("fuelStatus");
    const cargoStat = document.getElementById("cargoStatus");

    if(pilotV==="Not a Number"){
        pilotWords = `Pilot ${pilot} is ready for launch.`;
    }else{
        if (pilotV==="Empty")
            return "The pilot should not be empty.";
        else
            return "The pilot shouldnt be a number.";
    }
    
    if(copilotV==="Not a Number"){
        copilotWords = `Co-pilot ${copilot} is ready for launch.`;
    }else{
        if (copilotV==="Empty")
            return "The co-pilot should not be empty.";
        else
            return "The co-pilot shouldnt be a number.";
    }
    
    if(fuelV==="Is a Number"){
        if(Number(fuelLevel) < 10000){
            fuelWords = 'Fuel level too low for launch'
            color = "red";
            status = "Shuttle Not Ready for Launch"
            vis = "visible";
        }else{
            color = 'green';
            fuelWords = 'Fuel level high enough for launch'
            status = "Shuttle is Ready for Launch";
            vis = "visible";
        }
    }else{
        if (fuelV==="Empty")
            return "The fuel value should not be empty.";
        else
            return "The fuel value should be a number.";
    }
    
    if(cargoV==="Is a Number"){
        if(Number(cargoLevel)>10000){
            cargoWords = 'Cargo mass too heavy for launch'
            color = "red";
            status = "Shuttle Not Ready for Launch"
            vis = "visible";
        }else{
            color = 'green';
            cargoWords= 'Cargo mass low enough for launch'
            status = "Shuttle is Ready for Launch";
            vis = "visible";
        }
    }else{
        if (cargoV==="Empty")
            return "The cargo value should not be empty.";
        else
            return "The cargo value should be a number.";
    }
    
    if(Number(fuelLevel) < 10000||Number(cargoLevel)>10000){
        color = "red";
        status = "Shuttle Not Ready for Launch"
    }

    pilotStat.innerHTML = pilotWords;
    copilotStat.innerHTML = copilotWords;
    launchStat.style.color = color;
    fuelStat.innerHTML = fuelWords;
    cargoStat.innerHTML = cargoWords;
    launchStat.innerHTML = status;
    faulty.style.visibility = vis;

    return "";


 }
 
 async function myFetch() {
    let planetsReturned;
    let url = "https://handlers.education.launchcode.org/static/planets.json";
     planetsReturned = await fetch(url).then( function(response) {
        return response.json();
         });
     return planetsReturned;
 }


 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;