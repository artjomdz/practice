class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  sell() {
    let result = this.quantity - 1;
    return result;
  }
  addStore() {
    let num = this.quantity + 1;
    return num;
  }

  addProduct() {
    let createLi = document.createElement('li');
    createLi.className = 'list-group-item d-flex justify-content-between align-items-center item';
    createLi.innerHTML = (`<p class="productName"> ${this.name}</p>
    <span class="badge price">${this.price} $</span>
    <button type="button" class="btn btn-outline-primary">Buy!</button>
    <span class="badge amount">${this.quantity}</span>`);
    return createLi;
  };
};

const product = [
  new Product('T-Shirt', '49,99', '25'),
  new Product('Sweater', '35,99', '19'),
  new Product('Jeans', '108,00', '49'),
  new Product('Jacket', '138,99', '3'),
  new Product('Skirt', '22,50', '1'),
  new Product('Dress', '77,00', '12'),
  new Product('Neckless', '219,99', '2'),
  new Product('Hat', '45,00', '7')
];

document.addEventListener('DOMContentLoaded', () => {
  let selectLi = document.querySelector('ul');
  for (let items of product) {
    selectLi.appendChild(items.addProduct());
  }
  document.addEventListener('click', (e) => {
    let buy = e.target.nextSibling.nextSibling;
    if (buy.textContent > 0) {
      parseInt(buy.textContent = buy.textContent - 1  );
    } else {}

  })
});
