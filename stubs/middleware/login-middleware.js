const loginMiddleware = (req, res, next) => {
    const email = (req.headers.authorization || "").replace("Bearer ", "");
  
    if (email) {
        req.userEmail = email;
        next();
    } else {
      return res.status(403).json({
        message: "Access Denied",
      });
    }
  };
  
  module.exports = loginMiddleware
  