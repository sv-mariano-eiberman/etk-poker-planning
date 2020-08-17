/* eslint-disable func-names */

// const addParticipants = async (req, res) => {
//   res.json({});
// };

// const removeParticipants = async (req, res) => {
//   res.json({});
// };

// const chooseModerator = async (req, res) => {
//   res.json({});
// };


// module.exports = {
//   addParticipants,
//   removeParticipants,
//   chooseModerator,
// };

const bcrypt = require('bcrypt');
const { Config, Participants } = require('../../models');

const saltRounds = 10;
global.status = {};


module.exports = function (router) {
  router.get('/init/', async (req, res) => {
    await Config.sync({ force: true });
    await Participants.sync({ force: true });
    return bcrypt.hash('QWERTY', saltRounds, async (err, hash) => {
      await Config.create({
        name: 'AdminPassword',
        value: hash,
        type: 'string',
      });
      console.log(hash);
      return res.send('All set!');
    });
  });

  router.get('*', async (req, res, next) => {
    const passwordHash = req.headers.authorization;
    const config = await Config.findOne({
      where: { name: 'AdminPassword' },
    });

    if (config.value !== passwordHash) {
      return res.status(404).send('Wrong Credentials');
    }
    return next();
  });

  router.get('/config/:name', async (req, res) => {
    console.log(req.params);
    const config = await Config.findAll({
      where: { name: req.params.name },
    });
    res.json(config);
  });

  router.get('/config/', async (req, res) => {
    const config = await Config.findAll({});
    res.json(config);
  });

  // participants

  router.get('/participants/', async (req, res) => {
    const participants = await Participants.findAll();
    res.json({ participants });
  });

  router.post('/participant/', async (req, res) => {
    try {
      const { body } = req;
      if (!body) {
        return res.status(400).send('Bad request');
      }
      const participantId = await Participants.create({
        ...body,
      });
      res.status(201).json({ message: 'Created', participantId });
    } catch (error) {
      return res.status(500).send(error);
    }
  });

  router.delete('/participant/', async (req, res) => {
    res.json({ message: 'MOCK' });
  });
};
