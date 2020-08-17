
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const setGame = async (req, res) => {
  const db = await open({
    filename: './data/poker.db',
    driver: sqlite3.Database,
  });
  // await db.run('CREATE TABLE Poker (id UUID, name string)');
  // const status = await db.exec('INSERT INTO "Poker"(name) VALUES (\'Martin\')');
  const data = await db.all('SELECT * FROM "Poker"');
  console.log(data);
  res.json({ message: 'setGame', data });
};

const startGame = async (req, res) => {
  res.json();
};

const startTIcketVoting = async (req, res) => {
  res.json();
};

module.exports = {
  setGame,
  startGame,
  startTIcketVoting,
};
