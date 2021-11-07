import {
  getItemDescription,
  book,
  one,
  two,
  a,
  others,
  numbersAndCharacters,
  wordsArray,
  wordsToUpperCase,
  books,
  getLargeBooks,
  sum,
} from './exercise';

describe('getItemDescription', () => {
  test('returns the correct description for the first Harry Potter book', () => {
    const result = getItemDescription(book);
    const expected = "The book is called 'Harry Potter and the Philosopher's Stone' and it costs CHF 20.5.";
    expect(result).toBe(expected);
  });

  test('returns the correct description for the second Harry Potter book', () => {
    const secondBook = {
      name: 'Harry Potter and the Chamber of Secrets',
      price: 23.0,
    };
    const result = getItemDescription(secondBook);
    const expected = "The book is called 'Harry Potter and the Chamber of Secrets' and it costs CHF 23.";
    expect(result).toBe(expected);
  });
});

describe('numbers', () => {
  test('one should be 1', () => {
    expect(one).toBe(1);
  });

  test('two should be 2', () => {
    expect(two).toBe(2);
  });
});

describe('characters', () => {
  test('a should be "a"', () => {
    expect(a).toBe('a');
  });

  test('others should contain all the other characters', () => {
    expect(others).toEqual(['b', 'c', 'd', 'e']);
  });
});

describe('numbersAndCharacters', () => {
  test('contains all the items from the numbers and the characters array', () => {
    expect(numbersAndCharacters).toEqual([1, 2, 'a', 'b', 'c', 'd', 'e']);
  });
});

describe('wordsToUpperCase', () => {
  test('transforms all words to uppercase', () => {
    const result = wordsToUpperCase(wordsArray);
    const expected = ['HELLO', 'JAVASCRIPT'];
    expect(result).toEqual(expected);
  });

  test('transforms all browser names to uppercase', () => {
    const browsers = ['chrome', 'safari', 'firefox'];

    const result = wordsToUpperCase(browsers);
    const expected = ['CHROME', 'SAFARI', 'FIREFOX'];
    expect(result).toEqual(expected);
  });
});

describe('getLargeBooks', () => {
  test('returns books with more than 500 pages', () => {
    const result = getLargeBooks(books);
    const expected = [
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

    expect(result).toEqual(expected);
  });
});

describe('sum', () => {
  test('should add two numbers', () => {
    expect(sum(100, 200)).toBe(300);
  });

  test('should add 10 if only the first number is provided', () => {
    expect(sum(100)).toBe(110);
  });
});
