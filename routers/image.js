const { Router } = require("express");

const router = new Router();

const Image = require("../models").image;
const User = require("../models").user;

router.post("/:id", async (req, res, next) => {
  try {
    const { image, id } = req.body;
    console.log("IMAGE Post?", image);
    console.log("WHICH ID?:", id);
    const user = await User.findByPk(req.params.id);
    const newImage = await Image.create({
      ImageUrl: image,
      userId: user.id,
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
