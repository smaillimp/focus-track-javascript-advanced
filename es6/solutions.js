/* only have a look to get a hint.
 * Try to solve the exercises with the repetition videos and Google.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

export const book = {
  name: "Harry Potter and the Philosopher's Stone",
  price: 20.5,
};

export function getItemDescription(book) {
  const { name, price } = book;
  return `The book is called '${name}' and it costs CHF ${price}.`;
}

// -------------

const numbers = [1, 2];
export const [one, two] = numbers;

// -------------

const characters = ['a', 'b', 'c', 'd', 'e'];
export const [a, ...others] = characters;

// -------------

export const numbersAndCharacters = [...numbers, ...characters];

// -------------

export const wordsArray = ['hello', 'javascript'];
export function wordsToUpperCase(words) {
  return words.map((word) => word.toUpperCase());
}

// -------------

export const books = [
  {
    name: "Harry Potter and the Philosopher's Stone",
    pages: 223,
  },
  {
    name: 'Harry Potter and the Chamber of Secrets',
    pages: 251,
  },
  {
    name: 'Harry Potter and the Prisoner of Azkaban',
    pages: 317,
  },
  {
    name: 'Harry Potter and the Goblet of Fire',
    pages: 636,
  },
  {
    name: 'Harry Potter and the Order of the Phoenix',
    pages: 766,
  },
  {
    name: 'Harry Potter and the Half Blood Prince',
    pages: 607,
  },
  {
    name: 'Harry Potter and the Deathly Hallows',
    pages: 607,
  },
];

export function getLargeBooks(books) {
  return books.filter((book) => book.pages > 500);
}

// -------------

export const sum = (a, b = 10) => a + b;
