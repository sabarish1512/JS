// 🟢 Task 1 - Employee Login Eligibility
// Concepts
// Variables
// Comparison Operators
// Logical Operators
// if else
// Scenario
// HR wants to verify whether an employee can access the office.
// Requirements
// Take employee age.
// Take employee ID availability (true/false).
// Take employee attendance percentage.
// Allow entry only if:
// Age >= 18
// ID available
// Attendance >= 75
// Expected Output
// Access Granted
// or
// Access Denied

let age = Number(prompt("Enter employee age:"));
let hasID = confirm("Is employee ID available? (OK for Yes, Cancel for No)");
let attendance = Number(prompt("Enter attendance percentage:"));

if (age >= 18 && hasID === true && attendance >= 75) {
    alert("Access Granted");
} else {
    alert("Access Denied");
}

// 🟢 Task 2 - Student Grade System
// Concepts
// if else if
// Input
// Marks = 87
// Output
// Grade A
// Rules
// 90-100 -> A+
// 80-89  -> A
// 70-79  -> B
// 60-69  -> C
// Below 60 -> Fail

let marks = parseFloat(prompt("Enter student marks (0-100):"));

if (marks >= 90 && marks <= 100) {
    alert("Grade A+");
} else if (marks >= 80 && marks < 90) {
    alert("Grade A");
} else if (marks >= 70 && marks < 80) {
    alert("Grade B");
} else if (marks >= 60 && marks < 70) {
    alert("Grade C");
} else if (marks >= 0 && marks < 60) {
    alert("Grade Fail");
} else {
    alert("Invalid Marks");
}


// 🟢 Task 3 - ATM Withdrawal
// Concepts
// Arithmetic
// if else
// Variables
// Balance = 5000
// Withdraw = 3000
// Conditions
// Enough balance
// Withdraw amount should be multiple of 100
// Output
// Transaction Successful
// Remaining Balance : 2000

let balance = 5000;
let withdraw = Number(prompt("Current Balance: 5000\nEnter withdrawal amount:"));

if (withdraw <= balance && withdraw % 100 === 0) {
    balance = balance - withdraw;
    alert("Transaction Successful\nRemaining Balance: " + balance);
} else {
    alert("Transaction Failed: Insufficient balance or not a multiple of 100.");
}

// 🟢 Task 4 - Food Ordering App
// Concepts
// switch
// Menu
// 1 Pizza
// 2 Burger
// 3 Shawarma
// 4 Biryani
// 5 Juice
// Input
// choice = 4
// Output
// You Ordered Biryani


let choice = parseInt(prompt("--- Menu ---\n1. Pizza\n2. Burger\n3. Shawarma\n4. Biryani\n5. Juice\n\nEnter your choice number (1-5):"));

switch (choice) {
    case 1:
        alert("You Ordered Pizza");
        break;
    case 2:
        alert("You Ordered Burger");
        break;
    case 3:
        alert("You Ordered Shawarma");
        break;
    case 4:
        alert("You Ordered Biryani");
        break;
    case 5:
        alert("You Ordered Juice");
        break;
    default:
        alert("Invalid Choice");
}


// 🟢 Task 5 - E-Commerce Discount
// Concepts
// Operators
// if else
// Rules
// Purchase > 5000

// Premium User

// ↓

// 20% Discount

// Otherwise

// 10% Discount
// Display
// Original Price
// Discount
// Final Price

let originalPrice = Number(prompt("Enter total purchase amount:"));
let isPremiumUser = confirm("Are you a Premium User?");
let discountPercentage = 10;

if (originalPrice > 5000 && isPremiumUser === true) {
    discountPercentage = 20;
}

let discountAmount = (originalPrice * discountPercentage) / 100;
let finalPrice = originalPrice - discountAmount;

alert("Original Price: " + originalPrice + "\nDiscount: " + discountAmount + "\nFinal Price: " + finalPrice);


// 🟢 Task 6 - Attendance Report
// Concepts
// for loop
// Print
// Day 1 Present
// Day 2 Present
// ...
// Day 30 Present


let report = "--- 30 Day Attendance Report ---\n";

for (let day = 1; day <= 30; day++) {
    report = report + "Day " + day + " Present\n";
}

alert(report);

// 🟢 Task 7 - Even Number Generator
// Concepts
// Loop
// Modulus
// Print
// 2
// 4
// 6
// 8
// 10
// ...
// 100

let evenNumbers = "";

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2 === 0) {
        evenNumbers = evenNumbers + i + " ";
    }
}

alert("Even Numbers from 1 to 100:\n" + evenNumbers);

// 🟢 Task 8 - Mobile Number Validation
// Concepts
// if
// Logical Operator
// Conditions
// Length = 10

// Starts with

// 6
// 7
// 8
// 9
// Output
// Valid Mobile Number
// or
// Invalid Mobile Number

let mobileNumber = prompt("Enter your 10-digit mobile number:");
let firstChar = mobileNumber.charAt(0);

if (mobileNumber.length === 10 && (firstChar === "6" || firstChar === "7" || firstChar === "8" || firstChar === "9")) {
    alert("Valid Mobile Number");
} else {
    alert("Invalid Mobile Number");
}

// 🟢 Task 9 - Shopping Cart
// Concepts
// Array
// cart = [
// "Milk",
// "Bread",
// "Egg",
// "Rice",
// "Oil"
// ]
// Print
// First Item

// Last Item

// Total Items

let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

let firstItem = cart[0];
let lastItem = cart[4]; 
let totalItems = cart.length;

alert("First Item: " + firstItem + "\nLast Item: " + lastItem + "\nTotal Items: " + totalItems);
// 🟢 Task 10 - Employee Database
// Concepts
// Object
// employee = {

// name

// salary

// department

// experience

// }
// Print
// Employee Name

// Department

// Experience

let employee = {
    name: "Sabarish",
    salary: 60000,
    department: "Engineering",
    experience: 4
};

alert("Employee Name: " + employee.name + "\nDepartment: " + employee.department + "\nExperience: " + employee.experience + " years");


// 🟢 Task 11 - Company ID Generator
// Concepts
// Template Literal
// Input
// Name = Naveen

// ID = 1045

// Department = Development
// Output
// Welcome Naveen

// Your Employee ID is EMP1045

// Department : Development

let name1 = prompt("Enter Name:");
let id1 = prompt("Enter ID:");
let department1 = prompt("Enter Department:");

alert("Welcome " + name1 + "\nYour Employee ID is EMP" + id1 + "\nDepartment : " + department1);

// 🟢 Task 12 - User Registration
// Concepts
// prompt()
// confirm()
// alert()
// Flow
// Enter Name

// Enter Age

// Do you accept Terms?

// ↓

// Registered Successfully

let name2 = prompt("Enter Name:");
let age2 = prompt("Enter Age:");
let acceptTerms = confirm("Do you accept Terms?");

if (acceptTerms === true) {
    alert("Registered Successfully");
} else {
    alert("Registration Failed");
}

// 🟢 Task 13 - Salary Increment Calculator
// Concepts
// Arithmetic Operators
// Input
// Salary = 35000

// Increment = 15%
// Output
// Old Salary

// Increment Amount

// New Salary

let salary = Number(prompt("Enter current salary:"));
let incrementPercent = 15;

let incrementAmount = (salary * incrementPercent) / 100;
let newSalary = salary + incrementAmount;

alert("Old Salary: " + salary + "\nIncrement Amount: " + incrementAmount + "\nNew Salary: " + newSalary);

// 🟢 Task 14 - Restaurant Bill Generator
// Concepts
// Variables
// Operators
// Input
// Burger = 150

// Pizza = 300

// Juice = 80
// Calculate
// Subtotal

// GST 18%

// Grand Total

let burgerPrice = 150;
let pizzaPrice = 300;
let juicePrice = 80;

let subtotal = burgerPrice + pizzaPrice + juicePrice;
let gst = (subtotal * 18) / 100;
let grandTotal = subtotal + gst;

alert("Subtotal: " + subtotal + "\nGST 18%: " + gst + "\nGrand Total: " + grandTotal);


// 🟢 Task 15 - Company Attendance Dashboard
// Concepts
// Loop
// Object
// if else
// Employees
// Rahul - Present

// Arun - Absent

// Kamal - Present

// Priya - Present

// Divya - Absent
// Print
// Present Employees

// Absent Employees

// Total Present

// Total Absent

let dashboard = [
    { name: "Rahul", status: "Present" },
    { name: "Arun", status: "Absent" },
    { name: "Kamal", status: "Present" },
    { name: "Priya", status: "Present" },
    { name: "Divya", status: "Absent" }
];

let presentEmployees = "";
let absentEmployees = "";
let totalPresent = 0;
let totalAbsent = 0;

for (let i = 0; i < dashboard.length; i = i + 1) {
    if (dashboard[i].status === "Present") {
        presentEmployees = presentEmployees + dashboard[i].name + " ";
        totalPresent = totalPresent + 1;
    } else {
        absentEmployees = absentEmployees + dashboard[i].name + " ";
        totalAbsent = totalAbsent + 1;
    }
}

alert("Present: " + presentEmployees + "\nAbsent: " + absentEmployees + "\nTotal Present: " + totalPresent + "\nTotal Absent: " + totalAbsent);


// ⭐ Mini Project (Team Assignment)
// Employee Management System (Console Version)
// Concepts Covered:
// Variables
// Arrays
// Objects
// if else
// switch
// Loops
// Operators
// Template Literals
// Features
// Add Employee
// View All Employees
// Search Employee by ID
// Calculate Salary with Bonus
// Check Experience Level
// Delete Employee
// Exit
// One simple object to store our employee


let employee1 = {
    id: 101,
    name: "Rahul",
    salary: 40000,
    department: "HR",
    experience: 2
};

// Renamed variable to 'menuChoice' to prevent SyntaxErrors
let menuChoice = prompt(
    "--- Mini EMS Menu ---\n" +
    "1. Show Profile\n" +
    "2. Add/Update Profile\n" +
    "3. Check Bonus\n" +
    "4. Check Seniority\n" +
    "Enter Choice (1-4):"
);

if (menuChoice === "1") {
    console.log("--- Employee Profile ---");
    console.log("Name: " + employee1.name);
    console.log("Dept: " + employee1.department);
    console.log("Salary: " + employee1.salary);

} else if (menuChoice === "2") {
    // Used completely unique variable names to prevent duplicate identifier errors
    let updatedName = prompt("Enter New Name:");
    let updatedDept = prompt("Enter New Department:");
    let updatedSalary = Number(prompt("Enter New Salary:"));
    
    employee1.name = updatedName;
    employee1.department = updatedDept;
    employee1.salary = updatedSalary;
    
    console.log("Profile updated successfully in the console database!");

} else if (menuChoice === "3") {
    let bonusPercent = Number(prompt("Enter Bonus %:"));
    let bonusAmount = (employee1.salary * bonusPercent) / 100;
    let grandTotal = employee1.salary + bonusAmount;
    
    console.log("--- Bonus Calculation ---");
    console.log("Bonus Payout: " + bonusAmount);
    console.log("Total Salary: " + grandTotal);

} else if (menuChoice === "4") {
    let level = "Junior";
    if (employee1.experience >= 5) {
        level = "Senior";
    }
    
    console.log(employee1.name + " is a " + level + " Level Employee.");

} else {
    console.log("Invalid menu item picked.");
}