// Calculator
function addNumbers() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    document.getElementById("calcResult").innerText =
        isNaN(a) || isNaN(b) ? "Invalid input" : "Result: " + (a + b);
}

// Word Counter
function countWords() {
    let text = document.getElementById("textInput").value.trim();
    let count = text ? text.split(/\s+/).length : 0;
    document.getElementById("wordResult").innerText = "Words: " + count;
}

// Password Generator
function generatePassword() {
    let length = document.getElementById("passLength").value;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("passwordResult").innerText = pass || "Enter length";
}

// BMI Calculator
function calculateBMI() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    let bmi = w / (h * h);
    document.getElementById("bmiResult").innerText =
        bmi ? "BMI: " + bmi.toFixed(2) : "Invalid input";
}

// KM to Miles
function convertKM() {
    let km = document.getElementById("kmInput").value;
    let miles = km * 0.621371;
    document.getElementById("kmResult").innerText =
        km ? miles.toFixed(2) + " miles" : "Enter value";
}
