"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("tempEntrada");
  var temp = original.value;
  var regexp = /^([-+]?\d+(?:[\.,]\d*)?)\s*(?:e(\d+))?\s*((f(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)?)|(c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?))$/i;
  var secondRegex = /^(?:e(\d*))$/
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[3][0];
    var exp;
    if (!m[2]) {
      exp = "";
    }else{
      exp = "e"+m[2];
    };

    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = ((num * 9/5)+32);
      exp = exp + "F";
    }
    else {
      result = ((num - 32)*5/9);
      exp + exp + "C";
    }
    if (exp != ""){
      result = result + exp;
    } else {
      result = result.toFixed(2);
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Prueba con la sintaxis '-4.2C' o '-4.2e5f'.";
  }
}
