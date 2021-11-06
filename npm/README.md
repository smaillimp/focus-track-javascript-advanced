# npm exercises

## Create project with prettier

1. Create a new folder
2. Change the folder to a git repository
3. Create a package.json file with `npm init`
4. Install `prettier` from [npm](https://www.npmjs.com/)
5. Ignore the `node_modules` folder from git
6. Create a `.prettierrc` file with the following content:

```json
{
  "printWidth": 120,
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true
}
```

6. Add a npm script called `format` with the following code:

```
prettier --write .
```

7. Commit all the changes
8. Run the script
9. Compare the changes with `git diff`

## Create project with jQuery

1. Create a new folder
2. Create a package.json file with `npm init`
3. Install `jquery` from [npm](https://www.npmjs.com/)
4. Create an HTML file and add the following script tag:

```html
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
```

5. Create an h1 element on the page
6. Select the h1 element with jQuery and log "title clicked" to the console when the element was clicked
