# es6 exercises

- Navigate into this folder
- Install all dependencies with `npm install`
- Solve the exercises in `exercise.js`
- Check the solutions by running `npm run test`
- The solutions are in the file `solutions.js`. Take a look at them when you need a hint, but first try to solve them on your own, with the repetition videos and Google.
- When you solved all exercises, compare it with the solutions.

## object destructuring

Implement the function `getItemDescription`, which accepts a book object and returns the description in the following format:

```
The book is called '<bookname>' and it costs CHF <bookprice>.`
```

Use object destructuring to solve the problem.

## array destructuring

Assign the first value of the `numbers` array to the variable `one` and the second value of the array to the variable `two`. Use array destructuring.

Assign the first value of the `characters` array to the variable `a` and all the other values to the variable `others` as an array.

## spread operator

Create an array `numbersAndCharacters`, which contains all the number from the `numbers` array and all the characters from the `characters` array. Use the spread operator.

## map, filter

Implement the function `wordsToUpperCase`, which accepts an array of strings and transforms each string to its uppercase representation. Use the map method.

Implement the function `getLargeBooks`, which accepts an array of books and return an array of books which have more than 500 pages. Use the filter method.

## arrow functions

If you have not done it already, write `wordsToUpperCase` using an arrow function inside of map.

If you have not done it already, write `getLargeBooks` using an arrow function inside of filter.

## default parameters

Implement the function `sum`. When given 2 arguments, it adds the values. Then given 1 argument, it adds 10 to the argument. Use a default parameter.
