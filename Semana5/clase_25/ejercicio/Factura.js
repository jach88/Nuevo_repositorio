class Factura extends Comprobante{
    fact_igv_p = 0;
    fact_igv_t = 0;
    constructor(comp_id, comp_fecha, fact_igv_p){
        //pasemos los campos necesarios de comprobante
        super(comp_id, comp_fecha)
        this.fact_igv_p = fact_igv_p
    }

    recalculo(){
        let total = 0;
        for(let i = 0; i< this.detalles.length; i++){
            //la idea es calcular el subtotal de cada detalle y con c/subtotal añadirlo al total
            let cant = this.detalles[i].det_cant
            let prec = this.detalles[i].det_punit

            total += this.calcularSubtotal(cant, prec)
        }
        //con esto calculo el igv
        this.fact_igv_t = total * this.fact_igv_p / 100
        //aqui fjamos el total del comprobante
        this.comp_total = total
    }
}