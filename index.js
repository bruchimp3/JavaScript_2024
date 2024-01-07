// console.log("I like Pizza");
// console.log("Its really good");
//window.alert("I REALLY LOVE PIZZA");

//This is a single line comment

/* This is a multi line 
comment*/

//2. VARIABLES
// let firstName = "Akhilesh"
// let age = 26;
// let student = true;

// console.log("Hey",firstName);
// console.log("You are",age,"years old");
// console.log("Enrolled:",student);

// document.getElementById("p1").innerHTML = "Hello "+firstName;
// document.getElementById("p2").innerHTML = "You are "+age+" years old";
// document.getElementById("p3").innerHTML = "Enrolled: "+student;

//3. ARITHMETIC EXPRESSIONS

// let students = 20;
// students += 1;
//students -= 1; augumented assignment operator
//students *= 2;
//students /= 2;

// let extra = students%3;

// console.log(students);
// console.log(extra);

//PRECEDENCE
/*
()
^
* /
+ -
*/

//4. user input
// let userName = window.prompt("Whats your name?");
// console.log(userName);

// let userName;
// document.getElementById("myButton").onclick = function(){
//     userName = document.getElementById("myText").value;
//     console.log(userName);
//     document.getElementById("myLabel").innerHTML = "Hello "+userName;
// }

//5 Type conversion
let age = window.prompt("What is your age?")
console.log(typeof age)
age = Number(age);
age += 1;
console.log("Happy Birthday!!! You are now",age,"years old!")
console.log(typeof age)

let x;
let y;
let z;
x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x,typeof x);
console.log(y, typeof y);
console.log(z, typeof z);