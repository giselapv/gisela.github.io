// East Blue
var eastBlue = document.getElementById("east-blue");
var arcosEastBlue = eastBlue.querySelector(".arcos");

var timeout;

eastBlue.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosEastBlue.style.display = "block";
});

eastBlue.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!eastBlue.contains(event.relatedTarget) && !arcosEastBlue.contains(event.relatedTarget)) {
            arcosEastBlue.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosEastBlue.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosEastBlue.style.display = "block";
});

// Arabasta
var Arabasta = document.getElementById("arabasta");
var arcosArabastA = Arabasta.querySelector(".arcos");

var timeout;

Arabasta.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosArabastA.style.display = "block";
});

Arabasta.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Arabasta.contains(event.relatedTarget) && !arcosArabastA.contains(event.relatedTarget)) {
            arcosArabastA.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosArabastA.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosArabastA.style.display = "block";
});

// Skypiea
var Skypiea = document.getElementById("skypiea");
var arcosSkypieA = Skypiea.querySelector(".arcos");

var timeout;

Skypiea.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosSkypieA.style.display = "block";
});

Skypiea.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Skypiea.contains(event.relatedTarget) && !arcosSkypieA.contains(event.relatedTarget)) {
            arcosSkypieA.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosSkypieA.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosSkypieA.style.display = "block";
});

// Water 7
var Water7 = document.getElementById("water-7");
var arcosWateR7 = Water7.querySelector(".arcos");

var timeout;

Water7.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosWateR7.style.display = "block";
});

Water7.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Water7.contains(event.relatedTarget) && !arcosWateR7.contains(event.relatedTarget)) {
            arcosWateR7.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosWateR7.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosWateR7.style.display = "block";
});

// Thriller Bark
var Thrillerbark = document.getElementById("thriller-bark");
var arcosThrillerBark = Thrillerbark.querySelector(".arcos");

var timeout;

Thrillerbark.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosThrillerBark.style.display = "block";
});

Thrillerbark.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Thrillerbark.contains(event.relatedTarget) && !arcosThrillerBark.contains(event.relatedTarget)) {
            arcosThrillerBark.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosThrillerBark.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosThrillerBark.style.display = "block";
});

// Marineford
var Marineford = document.getElementById("marineford");
var arcosMarineforD = Marineford.querySelector(".arcos");

var timeout;

Marineford.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosMarineforD.style.display = "block";
});

Marineford.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Marineford.contains(event.relatedTarget) && !arcosMarineforD.contains(event.relatedTarget)) {
            arcosMarineforD.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosMarineforD.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosMarineforD.style.display = "block";
});

// Isla Gyojin
var Islagyojin = document.getElementById("isla-gyojin");
var arcosIslaGyojin = Islagyojin.querySelector(".arcos");

var timeout;

Islagyojin.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosIslaGyojin.style.display = "block";
});

Islagyojin.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Islagyojin.contains(event.relatedTarget) && !arcosIslaGyojin.contains(event.relatedTarget)) {
            arcosIslaGyojin.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosIslaGyojin.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosIslaGyojin.style.display = "block";
});

// Dressrosa
var Dressrosa = document.getElementById("dressrosa");
var arcosDressrosA = Dressrosa.querySelector(".arcos");

var timeout;

Dressrosa.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosDressrosA.style.display = "block";
});

Dressrosa.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Dressrosa.contains(event.relatedTarget) && !arcosDressrosA.contains(event.relatedTarget)) {
            arcosDressrosA.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosDressrosA.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosDressrosA.style.display = "block";
});

// Whole Cake
var Wholecake = document.getElementById("whole-cake");
var arcosWholeCake = Wholecake.querySelector(".arcos");

var timeout;

Wholecake.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosWholeCake.style.display = "block";
});

Wholecake.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Wholecake.contains(event.relatedTarget) && !arcosWholeCake.contains(event.relatedTarget)) {
            arcosWholeCake.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosWholeCake.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosWholeCake.style.display = "block";
});

// Pais Wano
var Paiswano = document.getElementById("pais-wano");
var arcosPaisWano = Paiswano.querySelector(".arcos");

var timeout;

Paiswano.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosPaisWano.style.display = "block";
});

Paiswano.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Paiswano.contains(event.relatedTarget) && !arcosPaisWano.contains(event.relatedTarget)) {
            arcosPaisWano.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosPaisWano.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosPaisWano.style.display = "block";
});

// Final
var Final = document.getElementById("final");
var arcosFinaL = Final.querySelector(".arcos");

var timeout;

Final.addEventListener("mouseenter", function() {
    console.log("Mouse enter");
    arcosFinaL.style.display = "block";
});

Final.addEventListener("mouseleave", function(event) {
    console.log("Mouse leave");
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if (!Final.contains(event.relatedTarget) && !arcosFinaL.contains(event.relatedTarget)) {
            arcosFinaL.style.display = "none";
        }
    }, 100); // Pequeño retraso antes de ocultar el menú desplegable
});

arcosFinaL.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosFinaL.style.display = "block";
});

var siguienteSaga = document.getElementById("siguiente-saga");

siguienteSaga.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    arcosEastBlue.style.display = "none";
});