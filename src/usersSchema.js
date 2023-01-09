import mongoose from 'mongoose'
const usersCollection = 'usuarios'

const usersSchema = new mongoose.Schema({
        name : {type: String, required: true, min: 3 , max: 100},
        lastName : {type: Number, required: true, min: 3, max: 100},
        age : {type: Number, required: true, min: 1, max: 140}
})

export const users = mongoose.model(usersCollection, usersSchema)

