const numBtn = document.querySelectorAll("[data-number]")
const opBtn = document.querySelectorAll("[data-operator]")
const preOperation = document.getElementById("preOperation")
const curOperation = document.getElementById("curOperation")
const equalbtn = document.getElementById("equal")
const clearbtn = document.getElementById("clear")
const delbtn = document.getElementById("del")
const punc = document.getElementById("punctuation")

let preValue = "";
let curValue = "";
let operator = "";

//append numbers and manage operrators


function appendNum(num){
    curOperation.textContent += num.textContent
    //logic
    curValue += num.textContent;
    console.log(curValue)
}

numBtn.forEach(btn => {  
    btn.addEventListener("click", () => appendNum(btn))            
})


function appendOp(ope){
    if (operator == ""){
        operator += ope.textContent;
        console.log(operator);

        preValue = curValue;
        preOperation.textContent = `${preValue} ${operator}`;
        curValue = "";
        curOperation.textContent = "";
        } return

}

opBtn.forEach(btn => {
    btn.addEventListener("click", () => appendOp(btn))
})



//puntuation

punc.addEventListener("click", punctuation)

function punctuation(){

    if (curOperation.textContent === "" && curValue === ""){
        curOperation.textContent = "0"
        curValue = "0"
    }
    if(curValue.toString().includes(".") && curOperation.textContent.includes(".")) return
        curOperation.textContent += ".";
        curValue += ".";

}

//validates

equalbtn.addEventListener("click", validate)

function validate(){

    if (operator === "÷" && curValue == "0") {
        alert("You can't divide by 0")
        return
    }

    if(!preValue == "" && !curValue == "") {
    let n1 = preValue;
    let n2 = curValue;
    let op = operator;
    
    let result = round(operate(op, n1, n2));
    preOperation.textContent += ` ${curValue} =`
    curOperation.textContent = result;
    curValue = result; 
    preValue = ""
    operator = "";
    console.log(result, operator)
    }

}

function round(num){
    return Math.round(num * 1000) / 1000
}

//deletes

clearbtn.addEventListener("click", clear)

delbtn.addEventListener("click", del)

function clear(){
preValue = ""; 
curValue = ""; 
preOperation.textContent = ""; 
curOperation.textContent = ""; 
operator = ""
}

function del(){
    curOperation.textContent = curOperation.textContent.slice(0, -1)
    curValue = curValue.toString().slice(0, -1)
}




function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b; 
}
function operate(op, n1, n2){
    n1 = Number(n1)
    n2 = Number(n2)

    switch(op){
        case  "+":
        return add(n1, n2);
        break;
        case "-":
        return subtract(n1, n2);
        break;
        case "x":
        return multiply(n1, n2);
        break;
        case "÷":
        return divide(n1, n2);
        break;
    }

}

