var minusButton  = document.getElementById("minus");
minusButton .setAttribute("class", "button-click");

var addButton = document.getElementById("add");
addButton.setAttribute("class", "button-click");

function decrement(){
    var counterValue = document.getElementById("counterValue");
    value = parseInt(counterValue.innerHTML);
    //if (value > 0){
        value --;
        counterValue.innerHTML = value;
    //}
}
function increment(){
    var counterValue = document.getElementById("counterValue");
    value = parseInt(counterValue.innerHTML);
    value++;
    counterValue.innerHTML = value;
}