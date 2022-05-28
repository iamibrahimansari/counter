"use strict";

const digit = document.querySelector(".digit");
const decrease_btn = document.getElementById("btn-1");
const reset_btn = document.getElementById("btn-2");
const increase_btn = document.getElementById("btn-3");

let counter = 0;

decrease_btn.addEventListener("click", function () {
    counter -= 1;
    writingCounter(counter);
});

reset_btn.addEventListener("click", function () {
    counter = 0;
    writingCounter(counter);
});

increase_btn.addEventListener("click", function () {
    counter += 1;
    writingCounter(counter);
});

function writingCounter(counter) {
    digit.textContent = counter;
}
