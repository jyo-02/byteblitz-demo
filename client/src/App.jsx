import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Problems from "./pages/Problems";
import ProblemDetail from "./pages/ProblemDetail";
import Profile from "./pages/Profile";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminDashboard";
import PlaylistsPage from "./pages/Playlist";
import GuestRoute from "@/components/ui/GuestRoute";
import Premium from "./pages/Premium";
import AboutMe from "./pages/Aboutme";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes (no auth protection but still use layout) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutMe />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
               <GuestRoute>
              <Login />
            </GuestRoute>
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <GuestRoute>
              <Register />
            </GuestRoute>
            </MainLayout>
          }
        />
        <Route
          path="/premium"
          element={
            <MainLayout>
              <Premium />
            </MainLayout>
          }
        />

        {/* Private routes - protected with auth */}
        <Route
          path="/problemset"
          element={
            <MainLayout protect>
              <Problems />
            </MainLayout>
          }
        />
        <Route
          path="/problems/:id"
          element={
            <MainLayout protect>
              <ProblemDetail />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <MainLayout protect>
              <AdminPage />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout protect>
              <Profile />
            </MainLayout>
          }
        />
        <Route
          path="/playlist"
          element={
            <MainLayout protect>
              <PlaylistsPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
