const add = (number1, number2) => {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    return number1 + number2;
  }
  return null;
};

const subtract = (number1, number2) => {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    return number1 - number2;
  }
  return null;
};

const multiply = (number1, number2) => {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    return number1 * number2;
  }
  return null;
};

const divide = (number1, number2) => {
  if (number2 === 0) {
    return null;
  }

  if (typeof number1 === 'number' && typeof number2 === 'number') {
    return number1 / number2;
  }
  return null;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
