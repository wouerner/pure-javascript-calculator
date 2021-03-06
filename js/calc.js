var num = '';

var total = document.getElementById("total");

function btn() {
    total.value += this.value;
    bounce(this.id)
}


function ac() {
   total.value = '';
}


function bounce(id){
    let element = document.getElementById(id);
    element.classList.add("animate__animated");
    element.classList.add("animate__bounceIn");
    element.classList.add("is-light");

    setTimeout(function() {
        element.classList.remove("animate__bounceIn");
    }, 200)

    setTimeout(function() {
        element.classList.remove("is-light");
    }, 1000)

}


class Calc {
    constructor(){
        console.log('class calc')
    }

    ac() {
        total.value = '';
    }

    calc() {
        var nodeDiv = document.createElement("div");                 
        nodeDiv.classList.add("column");
        nodeDiv.classList.add("card");

        var iNode = document.createElement("i");                 
        iNode.classList.add("fa-window-close");
        iNode.classList.add("fas");

        var spanNode = document.createElement("span");                 
        spanNode.classList.add("icon");
        spanNode.classList.add("is-small");
        spanNode.classList.add("is-right");

        spanNode.appendChild(iNode);

        var buttonNode = document.createElement("button");                 
        buttonNode.type = 'button';
        buttonNode.classList.add("button");
        buttonNode.classList.add("is-pulled-right");
        buttonNode.innerHTML = '<span class="icon is-small is-right"><i class="fas fa-window-close"><i/></span>';

        var spanTextNode = document.createElement("span");                 
        var text = document.createTextNode(total.value)
        spanTextNode.appendChild(text);

        nodeDiv.appendChild(spanTextNode);
        nodeDiv.appendChild(buttonNode);

        var historyDIV = document.getElementById("historyDIV");
        document.getElementById("historyDIV").appendChild(nodeDiv);

        total.value = eval(total.value);
    }
}

document.onkeyup = function(e) {
  console.log(e.key) 

  if(e.key == 'Backspace'){
    total.value = total.value.slice(0, -1);
  }

  if(e.key == 'Delete'){
    total.value = '';
  }

  if(!isNaN(parseInt(e.key))) {
      total.value += e.key;

      bounce("b" + e.key)
      return;
  }

    switch(e.key) {
        case '/':
        case '*':
        case '-':
            bounce("sub")
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

// document.getElementById("calc").addEventListener("click", calc); 
// document.getElementById("ac").addEventListener("click", ac); 
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

