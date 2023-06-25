const express = require("express");
const feedbackRouter = require("./routes/FeedbackRoutes");
const userRouter = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./db/conn");

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/api/feedback", feedbackRouter);
app.use("/api/users", userRouter);
app.listen(port, () => console.log(`server started on port ${port}`));
