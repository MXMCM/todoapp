'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tod.init({
    description: DataTypes.STRING
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tod',
    timestamps: false,
    tableName: 'todo'
  });
  return Tod;
};