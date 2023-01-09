import config from "../config.js";
import admin from "firebase-admin"

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async listar(id) {
    const querySnapShot = await this.coleccion.get(`${id}`)
        
    }

    async listarAll() {
        try {
            const querySnapShot = await this.coleccion.get()
            let documents = await querySnapShot.docs
            const res = documents.map((doc) => ({
                id: doc.id,
                nombre: doc.data().nombre,
                price: doc.data().price,
                thumbnail: doc.data().thumbnail
            }))
        } catch (error) {
            console.error(error)
        }
    }

    async guardar(nuevoElem) {
    let id = 1;
    let doc = this.coleccion.doc(`${id}`)  
    await doc.create({nuevoElem})
    }

    async actualizar(id, nuevoElem) {
    const doc = this.coleccion.doc(`${id}`)
    const actualizar = doc.update({nuevoElem})
    console.log(actualizar)
    }

    async borrar(id) {
        const doc = this.colleccion.doc(`${id}`)
        let item = await doc.delete()
        console.log(`Item con id: ${id} borrado`)
    }

    async borrarAll() {
    const doc = this.colleccion.doc()
    const deleted = await doc.delete()
    console.log("Productos borrados")
    }
}

async function handleFirebaseProds(){
    const container = new ContenedorFirebase('productos')
    const save = await container.guardar({nombre: 'Carlos', edad: 25})
    console.log(save)
}

handleFirebaseProds()

export default handleFirebaseProds