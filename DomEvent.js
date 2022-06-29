// onchange

var inputElment = document.querySelector('input[type="text"]');
console.log(inputElment);
inputElment.onchange = function(e){ 
    console.log(e.target.value);

}

var inputElment = document.querySelector('input[type="checkbox"]');
console.log(inputElment);
inputElment.onchange = function(e){ 
    console.log(e.target.checked);

}

var inputElment = document.querySelector('select');
console.log(inputElment);
inputElment.onchange = function(e){ 
    console.log(e.target.value);

}

// onmouseover and onmouseout Events

function mOver(obj){
    obj.innerHTML = "Thank You";
}
function mOut(obj){
    obj.innerHTML = "Click me";
}


