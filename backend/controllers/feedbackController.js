const Feedback = require("../models/feedbackModel");
const User = require("../models/userModel");
const getFeedback = async (req, res) => {
  const feedback = await Feedback.find({ user: req.user.id });

  res.status(200).json(feedback);
};
const postFeedback = async (req, res) => {
  if (!req.body.feedback) {
    res.status(400);
    throw new Error("please add a feedback");
  }
  const feedback = await Feedback.create({
    feedback: req.body.feedback,
    user: req.user.id,
  });
  res.status(200).json(feedback);
};

const updateFeedback = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    res.status(400);
    throw new Error("No feedback submitted");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (feedback.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedFeedback = await Feedback.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedFeedback);
};

module.exports = {
  getFeedback,
  postFeedback,
  updateFeedback,
};
