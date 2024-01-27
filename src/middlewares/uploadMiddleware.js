const path = require("path");
const uuid4 = require("uuid4");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    filename(req, file, done) {
      const randomID = uuid4();
      const ext = path.extname(file.originalname);
      const filename = randomID + ext;
      done(null, filename);
    },
    destination(req, file, done) {
      done(null, "uploads/");
    },
  }),
});

const uploadMiddleware = upload.single("thumbnail");

module.exports = uploadMiddleware;
