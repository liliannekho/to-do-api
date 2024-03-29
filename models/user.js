require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const todo = require('./todo')

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo'}]
}, {
    timestamps: true
})

UserSchema.pre('save', async function(next){
    this.isModified('password')?
    this.password = await bcrypt.hash(this.password, 8):
    null;
    next()
})

UserSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({ _id: this._id}, process.env.SECRET)
    return token
}

const User = mongoose.model('User', UserSchema)

module.exports = User