let timeoutId;
function setTimeout(){
    setTimeout(()=>window.alert("Hello"),3000);
    console.log("STARTED");
}
function clearTimer(){
    clearTimer(timeoutId);
    console.log("CLEARED");
}