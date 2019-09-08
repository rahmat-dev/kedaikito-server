'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING
  }, {});
  menu.associate = function(models) {
    menu.belongsTo(models.category, {
      as: 'category_id',
      foreignKey: 'id'
    })
  };
  return menu;
};