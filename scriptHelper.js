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
    let pilotV = validateInput(pilot.value);
    let copilotV = validateInput(copilot.value);
    let fuelV = validateInput(Number(fuelLevel.value));
    let cargoV = validateInput(Number(cargoLevel.value));
    let pilotWords; 
    let copilotWords;
    let fuelWords;
    let cargoWords;
    let vis;
    let status;
    let color;
    if(pilotV==="Not a Number"){
        pilotWords = `Pilot ${pilot.value} is ready for launch.`;
    }else{
        if (pilotV==="Empty")
            return "The pilot should not be empty.";
        else
            return "The pilot shouldnt be a number.";
    }
    if(copilotV==="Not a Number"){
        copilotWords = `Co-pilot ${copilot.value} is ready for launch.`;
    }else{
        if (copilotV==="Empty")
            return "The co-pilot should not be empty.";
        else
            return "The co-pilot shouldnt be a number.";
    }
    if(fuelV==="Is a Number"){
        if(Number(fuelLevel.value) < 10000){
            fuelWords = 'There is not enough fuel for the journey.'
            color = "red";
            status = "Shuttle not ready for launch."
            vis = "visible";
        }else{
            color = 'green';
            fuelWords = 'Fuel level high enough for launch.'
            status = "Shuttle is ready for launch.";
            vis = "visible";
        }
    }else{
        if (fuelV==="Empty")
            return "The fuel value should not be empty.";
        else
            return "The fuel value should be a number.";
    }
    if(cargoV==="Is a Number"){
        if(Number(cargoLevel.value)>10000){
            cargoWords = 'There is too much mass to take off.'
            color = "red";
            status = "Shuttle not ready for launch."
            vis = "visible";
        }else{
            color = 'green';
            cargoWords= 'Cargo mass low enough for launch.'
            status = "Shuttle is ready for launch.";
            vis = "visible";
        }
    }else{
        if (cargoV==="Empty")
            return "The cargo value should not be empty.";
        else
            return "The cargo value should be a number.";
    }
    if(Number(fuelLevel.value) < 10000||Number(cargoLevel.value)>10000){
        color = "red";
        status = "Shuttle not ready for launch."
    }

    document.getElementById("pilotStatus"),innerHTML = pilotWords;
    document.getElementById("copilotStatus").innerHTML = copilotWords;
    document.getElementById("launchStatus").style.color = color;
    document.getElementById("fuelStatus").innerHTML = fuelWords;
    document.getElementById("cargoStatus").innerHTML = cargoWords;
    document.getElementById("launchStatus").innerHTML = status;
    list.style.visibility = vis;

    return "";


 }
 
 async function myFetch() {
    /* let planetsReturned;
    let index = 0;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            planetsReturned[index].name = json[index].name;
            planetsReturned[index].diameter = json[index].diameter;
            planetsReturned[index].star = json[index].star;
            planetsReturned[index].diameter = json[index].distance;
            planetsReturned[index].image = json[index].image;
            planetsReturned[index].moons = json[index].moons;
            index++;
         });
        console.log(planetsReturned);
         });
     return planetsReturned;*/
 }
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;