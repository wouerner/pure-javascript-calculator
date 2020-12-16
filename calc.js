var num = '';

var total = document.getElementById("total");

function btn() {
    console.log(this)
    total.value += this.value;
}

function calc() {
   total.value = eval(total.value);
}

function ac() {
   total.value = '';
}

document.onkeyup = function(e) {
  console.log(e.key) 

  if(!isNaN(parseInt(e.key))) {
      total.value += e.key;
  }

    switch(e.key) {
        case '/':
        case '*':
        case '-':
        case '+':
        case '=':
            total.value += e.key;
            break;
    }

};

document.getElementById("sum").addEventListener("click", btn); 
document.getElementById("sub").addEventListener("click", btn); 
document.getElementById("mult").addEventListener("click", btn); 
document.getElementById("div").addEventListener("click", btn); 

document.getElementById("calc").addEventListener("click", calc); 
document.getElementById("ac").addEventListener("click", ac); 
document.getElementById("total").value = num;

document.getElementById("b1").addEventListener("click", btn); 
document.getElementById("b2").addEventListener("click", btn); 
document.getElementById("b3").addEventListener("click", btn); 
document.getElementById("b4").addEventListener("click", btn); 
document.getElementById("b5").addEventListener("click", btn); 
document.getElementById("b6").addEventListener("click", btn); 
document.getElementById("b7").addEventListener("click", btn); 
document.getElementById("b8").addEventListener("click", btn); 
document.getElementById("b9").addEventListener("click", btn); 
document.getElementById("b0").addEventListener("click", btn); 

