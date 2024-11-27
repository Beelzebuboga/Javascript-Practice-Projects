const monthInput = document.getElementById("monthInput");
const monthBtn = document.getElementById("monthBtn");
const monthDisplay = document.getElementById("monthDisplay");
let month;
monthBtn.onclick = function(){
    month = monthInput.value;
    month = Number(month);
switch(month){
    case 1:
        monthDisplay.textContent = 'January';
        break;
    case 2:
        monthDisplay.textContent = 'February';
        break;
    case 3:
        monthDisplay.textContent = 'March';
        break;
    case 4:
        monthDisplay.textContent = 'April';
        break;
    case 5:
        monthDisplay.textContent = 'May';
        break;
    case 6:
        monthDisplay.textContent = 'June';
        break;
    case 7:
        monthDisplay.textContent = 'July';
        break;
    case 8:
        monthDisplay.textContent = 'August';
        break;
    case 9:
        monthDisplay.textContent = 'September';
        break;
    case 10:
        monthDisplay.textContent = 'October';
        break;
    case 11:
        monthDisplay.textContent = 'November';
        break;
    case 12:
        monthDisplay.textContent = 'December';
        break;
}
}