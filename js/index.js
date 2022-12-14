const G_EARTH = 9.8;
const G_MERCURY = 3.7;
const G_VENUS = 8.87;
const G_MARS = 3.7;
const G_JUPITER = 24.8;
const G_SATURN = 10.44;
const G_URANUS = 8.87;
const G_NEPTUNE = 11.15;


var userWeight = document.getElementById("userWeight");
var buttonWeigth = document.getElementById("buttonWeight");
var result = document.getElementById("result");
var planet = document.formWeight.planets.options;
var finalWeight;

buttonWeigth.addEventListener("click", calculateWeight);

function calculateWeight(){

    switch (planet.selectedIndex) {
        case 0:

            result.innerHTML = "La opción que elegiste es incorrecta";

            break;

        case 1:

            result.innerHTML = "La opción que elegiste es incorrecta";

            break;

        case 2:

            finalWeight = (userWeight.value * G_MERCURY) / G_EARTH;

            result.innerHTML = "Tu peso en Mercurio es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        case 3:

            finalWeight = (userWeight.value * G_VENUS) / G_EARTH;

            result.innerHTML = "Tu peso en Venus es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        case 4:

            finalWeight = (userWeight.value * G_MARS) / G_EARTH;

            result.innerHTML = "Tu peso en Marte es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        case 5:

            finalWeight = (userWeight.value * G_JUPITER) / G_EARTH;

            result.innerHTML = "Tu peso en Jupiter es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        case 6:

            finalWeight = (userWeight.value * G_SATURN) / G_EARTH;

            result.innerHTML = "Tu peso en Saturno es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        case 7:

            finalWeight = (userWeight.value * G_URANUS) / G_EARTH;

            result.innerHTML = "Tu peso en Urano es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        case 8:

            finalWeight = (userWeight.value * G_NEPTUNE) / G_EARTH;

            result.innerHTML = "Tu peso en Neptuno es de <strong>" + finalWeight.toFixed(2) + " Kg</strong>";

            break;

        default:

            result.innerHTML = "Lo siento campeón, de momento nos vamos a limitar a la Via Lactea";

            break;
    }

}