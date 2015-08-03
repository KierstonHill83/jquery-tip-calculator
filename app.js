function tipTwenty(num) {
  return (num * 0.2).toFixed(2);
}



document.getElementsByClassName("btn")[0].addEventListener("click", function() {
    var amount = document.getElementsByTagName("input")[0].value;
    var twentyPercentTip = tipTwenty(amount);
    var tipAmount = document.getElementsByTagName("h2")[0];
    tipAmount.innerHTML = "You should tip $" + twentyPercentTip;
  });


//find box and selectedIndex
