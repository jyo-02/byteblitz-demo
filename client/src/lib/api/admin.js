import axios from "../axios";


// ✅ GET all users
export const fetchAllUsers = async () => {
    return await axios.get("/users");
  };
  
  // ✅ PATCH ban/unban a user
  export const toggleUserBan = async (userId) => {
    return await axios.patch(`/users/${userId}/ban`);
  };
  
  // ✅ PATCH change role of a user
  export const changeUserRole = async (userId, newRole) => {
    return await axios.patch(`/users/${userId}/role`, { role: newRole });
  };
  
  // ✅ GET today's usage
  export const getTodayUsage = async () => {
    return await axios.get("/users/usage/today");
  };
  