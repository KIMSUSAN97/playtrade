const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const userView = async (req, res) => {
  try {
    const user = await User.findByUserId(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "존재하지 않는 유저입니다." });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const userRegister = async (req, res) => {
  try {
    // MongoDB에서 동일한 email을 가진 유저 검색
    const userfind = await User.findOne({ email: req.body.email });
    // 유저가 있을시(true) 실패에러(400)을 발생시켜 message에 존재하는 유저임을 알림
    if (userfind)
      return res.status(400).json({ message: "이미 존재하는 유저입니다." });
    // 위에 유저가 있는 경우에서 return이 되지않았을 경우, 즉 중복유저가 없을 경우 비밀번호를 암호화하고, 다시 부여
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = encryptedPassword;
    // 유저를 생성하고 생성한 유저값을 response변수에 담기
    const response = await User.create(req.body);
    // 성공 status(200)과 함께 response에 담겨있는 유저정보를 반환해준다.
    res.status(200).json(response);
  } catch (err) {
    // 위에서 발생한 에러 외에 에러가 발생시 internal error(500) 반환
    return res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // user > 이메일이 같은 유저의 정보
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "존재하지 않는 유저입니다." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const userNicknameUpdate = async (req, res) => {
  const userId = req.params.userId;

  const user = await User.findByUserId(userId);
  if (!user) {
    return res.status(404).json({ error: "존재하지 않는 유저입니다." });
  }
  user.nickname = req.body.nickname;
  //   user > 수정된 정보를 가지고 있다.
  try {
    const dbRes = await User.updateUserByUserId(userId, user);
    return res.status(200).json(dbRes);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const userPasswordUpdate = async (req, res) => {
  const { prevPassword, newPassword } = req.body;
  const userId = req.params.userId;

  const user = await User.findByUserId(userId);
  const isMatch = await bcrypt.compare(prevPassword, user.password); // true, false

  if (isMatch) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    try {
      const dbRes = await User.updateUserByUserId(userId, user);
      return res.status(200).json(dbRes);
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
};

const userDelete = async (req, res) => {
  const userId = req.params.userId;
  const password = req.body.password;
  const user = await User.findByUserId(userId);
  if (!user) {
    return res.status(404).json({ error: "존재하지 않는 유저입니다." });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    try {
      const dbRes = await User.deleteUserByUserId(userId);
      return res.status(200).json(dbRes);
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  return res.status(401).json({ error: "비밀번호가 일치하지 않습니다." });
};

module.exports = {
  userView,
  userRegister,
  userLogin,
  userNicknameUpdate,
  userPasswordUpdate,
  userDelete,
};
