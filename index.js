"use strict"

const inputEl = document.getElementById("input");
const textEl = document.getElementById("result");
const fromEL = document.getElementById("from");
const toEL = document.getElementById("to");
const convertEL = document.getElementById("convert");
const swapEL = document.getElementById("swap");

let output;

swapEL.addEventListener("click", () => {
    let temp = fromEL.value;
    fromEL.value = toEL.value;
    toEL.value = temp;
})

function decToHex() {
    return (parseFloat(inputEl.value).toString(16)).toUpperCase();
}

function decToOct() {
    return parseFloat(inputEl.value).toString(8);
}

function decToBin() {
    return parseFloat(inputEl.value).toString(2);
}

function binToHex() {
    return (parseInt(inputEl.value, 2).toString(16)).toUpperCase();
}

function binToDec() {
    return parseInt(inputEl.value, 2).toString(10);
}

function binToOct() {
    return parseInt(inputEl.value, 2).toString(8);
}

function octToHex() {
    return (parseInt(inputEl.value, 8).toString(16)).toUpperCase();
}

function octToDec() {
    return parseInt(inputEl.value, 8).toString(10);
}

function octToBin() {
    return parseInt(inputEl.value, 8).toString(2);
}

function hexToOct() {
    return parseInt(inputEl.value, 16).toString(8);
}

function hexToDec() {
    return parseInt(inputEl.value, 16).toString(10);
}

function hexToBin() {
    return parseInt(inputEl.value, 16).toString(2);
}


convertEL.addEventListener("click", () => {
    if (fromEL.value === "Decimal" && toEL.value === "Decimal" || fromEL.value === "Hexadecimal" && toEL.value === "Hexadecimal" || fromEL.value === "Octal" && toEL.value === "Octal" || fromEL.value === "Binary" && toEL.value === "Binary"){
        output = inputEl.value;
    }
    else if (fromEL.value === "Decimal" && toEL.value === "Hexadecimal"){
        output = decToHex();
    }
    else if (fromEL.value === "Decimal" && toEL.value === "Octal"){
        output = decToOct();
    }
    else if (fromEL.value === "Decimal" && toEL.value === "Binary"){
        output = decToBin();
    }
    else if (fromEL.value === "Binary" && toEL.value === "Hexadecimal"){
        output = binToHex();
    }
    else if (fromEL.value === "Binary" && toEL.value === "Octal"){
        output = binToOct();
    }
    else if (fromEL.value === "Binary" && toEL.value === "Decimal"){
        output = binToDec();
    }
    else if (fromEL.value === "Octal" && toEL.value === "Hexadecimal"){
        output = octToHex();
    }
    else if (fromEL.value === "Octal" && toEL.value === "Decimal"){
        output = octToDec();
    }
    else if (fromEL.value === "Octal" && toEL.value === "Binary"){
        output = octToBin();
    }
    else if (fromEL.value === "Hexadecimal" && toEL.value === "Octal"){
        output = hexToOct();
    }
    else if (fromEL.value === "Hexadecimal" && toEL.value === "Decimal"){
        output = hexToDec();
    }
    else if (fromEL.value === "Hexadecimal" && toEL.value === "Binary"){
        output = hexToBin();
    }
    console.log(output);

    if (inputEl.value === ""){
        alert("Please provide the input.")
    } else {
        if (output == "NaN"){
            alert("Please provide a valid input")
        } else {
            textEl.value = output;
        }
    }
})
