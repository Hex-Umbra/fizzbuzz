const display = document.querySelector("#container");

for (let j = 1; j <= 100; j++) {
  fizzBuzz(j);
}


// Fonction
function fizzBuzz(i) {
  if (i % 3 == 0 && i % 5 == 0) {
    create(`${i} FizzBuzz`, "fizzbuzz");
    console.log("FizzBuzz");
  } else if (i % 5 == 0 || i.toString().includes("5")) {
    create(`${i} Buzz`, "buzz");
    console.log("Buzz");
  } else if (i % 3 == 0 || i.toString().includes("3")) {
    create(`${i} Fizz`, "fizz");
    console.log("Fizz");
  } else {
    create(`${i} -> ${i}`, "number");
    console.log(i);
  }
}
function create(value = "", classe = "") {
  const span = document.createElement("span");
  span.textContent += value;
  display.append(span);
  span.classList.add(classe);
}
