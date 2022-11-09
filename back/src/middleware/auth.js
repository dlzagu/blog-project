import Users from "../models/userModel.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) return res.status(400).json({ msg: "잘못된 인증입니다." });

    const decoded = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`);

    if (!decoded) return res.status(400).json({ msg: "잘못된 인증입니다." });

    const user = await Users.findOne({ _id: decoded.id });

    if (!user)
      return res.status(400).json({ msg: "사용자가 존재하지 않습니다." });

    req.user = user;

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export default auth;
