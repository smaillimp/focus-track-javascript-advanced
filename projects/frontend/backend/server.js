const jsonServer = require('json-server');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.db = router.db;

const replaceUserIdWithEmail = (request, response) => {
  // GET /tweets: Replace userId with creator email address
  if (request.method === 'GET' && request.url === '/tweets') {
    const tweets = response.locals.data;
    const users = router.db.get('users').value();

    const tweetsReponse = tweets.map(({ title, text, userId, id, createdAt }) => {
      const creator = users.find((user) => user.id === +userId);

      return {
        title,
        text,
        id,
        createdAt,
        creator: creator.email,
      };
    });

    response.json(tweetsReponse);
  } else {
    response.json(response.locals.data);
  }
};

const insertCreationDate = (request, _response, next) => {
  request.body.createdAt = Date.now();
  next();
};

// setup auth and permissions, see https://www.npmjs.com/package/json-server-auth#guarded-routes-
const rules = auth.rewriter({
  users: 600,
  tweets: 640,
});

app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(jsonServer.bodyParser);
app.post('/tweets', insertCreationDate);
// https://www.npmjs.com/package/json-server#custom-output-example
router.render = replaceUserIdWithEmail;
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
