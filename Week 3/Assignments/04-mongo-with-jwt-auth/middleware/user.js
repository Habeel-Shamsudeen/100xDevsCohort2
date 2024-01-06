const {Admin} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../config')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const decoded = jwt.verify(jwtToken,JWT_SECRET);
        if(decoded.username){
            req.username=decoded.username;
            next();
        }else{
            res.json({
                msg:"you are not authenticated"
            })
        }
    }catch(err){
        res.status(404).json({
            msg:"Authentication failure"
        })
    }
}

module.exports = userMiddleware;