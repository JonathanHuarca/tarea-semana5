const extractNoun = (text) => {
  return text.split('');
};

const removeBlankSpaces = (text) => {
  return text.replace(/ /g, '');
};

const capitalize = (text) => {
  const capitalFirst = text[0].toUpperCase();
  const left = text.slice(1);
  return `${capitalFirst}${left}`;
};

const toLowerCase = (text) => {
  return text.toLowerCase();
};

const toUpperCase = (text) => {
  return text.toUpperCase();
};

// w/o blank spaces
const totalCharacters = (text) => {
  return removeBlankSpaces(text).length;
};

module.exports = {
  extractNoun,
  removeBlankSpaces,
  capitalize,
  toLowerCase,
  toUpperCase,
  totalCharacters,
};
