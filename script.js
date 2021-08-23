//Selected all elements from DOM
let initPrice = document.querySelector('#init-amt');
let stockQuant = document.querySelector('#stock-quant');
let currPrice = document.querySelector('#curr-amt');
let submitBtn = document.querySelector('.SubmitBtn');
let msg = document.querySelector('.output');
let container = document.querySelector('.flexContainer');

//adding EventListener 
submitBtn.addEventListener("click", submitHandler);

//function to display message
function displayMessage(text) {
    msg.innerText = text;
}

//submitHandler definition
function submitHandler() {
    refreshRecord();
    let intAmt = Number(initPrice.value);
    let StockNum = Number(stockQuant.value);
    let currAmt = Number(currPrice.value);

    if (intAmt == "" || StockNum == "" || currAmt == "") {
        displayMessage("Please enter all three values to proceed");
    } else {
        calculateProfitOrLoss(intAmt, StockNum, currAmt);
    }
}

//To change the theme 
function changeTheme(percent) {
    if (percent >= 50) {
        container.style.backgroundColor = "red";
        container.style.Color = "white";
    }
}

function refreshRecord() {
    msg.innerText = "";
    container.style.backgroundColor = "white";
}

//function to calculate profit or loss
function calculateProfitOrLoss(intPrc, quant, curPrc) {
    if (intPrc > curPrc) {
        //calculate loss and loss percentage
        let loss = (intPrc - curPrc) * quant;
        if (!(Number.isInteger(loss))) {
            loss = loss.toFixed(2);
        }
        let lossPercent = (loss / (intPrc * quant)) * 100;
        if (!(Number.isInteger(lossPercent))) {
            lossPercent = lossPercent.toFixed(2);
        }
        displayMessage(`Oops 😨 it is loss, the loss is ${loss} and the loss percentage is ${lossPercent}%`);
        changeTheme(lossPercent);
    } else if (curPrc > intPrc) {
        //calculate profit and profit percentage
        let profit = (curPrc - intPrc) * quant;
        if (!(Number.isInteger(profit))) {
            profit = profit.toFixed(2);
        }
        let profitPercent = (profit / (intPrc * quant)) * 100;
        if (!(Number.isInteger(profitPercent))) {
            profitPercent = profitPercent.toFixed(2);
        }
        displayMessage(`Yey 😍 it is gain, the profit is ${profit} and the profit percent is ${profitPercent}%`);
    } else {
        //display some message to represent no loss or no gain
        displayMessage("There is no loss or profit!!");
    }
}