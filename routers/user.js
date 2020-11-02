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

// router.get("/rank", async (req, res, next) => {
//   console.log("RANKKKKK?");
//   try {
//     const user = await Table.findAll({
//       include: { model: Reservation, attributes: ["date"] },
//     });
//     res.json(tables);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
