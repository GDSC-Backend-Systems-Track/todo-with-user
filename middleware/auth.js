 const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    token = req.headers['authorization']

    id = jwt.verify(token, "secret")

    if(id != undefined)  {
        return next()
    }

    return res.status(403).send("you are unauthorized!!")
}