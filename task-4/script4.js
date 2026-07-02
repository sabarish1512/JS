// 🟢 Task 1 - Company Welcome Function
// Create a function that prints:
// Welcome to Stackly IT
function welcome() {
    console.log("Welcome to Stackly IT");
}

welcome();

// 🟢 Task 2 - Employee Details
// Create a function that accepts:
// Name
// Department
// Salary
// Print:
// Employee Name : Naveen
// Department : Developer
// Salary : 30000

function employee(name, department, salary) {
    console.log("Employee Name :", name);
    console.log("Department :", department);
    console.log("Salary :", salary);
}

employee("Naveen", "Developer", 30000);
// 🟢 Task 3 - Calculate Bonus
// Create a function that accepts:
// Salary = 40000
// Bonus = 5000
// Print:
// Total Salary : 45000

function bonus(salary, bonusAmount) {
    console.log("Total Salary :", salary + bonusAmount);
}

bonus(40000, 5000);

// 🟢 Task 4 - Student Result
// Create a function that accepts marks.
// Rules:
// Marks ≥ 35 → Pass
// Otherwise → Fail
// Example:
// Input : 45

// Output : Pass

function result(marks) {

    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

}

result(45);
// 🟢 Task 5 - Return Employee Name
// Create a function that returns
// "Naveen"
// Store it in another variable and print it.

function getEmployee() {
    return "Naveen";
}

var employeeName = getEmployee();

console.log(employeeName);

// 🟢 Task 6 - Product Price
// Create a function.
// Return
// 25000
// Store it in a variable and calculate
// Price + GST

function price() {
    return 25000;
}

var productPrice = price();
var gst = 4500;

console.log("Price + GST :", productPrice + gst);

// 🟢 Task 7 - Scope
// Predict the output.
// function demo(){

//     if(true){

//         var a = 10;
//         let b = 20;
//         const c = 30;

//     }

//     console.log(a);

// }
// Question
// Which variable prints?
// Which variables give an error?
// Why?

function demo() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);
    console.log(b);
    console.log(c);

}

demo();
// Output
// 10
// ReferenceError
// ReferenceError
// Explanation
// var is function scoped, so it prints.
// let is block scoped, so it gives an error.
// const is block scoped, so it gives an error.

// 🟢 Task 8 - Hoisting
// Predict the output.
// console.log(a);

// var a = 100;
// Now check
// console.log(b);

console.log(a);

var a = 100;
// Output
// Undefined

// let b = 200;
// Explain the difference.
console.log(b);

let b = 200;
// Output
// ReferenceError
// Explanation
// var is hoisted, so it prints undefined.
// let is not hoisted, so it gives an error.

// 🟢 Task 9 - Named Function
// Create a named function that prints
// Good Morning
function morning() {
    console.log("Good Morning");
}

morning();

// 🟢 Task 10 - Anonymous Function
// Store an anonymous function inside a variable.
// Print
// Welcome Employee

var employee = function () {
    console.log("Welcome Employee");
};

employee();

// 🟢 Task 11 - Arrow Function
// Create an arrow function that prints
// JavaScript Training

var training = () => {
    console.log("JavaScript Training");
}
training();
// 🟢 Task 12 - Return Function
// Create a function.
// Return
// "Stackly"
// Store it in another variable.
// Print
// Welcome Stackly

function stackly() {
    return "Stackly";
}
var name = stackly();

console.log("Welcome", name);

// 🟢 Task 13 - Higher Order Function
// Create two functions.
// Function 1
// Login Successful
// Function 2
// Dashboard Loaded
// Call Function 2 through Function 1.
// Expected Output
// Login Successful
// Dashboard Loaded

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {

    console.log("Login Successful");

    callback();

}

login(dashboard);
// 🟢 Task 14 - Callback Function
// Real-time Scenario
// Order Received

// Preparing Food

// Delivered
// Create three functions.
// Call them using callback style.
function delivered() {
    console.log("Delivered");
}

function preparing(callback) {

    console.log("Preparing Food");

    callback();

}

function order(callback) {

    console.log("Order Received");

    callback(delivered);

}

order(preparing);
// 🟢 Task 15 - Generator Function
// Create a coupon system.
// Coupons
// 10% Discount
// 20% Discount
// 30% Discount
// Better Luck Next Time
// Every
// next()
// should return the next coupon.

function* coupon() {

    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";

}

var c = coupon();

console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

// 🟢 Task 16 - Return + Generator
// Create a generator that returns
// Apple

// Orange

// Banana
// Print each value using
// next()
function* fruits() {

    yield "Apple";
    yield "Orange";
    yield "Banana";

}

var fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);

// 🟢 Task 17 - Currying
// Create
// discount(1000)(10)
// Output
// Final Price : 900
function discount(price) {

    return function(discountPercentage) {

        var finalPrice = price - (price * discountPercentage / 100);

        console.log("Final Price :", finalPrice);

    };

}

discount(1000)(10);
// 🟢 Task 18 - Company Salary
// Create
// salary(30000)(5000)(2000)
// Meaning
// Salary

// Bonus

// Allowance
// Output
// 37000
function salary(basic) {

    return function(bonus) {

        return function(allowance) {

            console.log(basic + bonus + allowance);

        };

    };

}

salary(30000)(5000)(2000);
// 🟢 Task 19 - Real-Time Login System
// Create functions for
// Enter Username

// ↓

// Verify Password

// ↓

// Login Successful

// ↓

// Load Dashboard
// Use function calling to simulate the process.
function dashboard() {
    console.log("Load Dashboard");
}

function login(callback) {

    console.log("Login Successful");

    callback();

}

function verify(callback) {

    console.log("Verify Password");

    callback(dashboard);

}

function username(callback) {

    console.log("Enter Username");

    callback(login);

}

username(verify);
// ⭐ Mini Project (Based on Your Syllabus)
// Employee Salary Management System
// Create a console-based program that includes:
// Display employee details.
// Calculate salary + bonus using a function.
// Return the final salary.
// Use an arrow function to print a welcome message.
// Use an anonymous function to print the department.
// Use a higher-order function to simulate login.
// Use a callback function to load the employee dashboard.
// Generate monthly bonus coupons using a generator function.
// Apply tax calculation using currying.
// Print the final employee report.

// Employee Details
function employeeDetails(name, department, salary) {
    console.log("Employee Name :", name);
    console.log("Department :", department);
    console.log("Salary :", salary);
}

employeeDetails("Naveen", "Developer", 50000);

// Salary + Bonus
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

var totalSalary = calculateSalary(50000, 5000);

// Arrow Function
var welcome = () => {
    console.log("Welcome Employee");
};

welcome();

// Anonymous Function
var department = function () {
    console.log("Department : Developer");
};

department();

// Higher Order Function
function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);

// Callback Function
function employeeDashboard() {
    console.log("Employee Dashboard");
}

function loadDashboard(callback) {
    console.log("Loading...");
    callback();
}

loadDashboard(employeeDashboard);

// Generator Function
function* coupons() {
    yield "10% Bonus";
    yield "20% Bonus";
    yield "30% Bonus";
}

var coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// Currying
function tax(salary) {
    return function (taxAmount) {
        console.log("Salary After Tax :", salary - taxAmount);
    };
}

tax(totalSalary)(5000);

// Final Report
console.log("-------- Employee Report --------");
console.log("Final Salary :", totalSalary);
console.log("Employee Status : Active");