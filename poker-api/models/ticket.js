
const {
  Model,
} = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
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

  Ticket.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    number: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING,
    labels: DataTypes.JSON,
    moderator: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Game',
    hooks: {
      beforeValidate: (config) => {
        // eslint-disable-next-line no-param-reassign
        config.id = uuid.v4();
        return config;
      },
    },
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['name', 'lastname'],
    //   },
    // ],
  });
  return Ticket;
};
