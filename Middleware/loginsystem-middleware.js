import jwt from "jsonwebtoken";
export const Middleware = async (req, res, next) => {
    req.headers.authorization && req.headers.authorization.startsWith("Bearer");
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(403).json({ message: "Token is required" });
    }
    await jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
        if (err) {
            return res.status(403).json("You are not Authorized")
        }
        req.user = user;
        next();
    })
}
export const roleBasemiddleware = (...allroles)=>{
    return(async (req,res,next)=>{
try{
if(!allroles.includes(req.user.role)){
    return res.status(403).json({message:"You are not authorized"})
}
next();
}
catch(error){
res.status(500).json(error.message)
}
    })
}