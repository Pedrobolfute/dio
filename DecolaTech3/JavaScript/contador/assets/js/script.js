var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0){
        document.body.style.backgroundColor = "rgb(32, 31, 31)"
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        document.body.style.backgroundColor = "rgb(130, 33, 33)"
    }
}