# React project

You write a simple Twitter clone:

- Login page
- All tweets page (protected)
- New tweet page (protected)

## Setup

Generate one or many users for yourself. **Do not use your real email and password.** Replace domain with the real domain:

```
curl --location --request POST 'http://<DOMAIN>/register' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=user@react-dev.com' \
--data-urlencode 'password=secure'
```

## Login page

- Each user is has to log in before using the application
- When the user opens another page first, redirect the user to the login page
- Create a form for email and password and make the following call to login:

```js
fetch('<DOMAIN>/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({
    email: 'user@react-dev.com',
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

## All tweets page

- Load all tweets and display them on the page:

```js
fetch('http://localhost:3000/tweets', {
  method: 'GET',
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
fetch('http://localhost:3000/tweets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer <ACCESS_TOKEN>',
  },
  body: JSON.stringify({
    title: 'title',
    text: 'text',
    userId: '<USER_ID>',
  }),
})
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```
