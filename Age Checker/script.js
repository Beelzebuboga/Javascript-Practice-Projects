const myAge = document.getElementById("myAge");
const ageCheck = document.getElementById("ageCheck");
const ageLabel = document.getElementById("ageLabel");
let age;

ageCheck.onclick = function(){
    age = myAge.value;
    age = Number(age);
    if(age >=100 ){
        ageLabel.textContent = 'You are too old, you cannot enter this site';
    }
    else if(age == 0){
        ageLabel.textContent = 'You cannot enter, you were just born';
    }
    else if(age >=18){
        ageLabel.textContent = 'You are now in legal age, you may enter this site.'
    }
    else if(age < 0){
        ageLabel.textContent = 'Your age cannot be below 18';
    }
    else{
        console.log('You must be 18+ to enter this site.');
    }
}