import * as model from '../productsSchema.js' 
import * as usersModel from '../usersSchema.js'  /*El esquema para usuarios está creado pero por ahora
no lo utilizamos */ 

class ContenedorMongoDb {

    constructor() {
    }

    async listar(id) {
        try {
           const encontrar =  await model.products.find({_id:  id})
           console.log(encontrar)
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async listarAll() {
         try {
           const listar =  await model.products.find({})
           console.log(listar)
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async guardar(nuevoElem) {
        try {
            const captarProd = new model.products(nuevoElem)
            const guardar =  await captarProd.save()
            console.log(guardar)
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async actualizar(title, price, thumbnail, name) {
         try {
           const actualizar = await model.products.updateOne({title: title}, {$set: {
           name:name, price: price, thumbnail: thumbnail
           }})
           console.log(actualizar)
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async borrar(id) {
         try {
            const deleteOne = await model.products.deleteOne({_id:id})
            console.log(deleteOne)
        } catch (error) {
            if (error) throw new Error(error)
        }
    }

    async borrarAll() {
         try {
          const deleteAll = await model.products.deleteMany({})
          console.log("Borrado con éxito")
        } catch (error) {
            if (error) throw new Error(error)
        }
    }
}

export default ContenedorMongoDb