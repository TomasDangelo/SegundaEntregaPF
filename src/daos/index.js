let productosDao
let carritosDao

switch ('mongodb') {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')

        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break
    case 'firebase':

        break
    case 'mongodb':

        break
    default:

        break
}

export { productosDao, carritosDao }