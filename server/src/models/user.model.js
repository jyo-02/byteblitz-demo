import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true, // since we'll be searching users
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "pro", "admin"],
      default: "user",
    },
    solvedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
    usageToday: {
      hintsUsed: { type: Map, of: Number, default: {} },
      solutionsViewed: { type: Number, default: 0 },
      lastReset: { type: Date, default: new Date() },
    },
    refreshToken: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

//middleware to encrypt passwords just before saving
//we use default function as callback instead of arrow func since arrow func does have this keyword
userSchema.pre("save", async function (next) {
  //so that middleware works only if password is modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next(); //middleware sends next() telling async function that its work is over
});

userSchema.methods.isPasswordCorrect = async function (password) {
  //using brcypt to check the password for authenticating
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
