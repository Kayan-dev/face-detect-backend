const { Router } = require("express");
const auth = require("../auth/middleware");

const router = new Router();

const Image = require("../models").image;
//const User = require("../models").user;

router.post("/", async (req, res, next) => {
  try {
    const { image, id } = req.body;
    const newImage = await Image.create({
      ImageUrl: image,
      userId: id,
    });
    res.send(newImage);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const imageId = req.params.id;
    const deleteStory = await Image.findByPk(imageId);
    await deleteStory.destroy();
    res.json(deleteStory);
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
