const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authorization = (req, res, next) => {
  try {
    // Extract authorization from the header
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "unauthorized no token provided" });
    }

    // Verify token with secret key
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    // Attach user ID to request object for use in subsequent middleware/routes
    req.userId = decodedToken.id;

    // Token is valid, continue to next middleware/route
    next();
  } catch (error) {
    console.log("JWT Error:", error.message);
    return res.status(401).json({ message: "unauthorized - token invalid" });
  }
};

module.exports = Authorization;
