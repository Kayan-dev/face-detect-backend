const { Router } = require("express");

const router = new Router();

const adminAuth = require("../auth/middleware");

const User = require("../models").user;

router.get("/", async (req, res, next) => {
  console.log("is this happening?");
  try {
    console.log("SAY USER", User);
    const users = await User.findAll({});
    res.json(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

