const express = require("express")
const userRoutes = require("./routes/userRoutes")
const todoRoutes = require("./routes/todoRoutes")
const auth = require("./middleware/auth")

const PORT = 4000

const app = express()
app.use(express.json())

app.get("/", (_, res) => {
    res.send("Hi")
})

app.use("/users", userRoutes)
app.use("/todos", todoRoutes)

app.get("/hidden", auth, (_, res) => {
    return res.send("congratulations!!! You have found the hidden item")
})

app.listen(PORT, () => {
    console.log("server is listening on port:", PORT)
})