//NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum -   minNum + 1)) + minNum;
let guess;
let tries = 0;
let running = true;12

while(running){
guess = window.prompt("Guess a number between 1 - 100");
guess = Number(guess);
if(isNaN(answer)){
    window.alert("Please enter a valid number");
}
else if(guess < minNum || guess > maxNum){
    window.alert("Please enter a valid number")
}
else{  
  tries++;
  if(guess < answer){
    window.alert("Too Low");
  }
  else if(guess > answer){
    window.alert("Too High");
  }
  else{
    window.alert("Correct");
    running = false; 
  }

}

}
console.log(answer);