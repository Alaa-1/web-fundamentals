function loading(element) {
    alert("Loading weather report...");
}

function acceptCookie(element) {
    element.parentNode.remove();
}


function convertToF(celsius) {
    return celsius * 9 / 5 + 32
}

function convertToC(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)
}

var changeUnit = false;
function chooseUnit(element) {
    console.log(element.value);
    var unit = element.value;
    var temperature = document.querySelectorAll(".min-max p");
    if (unit == "°F" && changeUnit == false) {
        changeUnit = true;
        for (var i = 0; i < temperature.length; i++) {
            temperature[i].innerText = convertToF(parseInt(temperature[i].innerText)) + "°";
        }

    } else {
        location.reload();
    }
}
