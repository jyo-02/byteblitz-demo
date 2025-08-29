//import axios from "axios";
import axios from "../axios"

// const API = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/api",
//   withCredentials: true, 
// });

export const register = (data) => axios.post("/users/register", data);
export const login = (data) => axios.post("/users/login", data);
export const logout = () => axios.post("/users/logout");
export const getCurrentUser = () => axios.get("/users/me");
