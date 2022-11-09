import Users from "../models/userModel.js";
import bcrypt from "bcrypt";

const userCtrl = {
  updateUser: async (req, res) => {
    if (!req.user)
      return res.status(400).json({ msg: "Invalid Authentication." });

    try {
      const { avatar, name } = req.body;

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        {
          avatar,
          name,
        }
      );

      res.json({ msg: "Update Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  resetPassword: async (req, res) => {
    if (!req.user) return res.status(400).json({ msg: "잘못된 인증입니다." });

    if (req.user.type !== "register")
      return res.status(400).json({
        msg: `User created with quick login with ${req.user.type} can't use this function.`,
      });

    try {
      const { password } = req.body;

      const passwordHash = await bcrypt.hash(password, 12);

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        {
          password: passwordHash,
        }
      );

      res.json({ msg: "Reset Password Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default userCtrl;
