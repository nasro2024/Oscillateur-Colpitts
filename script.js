function calculateColpitts() {
    var f0 = parseFloat(document.getElementById('frequency').value) * 1000; // Convertir en Hz
    var vcc = parseFloat(document.getElementById('vcc').value);
    var beta = parseFloat(document.getElementById('beta').value);
    var icq = parseFloat(document.getElementById('icq').value) / 1000; // Convertir en ampères
    var L = parseFloat(document.getElementById('inductance').value) / 1000000; // Convertir en Henrys

    var Re = (0.1 * vcc) / icq;
    var Rc = 4 * Re;
    var Ip = 10 * icq / beta;
    var Vem = 0.1 * vcc;
    var Vbm = Vem + 0.7;
    var Vcm = vcc - 4 * Vem;
    var Vceq = Vcm - Vem;

    var Rb2 = Vbm / Ip;
    var Rb1 = (vcc - Vbm) / (11 * icq / beta);

    var Ceq = 1 / (L * (2 * Math.PI * f0) * (2 * Math.PI * f0)) * 1000000000000; // Convertir en picofarads
    var C = 2 * Ceq;

    var results = "<br>VALEURS DES TENSIONS DE POLARISATION:<br>" +
                  "Vem: " + Vem.toFixed(2) + " volts<br>" +
                  "Vbm: " + Vbm.toFixed(2) + " volts<br>" +
                  "Vcm: " + Vcm.toFixed(2) + " volts<br>" +
                  "Vceq: " + Vceq.toFixed(2) + " volts<br>" +
                 "<br>VALEURS DES RESISTANCES DE POLARISATION:<br>" +
                  "Re: " + Re.toFixed(2) + " ohms<br>" +
                  "Rc: " + Rc.toFixed(2) + " ohms<br>" +
                  "Rb1: " + Rb1.toFixed(2) + " ohms<br>" +
                  "Rb2: " + Rb2.toFixed(2) + " ohms<br>" +
                  "<br>VALEURS DES COMPOSANTS DE LA CHAINE DE COLPITTS (C1=C2=C):<br>" +
                  "<br>Inductance (L): " + (L * 1000000).toFixed(2) + " micro-H<br>" +
                  "Capacite (C): " + C.toFixed(2) + " pF<br>";

    document.getElementById('colpittsResults').innerHTML = results;
}

function resetInputs() {
    document.getElementById('frequency').value = "";
    document.getElementById('vcc').value = "";
    document.getElementById('beta').value = "";
    document.getElementById('icq').value = "";
    document.getElementById('inductance').value = "";
    document.getElementById('colpittsResults').innerHTML = ""; // Effacer les résultats affichés
}
