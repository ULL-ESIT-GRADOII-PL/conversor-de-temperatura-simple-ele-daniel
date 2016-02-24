"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original       = document.getElementById("........");
  var temp = original.value;
  var regexp = /^([-+]?\d+(?:[\.,]\d*)?)\s*(e\d*)?\s*((f(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)?)|
                                                                    (c(?:e(?:l(?:c(?:i(?:u(?:s)?)?)?)?)?)?))$/i;
  var secondRegex = /^(?:e(\d*))$/
  var m = temp.match(regexp);

  if (m) {
    var num = m[0];
    var exp = m[1].match(secondRegex);
    if (!exp) {
      exp = 0;
    }
    var type = m[2][0];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = 1 + "e" + exp  //temporal para pruebas
    }
    else {
      result = (num - 32)*5/9;
      result = 1 + "e" + exp //temporal para pruebas
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' or '-4.2e5f' instead.";
  }
}
