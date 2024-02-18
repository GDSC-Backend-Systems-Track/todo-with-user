const todoData = require("../data/todo")
const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    res.status(200).json({ todos: todoData.todos })
})

router.post("/", (req, res) => {
    todo = req.body
    console.log(todo)

    todoData.todos.push(todo)

    res.status(201).json({ todo })
})

router.get("/:id", (req, res) => {
    id = req.params.id

    todo = todoData.todos.filter(todo => todo.id == id)

    res.status(200).json({ todo })
})

router.delete("/:id", (req, res) => {
    id = req.params.id
    todoData.todos = todoData.todos.filter(todo => todo.id != id)

    res.status(200).send("")
})

router.patch("/:id", (req, res) => {
    id = req.params.id

    todo = todoData.todos.filter(todo => todo.id == id)
    todo.completed = !todo.completed
    
    res.status(200).json({ todo })  
})

module.exports = router