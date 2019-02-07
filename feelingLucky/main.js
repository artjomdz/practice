let button = document.querySelector('.submit');
let selectDiv = document.querySelector('.container');
let createDiv = document.createElement('div');

const feelingLucky = () => {
  let randomNums = [];
  let luckyNums = [];
  let numSame = [];
  createDiv.className = "lucky";
  for (let i = 0; i < 10; i++) {
    randomNums.push(Math.floor(Math.random() * (11 - 1)) + 1)
  };

  for (let i = 0; i < 3; i++) {
    luckyNums.push(Math.floor(Math.random() * (11 - 1)) + 1)
  };

  for (let i = 0; i < luckyNums.length; i++) {
    for (let j = 0; j < randomNums.length; j++) {
      if (luckyNums[i] === randomNums[j]) {
        numSame.push(randomNums[j]);
      }
    }

  }
  if (numSame.length >= 5) {
    createDiv.textContent = 'You are lucky today!';
    selectDiv.appendChild(createDiv);

  } else {
    createDiv.textContent = 'Ohh... Sorry, no luck today';
    selectDiv.appendChild(createDiv);
  };
  console.log(numSame);
};


button.addEventListener('click', feelingLucky);
