const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Article Model
const Article = require("../../models/Article");
// Profile Model
const Profile = require("../../models/Profile");

// Validation
const validateArticleInput = require("../../validation/article");

// @route   GET api/articles
// @desc    Get all articles
// @access  Public
router.get("/articles", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlefound: "No article found" }));
});

// @route   GET api/articles/:id
// @desc    Get article by id
// @access  Public
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err =>
      res.status(404).json({ noarticlefound: "No article found with that ID" })
    );
});

// @route   POST api/articles
// @desc    Create article
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateArticleInput(req.body);

    // Check Validation
    if (!isValid) {
      // if error occurs
      return res.status(400).json(errors);
    }

    const newArticle = new Article({
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar,
      user: req.user.id
    });

    newArticle.save().then(article => res.json(article));
  }
);

// @route   DELETE api/articles/:id
// @desc    Delete article by id
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Article.findById(req.params.id).then(article => {
        // Check for article owner
        console.log(article.user);
        if (article.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "Uservd" });
        }

        // Delete
        article.remove().then(() => res.json({ success: true }));
      });
      // .catch(err => res.status(404).json({ noarticlefound: "Article not found" }));
    });
  }
);

// @route   POST api/articles/like/:id
// @desc    Like article by id
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Article.findById(req.params.id)
        .then(article => {
          if (
            article.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res.status(400).json({
              articlealreadyliked: "Article has already been liked by the user"
            });
          }

          // Add like to the array
          article.likes.unshift({ user: req.user.id });

          article.save().then(article => res.json(article));
        })
        .catch(res.status(404).json({ noarticlefound: "No article found" }));
    });
  }
);

module.exports = router;
