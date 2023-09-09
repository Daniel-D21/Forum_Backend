const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const pool = require("./Server/config/database");
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const userRouter = require("./Server/api/Users/user.router");
const questionRouter = require("./Server/api/Question/question.router");
const answerRouter = require("./Server/api/Answer/answer.router");

app.use("/api/users", userRouter);
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));











