"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      image.hasOne(models.entry);
    }
  }
  image.init(
    {
      ImageUrl: { type: DataTypes.STRING, allowNull: false },
    },

    { userId: { type: DataTypes.INTEGER, allowNull: true } },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
