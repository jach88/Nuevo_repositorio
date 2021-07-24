const http = require("http");

const server = http.createServer((request, response) => {
    //cuando la url que venga del servidor sea / es decir lo que esta 
    //despues de localhost:3000/productos

    if(request.url === "/"){
        response.writeHead(200);
        response.write("Hola mundo");
        response.end();
    } else if (request.url ==="/productos"){
        response.writeHead(200);
        response.write("Hola Productos")
        response.end();
    }
})

server.listen(9000, () => console.log("El servidor se inició"))