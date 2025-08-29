import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  problems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Playlist", PlaylistSchema);
