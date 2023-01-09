import express from 'express'
const { Router } = express
import config from './config.js' 
import mongoose from "mongoose"
import ContenedorMongoDb from './contenedores/ContenedorMongoDb.js'

const app = express()

                                        //--------Configs generales 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

                            //--------Función para probar los métodos de Mongo
async function handleMongoProds() { 
    const connection = await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)
    const crear = new ContenedorMongoDb()
    const nuevoProducto = {title: 'Puerta' , price: 1250, thumbnail: 'http://puerta.com'}
    let rta = crear.guardar(nuevoProducto)
    console.log(rta)
}
handleMongoProds() 

                        //--------Endpoints raiz (por ahora comentados y sin funcionamiento)

// app.use('/api/productos', productosRouter)
// app.use('/api/carritos', carritosRouter)

                                        //--------Configuración del server
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))