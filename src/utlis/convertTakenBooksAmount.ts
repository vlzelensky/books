export const convertTakenBooksAmount = (quantity: number = 0): string => {
  let result;

  const string = quantity.toString();
  const lastChar = string.charAt(string.length - 1);

  const chars = ['2', '3', '4'];
  const quantities = [12, 13, 14];

  switch (true) {
    case lastChar === '1' && !(quantity == 11):
      result = quantity + ' книга';
      break;
    case chars.includes(lastChar) && !quantities.includes(quantity):
      result = quantity + ' книги';
      break;
    default:
      result = quantity + ' книг';
  }
  return result;
};
