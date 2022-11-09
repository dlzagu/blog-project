import Blogs from "../models/blogModel.js";

const blogCtrl = {
  createBlog: async (req, res) => {
    if (!req.user)
      return res.status(400).json({ msg: "Invalid Authentication." });

    try {
      const { title, content, description, thumbnail, category } = req.body;

      const newBlog = new Blogs({
        user: req.user._id,
        title,
        content,
        description,
        thumbnail,
        category,
      });

      await newBlog.save();

      res.json({ newBlog });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default blogCtrl;
