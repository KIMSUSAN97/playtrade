const {
  userRegister,
  userLogin,
  userNicknameUpdate,
  userPasswordUpdate,
  userView,
  userDelete,
} = require("../controllers/userController");
const { encryptPassword } = require("../middlewares/encryptPassword");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("user router");
});
router.get("/search/:userId", userView);
router.post("/register", encryptPassword, userRegister);
router.post("/login", userLogin);
router.put("/update-nickname/:userId", userNicknameUpdate);
router.put("/update-password/:userId", userPasswordUpdate);
router.delete("/delete/:userId", userDelete);

module.exports = router;
