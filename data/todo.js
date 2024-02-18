/*
{
    id: int,
    userID: int
    task: string,
    completed: boolean,
}
*/

todos = [
    {
        id: 1,
        userID: 1,
        task: "work on our project",
        completed: false
    },
    {
        id: 2,
        userID: 1,
        task: "install express",
        completed: true
    },
    {
        id: 3,
        userID: 2,
        task: "deploy the project",
        completed: false
    },
]

module.exports = {
    todos
}