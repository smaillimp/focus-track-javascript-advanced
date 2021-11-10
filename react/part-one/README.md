# React exercises part 1

## Counter

1. Navigate into this folder

2. Create a new react app with `npx create-react-app exercise-part-one`
   Here is an explanation about [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner).

3. Create a new component `Counter` in a new file `counter.js`.

4. Delete the files `App.css` and `App.test.js` and remove the import of `App.css` from the `App.js` file.

5. Delete the content of the `App` component. Instead add a `div`, which contains the title "Hello" and the `Counter` component below.

6. In the `Counter` component, add two buttons "count down" and "count up". Add state to manage the counter value. It starts with 0 initially and is increased by 1 when the "count-up" button is clicked and decreased by 1 if the "count down" button is clicked.

7. Display the current value of the counter.

8. Don't render the "count-down" button when the counter value is smaller or equals 0. See: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator

9. Add a yellow background color to the `div` Use a CSS class.

10. Add a red font color to the counter value if it is larger than 10. Use a CSS class.

## Name list

1. Create a component `Names` and render it below the `Counter` component in `App.js`.

2. Add the following array before the component:

```js
const firstNames = ['David', 'Peter', 'Max'];
```

3. Display all the firstnames in an unordered list. (use map)

4. When clicking a first name

   - log the name to the console
   - remove it from the list<br />
     Use `setState` to store the clicked first names in an array. Always use a new array when updating the state. Use the filter and Array.includes method to filter out the clicked names.

IMPORTANT:
React will not rerender, if the old state and the new state have the same value or reference. See [React Docs](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update).
Example:

```js
const myArray = [1, 2];
const oldState = myArray;

myArray.push(3);
const newSate = myArray;

Object.is(oldState, newSate); // Even tough the array has 1 more item, it still has the same reference.

// Correct way:
const myArray = [1, 2];
const oldState = myArray;

const newSate = [...myArray, 3];
Object.is(oldState, newSate);
```

5. Create a new component `ClickedNames` and render it below the unordered list in `Names.js`.

6. Add a title "Clicked Names" inside.

7. Pass the clicked names array as props to the `ClickedNames` component. Display the clicked names inside as an ordered list.

## Cat image viewer

1. Create a new component `CatsImages` and render it below the `Names` component in `App.js`.

2. In `CatsImages` create a form with a select dropdown to select the breed. Load the breeds from `https://api.thecatapi.com/v1/breeds`.

3. When changing the breed, load a new cat image from `https://api.thecatapi.com/v1/images/search?breed_ids=<SELECTED_BREED_ID>` and display it.

4. Bonus: Provide the inital breed id from outside. Pass it down from `App.js`.
