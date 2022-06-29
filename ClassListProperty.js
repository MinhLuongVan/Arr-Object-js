var boxElement = document.querySelector('.box');
boxElement.classList.add('red');
boxElement.classList.remove('red');

setInterval(()=>{
    boxElement.classList.toggle('red');
},2000);
