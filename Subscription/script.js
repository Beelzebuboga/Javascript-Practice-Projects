const myCheckbox = document.getElementById("myCheckbox");
const paypalBtn= document.getElementById("paypalBtn");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = 'You are Subscribed';
    }
    else{
        subResult.textContent = 'You are not Subscribed';
    }

   if(visaBtn.checked){
        paymentResult.textContent = 'You are Paying with Visa'
    }
    else if(masterBtn.checked){
        paymentResult.textContent = 'You are Paying with Mastercard.'
    }
    else if(paypalBtn.selected){
        paymentResult.textContent = 'You are paying with Paypal.'
    }
    else{
        paymentResult.textContent = 'You must select a payment method.'
    }
}