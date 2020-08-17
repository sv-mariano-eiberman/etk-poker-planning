const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3080;

// const users = [];

app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/my-app/dist/angular-nodejs-docker-compose/`));

// app.get('/api/users', (req, res) => {
//   res.json(users);
// });

require('./API/controllers/Participants')(app);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
