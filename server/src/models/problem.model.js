import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: false,  
  },
});

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [String],
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
    constraints: {      
      type: String,
      required: false,  
    },
    isPro: {
      type: Boolean,
      default: false,
    },
    starterCode: {
      type: Map,
      of: String, // e.g., { python: "...", javascript: "..." }
      default: {},
    },
    examples: [exampleSchema], // Public examples shown in UI
    testCases: [
      {
        input: String,
        expectedOutput: String,
        isHidden: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Problem", problemSchema);
