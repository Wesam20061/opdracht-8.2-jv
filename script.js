function multiply() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    if (num1 > 0 && num2 > 0) {
      var result = num1 * num2;
      document.getElementById("result").innerHTML = "Resultaat: " + result;
    } else {
      document.getElementById("result").innerHTML = "Het getal is te laag.";
    }
  }
  
  function divide() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    if (num1 > 0 && num2 > 0) {
      var result = num1 / num2;
      document.getElementById("result").innerHTML = "Resultaat: " + result;
    } else {
      document.getElementById("result").innerHTML = "Het getal is te laag.";
    }
  }
  
  function add() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    if (num1 > 0 && num2 > 0) {
      var result = num1 + num2;
      document.getElementById("result").innerHTML = "Resultaat: " + result;
    } else {
      document.getElementById("result").innerHTML = "Het getal is te laag.";
    }
  }
  
  function minus() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    if (num1 > 0 && num2 > 0) {
      var result = num1 - num2;
      document.getElementById("result").innerHTML = "Resultaat: " + result;
    } else {
      document.getElementById("result").innerHTML = "Het getal is te laag.";
    }
  }
  