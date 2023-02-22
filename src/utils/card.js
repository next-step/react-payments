
  export function isNumber(value) {
    return !isNaN(Number(value));
  }

  export function maskingCardNumber(cardNumber) {
    console.log(cardNumber); // TODO : 2번 수행되는 이유
    const cardNumberArray = Object.values(cardNumber);    
    return cardNumberArray.map((value, index) => {
      return (index < 3 && value.length === 4)? value + " - " : value;
    }).join("");
  }
  
  export function maskingCardExpiration(cardExpiration) {
    const cardExpirationArray = Object.values(cardExpiration);
    return cardExpirationArray.map((value, index) => {
      return (index == 0 && value < 13 && value > 0)? value + " / " : value;
    }).join("");
  }