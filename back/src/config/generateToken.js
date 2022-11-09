import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateActiveToken = (payload) => {
  return jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "5m",
  });
};

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "30d",
  });
};
