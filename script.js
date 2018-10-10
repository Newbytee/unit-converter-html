"use strict";

const TYPE_SELECTOR = document.getElementById("unitTypeSelection");
const UNIT_SELECTORS = document.getElementsByClassName("unitSelection");
const UNIT_CONVERSION_RATES = {
    radians: Math.PI,
    degrees: 180,
    gradian: 200
};
const UNIT_CONVERSION_TYPES = {
    angles: [ "Radians", "Degrees", "Gradians", "Turns" ],
    length: [ "Metres", "Feet" ],
    temperature: [ "Celcius", "Kelvin", "Farenheit" ],
    weight: [ "Kilograms", "Pounds" ],
    pressure: []
};

TYPE_SELECTOR.addEventListener("change", whenChanged());

function whenChanged() {
    switch(TYPE_SELECTOR.selectedIndex) {
        case 0:
            for (let i = 0; i < UNIT_CONVERSION_TYPES.angles.length; i++) {
                for (let j = 0; j < UNIT_SELECTORS.length; i++) {
                    let newOption = document.createElement("OPTION");
                    newOption.innerHTML = UNIT_CONVERSION_TYPES.angles[i];
                    UNIT_SELECTORS[j].appendChild(newOption);
                }
            }
            break;
    }
}