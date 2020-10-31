const { Router } = require("express");

const router = new Router();

const Image = require("../models").image;

router.post("/", async (req, res, next) => {
  try {
    const { image } = req.body;
    console.log("IMAGE:", image);
    const newImage = await Image.create({
      ImageUrl: image,
    });
    res.send(newImage);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
