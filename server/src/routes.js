const TaskController = require("./controllers/TaskController")
module.exports = (app) => {
    app.post("/task",TaskController.createTask)
    
}