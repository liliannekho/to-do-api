const {model, Schema} = require('mongoose')

const todoSchema = new Schema ({
    title: {String, required},
    description: {String, required: true},
    completed: {Boolean, default: false},
    created_at: {Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
}, {
    timestamps: true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo