    // //const fullName = "Bro Code";

    // //let firstName = fullName.slice(0,3);
    // //let LastName = fullName.slice(4,8);
    // //let fName = fullName.slice(0, fullName.indexOf(" "));
    // //let LastName = fullName.slice(fullName.indexOf(" ")+1);
    // //console.log(firstName);
    // //console.log(LastName);
    // //console.log(fName);


    // //string slicing  = creating a substring from a portion of another string


    // //Method Chaining = calling one method after another in one continuous line of code.

    // //No Method chaining

    // //let username = window.prompt("Enter your username");
    // //username = username.trim();
    // //let letter = username.charAt(0);
    // //letter = letter.toUpperCase();

    // //let extraChars = username.slice(1,)
    // //extraChars = extraChars.toLowerCase();

    // //username = letter + extraChars
    // //console.log(username); //it makes the first letter separated from the whole string and make it uppercase while the other is converted into lower case.

    // //Method Chaining
    // //username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    // //console.log(username);

    // //ternary operator = a shortcut to if() and else{} statements helps to assign a variable based on a condition ? codeIfTrue : CodeIfFalse
    // //let Lname = true;
    // //let Fname = Lname ? "You are correct":"You are wrong";
    // //console.log(Fname);

    // //logical operators
    // /* AND = &&
    //     OR = ||
    //     NOT = !
    //     */

    // // == assignment operator   
    // //  == comparison operation if two value are equal
    // // === strict equality operator compare if values and datatype are equal
    // // != inequality operator
    // // !== strict inequality operator

    // //while loop = repeat some code while some condition is true
    // /*let age = "";
    // while(age == ""){
    //     age = window.prompt("Enter your age");
    // }
    // console.log('Hello, You are',age);
    // */


    // //LOGIN VALIDATION
    // /*let loggedIn = false;
    // let username;
    // let password;

    // do{
    //     username = window.prompt("Enter your name");
    //     password = window.prompt("Enter your password");
    //     if(username === 'myUserName' && password === 'myPassword'){
    //         loggedIn = true;
    //         console.log("You are logged in!");
    // }
    //     else{
    //         console.log("Invalid credentials! Please try again");
    //     }

    // }while(!loggedIn);
    // */

    // /*function isValidEmail(email){
    // return email.includes("@") ? true:false;//checks if it includes @  
    // }
    // console.log(isValidEmail("Abdulkhaliqsolaiman@gmail.com"))

    // */

    // //array variable that store 1 to more elements or value
    // let fruits = ["apple", "orange", "banana"];
    // fruits.push("coconut"); // add element to end
    // fruits.pop(); //remove elements from the end
    // fruits.unshift("mango"); //add elements to front
    // fruits.shift(); //remove element from the front
    // fruits.sort().reverse();//reverse the order of the array


    // //shortcut for displaying the for loop
    // for(let fruit of fruits){
    //     console.log(fruit);
    // }

    // //spread operator = ... allows an iterable such as an array or string to be expanded into separate elements (unpacks the element)
    // let username = "Bro Code";
    // let letters = [...username].join("- ")
    // console.log(letters); //separates all the letters of the word username

    // let papers = ["bond paper", "intermediate pad", "1/4 crosswise"];
    // let pens = ["pencil", "pen", "pentel pen"];
    // let supplies = [...papers, ...pens , "eggs", "milk"];
    // console.log(supplies); // make and array that combines the elements of two arrays.

    // //rest parameters = (...rest) allows a function work with variable number of arguments by bundling them into an array.
    // // spread = expands an array into separate elements
    // // rest = bundles separate elements into an array

    // function openFridge(...foods){
    //     console.log(...foods);
    // }
    // function getFood(...foods){
    //     return foods;
    // }
    // const food1 = "pizza";
    // const food2 = "hamburger";
    // const food3 = "hotdog";
    // const food4 = "sushi";
    // const food5 = "fried chicken"

    // const foods = getFood(food1, food2, food3, food4, food5); //combines all the separated elements into one array.
    // console.log(foods);


    // //callback = a function that is passed as an argument to another function
    // //  used to handle asynchoronous operation
    // // 1. Reading a file
    // // 2. network requests
    // // 3. interacting with database
    // // ""hey when you are done, call this next;
    // // 
    // // hello();
    // // goodbye(goodbye);
    // // function hello(callback){
    // //    console.log("Hello!");
    // //    callback();  
    // // 
    // // }
    // // function goodbye(){
    // // }
    // // console.log("Goodbye!");

    // //forEach() = method used to iterate over the elements of an array and apply specified function (callback) to each elements

    // //Array.forEach(callback)

    // let numbers = [1,2,3,4,5];
    // numbers.forEach(double)
    // numbers.forEach(display);

    // function double(element, index, array){
    //     array[index] = element *2;

    // }

    // function display(element){
    //     console.log(element);
    // }


    // let Fruits = ["apple","coconut","banana",'orange'];
    // Fruits.forEach(upperCase)
    // Fruits.forEach(display);

    // function upperCase(element, index, array){
    //     array[index] = element.toUpperCase();
    // }
    // function display(element){
    //     console.log(element);
    // }

    // //.MAP = ACCEPTS A CALLBACK AND APPLIES THAT FUNCTION TO EACH ELEMENTS OF AN ARRAY, THEN RETURNS A NEW ARRAY

    // const number = [1,2,3,4,5];
    // const squares = number.map(square);
    // console.log(squares); 

    // function square(element){
    //     return element * 2;
    // }

    // //.filter() =creates a new array by filtering out elements

    // let numbers1 = [1,2,3,4,5,6,7];
    // let evenNums = numbers1.filter(isEven);
    // console.log(evenNums);

    // function isEven(element){
    //     return element % 2===0;
    // }


    // //.reduce() = reduce the elements of an array to a single value
    // const prices = [1,1,2,3,5,8];
    // const total = prices.reduce(sum);
    // console.log(`$${total.toFixed(2)}`);
    // function sum(accumulator, elements){
    //     return accumulator + elements; //and the elements inside add like this previous + next (previous, next)
    // }

    // const grades = [90, 85, 95, 80, 92];
    // const averageGrade = grades.reduce(average);
    // console.log(`The total average is ${averageGrade}`)
    // function average(accumulator, elements){
    //     return (accumulator + elements) / grades.length;
    // }

    // //function expression = a way to define functions as values or variables

    // const numbers2 = [1,2,3,4,5];
    // const evenNums2 = numbers2.filter(function(element){
    // return element % 2 === 0;
    // });
    // console.log(evenNums2);

    // //arrow function = a concise way tfo write function expression good for simple function that use inly one (parameters) => some code

    // const goodbye = (person) => console.log(`Hello ${person}`);
    // goodbye("Bro"); 


    // const number3 = [1,2,3,4,5];
    // const squaresNum = number3.map((element) => Math.pow(element,2));
    // console.log(squaresNum);



//object = A collection of related properties and/or methods can represent real world objects (people, products, places) 
// object = {key:CSSMathValue,function()};
//     const car = {
//     color: "red",
//     brand: "toyota",
//     type: "racing",
//     Honk: function(){console.log("Honk ! honk! honk!")},
//     Break: ()=> console.log("Break"),
//     Speed: (speed) => console.log(`You are speeding at ${this.speed} km/hr`)
//     }
//     console.log(car.color); //to call an object attribute/properties
//     car.Honk();
//     car.Break();
//     car.Speed(52);

// // this = reference to the object where THIS is used(the object depends on the immediate context)  person.name = this.name



// //constructor = special method for defining the properties and methods of objects
// function Vehicle(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)};
// }

// const car1 = new Vehicle("Ford", "Mustang", 2024, "Red");
// const car2 = new Vehicle("Clevoret", "Camaro", 2025, "blue");

// car1.drive();
// car2.drive();
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
//console.log(car1.color);

//class = (ES6 features) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance.
// class Product{ 
//     constructor(name, price){
//     this.name = name;
//     this.price = price;
//     }
//     displayProduct = function(){
//         console.log(`Product: ${this.name}`); 
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }
//     calculateTotal = function(salesTax){
//         return this.price + (this.price*salesTax);
//     }
// }
//     const salesTax = 0.05;
//     const product1 = new Product("Shirt", 19.99);
//     const product2 = new Product("Jacket", 22.50);

//     product1.displayProduct();
//     const totalPrice = product1.calculateTotal(salesTax);
//     console.log(`Total Price (with tax) $${totalPrice.toFixed(2)}`);


// class Food{
//     constructor(foodname, price){
//         this.foodname = foodname;
//         this.price = price;
//     }
//     displayProduct = function(){
//         console.log(`Food: ${this.foodname}`);
//         console.log(`Price: $${this.price}`);
//     }
//     }
//     const food1 = new Food("Pancake", 100);
//     const food2 = new Food("French Fries", 35);

//     food1.displayProduct();



//     //static = keyword that defines properties or methods that belong to a class itself  rather than the object created from that class ( class owns anything static)

//     class Mathutil{
//         static PI = 3.141519;
//         static getDiameter(radius){
//             return radius * 2;
//         }
//     }
//     console.log(Mathutil.PI)
//     console.log(Mathutil.getDiameter(10));

// class User{
//     static userCounter = 0;
//     constructor(username){
//         this.username = username;
//         User.userCounter++;
//     }
//     sayHello(){
//         console.log(`Hello my username is ${this.username}`);
//     }
//     static getUserCount(){
//         console.log(`There are ${User.userCounter} users online`);
//     }
// }
// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// console.log(user1.username);
// console.log(user2.username); 
// user1.sayHello();
// user2.sayHello();
// User.getUserCount();



//Inheritance = allows a new class to inherit properties and methods from an existing class (parents -> child) helps with code reusability


// class Animal{
//     alive = true;

//     eat(){ //method
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{ 
//     name = "rabbit";
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "fish";
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "hawk";
//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// fish.sleep();
// rabbit.run();
// fish.swim();
// hawk.fly();

//super = keyword is used in classes to call the constructor or access the properties and methods if a parent (superclass)
//this = this object, super = the parent




//getter = special method that makes a property readable
//setter = special method that makes a properly writable
// validate and modify a value when reading/writing a property


// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width = newWidth; 
//         }
//         else{
//             console.error("Width must be positive number"); 
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height = newHeight; 
//         }
//         else{
//             console.error("Height must be a number"); 
//         }
//     }
//     get width(){ 
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
// }
// const rectangle = new Rectangle(3,4);

// console.log(rectangle.width);
// console.log(rectangle.height);



//destructuring = extract values from arrays and objects, then assign them to variables in a convenient way 
// [] = to perform array destructuring
// {} = to perform object destructuring

// const colors= ["red", "green", "blue","black","white"];
// const [firstColor, secondColor, ThirdColor, ...extraColor] = colors;

// console.log(firstColor);


// //USING FUNCTION
// function displayPerson({firstName, age}){
//     console.log(firstName,age)
// }

// const person1 = {
//     //PROPERTIES
//     firstName: "Sponge Bob",
//     age:30
// }   
// const person2 = {
//     //PROPERTIES
//     firstName: "Patrick",
//     age:34
// }

// const{firstName, age} = person1;
// console.log(firstName);


// displayPerson(person1);





//Nested objects = objects inside of other objects.
// allows you to represent more complex data structures
// child object is enclosed by a Parent Object

//Person{Address{},ContactInfo}

// const person = {
//     fullName: "Sponge Squarepants",
//     age:30,
//     isStudent: true,
//     hobbies: ["Karate","Cooking","Catching Jellyfish"],
//     address: {
//         street:"124 Conch St.",
//         city: "Bikini Bottom",
//         country:"Int,Water"

//     }
// }
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// const person1 = new  Person("Sponge Bob",30,"124 Conch St.",
//                                             "Bikini Bottom","Int.Waters");
// console.log(person.address)



//array

// const fruits = [{name:"apple", color:"red", calories: 85},
//                 {name:"orange", color:"orange",  calories:95},
                
// ]

// fruits.forEach(fruit => console.log(fruit.color)); //forEach()
// const fruitName = fruits.map(fruit => fruit.name); // map()
// console.log(fruitName);
// const redFruits = fruits.filter(fruit => fruit.color ==="red"); //filter()
// console.log(redFruits);
// const maxFruit = fruits.reduce((max, fruit) => fruits.calories > max.calories ? fruit:max); //REDUCE
// console.log(maxFruit);


//sort() = method used to sort elements of an array in place.
// sorts elements as strings in lexicographic  order, not alphabetical
//lexicographic = (alphabets + numbers +symbols)

// let numbers = [1,10,2,9,3,8,4,7,5,6];
// numbers.sort((a,b) => a-b); // lowest to hightest
// numbers.sort((a,b)=> b-a);//highest to lowest
// numbers.sort((a,b)=> a.name.localeCompare(b.name));
// console.log(numbers);
 
//shuffle method FISHER ALGORITHM
// const cards = ['A',1,2,3,4,5,6,7,8,9,'J', 'Q', 'K'];
// shuffle(cards);
// console.log(cards);
// function shuffle(array){
//     for(let i =array.length -1;i>0;i--){
//         const random = Math.floor(Math.random()*(i+1));

//         [array[i],array[random]]=[array[random],array[i]];
//     }
// }

//date objects = objects that contain values that represent data and time. these data can be changed and formatted
//Date(year, month,day,hour,minute,second,ms)

// const date = new Date();
// date.setFullYear(2024);
// date.setMonth(0);

// const year = date.getFullYear(); //get the year of today
// const month = date.getMonth(); // get the month 
//getDate()//day
//getHours// hours
//getminutes()
//getseconds
//getDay// weeks

// date.setFullyYear(2024);
// console.log(date);



//closure = a function defined inside of another function, the inner function has access to the variables and state maintenance used frequently in JS frameworks
// function outer(){
//     let message = "Hello";
//         function inner(){
//             console.log(message);
//         }
//         inner();
// }
// outer();


// function createCounter(){
// function increment(){
//     let count = 0;
//     count++;
//     console.log("cOUNT INCREASED BY 1");
// }
// return {increment};
// }
// const counter = createCounter();
// counter.increment();


//setTimeout = allows to schedule the time for execution
//createTimeout =can cancel a timeout before ut triggers

// function sayHello(){
// window.alert("Hello");

    
// }
// setTimeout(sayHello,3000);
// setTimeout(function(){window.alert("Hello")},5000);
// setTimeout(()=>window.alert("Hello"),5000)


// ES6 - An external file that contains reusable code that can be imported into other Javascript files.
// Write reusable code for many different apps.
//  Can  contain variables, classes, functions ... and more
// Introduced as part of ECMAScript 2015 update

// import {PI, getCircumference, getArea, getVolume} from `./mathUtil.js`;

//synchronous = execute line by line consecutively in a sequential manner code that waits for an operation to complete

//asynchronous = Allows multiple operations to be performed concurrently without waiting doesn't block the execution flow and allows the program to continue(I/O operations, network requests, fetching data) Handled with: callbacks, Promises, Async/Await

// function func1(callback){
//     setTimeout(()=>{console.log("Task 1");
//         callback()}, 3000);
// }
// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }
// func1(func2);


// Error = an object that is created to represent a problem that occurs occur often with user input or establishing a connection
// try{} = encloses code that might potentially cause an error
// catch{} = catch and handle any thrown error from try{}
// finally{} = (optional) Always executes. Used mostly for clean up ex. close files, close connection, release resources
// try{
//     const x= window.prompt("Enter your x");
//     console.log(x);
//     if(x=='0'){
//         throw new Error("Your x dont have value"); //throwing new error
//     }
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("This always executes");
// }
// // NETWORK ERRORS
// // PROMISE REJECTION
// // SECURITY ERROR
// console.log("You have reached the end!");


//nodelist - static collection of HTML elements by (id, class, element)
// can be created by using querySelector All(){
// similar to an array but no(map,filter, reduce)
// Nodelist wont update to automatically reflect
 



