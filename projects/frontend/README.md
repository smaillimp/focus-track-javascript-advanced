# React project

Write a simple Twitter clone with the following pages:

- Login page
- All tweets page (protected - login required)
- New tweet page (protected - login required)

## Backend

- Backend domain: https://js-advanced-twitter.herokuapp.com

## Users

The following users exist. The password is always `secure`.

- mickey-mouse@react-dev.com
- donald-duck@react-dev.com
- captain-jack-sparrow@react-dev.com
- nemo@react-dev.com
- ariel@react-dev.com
- winnie-the-pooh@react-dev.com

## Login page

- Each user is has to log in before using the application
- When the user opens another page first, redirect the user to the login page. Use `RequireLogin.js` to implement this behaviour.
- Create a form for email and password and make the following call to login:

```js
fetch('<DOMAIN>/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'mickey-mouse@react-dev.com',
    password: 'secure',
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result.accessToken);
    console.log(result.user.id);
  })
  .catch((error) => console.log('error', error));
```

- Store the access token and the user id in state. Then redirect to the all tweets page.
- Optional: Store the access token and the user id in the session storage. When the page is reloaded, the user stays logged in. <br />
  Hint: When loading the page, the values should be read from the session storage. Whenever the values change, the vaues should be updated in the storage.

## All tweets page

- Load all tweets and display them on the page:

```js
fetch('<DOMAIN>/tweets', {
  headers: {
    Authorization: 'Bearer <ACCESS_TOKEN>',
  },
})
  .then((response) => response.json())
  .then((tweets) => console.log(tweets))
  .catch((error) => console.log('error', error));
```

## New tweet page

- Create a form to enter new tweets. The user enters a `title` and a `text`.
- Send the form data to the backend when the form is submitted:

```js
fetch('<DOMAIN>/tweets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <ACCESS_TOKEN>',
  },
  body: JSON.stringify({
    title: 'title',
    text: 'text',
    userId: '<USER_ID>',
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

- Redirect to the all tweets page after successful creation

## Deployment

- Deploy your site on Netlify.
  - To make the page reloads work, check out [this article about redirects on Netlify](https://ridbay.medium.com/react-routing-and-netlify-redirects-fd1f00eeee95).
