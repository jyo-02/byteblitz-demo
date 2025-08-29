import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/useUserStore";
import { logout } from "@/lib/api/auth";
import { motion } from "framer-motion";
import { getSolvedProblems } from "@/lib/api/problem";
import { useEffect, useState } from "react";

export default function Profile() {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const [solvedCount, setSolvedCount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSolvedProblems = async () => {
      try {
        const solved = await getSolvedProblems();
        setSolvedCount(solved.length); // assuming it's an array of IDs
      } catch (err) {
        console.error("Failed to fetch solved problems:", err);
        setSolvedCount(0);
      }
    };

    fetchSolvedProblems();
  }, []);

  const getInitials = (str) => {
    if (!str) return "U";
    const cleaned = str.trim().replace(/\./g, " ").split(" ");
    if (cleaned.length === 1) return cleaned[0].slice(0, 2).toUpperCase();
    return (cleaned[0][0] + cleaned[1][0]).toUpperCase();
  };

  const nameSource = user?.data?.username || user?.data?.email || "User";

  const initials = getInitials(nameSource);

  const handleLogout = async () => {
    try {
      await logout();
      clearUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-muted-foreground text-sm">
        Loading user profile...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
    >
      <div className="min-h-screen px-4 py-12 bg-background w-screen flex items-center justify-center">
        <div className="w-full max-w-3xl bg-card shadow-xl rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 border border-border text-foreground mx-auto transition-colors duration-300">

          <div className="flex-shrink-0">
            <div className="h-28 w-28 rounded-full bg-muted flex items-center justify-center text-3xl font-bold shadow-inner ring-2 ring-indigo-500/40 text-foreground">
              {initials}
            </div>
          </div>

          {/* Details */}
<div className="flex-1 space-y-2 text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-2">
              Welcome, {user.data.username}
            </h1>

            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-muted-foreground">Email:</div>
              <div>{user.data.email}</div>

              <div className="text-muted-foreground">Role:</div>
              <div className="capitalize text-indigo-500 dark:text-indigo-400">
                {user.data.role}
              </div>

              <div className="text-muted-foreground">Problems Solved:</div>
              <div>{solvedCount !== null ? solvedCount : "Loading..."}</div>

              <div className="text-muted-foreground">Joined:</div>
              <div>{new Date(user.data.createdAt).toLocaleDateString()}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-destructive text-white hover:bg-destructive/90 text-sm font-medium rounded-md transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
