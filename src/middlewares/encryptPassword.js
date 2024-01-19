const bcrypt = require("bcrypt");

const encryptPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    req.body.password = encryptedPassword;
    next();
  } catch (err) {
    res.status(500).json("비밀번호 암호화 실패!");
  }
};

module.exports = { encryptPassword };
