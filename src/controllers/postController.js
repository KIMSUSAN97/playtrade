const Post = require("../models/PostModel");

const postController = {
  createPost: async (req, res) => {
    console.log(req.body);
    // console.log(req.file);
    try {
      const post = new Post({
        type: req.body.type,
        title: req.body.title,
        description: req.body.description,
        thumbnail: `${req.file.destination}${req.file.filename}`,
        author: req.body.author,
        price: req.body.price,
      });
      await post.save();
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllBuyPosts: async (req, res) => {
    try {
      const posts = await Post.find({ type: "buy" });
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllSellPosts: async (req, res) => {
    try {
      const posts = await Post.find({ type: "sell" }).select(
        "thumbnail author price title description createdAt"
      );
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = postController;
