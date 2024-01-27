const postController = require("../controllers/postController");

const postRouter = require("express").Router();

postRouter.post("/", postController.createPost);
postRouter.get("/buy", postController.getAllBuyPosts);
postRouter.get("/sell", postController.getAllSellPosts);

module.exports = postRouter;
