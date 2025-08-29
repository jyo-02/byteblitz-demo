import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://bytecode-api.onrender.com/api" || "http://localhost:8000/api",
  withCredentials: true, 
})


export default axiosInstance
