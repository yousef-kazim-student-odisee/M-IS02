"use strict";



function sub() {
    var getal1 = Number(document.getElementById("getal1").value);
    var getal2 = Number(document.getElementById("getal2").value);
    document.getElementById("uitkomst").value = getal1 - getal2;

}

function multiply() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    document.getElementById("uitkomst").value = getal1 * getal2;
}

function divide() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    document.getElementById("uitkomst").value = getal1 / getal2;
}


function sum() {
    var getal1 =  Number(document.getElementById("getal1").value);
    var getal2 = Number(document.getElementById("getal2").value);
    document.getElementById("uitkomst").value = getal1 + getal2;
}
