const groceryList = [];
let submitValue = document.querySelector('.submit');
let getText = document.querySelector('.enterText');
let getAmount = document.querySelector('.enterAmount');

const mainFunc = () => {

  const newProduct = (a, b) => {
    const grocertListObj = {
      name: a,
      amount: b
    }
    groceryList.push(grocertListObj);
  };

  newProduct(getText.value, getAmount.value);
  let itemsToBuy = document.querySelector('.itemsToBuy');
  let createNewParagraph = document.createElement('li');
  createNewParagraph.style.listStyle = 'none';
  let checkbox = document.createElement('div');
  checkbox.className = 'checked'
  checkbox.innerHTML = '<input type="checkbox" class="check"></input>';
  itemsToBuy.appendChild(checkbox);
  itemsToBuy.appendChild(createNewParagraph);

  let product = groceryList[groceryList.length - 1];
  createNewParagraph.textContent = `${product.name} - ${product.amount}`;

  const crossOut = (event) => {

    event.target.checked
      ? event.target.parentNode.nextSibling.className = 'cross'
      : event.target.parentNode.nextSibling.className = ' ';

  };

  let getCheck = document.querySelector('.itemsToBuy');
  getCheck.addEventListener('click', crossOut);
};

submitValue.addEventListener('click', mainFunc);