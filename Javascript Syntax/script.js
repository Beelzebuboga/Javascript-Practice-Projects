const fullName = "Bro Code";

//let firstName = fullName.slice(0,3);
//let LastName = fullName.slice(4,8);
let fName = fullName.slice(0, fullName.indexOf(" "));
let LastName = fullName.slice(fullName.indexOf(" ")+1);
//console.log(firstName);
console.log(LastName);
console.log(fName);


//string slicing  = creating a substring from a portion of another string