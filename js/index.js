let vehicleInventory = []

logVehicle = () => {

    let type = document.getElementById("type").value;
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let registration = document.getElementById("registration").value;
    let condition = document.getElementById("condition").value;

    var vehicleArray = [type, make, model, registration, condition];

    console.log(vehicleArray)
}

