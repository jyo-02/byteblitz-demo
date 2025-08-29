import mongoose from "mongoose";
const codeDraftSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: "Problem", required: true },
    language: { type: String, required: true }, 
    code: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

codeDraftSchema.index({ userId: 1, problemId: 1, language: 1 }, {unique: true});

export default mongoose.model("CodeDraft", codeDraftSchema);

