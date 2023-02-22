'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    instructor: DataTypes.STRING,
    topics: DataTypes.STRING,
    modality: DataTypes.STRING,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};