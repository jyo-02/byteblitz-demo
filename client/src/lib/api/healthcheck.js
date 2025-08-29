import axiosInstance from "../axios";

export const healthCheck = async () => {
  try {
    const res = await axiosInstance.get("/health", {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Health check failed:", error.message);
    return null;
  }
};
