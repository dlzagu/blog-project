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
  getHomeBlogs: async (req, res) => {
    try {
      const blogs = await Blogs.aggregate([
        // User
        {
          $lookup: {
            from: "users",
            let: { user_id: "$user" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
              { $project: { password: 0 } },
            ],
            as: "user",
          },
        },
        // array -> object
        { $unwind: "$user" },
        // Category
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        // array -> object
        { $unwind: "$category" },
        // Sorting
        { $sort: { createdAt: -1 } },
        // Group by category
        {
          $group: {
            _id: "$category._id",
            name: { $first: "$category.name" },
            blogs: { $push: "$$ROOT" },
            count: { $sum: 1 },
          },
        },
        // Pagination for blogs
        {
          $project: {
            blogs: {
              $slice: ["$blogs", 0, 4],
            },
            count: 1,
            name: 1,
          },
        },
      ]);

      res.json(blogs);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default blogCtrl;
