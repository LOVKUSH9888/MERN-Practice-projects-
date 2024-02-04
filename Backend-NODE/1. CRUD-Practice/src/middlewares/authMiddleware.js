const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ error: "Token is Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(token.replace("Bearer ", ""), "secret-key");

    console.log("Decoded Token:", decodedToken);

    req.user = decodedToken;
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;

/* const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ error: "Token is Unauthorized" });
  }

  jwt.verify(token, 'secret-key', (err, decodedToken) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(401).json({ error: " this isUnauthorized" });
    }

    console.log("Decoded Token:", decodedToken);

    req.user = decodedToken;
    next();
  });
};

module.exports = authMiddleware; */
