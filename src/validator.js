const validator = {
  // ...
  isValid: (creditCardNumber) => {
    let cardArr = creditCardNumber.split('');
    let totalAdd = 0;
    for(let i = 0; i < cardArr.length; i+=2) {
        cardArr[i] = cardArr[i] * 2;
      }

    for(let i = 0; i < cardArr.length; i++) {
      if(cardArr[i] > 9) {
        let num = cardArr[i].toString().split('');
        cardArr[i] = parseInt(num[0]) + parseInt(num[1]);
      }
      cardArr[i] = parseInt(cardArr[i]);
    }

    for(let i = 0; i< cardArr.length; i++) {
      totalAdd += cardArr[i];
    }

    return totalAdd % 10 === 0 ? true : false;
  },
  maskify: (creditCardNumber) => {
    let replacePart = '';
    for(let i = 0; i < (creditCardNumber.length -4); i++) {
      replacePart += creditCardNumber[i].replace(/\d/g, '#');
    }
    return replacePart + creditCardNumber.slice(-4);
  }
};

export default validator;
