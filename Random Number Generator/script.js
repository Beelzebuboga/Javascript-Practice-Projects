const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randNum1;
let randNum2;
let randNum3;

myButton.onclick = function(){
    randNum1 = Math.floor(Math.random()* max) + min;
    randNum2 = Math.floor(Math.random()* max) + min;
    randNum3 = Math.floor(Math.random()* max) + min;
    label1.textContent = randNum1;
    label2.textContent = randNum2;
    label3.textContent = randNum3;
}