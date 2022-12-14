import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateActiveToken,
  generateRefreshToken,
} from "../config/generateToken.js";
import sendMail from "../config/sendMail.js";
import { validateEmail } from "../middleware/valid.js";

const CLIENT_URL = `${process.env.BASE_URL}`;

const authCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "이미 가입된 이메일입니다." });

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = { name, email, password: passwordHash };

      const active_token = generateActiveToken({ newUser });

      const url = `${CLIENT_URL}/active/${active_token}`;

      if (validateEmail(email)) {
        sendMail(email, url, "Verify your email address");
        return res.json({ msg: "Success! Please check your email." });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  active: async (req, res) => {
    try {
      const { active_token } = req.body;
      console.log(req.body);
      const decoded = jwt.verify(
        active_token,
        `${process.env.ACTIVE_TOKEN_SECRET}`
      );

      const { newUser } = decoded;
      console.log(newUser);

      if (!newUser) return res.status(400).json({ msg: "잘못된 인증입니다." });

      const user = await Users.findOne({ email: newUser.email });

      if (user) return res.status(400).json({ msg: "Account already exists." });

      const new_user = new Users(newUser);

      await new_user.save();

      res.json({ msg: "Account has been activated!" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });

      if (!user)
        return res.status(400).json({ msg: "This account does not exits." });

      // if user exists
      loginUser(user, password, res);
    } catch (error) {
      console.log(error);
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshToken", { path: `/api/refresh_token` });

      return res.json({ msg: "Logged out!" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  refreshToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshToken;
      console.log("rf_token", rf_token);
      // if refresh token is not present then prompt user to login
      if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

      /* 
      if refresh token is  present then verify refresh token,
      if its correct then login and send access token in res
      */

      const decoded = jwt.verify(
        rf_token,
        `${process.env.REFRESH_TOKEN_SECRET}`
      );

      if (!decoded.id)
        return res.status(400).json({ msg: "Please login now!" });

      const user = await Users.findById(decoded.id).select("-password");

      if (!user)
        return res.status(400).json({ msg: "This account does not exist." });

      const access_token = generateAccessToken({ id: user._id });

      res.json({ msg: "Login Success!", access_token, user });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

const loginUser = async (user, password, res) => {
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." });

  const access_token = generateAccessToken({ id: user._id });
  const refresh_token = generateRefreshToken({ id: user._id });
  console.log("refresh", refresh_token);

  res.cookie("refreshToken", refresh_token, {
    httpOnly: true,
    path: `/api/refresh_token`,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
  });

  res.json({
    msg: "Login Success!",
    access_token,
    user: { ...user._doc, password: "" },
  });
};
export default authCtrl;
