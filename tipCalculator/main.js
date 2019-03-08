let bill = document.querySelector('#bill');
let submit = document.querySelector('.submit');
let people = document.querySelector('#people');
let procent = document.querySelector('#service');
let selectDiv = document.querySelector('.result');
let createDiv = document.createElement('p');
let currentProcent = "";
console.log(bill);
procent[0].value = 30;
procent[1].value = 25;
procent[2].value = 20;
procent[3].value = 15;
procent[4].value = 10;

const getProcent = () => {
  currentProcent = parseInt(procent.value) / 100;
  return currentProcent
}

const doTheMath = () => {
  let inputBill = bill.value;
  let inputPeople = people.value;
  let sumUp = inputBill * currentProcent / inputPeople;
  selectDiv.appendChild(createDiv);
  createDiv.innerHTML = `<span = class="total">TOTAL:</span> ${sumUp} euro`;
};

procent.addEventListener('click', getProcent);
submit.addEventListener('click', doTheMath);