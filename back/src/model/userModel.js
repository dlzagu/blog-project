import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [15, "Your name is up to 15 chars long."],
  },
  account: {
    type: String,
    required: [true, "Please add your email or phone"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add your password"],
    trim: true,
  },
  role: {
    type: String,
    default: "user", // admin
  },
  type: {
    type: String,
    default: "normal", // fast
  },
  avatar: {
    type: String,
    default:
      "https://images.unictool.com/unictoolen/profile/image/jacob_bennett.png",
  },
});

export default mongoose.model("User", userSchema);
