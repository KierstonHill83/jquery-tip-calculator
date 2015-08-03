document.getElementsByClassName("btn-md")[0].addEventListener("click", function() {
    var amount = document.getElementsByTagName("input")[0].value.replace(/\$/g, "");
    var tipPercentage = document.getElementById("dropdown");
    var fullTip = (tipPercentage.value * amount).toFixed(2);
    var tipAmount = document.getElementsByTagName("h2")[0];
    tipAmount.innerHTML = "You should tip $" + fullTip;
  });

