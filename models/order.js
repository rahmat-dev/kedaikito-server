'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    order.hasMany(models.menu, {
      as: 'menu_id',
      foreignKey: 'id'
    }),
    order.hasOne(models.transaction, {
      as: 'transaction_id',
      foreignKey: 'id'
    })
  };
  return order;
};