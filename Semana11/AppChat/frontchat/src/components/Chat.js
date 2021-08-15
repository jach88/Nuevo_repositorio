import {useState, useEffect} from 'react'
import queryString from "query-string"
import io from "socket.io-client"
import socket from 'socket.io-client/lib/socket'

export default function Chat() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const URL="https://chatsocketsdemo.herokuapp.com/"
    
    
    useEffect(() => {
        //window.location.search => name=Nombre&room=Sala
        const { name, room } = queryString.parse(window.location.search)
        
        socket = io(URL)
        
        setName(name)
        setRoom(room)

        socket.emit('join',{name, room},() =>{})

    }, [])

    useEffect(() => {
        //.on("tipo_mensaje") es escuchar
        socket.on("message",(message) =>{
            console.log(message)
        })
        
    }, [window.location.search])



    return (
        <div>
            
        </div>
    )
}
