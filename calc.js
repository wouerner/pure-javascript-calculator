var num = '';

var total = document.getElementById("total");

function btn() {
    total.value += '1';
}

function btn2() {
    total.value += '2';
}

function sum() {
    total.value += '+';
}

function calc() {
   total.value = eval(total.value);
}

function ac() {
   total.value = '';
}

document.getElementById("ac").addEventListener("click", ac); 

document.getElementById("sum").addEventListener("click", sum); 

document.getElementById("b1").addEventListener("click", btn); 

document.getElementById("b2").addEventListener("click", btn2); 

document.getElementById("calc").addEventListener("click", calc); 

document.getElementById("total").value = num;
