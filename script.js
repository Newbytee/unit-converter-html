"use strict";

const TYPE_SELECTOR = document.getElementById("unitTypeSelection");
const UNIT_SELECTORS = document.getElementsByClassName("unitSelection");
const UNIT_CONVERSION_RATES = {
    radians: Math.PI,
    degrees: 180,
    gradian: 200
};
const UNIT_CONVERSION_TYPES = [
    [ "Radians", "Degrees", "Gradians", "Turns" ],
    [ "Metres", "Feet" ],
    [ "Celcius", "Kelvin", "Farenheit" ],
    [ "Kilograms", "Pounds" ],
];

TYPE_SELECTOR.addEventListener("change", whenChanged);

function whenChanged() {
    for (let i = 0; i < UNIT_SELECTORS.length; i++) {
        while (UNIT_SELECTORS[i].hasChildNodes()) {
            UNIT_SELECTORS[i].removeChild(UNIT_SELECTORS[i].lastChild);
        }
    }
    populateSelectors(UNIT_CONVERSION_TYPES[TYPE_SELECTOR.selectedIndex]);
    UNIT_SELECTORS[1].selectedIndex = UNIT_SELECTORS[1].selectedIndex + 1;
}

function populateSelectors(conversionType) {
    if (!conversionType) return;
    for (let i = 0; i < conversionType.length; i++) {
        for (let j = 0; j < UNIT_SELECTORS.length; j++) {
            let newOption = document.createElement("OPTION");
            newOption.innerHTML = conversionType[i];
            UNIT_SELECTORS[j].appendChild(newOption);
        }
    }
}

whenChanged();