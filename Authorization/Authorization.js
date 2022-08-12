const jwt = require("jsonwebtoken");
const key = 'this is my secret for jwt'
function Authorization(req, res, next) {
    try {
        let requesttoken = req.headers['authorization'];
        const token = requesttoken.replace('Bearer ', '');
        req.token = jwt.verify(token, key);
        next();
    }
    catch (err) {
        res.send("Error occurred in Authorization");
    }
}

module.exports = { Authorization }