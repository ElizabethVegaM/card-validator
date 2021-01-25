import validator from './validator.js';

const validateForm = document.getElementById('validateForm');
const cardInput = document.getElementById('cardNumberInput');
const resultBox = document.getElementById('result');
const cardImgNumber = document.getElementById('creditCardNumber');

cardInput.addEventListener('keyup', () => {
  let formattedText = cardInput.value.split(' ').join('');
  if (formattedText.length <= 16) {
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
  } else {
    alert("plz stop here");
  }
  cardImgNumber.innerHTML = validator.maskify(formattedText);
})

validateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let cardNumber = cardInput.value;
  let validateResult = validator.isValid(cardNumber);
  if(validateResult) {
    resultBox.textContent = 'La tarjeta es válida';
  } else {
    resultBox.textContent = 'La tarjeta no es válida';
  }
});

