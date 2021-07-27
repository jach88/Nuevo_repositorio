// import axios from "axios";
const axios = require('axios')

//hacer peticiones
//axios.method_http
axios.get("https://reqres.in/api/users?page=2")
.then((respuesta)=> console.log(respuesta.data.data))
.catch((error) => console.log(error))
