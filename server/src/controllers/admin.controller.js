import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";



export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password -refreshToken");
  res.status(200).json(users);
});


export const toggleBanUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, "User not found");

  user.isBanned = !user.isBanned;
  await user.save();

  res.status(200).json({
    message: `User has been ${user.isBanned ? "banned" : "unbanned"} successfully.`,
    user,
  });
});


export const updateUserRole = asyncHandler(async (req, res) => {
  const { role } = req.body;
  const allowedRoles = ["user", "admin", "pro"];

  if (!allowedRoles.includes(role)) {
    throw new ApiError(400, "Invalid role");
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  ).select("-password -refreshToken");

  if (!user) throw new ApiError(404, "User not found");

  res.status(200).json({
    message: `User role updated to ${role}`,
    user,
  });
});


import  Submission  from "../models/submission.model.js"; 

export const getTodayUsageStats = asyncHandler(async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const usage = await Submission.aggregate([
    {
      $match: {
        createdAt: { $gte: today }
      }
    },
    {
      $group: {
        _id: "$userId",
        submissionsToday: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $project: {
        _id: 0,
        username: "$user.username",
        email: "$user.email",
        submissionsToday: 1
      }
    }
  ]);

  res.status(200).json(usage);
});
