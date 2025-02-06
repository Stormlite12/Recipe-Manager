import jwt from 'jsonwebtoken';

export const verifyAccessToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log("Received Access Token:", token);  // Log the token for debugging

    if (!token) {
      return res.status(401).json({ error: 'No access token, please log in.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Access Token:", decoded);  // Log decoded token for debugging
      req.userId = decoded.userId;
      next();
    } catch (error) {
      console.error("Access Token verification failed:", error);  // Log any error that occurred during token verification
      return res.status(401).json({ error: 'Invalid access token, please log in again.' });
    }
};

export const verifyRefreshToken = (req, res, next) => {
    const token = req.cookies.refreshToken;
    console.log("Received Refresh Token:", token);  // Log the token for debugging

    if (!token) {
      return res.status(401).json({ error: 'No refresh token, please log in.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        console.log("Decoded Refresh Token:", decoded);  // Log decoded token for debugging
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Refresh Token verification failed:", error);  // Log any error during refresh token verification
        return res.status(401).json({ error: 'Invalid refresh token, please log in again.' });
    }
};
