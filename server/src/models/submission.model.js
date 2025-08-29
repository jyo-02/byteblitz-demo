import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: ["python", "java", "javascript", "cpp"],
    },
    code: {
      type: String,
      required: true,
    },
    result: {
      type: String, // "Passed", "Failed", "Runtime Error", etc.
      required: true,
    },
    passedTestCases: {
      type: Number,
      default: 0,
    },
    totalTestCases: {
      type: Number,
      default: 0,
    },
    output: {
      type: String,
    },
    timeComplexity: {
      type: String,
    },
    spaceComplexity: {
      type: String,
    },
    explanation: {
      type: String,
    },
    isProFeatureUsed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Submission", submissionSchema);
