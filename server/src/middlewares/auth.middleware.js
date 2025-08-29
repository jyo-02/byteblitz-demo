import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        console.log("Cookies token:", req.cookies?.accessToken);
        console.log("Authorization header:", req.header("Authorization"));

        const authHeader = req.header("Authorization");
        const tokenFromHeader = authHeader && authHeader.startsWith("Bearer ") ? authHeader.replace("Bearer ", "") : null;
        const token = req.cookies?.accessToken || tokenFromHeader;

        console.log("Token received:", token);

        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("Decoded Token:", decodedToken);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        if (user.isBanned) {
            throw new ApiError(403, "Your account has been banned. Contact support.");
        }


        req.user = user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        if (error.name === 'TokenExpiredError') {
            throw new ApiError(400, "Access token has expired");
        }
        if (error.name === 'JsonWebTokenError') {
            throw new ApiError(401, "Invalid access token");
        }
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});