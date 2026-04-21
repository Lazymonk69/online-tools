function addNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcResult").innerText = "Please enter valid numbers";
        return;
    }

    document.getElementById("calcResult").innerText = "Result: " + (num1 + num2);
}

function countWords() {
    let text = document.getElementById("textInput").value.trim();
    let words = text === "" ? 0 : text.split(/\s+/).length;

    document.getElementById("wordResult").innerText = "Words: " + words;
}
