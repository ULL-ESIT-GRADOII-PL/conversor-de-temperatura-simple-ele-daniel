"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
    var result;
    var original = document.getElementById("tempEntrada");
    var temp = original.value;
    var regexp = /^([-+]?\d+(?:[\.,]\d*)?)\s*(?:e([-+]?\d+))?\s*((f(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)?)|(c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?))$/i;
    var secondRegex = /^(?:e(\d*))$/;
    var m = temp.match(regexp);

    if (m) {
        var num = parseFloat(m[1]); // Int
        var type = m[3][0];         // String
        var exp;                    // String
        if (!m[2]) {
            exp = "";
        }else{
            exp = "e" +   parseInt(m[2]);
        };

        if (type == 'c' || type == 'C') {
            result = ((num * 9/5)+32);
            exp += "F";
        }
        else {
            result = ((num - 32)*5/9);
            exp += "C";
        }

        var output; // String
        if (m[2]){
            output = result + exp;
        } else {
            output = result.toFixed(2) + exp;
        }
        converted.innerHTML = output;
    }
    else {
        converted.innerHTML = "ERROR! Prueba con la sintaxis '-4.2C' o '-4.2e5f'.";
    }
}
