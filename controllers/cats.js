const express = require("express");
const router = express.Router();
const Cats = require("../models/cats.js");

//seed route for CatFruits
// router.get(`/seed`, (req, res) => {
//   Cats.create({
//     name: `Fuzzy Lumpkinz`,
//     image: `https://thumbs.gfycat.com/ConsiderateAlarmingErmine-size_restricted.gif`,
//     message: `We just wanted to say THANK YOU, fwom the bottom our fuzzy fwuity wittle hearts 💚.`,
//   });
// });

//post route fur cats
router.post("/", (req, res) => {
  Cats.create(req.body, (err, createdCat) => {
    res.json(createdCat);
  });
});

//delete cat route
router.delete("/:id", (req, res) => {
  Cats.findByIdAndRemove(req.params.id, (err, deletedCat) => {
    res.json(deletedCat);
  });
});

//update cat route
router.put("/:id", (req, res) => {
  Cats.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCat) => {
      res.json(updatedCat);
    }
  );
});

router.get("/", (req, res) => {
  Cats.find({}, (err, foundCats) => {
    res.json(foundCats);
  });
});

module.exports = router;
