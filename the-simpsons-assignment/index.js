const simpsons = [
  {
    name: 'Homer Simpson',
    email: 'homer.simpson@gmail.com',
    photo: 'homer.jpg'
  }, {
    name: 'Marge Simpson',
    email: 'marge.simpson@gmail.com',
    photo: 'marge.jpg'
  }, {
    name: 'Lisa Simpson',
    email: 'lisa.simpson@gmail.com',
    photo: 'lisa.jpg'
  }, {
    name: 'Bart Simpson',
    email: 'bart.simpson@gmail.com',
    photo: 'bart.jpg'
  }, {
    name: 'Maggie Simpson',
    email: 'maggie.simpson@gmail.com',
    photo: 'maggie.jpg'
  }
];

const createPerson = (personData) => {
  let element = document.createElement('div');
  element.className = 'contact';
  element.innerHTML = (`<div class="contact__photo">
      <div class="photo">
        <img class="photo__img" src="img/${personData.photo}" alt="${personData.name}" />
      </div>
    </div>
    <div class="contact__info">
      <p><strong>Name:</strong>${personData.name}</p>
      <p><strong>E-mail:</strong> ${personData.email}</p>`)

  return element;
};

document.addEventListener('DOMContentLoaded', () => {
  const contacts = document.querySelector('.contacts');
  for (let person of simpsons) {
    contacts.appendChild(createPerson(person));
  }
});
