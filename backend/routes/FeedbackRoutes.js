const express = require("express");
const router = express.Router();
const {
  getFeedback,
  postFeedback,
  updateFeedback,
} = require("../controllers/feedbackController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getFeedback).post(protect, postFeedback);
router.route("/:id").put(protect, updateFeedback);
// router.put("/:email", updateFeedback);

module.exports = router;
