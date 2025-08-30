// =======================
// Part 1: Variables & Conditionals
// =======================
const birthYear = 1995;
console.log("I Ifeyinwa was born in " + birthYear);

// Arithmetic operators
console.log(10 + 50);
console.log(10 * 50);
console.log(10 / 50);
console.log(20 % 6);

// Comparison operators
console.log(5 == "5");  // true (loose comparison)
console.log(5 === "5"); // false (strict comparison)

// Example conditional
if (birthYear < 2005) {
    console.log("You are an adult or close to it!");
} else {
    console.log("You are still very young!");
}

// =======================
// Part 2: Functions
// =======================

// Function declaration
function greet() {
    console.log("Hello Ifeyinwa. This message is from your the love of your life.");
}
greet();

// Function expression
const hello = function() {
    console.log("Hi there. Happy Weekend");
};
hello();

// Arrow function
const goodbye = () => console.log("Goodbye Week 5 Assignment");
goodbye();

// Function with parameters + return
function multiply(numberOne, numberTwo, numberThree) {
    return numberOne * numberTwo * numberThree;
}
console.log(multiply(2, 3, 10));

// =======================
// Part 3: Loops
// =======================

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count: " + i);
}

// While loop
let count = 1;
while (count <= 3) {
    console.log("While Loop Count: " + count);
    count++;
}

// =======================
// Part 4: DOM Interactions
// =======================

function changeText() {
    // 1. Select and modify an element
    let title = document.getElementById("title");
    title.textContent = "Welcome! This na week 5 Javascript Assignment!";
    title.style.color = "red";

    // 2. Add a new element
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hey! I was not here before, just got added!";
    document.body.appendChild(newDiv);

    // 3. Change button text
    let btn = document.getElementById("btn");
    btn.textContent = "Clicked ✅";
}
