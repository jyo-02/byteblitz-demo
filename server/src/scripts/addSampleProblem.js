import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Problem from "../models/problem.model.js";
import { DB_NAME } from "../constants.js"


const sampleProblem = {
  title: "Two Sum",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  tags: ["array", "hashmap"],
  difficulty: "Easy",
  starterCode: {
    python: "def two_sum(nums, target):\n    pass",
    javascript: "function twoSum(nums, target) {\n  // your code\n}",
  },
  examples: [
    {
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation: "Because nums[0] + nums[1] == 9, return [0, 1].",
    },
  ],
  isPro: false,
  testCases: [
    {
      input: "[2,7,11,15], 9",
      expectedOutput: "[0,1]",
      isHidden: false,
    },
    {
      input: "[3,2,4], 6",
      expectedOutput: "[1,2]",
      isHidden: false,
    },
  ],
};

const connectDB = async () => {
  try {
    

    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);

    await Problem.create(sampleProblem);
    console.log("✅ Sample problem inserted");

    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  } catch (error) {
    console.error("❌ Error adding sample problem:", error.message);
    process.exit(1);
  }
};

connectDB();
