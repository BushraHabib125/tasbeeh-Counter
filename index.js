

let count = document.getElementById("count");
let reset = document.getElementById("reset");
let display = document.getElementById("Counter");

let counter = 0;

count.addEventListener("click", function() {
    counter++;
    display.innerText = counter;
});

reset.addEventListener("click", function() {
    counter = 0;
    display.innerText = counter;
});