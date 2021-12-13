# JavaScript Advanced focus track slides

## Update the slides:

1. Download the repository:

```sh
git clone git@github.com:dwin94/focus-track-javascript-advanced.git
```

2. Navigate into the slides folder:

```sh
cd focus-track-javascript-advanced/slides
```

3. Install the dependencies:

```sh
npm i
```

4. Start the slides development preview:

```sh
npm start
```

## Deploy the slides:

After each commit to main, the slides are automatically deployed to Netlify. In case the deployment needs to be set up again, make sure to use the following deploy settings:

- Repository: `github.com/dwin94/focus-track-javascript-advanced`
- Base directory: `slides`
- Build command: `npm run build`
- Publish directory: `slides/dist`
