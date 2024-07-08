const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (token) {
      next(); // In a real application, verify the token here
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  
  module.exports = authMiddleware;
  