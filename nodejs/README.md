# Node.js exercises

## Create server and deploy it

For this exercise, it is recommended to create a new folder (for example on your Desktop). This will make the deployment easier.

1. Create a new folder and make a git repository out of it
2. Create a package.json file using `npm init -y`
3. Install [express](https://www.npmjs.com/package/express)
4. Create a file `server.js` and write the following web server:

```bash
GET / # returns an HTML file. It contains the title "Hello World" and a link to /another-page

GET /another-page # returns an HTML file. It contains the title "Hello Again" and a link to the home page (/).
```

- Hints:
  - Use Google if you face a problem, express has a large developer community.
  - When testing the web server, make sure to always save your changes, stop the running server with `Ctrl + c` and run the server again with `node server.js`.

5. Create the script `start`, which runs the server: `"start": "node server.js"`
6. Make sure the server port can be passed from outside and has a fallback if it is not specified.

   - Create another npm script to test if it works:

   ```json
   "start-with-port": "PORT=1234 node server.js"
   ```

7. Create a "database" in `server.js`:
   ```js
   const jokesDatabase = [
     "q. Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself",
     "Sometimes when I'm writing JavaScript I want to throw up my hands and say 'this is bullshit!' but I can never remember what 'this' refers to.",
   ];
   ```
8. Extend the server with the following routes:

```bash
GET /jokes # returns all the jokes as json

POST /jokes with json body { "joke": "<joke here>" } # reads the json body and adds the joke to the jokesDatabase. Remember to add the body parser.
```

9. Test the routes with [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/).

10. Add the following code to your `package.json` file:

    ```json
    "engines": {
        "node": "16.13.0"
    }
    ```

11. Create an [Heroku](https://www.heroku.com/) account

12. Create a new GitHub reposity and push your local repo to this new GitHub repo.

13. Deploy the repository via the Heroku UI:
    - "New" - "Create new app"
    - App name: Choose any name
    - Choose a region: Europe
    - Click "Create app"
    - Select GitHub as deployment method and allow Heroku to read your repositories.
    - In "Connect to GitHub" search the repository and click "Connect"
    - Click "Enable Automatic Deploys"
    - Click "Deploy Branch"
    - After the deployment is successful, click "View"
    - :tada: your server is live

## Testing with Jest

In the folder `tests` is a file `best-working-code`. It contains some functions, but unfortunately, the programmer made some mistakes.

1. In the folder `tests`, create a `package.json` file.
2. Install Jest by following the [Getting started guide](https://jestjs.io/docs/getting-started)
3. Write test cases for the functions of `best-working-code`. Some of them should fail, because of the mistakes in the code.
4. Fix the mistakes in `best-working-code` and run your tests again. Now everything should be green.
