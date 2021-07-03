class Comprobante {
    //vamos a predefinir los valores de la clase
    //el cosntructor no siempre tiene que construir todo el objeto
    comp_id = 0;
    comp_fecha = new Date();
    comp_total = 0;
    detalles =[]; //Los items de la compra

    constructor(comp_id, comp_fecha){
        this.comp_id = comp_id;
        this.comp_fecha = comp_fecha;
    }

    //creamos obejetos de tipo detalle y los agregamos aqui,detalle será un arreglo de objDetalle
    agregarDetalle(objDetalle){
        this.detalles.push(objDetalle)
    }
    //necesitamos segun la cantidad y el punit 
    calcularSubtotal(cantidad,p_unit){
        return cantidad * p_unit
    }
    //static hace que no requiera crear un nuevo objeto (no necesita una instancia)
    static mostrarFecha(){
        console.log(new Date())
    }
}