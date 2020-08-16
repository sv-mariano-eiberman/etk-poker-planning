const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/my-app/dist/angular-nodejs-docker-compose/`));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res.status(400).json('User not added');
  }
  users.push(user);
  res.json('user added');
});

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/app-ui/dist/angular-nodejs-docker-compose/index.html`);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
