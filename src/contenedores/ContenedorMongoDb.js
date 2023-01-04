import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            await this.colleccion.find({id:id})
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async listarAll() {
         try {
            await this.colleccion.find({})
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async guardar(nuevoElem) {
        try {
            await this.colleccion.insertOne({nuevoElem})
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async actualizar(nuevoElem, cfg) {
         try {
            await this.colleccion.findOneAndUpdate({name: nuevoElem}, {$set: {cfg}})
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async borrar(id) {
         try {
            await this.colleccion.findOneAndDelete({id:id})
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async borrarAll() {
         try {
            await this.colleccion.remove({})
        } catch (error) {
            if (error) throw new Error(error)
        }
    }
}

export default ContenedorMongoDb