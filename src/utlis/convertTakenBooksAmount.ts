export const convertTakenBooksAmount = (quantity = 0) => {
  let result;

  const string = quantity.toString();
  const lastChar = string.charAt(string.length - 1);

  if (lastChar == '1' && !(quantity == 11)) {
    result = quantity + ' книга';
  } else if (lastChar == '2' && !(quantity == 12)) {
    result = quantity + ' книги';
  } else if (lastChar == '3' && !(quantity == 13)) {
    result = quantity + ' книги';
  } else if (lastChar == '4' && !(quantity == 14)) {
    result = quantity + ' книги';
  } else {
    result = quantity + ' книг';
  }
  return result;
};
