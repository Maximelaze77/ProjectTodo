const {Task} = require("../models")
module.exports = {
    async createTask(req,res){
        try{
            const task = await Task.create(req.body)
            const taskJson = task.toJSON()
            res.status(201).send({
                task: taskJson,
                message: "A task has been created !"
            })
        }catch(err){
            console.log("err : " + err)
            res.status(400).send({
                error: "Request failed"
            })
        }
    },
    findAll(req, res) {
        console.log('a')
        Product.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {  
        res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving products."
        })
        })
    },        
    
}