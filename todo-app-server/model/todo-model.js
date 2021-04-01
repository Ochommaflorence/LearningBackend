const monogoose = require('mongoose')
const Schema = monogoose.Schema

const Todo = new Schema(
    {
        todo: {type: String, required: true},
    },
    { timestamps: true},
)
module.exports= monogoose.model('todos', Todo) 