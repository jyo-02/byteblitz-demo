import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  fetchPlaylists as getPlaylists,
  createPlaylist,
  deletePlaylist,
  addProblemToPlaylist,
  removeProblemFromPlaylist,
} from "@/lib/api/playlist";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false); // loader state for create button
  const [newTitle, setNewTitle] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [newProblemId, setNewProblemId] = useState("");

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const res = await getPlaylists();
      setPlaylists(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to fetch playlists:", err);
      toast.error("Failed to load playlists");
      setPlaylists([]);
    } finally {
      setLoading(false);
    }
  };

  const createNewPlaylist = async () => {
    if (!newTitle.trim()) return;
    try {
      setCreating(true);
      await createPlaylist(newTitle);
      setNewTitle("");
      await fetchPlaylists();
      toast.success("Playlist created");
    } catch (err) {
      toast.error("Failed to create playlist");
    } finally {
      setCreating(false);
    }
  };

  const deleteExistingPlaylist = async (id) => {
    try {
      await deletePlaylist(id);
      fetchPlaylists();
      toast.success("Playlist deleted");
    } catch {
      toast.error("Failed to delete playlist");
    }
  };

  const addProblem = async (playlistId) => {
    if (!newProblemId.trim()) return;
    try {
      await addProblemToPlaylist(playlistId, newProblemId);
      setNewProblemId("");
      fetchPlaylists();
      toast.success("Problem added");
    } catch {
      toast.error("Failed to add problem");
    }
  };

  const removeProblem = async (playlistId, problemId) => {
    try {
      await removeProblemFromPlaylist(playlistId, problemId);
      fetchPlaylists();
      toast.success("Problem removed");
    } catch {
      toast.error("Failed to remove problem");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
      className="min-h-screen bg-background w-screen flex flex-col items-center justify-start py-12 px-6"
    >
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
          Your Playlists
        </h1>

        {/* New Playlist Creation */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New playlist name"
            className="flex-grow max-w-lg"
            onKeyDown={(e) => {
              if (e.key === "Enter") createNewPlaylist();
            }}
            aria-label="New playlist name"
            disabled={creating}
          />
          <Button
            onClick={createNewPlaylist}
            className="whitespace-nowrap flex items-center justify-center gap-2"
            disabled={!newTitle.trim() || creating}
            aria-busy={creating}
          >
            {creating && <Loader2 className="animate-spin h-5 w-5" />}
            Create Playlist
          </Button>
        </div>

        {/* Playlist List */}
        {loading ? (
          <p className="text-center text-muted-foreground text-lg">
            Loading playlists...
          </p>
        ) : playlists.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg">
            No playlists yet. Create one above!
          </p>
        ) : (
          <div className="space-y-6">
            {playlists.map((playlist) => (
              <motion.div
                key={playlist._id}
                layout
                initial={{ borderRadius: 12 }}
                className="bg-white dark:bg-muted shadow-md rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={(e) => {
                  const tag = e.target.tagName.toLowerCase();
                  if (["button", "input"].includes(tag)) return;
                  setExpandedId((prev) =>
                    prev === playlist._id ? null : playlist._id
                  );
                }}
                aria-expanded={expandedId === playlist._id}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setExpandedId((prev) =>
                      prev === playlist._id ? null : playlist._id
                    );
                  }
                }}
              >
                <div className="flex justify-between items-center px-6 py-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[75%]">
                    {playlist.title}
                  </h2>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteExistingPlaylist(playlist._id);
                    }}
                    aria-label={`Delete playlist ${playlist.title}`}
                  >
                    Delete
                  </Button>
                </div>

                <AnimatePresence initial={false}>
                  {expandedId === playlist._id && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 space-y-5 overflow-hidden"
                    >
                      {/* Add Problem to Playlist */}
                      <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <Input
                          value={newProblemId}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => setNewProblemId(e.target.value)}
                          placeholder="Enter problem ID"
                          className="flex-grow max-w-lg"
                          aria-label={`Add problem to ${playlist.title}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.stopPropagation();
                              addProblem(playlist._id);
                            }
                          }}
                          disabled={loading}
                        />
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            addProblem(playlist._id);
                          }}
                          disabled={!newProblemId.trim()}
                          className="whitespace-nowrap"
                        >
                          Add Problem
                        </Button>
                      </div>

                      {/* Problems List */}
                      {playlist.problems?.length > 0 ? (
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#333334] shadow-inner">
                          {playlist.problems.map((p) => (
                            <li
                              key={p._id}
                              className="flex justify-between items-center p-3"
                            >
                              <span className="text-gray-900 dark:text-gray-100 truncate max-w-[80%]">
                                {p.title}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeProblem(playlist._id, p._id);
                                }}
                                aria-label={`Remove problem ${p.title}`}
                              >
                                Remove
                              </Button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-center text-muted-foreground italic">
                          No problems in this playlist
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
