const display_number_1 = document.querySelector("#display");
const display_number_2 = document.querySelector("#display_to");
const convert_btn = document.querySelector("#convert");

const input_1 = document.querySelector("#value");
const input_2 = document.querySelector("#value_to");

const system_select_1 = document.querySelector("#system");
const system_select_2 = document.querySelector("#system_to");

let system_1 = system_select_1.value;
let system_2 = system_select_2.value;
let value_1 = 0;
let value_2 = 0;

system_select_1.addEventListener("change", (e) => {
  input_2.value = 0;
  system_1 = system_select_1.value;
  display_number_1.innerText = system_1;
});
system_select_2.addEventListener("change", (e) => {
  input_1.value = 0;
  system_2 = system_select_2.value;
  display_number_2.innerText = system_2;
});

input_1.addEventListener("change", (e) => {
  value_1 = input_1.value;
});
input_2.addEventListener("change", (e) => {
  value_2 = input_2.value;
});

convert_btn.addEventListener("click", () => {
  convert();
});

const convert = () => {
  if (system_1 === "Celcius" && system_2 === "Farenheit") {
    input_2.value = (input_1.value * 9) / 5 + 32;
    
  } else if (system_1 === "Farenheit" && system_2 === "Celcius") {
    input_2.value = ((input_1.value - 32) * 5) / 9;
  } else if (system_1 === "Celcius" && system_2 === "Kelvin") {
    input_2.value = parseFloat(input_1.value) + 273.15;
  } else if (system_1 === "Kelvin" && system_2 === "Celcius") {
    input_2.value = parseFloat(input_1.value) - 273.15;
  } else if (system_1 === "Farenheit" && system_2 === "Kelvin") {
    input_2.value = ((parseFloat(input_1.value) - 32) * (5/9)) + 273.15
  } else if (system_1 === "Kelvin" && system_2 === "Farenheit") {
    input_2.value = (((parseFloat(input_1.value) - 273.15)) * 9) / 5 + 32;
  } else {
    alert("Error");
  }
};
