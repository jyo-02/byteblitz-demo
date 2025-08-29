import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useUserStore from "@/store/useUserStore";
import { logout } from "@/lib/api/auth";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const user = useUserStore((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  /*When you log in and get redirected to another route (/ or /dashboard), the Header component is mounted fresh, but in some setups (like Fast Refresh or persistent layout components), the state may not reset. */

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setShowDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = async () => {
    try {
      await logout();
      useUserStore.getState().clearUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getInitials = (str) => {
    if (!str) return "U";
    const cleaned = str.trim().replace(/\./g, " ").split(" ");
    if (cleaned.length === 1) return cleaned[0].slice(0, 2).toUpperCase();
    return (cleaned[0][0] + cleaned[1][0]).toUpperCase();
  };

  const nameSource = user?.data?.username || user?.data?.email || "User";
  const initials = getInitials(nameSource);
 return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_2px_30px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-7">
          <Link
            to={user ? "/problemset" : "/"}
            className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[.2em] uppercase select-none bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text hover:brightness-125 transition duration-300"
          >
            Byte<span className="dark:text-white text-black">Blitz</span>
          </Link>

          {user && (
            <Link
              to="/playlist"
              className="hidden sm:block text-base font-semibold dark:text-white px-3 py-1 rounded-md hover:bg-white/10 transition border-white/10"
            >
              Playlists
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-4 h-4" />
            ) : (
              <FiMoon className="w-4 h-4" />
            )}
          </button>

          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-200 text-black dark:bg-white/10 dark:text-white hover:bg-zinc-300 dark:hover:bg-white/20 transition"
                aria-haspopup="true"
                aria-expanded={showDropdown}
                aria-label="User menu"
              >
                {initials}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-popover text-popover-foreground shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <div
                    onClick={handleLogout}
                    className="cursor-pointer w-full text-left flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    Log Out
                  </div>
                </div>
              )}
            </div>
          )}

          {!user ? (
            <Link
              to="/login"
              className="gap-2 text-xs text-black dark:text-white text-center rounded-md border p-2 bg-red-700/10 dark:bg-red-100/10 backdrop-blur-sm font-medium transition-all duration-200 hover:bg-red-300/25 hover:border-blue-800 hover:text-red-400 hover:shadow-md hover:shadow-red-300/20 inline-flex items-center justify-center px-4"
            >
              Sign In
            </Link>
          ) : user?.data?.role === "admin" ? (
            <Link
              to="/admin"
              className="gap-2 text-xs text-black dark:text-white text-center rounded-md border p-2 bg-red-700/10 dark:bg-red-100/10 backdrop-blur-sm font-medium transition-all duration-200 hover:bg-red-300/25 hover:border-blue-800 hover:text-red-400 hover:shadow-md hover:shadow-red-300/20 inline-flex items-center justify-center"
            >
              Admin Dashboard
            </Link>
          ) : (
            <Link
              to="/premium"
              className="gap-2 text-xs text-yellow-600 text-center rounded-md border border-yellow-500 p-2 bg-yellow-700/10 dark:bg-yellow-100/10 backdrop-blur-sm font-medium transition-all duration-200 hover:bg-yellow-300/25 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-md hover:shadow-yellow-300/20"
            >
              Premium
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}