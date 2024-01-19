require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/userRouter");
const app = express();

const { MONGODB_URI } = process.env;
//.env
const IP = "localhost";
const PORT = "4000";

// Mongoose를 이용한 MongoDB 연결
mongoose.Promise = global.Promise;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB 연결이 완료되었습니다.");
  })
  .catch((err) => {
    console.log(`MongoDB 연결간에 오류가 발생했습니다. ${err}`);
  });

app.set("trust proxy", true);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend connection complete");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`서버가 http://${IP}:${PORT} 에서 실행 중입니다.`);
});
