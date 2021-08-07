import React, {useState, usseEffect} from 'react'
import imgLogin from "../assets/login.jpg"

export default function LoginView() {
    return (
        <div className="h-100 row">
            <div className="col-sm-12 col-md-6">
                <img 
                  src={imgLogin}
                  style={{
                      width:'100%',
                      height:'100%',
                      objectFit:'cover'
                  }}
                  alt="imagen login"
                />
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                  <div className="text-center">
                  <h2>Ingresa!</h2>
                  <button className="btn btn-danger btn-lg">
                      <i className="fab fa-google me-2"/>
                      Ingresa con google
                  </button>
                  </div>
            </div>
        </div>
    )
}
