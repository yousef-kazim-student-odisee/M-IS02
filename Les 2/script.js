"use strict";

var i;
var j;
var x;
var z = 0;

function nieuwelijn() {
    z++;
    for (i = 0; i < document.getElementById("kolommen").value; i++) {

        if (i % 2 === 0 && z % 2 === 1) {
            document.getElementById("spelbord").innerHTML += "<div class='zwart'></div>";
            console.log(i + " en " + z);

        }
        if (i % 2 === 0 && z % 2 === 0) {
            document.getElementById("spelbord").innerHTML += "<div class='wit'></div>";
            console.log(i + " en " + z);

        }
        if (i % 2 === 1 && z % 2 === 1) {
            document.getElementById("spelbord").innerHTML += "<div class='wit'></div>";
            console.log(i + " en " + z);

        }
        if (i % 2 === 1 && z % 2 === 0) {
            document.getElementById("spelbord").innerHTML += "<div class='zwart'></div>";
            console.log(i + " en " + z);

        }


        if (i === document.getElementById("kolommen").value - 1 && z < document.getElementById("kolommen").value) {
            document.getElementById("spelbord").innerHTML += "<br>";
            nieuwelijn();
        }
    }
}

function reset() {
    document.getElementById("spelbord").innerHTML = null;
    z = 0;
}
