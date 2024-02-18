const { Router } = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userData = require("../data/user")

const router = Router()

router.get("/", (_, res) => {
    res.status(200).json({ users: userData.users })
})

router.post("/", (req, res) => {
    userSize = userData.users.length

    user = {
        username: req.body.username,
        id: userSize + 1,
        passwordHash: hashPassword(req.body.password)
    }

    userData.users.push(user)

    res.status(200).json({ user })
})

router.post("/login", (req, res) => {
    user = userData.users.filter(user => user.username === req.body.username)[0]
    
    if(!comparePassword(req.body.password, user.passwordHash)) {
        return req.status(400).send("incorrect password")
    }

    token = jwt.sign(user.id, "secret")

    res.status(200).json({ token })
})

module.exports = router

function hashPassword(password) {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)

    return hash
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}