"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      entry.belongsTo(models.user), entry.belongsTo(models.image);
    }
  }
  entry.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      imageId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "entry",
    }
  );
  return entry;
};
