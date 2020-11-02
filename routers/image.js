const { Router } = require("express");

const router = new Router();

const Image = require("../models").image;
// const User = require("../models").user;

router.post("/", async (req, res, next) => {
  try {
    const { image } = req.body;
    console.log("IMAGE Post?", image);
    const newImage = await Image.create({
      ImageUrl: image,
    });
    res.send(newImage);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    console.log("IMAGE GET?", Image);
    const images = await Image.findAll({
      // include: { model: User, attributes: ["name"] },
    });

    res.json(images);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
