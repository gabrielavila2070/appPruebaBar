import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function AddUser() {

  let Navegacion = useNavigate();

  const [User, setUser] = useState({
    firstName:"",
    lastName:"",
    address:"",
    phone:"",
  })
  

  const {firstName,lastName,address,phone} = User

  const onInputChange = (e) => {
      setUser({...User, [e.target.name] : e.target.value})
  }

  const onsubmit = async (e) => {
      e.preventDefault();
      const urlBase = "http://localhost:8080/users"
      await axios.post(urlBase, User);
      //redirigir a la pagina 
      Navegacion("/");

  }

  return (
    <div className='container'>
        <div className='container text-center' Style={{margin:"30 px"}}>
            <h3>Agregar Usuario</h3>

        </div>
        <form onSubmit={ (e) => onsubmit(e)} >
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">Nombre</label>
    <input type="text" className="form-control" 
    id="firstName" name= "firstName" required = {true}
    value={firstName} onChange={(e) => onInputChange(e)}/>
    </div>
  <div className="mb-3">
    <label htmlFor="lastName" 
        className="form-label">Apellido</label>
        <input type="text" className="form-control" 
        id="lastName" name= "lastName" 
        value={lastName} onChange={(e) => onInputChange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" 
        className="form-label">Direccion</label>
        <input type="text" className="form-control" 
        id="address" name= "address" 
        value={address} onChange={(e) => onInputChange(e)} />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" 
        className="form-label">Telefono</label>
        <input type="text" className="form-control" 
        id="phone" name= "phone" 
        value={phone} onChange={(e)=>{onInputChange(e)}} />
  </div>
  <div className='text-Center'>
  <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
  <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
  </div>
</form>
    </div>
  )
}
