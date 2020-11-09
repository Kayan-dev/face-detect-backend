"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          ImageUrl:
            "https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ImageUrl:
            "https://www.flexdog.nl/WebRoot/StoreLNL/Shops/64641096/59EB/3C90/6D5A/4AAA/5A37/0A0C/6D05/3BED/003e254b_3.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
