import mongoose from 'mongoose'
const productsCollection = 'productos'

const productsSchema = new mongoose.Schema({
        title : {type: String, required: true, max: 100},
        price : {type: Number, required: true, min: 1},
        thumbnail : {type: String, required: true, max: 100}
})

export const products = mongoose.model(productsCollection, productsSchema)

