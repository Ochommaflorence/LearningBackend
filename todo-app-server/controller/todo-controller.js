const Todo = require('../model/todo-model')

const createItem = (req,res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'you must provide an item',
        })
    }

    const todo = new Todo(body)

    if(!todo){
        return res.status(400).json({ success: false, error:err})
    }

    todo.save().then(() => {
        return res.status(200).json({
            success: true,
            id: todo. _id,
            message: 'todo item created',
        });
    })
    .catch(error => {
        res.status(400).json({error, message:'Todo item not created'})
    });
};

const getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {
        if(err) {
            return res.status(400).json({ success: false, error: err})
        }
        if(!todos.length) {
            return res.status(404).json({ success: false, error: `item not found` })
        }
        return res.status(200).json({ success: true, data: todos })
    }).catch(err => console.log(err))
}

module.exports = {createItem, getTodos}