export const convertTakenBooksAmount = (quantity: number = 0): string => {
  let result;

  const string = quantity.toString();
  const lastChar = string.charAt(string.length - 1);

  const chars = ['2', '3', '4'];
  const quantities = [12, 13, 14];

  if (lastChar === '1' && !(quantity == 11)) {
    result = quantity + ' книга';
  } else if (chars.includes(lastChar) && !quantities.includes(quantity)) {
    result = quantity + ' книги';
  } else {
    result = quantity + ' книг';
  }
  return result;
};
