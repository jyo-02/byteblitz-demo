import { ApiError } from "../utils/ApiError.js";

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!allowedRoles.includes(userRole)) {
      throw new ApiError(403, "You are not authorized to access this route");
    }

    next();
  };
};
