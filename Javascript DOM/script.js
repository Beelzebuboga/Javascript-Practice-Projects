//DOM -Document Object Model
//elements selector - method that is used to target and manipulate HTML elements they allow you to select one or multiple HTML element from the DOM 

//document.getElementByd() // ELEMENT OR NULL
//document.getElementByTagName// html collection
//document.querySelector() // ELEMENT OR NULL
//document.querySelectorAll() //NODELIST
//getElementbyClassname() // html collection

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor  = "yellow";

// const fruits = document.getElementsByClassName("fruits");
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "black" 
// })

//DOM Navigation - the process of navigating through the structure of an HTML document using Javascript

//.firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const newListItem = document.createElement("li"); //this create an element
// newListItem.textContent = "I like pizza";// add attributes/properties
// newListItem.Id = "myH1"
// newListItem.style.color = "tomato";
// newListItem.style.textAlign ="center"
// textAlign
// .append //bottom place it
// document.body.prepend(newListItem); //append element to dom

// document.body.insertBefore(newListItem, box2);

// document.body.removeChild(newListItem); //removes an element

//eventListener - listen for specific events to create interactive web pages events: click mouseover, mouseout. 
// .addEventListener(event,  callback);

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
// }
// const myBox = document.getElementById("box1");
// myBox.addEventListener("click", changeColor)
// const box2 = document.getElementById("box2");

// box2.addEventListener("click", event =>{
//     box2.style.backgroundColor = "black";
// })

// //keydown, keyup

// document.addEventListener("keydown", event => {
//     console.log(`key up - ${event.key}`);
// });


