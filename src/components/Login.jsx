
import React, { useState } from 'react'
import Imagen from '../assets/solarpunketo.jpg'
import ImageProfile from '../assets/usuario.png'

import appFirebase from '../credenciales.js'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false)
const functAuthentication = async(e) =>{
e.preventDefault();
const correo = e.target.email.value;
const contraseña = e.target.password.value;

if (registrando) {
     try{
await createUserWithEmailAndPassword(auth, correo, contraseña)
    } catch (error) {
alert("Asegurese que la contraseña tenga 6 caratceres")
    }
}
else{
    try{
await createUserWithEmailAndPassword(auth, correo, contraseña)
    } catch (error) {
alert("El correo o la contraseña son incorrectos")
    }
    await signInWithEmailAndPassword(auth, correo, contraseña)
}
}
    



  return (
<div className='container'>
    <div className="row">
  {/* columna mas pequeña formulario */}
    <div className="col-md-4">
    <div className="padre">
      <div className="card card-body shadow-lg">
        <img src= {ImageProfile} alt='' className='estilo-profile'/>
        <form onSubmit={functAuthentication}>
          <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
          <input type="password" placeholder='Ingresar contraseña de 6 digitos' className='cajatexto' id='password'/>
          <button className='btnform'> {registrando ? "registrate" : "Inicia sesion"}</button>
        </form>
        <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}<button className='btnswicht' onDoubleClick={()=>setRegistrando(!registrando)}>{registrando ? "Iniciar sesion" : "Registrate"}</button></h4>

      </div>
    </div>
    </div>
  {/* columna mas grande */}
  <div className="col-md-8">
        <img src={Imagen} alt="" className='tamaño-imagen' />
        </div>
    </div>
</div>
  )
}

export default Login