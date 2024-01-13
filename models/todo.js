const {model, Schema} = require('mongoose')

const todoSchema = new Schema ({
    title: {type: String, required: true },
    description: {type: String, required: true },
    completed: {type: Boolean, default: false },
    created_at: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
}, {
    timestamps: true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo