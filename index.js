/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const converBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kgToPound = 2.204;
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("volume");
const lengthConversion = document.getElementById("length-conversion");
const massConversion = document.getElementById("mass-conversion");
const volumeConversion = document.getElementById("volume-conversion");

converBtn.addEventListener("click", function () {
  lengthConversion.textContent = `${inputEl.value} meters = ${(
    inputEl.value * meterToFeet
  ).toFixed(3)}  feet | ${inputEl.value} feet = ${(
    inputEl.value / meterToFeet
  ).toFixed(3)} meters`;

  volumeConversion.textContent = `${inputEl.value} liters = ${(
    inputEl.value * literToGallon
  ).toFixed(3)}  gallons | ${inputEl.value} gallons = ${(
    inputEl.value / literToGallon
  ).toFixed(3)} liters`;

  massConversion.textContent = `${inputEl.value} kilos = ${(
    inputEl.value * kgToPound
  ).toFixed(3)}  pounds | ${inputEl.value} pounds = ${(
    inputEl.value / kgToPound
  ).toFixed(3)} kilos`;
});
