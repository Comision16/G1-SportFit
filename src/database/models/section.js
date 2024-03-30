'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product,{as:"products",foreignKey:"Section_id"})
    }
  }
  Section.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Section',
    timestamps : false
  });
  return Section;
};