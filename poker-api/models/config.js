
const {
  Model,
} = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Config.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    type: DataTypes.ENUM('string', 'number', 'boolean'),
  }, {
    sequelize,
    modelName: 'Config',
    hooks: {
      beforeValidate: (config) => {
        // eslint-disable-next-line no-param-reassign
        config.id = uuid.v4();
        return config;
      },
    },
  });
  return Config;
};
