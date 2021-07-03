let factura1 = new Factura(1, new Date(),18)

console.table(factura1)

//Como sabemos q la factura tiene las propiedades de factura y comprobante tambien tendra un detalle

let detalle_fac1 = new Detalle(1,2, "ram hp",229)
console.log(detalle_fac1)


factura1.agregarDetalle(detalle_fac1)
factura1.recalculo()


console.table(factura1)
Comprobante.mostrarFecha()