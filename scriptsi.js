document.getElementById("colorButton").addEventListener("click", changeColor);

function changeColor() {
    var button = document.getElementById("colorButton");
    var currentColor = button.style.backgroundColor;
    button.style.backgroundColor = currentColor === "red" ? "white" : "red";
}

function displayGreeting() {
    var today = new Date();
    var hour = today.getHours();

    var greeting;
    if (hour < 12) {
        greeting = "Hii I am Simran!";
    } else if (hour < 18) {
        greeting = "I am From Bihar!";
    } else {
        greeting = "I am Doing some work!";
    }

    alert(greeting);
}

function SubtractNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}
