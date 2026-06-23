// Task 1 - Employee Name
// Ask the employee for their name using prompt().
// Print the employee name in the console.
// Display "Welcome <Employee Name>" on the webpage using document.writeln().

let employeeName = prompt("please enter your name:");
console.log(employeeName);
document.writeln("welcome " + employeeName + "!");


// Task 2 - Company Entry Confirmation
// Show a confirm box:
// "Are you ready to join today's JavaScript training?"
// Print the user's answer (true/false) in the console.

let trainingConfirmation = confirm("Are you ready to join today's JavaScript training?");
console.log(trainingConfirmation);


// Task 3 - Customer Greeting
// Show an alert saying:
// "Welcome to Stackly Solutions!"
// Then print "Customer entered the website." in the console.

alert("welcome to Stackly Solutions!");
console.log("Customer entered the website.");



// Task 4 - Student Details
// Ask the student for:
// 1. Name
// 2. Age
// Print both values in the console.

let studentName = prompt("please enter your name:");
let studentAge = prompt("please enter your age:");
console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);



// Task 5 - Product Price
// Create a variable using let to store a product price.
// Update the price with a new value.
// Print the updated price using console.log().

let productPrice = 100;
productPrice = 150;
console.log("New Product Price: " + productPrice);



// Task 6 - Login Validation
// Ask the user to enter their username.
// If the username is empty,
// show a warning using console.warn().
// Otherwise print:
// "Login Successful: <username>"

let userName = prompt("please enter your username:");
if (userName === "")
{
    console.warn("Warning: Username is empty.");
}
else
{
    console.log("Login Successful: " + userName);
}



/*
Example Output:

Login Successful: Naveen
OR

Warning: Username is empty.
*/



// Task 7 - Website Maintenance
// Display an alert:
// "Website is under maintenance."
// After that print an error message in the console using console.error().

alert("Website is under maintenance.");
console.error("Error: Website is currently unavailable.");


// Expected:
// Error: Website is currently unavailable.



// Task 8 - Feedback Collection
// Ask the user:
// "How was today's JavaScript session?"
// Print the feedback in the console.
// Display:
// "Thank you for your feedback!"
// on the webpage.

let feedback = prompt("How was today's JavaScript session?");
console.log("User Feedback: " + feedback);
document.writeln("Thank you for your feedback!");



// Task 9 - Profile Information
// Ask the user for:
// Name
// City
// Favorite Programming Language
// Print all three values in the console.

let profileName = prompt("please enter your name:");
let profileCity = prompt("please enter your city:");
let profileLanguage = prompt("please enter your favorite programming language:");
console.log("Name: " + profileName);
console.log("City: " + profileCity);
console.log("Favorite Programming Language: " + profileLanguage);



// Task 10 - Mini Registration Form
// Ask the user for:
// Full Name
// Email
// Mobile Number
//
// Print all details in the console like:
//
// ===== Registration Details =====
// Name   :
// Email  :
// Mobile :
//
// Finally show:
// alert("Registration Successful!");

let fullName = prompt("please enter your full name:");
let email = prompt("please enter your email:");
let mobileNumber = prompt("please enter your mobile number:");

console.log("===== Registration Details =====");
console.log("Name   : " + fullName);
console.log("Email  : " + email);
console.log("Mobile : " + mobileNumber);

alert("Registration Successful!");
