import axios from "../axios"; // this should point to your axios instance

// ✅ Get all playlists for the logged-in user
export const fetchPlaylists = async () => {
  return await axios.get("/playlists");
};

// ✅ Create a new playlist
export const createPlaylist = async (title) => {
  return await axios.post("/playlists", { title });
};

// ✅ Delete a playlist by ID
export const deletePlaylist = async (playlistId) => {
  return await axios.delete(`/playlists/${playlistId}`);
};

// ✅ Add a problem to a playlist
export const addProblemToPlaylist = async (playlistId, problemId) => {
  return await axios.patch(`/playlists/${playlistId}/`, {
    problemIds: [problemId],
  });
};

// ✅ Remove a problem from a playlist
export const removeProblemFromPlaylist = async (playlistId, problemId) => {
  return await axios.patch(`/playlists/${playlistId}/remove`, {
    problemId,
  });
};
