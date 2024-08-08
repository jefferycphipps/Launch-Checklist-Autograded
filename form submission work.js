function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //let flag = true;
    //console.log(pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    
    if(!(validateInput(pilot.value)==="Empty"||validateInput(pilot.value)==="Is a Number")){
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    }else{
        //alert("The pilot has to have a name.");
        flag = false;
    }
    if(!(validateInput(copilot.value)==="Empty"||validateInput(copilot.value)==="Is a Number")){
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch.`;
    }else{
        //alert("The co-pilot has to have a name.");
        flag = false;
    }
    if(!(validateInput(Number(fuelLevel.value))==="Empty"||validateInput(Number(fuelLevel.value))==="Not a Number")){
        if(fuelLevel.value < 10000){
            list.getElementById("fuelStatus").innerHTML = 'There is not enough fuel for the journey.'
            list.getElementById("launchStatus").style.backgroundColor = "red";
            list.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
            list.style.visibility = "visible";
        }else{
            list.style.backgroundColor = 'green';
            document.getElementById("launchStatus").style.backgroundColor = 'green';
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            list.style.visibility = "visible";
        }

    }else{
        //alert("The fuel value must be a number.");
        flag = false;
    }
    if(!(validateInput(Number(cargoLevel.value))==="Empty"||validateInput(Number(cargoLevel.value))==="Not a Number")){
        if(cargoLevel.value>10000){
            document.getElementById("cargoStatus").innerHTML = 'There is too much mass to take off.'
            document.getElementById("launchStatus").style.backgroundColor = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch."
            list.style.visibility = "visible";
        }else{
            list.style.backgroundColor = 'green';
            document.getElementById("launchStatus").style.backgroundColor = 'green';
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            list.style.visibility = "visible";
        }
    }else{
       // alert("The cargo status value must be a number.");
        flag = false;
    }

    //return flag;
 }