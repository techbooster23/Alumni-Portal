import jwt from "jsonwebtoken";
   

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    try {
        const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default authMiddleware;
