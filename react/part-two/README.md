# React exercises part 2

## Routing

1. Navigate into this folder

2. Create a new react app with `npx create-react-app exercise-part-two` and follow the instructions to set up [React Router](https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app). You should have a Home and an About page in the end.

3. Move the `Home` component and the `About` component each into a separate file.

4. The `Home` component uses a new syntax `<></>`. Check the [documentation about Fragments](https://reactjs.org/docs/fragments.html) to learn why.

5. Add an additional page `Contact`, which contains the following content (as always: use semantic HTML)

   - A title "Contact information"
   - Phone number: +41 79 123 45 67
   - Email address: react@powercoders.com

   Make sure the phone number and the email address are clickable. When clicking on the email address, your default mail program should open.

6. Create a component `Navigation`, which contains the links to all the 3 pages. Add it below the title in `App.js`.

7. Remove the links in the components `Home` and `About`.

8. Use CSS to add some space between the navigation links.

## React Children / Reusability

Currently, all the pages have the same structure:

```html
<main>
  <h2>title</h2>
  content
</main>
```

1. Create a new component `Page`, which provides this structure as reusable component. It accepts two props:

   - `title`, which is then rendered between the h2 tags
   - `children`, to pass down the content of the page. See [React Documentation](https://reactjs.org/docs/composition-vs-inheritance.html#containment).

2. Use this `Page` component in the `Home`, `About` and `Contact` component.

## Bonus: Context API

1. Add an additional page `FontColor`.

<!-- 2. TODO: https://reactjs.org/docs/context.html -->
