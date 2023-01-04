class CRUD {
    constructor(db, collection){
    this.db = db,
    this.collection = collection
    }

    async create(...args){
    return (await this.db.this.collection.insertMany(...args)) //Debería recibir varios objetos
    }
    async createOne(prod){
    return (await this.db.this.collection.insertOne({prod}))
    }

    async readAll(){
    return (await this.db.this.collection.find({}))
    }
    async readOne(id){
    return(await this.db.this.collection.find({id:id}))
    }

    async update(prod, cfg){
    return (await this.db.this.collection.updateMany({name:prod}, {$set: {cfg}}))
    }
    async updateOne(prod, cfg){
    return (await this.db.this.collection.findOneAndUpdate({name: prod}, {$set: {cfg}}))
    }

    async deleteAll(){
        return (await this.db.this.collection.remove({}))
    }

    async deleteMany(prod){
        return (await this.db.this.collection.findOneAndDelete({name:prod}))
    }

}