
const {
  Model,
} = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //  jugadores (nombre, apellido, pod)

  Participant.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pod: DataTypes.ENUM('rivendalle', 'podhound', '404'),
    job: DataTypes.ENUM('forntend', 'backend', 'ba', 'qa'),
  }, {
    sequelize,
    modelName: 'Participants',
    hooks: {
      beforeValidate: (config) => {
        // eslint-disable-next-line no-param-reassign
        config.id = uuid.v4();
        return config;
      },
    },
    indexes: [
      {
        unique: true,
        fields: ['name', 'lastname'],
      },
    ],
  });
  return Participant;
};
