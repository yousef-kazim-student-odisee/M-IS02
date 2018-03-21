"use strict";
$(document).ready(function(){
    console.log("0");
    
    $("#hide").click(function(){
        $("input, .lol").toggle(1000);
        
        console.log("0");
    });

});

var getal1 = parseInt(document.getElementById("getal1").value); 
var getal2 = parseInt(document.getElementById("getal2").value);



function sub() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
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
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    var resultaat = getal1 + getal2;
    document.getElementById("uitkomst").value = resultaat;
   
}
