let listaBebidas = [
    {
      id: 1,
      nombre: "Cerveza normal",
      descripcion: "Cerveza normal Erdinger ",
      precio: 10,
      stock: 9,
      imagen:
        "https://images.unsplash.com/photo-1506916278879-dc0a599e3885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=942&q=80",
    },
    {
      id: 2,
      nombre: "Cerveza light",
      descripcion: "Cerveza normal de botella ",
      precio: 12.0,
      stock: 10,
      imagen:
        "https://images.unsplash.com/photo-1605306792171-9394b91eb0d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1302&q=80",
    },
    {
      id: 3,
      nombre: "Vino Blanco",
      descripcion: "Vino Blanco Tacama",
      precio: 25.0,
      stock: 10,
      imagen:
        "https://images.unsplash.com/photo-1540033307641-353389a68e2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3024&q=80",
    },
    {
      id: 4,
      nombre: "Champagne",
      descripcion: "Marca GhMumm",
      precio: 25.0,
      stock: 10,
      imagen:
        "https://images.unsplash.com/photo-1609433232113-98ab6ff44ab6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
      id: 5,
      nombre: "Vodka",
      descripcion: "Vodka marca Smirnoff Botella 750ml",
      precio: 29.9,
      stock: 10,
      imagen:
        "https://images.unsplash.com/photo-1578129489353-6642705ec0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3169&q=80",
    },
    {
      id: 6,
      nombre: "Bebida Geseosa ",
      descripcion: "Geseosa Marca Coca Cola 3Lts",
      precio: 10.0,
      stock: 15,
      imagen:
        "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3634&q=80",
    },
  ];
  
  let divContenido = document.getElementById("contenido");
  let tbodyCarrito = document.getElementById("tbody-carrito");
  let carrito = [];
  
  let dibujarTarjetas = () => {
    let htmlTarjetas = "";
  
    listaBebidas.forEach((bebida) => {
      htmlTarjetas =
        htmlTarjetas +
        `<div class="tarjeta">
        <div class="imagen">
          <img src="${bebida.imagen}">
        </div>
        <div class="texto">
          <h4>"${bebida.nombre}"</h4>
          <p>"${bebida.descripcion}"</p>
          <div class="precio">
            <span>S/ ${bebida.precio}</span>
            <button class="btn-agregar" data-idbebida="${bebida.id}">
            Agregar
            </button>        
          </div>
        </div>
      </div>`;
    });
  
    divContenido.innerHTML =htmlTarjetas;  
  };
  
  dibujarTarjetas();
  
  /**
   * luego que se crean las tarjetas necesitamos identificar a cada elemento del array y para eso se creon
   * un arreglo de los id de los botones primero como texto y luego como arreglo
   */
  let btnsAgregar = document.getElementsByClassName("btn-agregar");
  
  // aqui lo convertimos a un array
  let arregloBtnsAgregar = Array.from(btnsAgregar);
  
  //aqui recorremos el arreglo
  arregloBtnsAgregar.forEach((boton)=>{
    //para cada boton se le agregará un listener
    boton.addEventListener("click",() =>{
      let idObtenido =+boton.getAttribute("data-idbebida");
      let bebidaObtenida = buscaBebidaPorId(idObtenido);
  
      agregarACarrito(bebidaObtenida);
      //console.log(bebidaObtenida)
  
    })
  });
  
  let buscaBebidaPorId = (id) =>{
    for (let i=0; i<listaBebidas.length; i++){
      if(id === listaBebidas[i].id) {
        return listaBebidas[i];
      }
    }
  };
  
  let agregarACarrito = (bebidaAPedir) =>{
    let indiceBebida = carrito.findIndex((Pedido) =>{
      if(Pedido.bebida.id === bebidaAPedir.id){
        return Pedido;
      }
    });
  
    if (indiceBebida === -1){
      let pedido ={
        bebida: bebidaAPedir,
        cantidad: 1,
      };
      carrito.push(pedido);
    } else {
      carrito[indiceBebida].cantidad++;
    }
    dibujarCarrito();
  };
  
  
  let dibujarCarrito = () =>{
    let htmlCarrito ="";
  
    carrito.forEach((pedido) =>{
      htmlCarrito =
        htmlCarrito +
        `<tr>
          <td>${pedido.bebida.nombre}</td>
          <td>${pedido.cantidad}</td>
          <td>${pedido.bebida.precio}</td>
          <td>${pedido.cantidad * pedido.bebida.precio}</td>
        </tr>`;
    });
    tbodyCarrito.innerHTML = htmlCarrito;
  };
  
  let btnPagar =document.getElementById("btn-pagar");
  
  btnPagar.addEventListener("click",() =>{
    let deseaGuardar = confirm("Desea guardar la boleta");
      if(deseaGuardar === true && carrito.length > 0){
        let carritoString = JSON.stringify(carrito);
        localStorage.setItem("pedidoBebidasGuardado",carritoString);
      }
  })
  
  
  
  