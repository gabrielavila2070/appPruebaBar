import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Users() {

const urlBase = "http://localhost:8080/users";
const[users, setUsers] = useState([]);

useEffect(() => {
    loadUsers();
}, []);

const loadUsers = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado de cargar Usuarios");
    console.log(resultado.data);
    setUsers(resultado.data);
}

const deleteUser = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    loadUsers();
}

  return (
    <div className='container'>
    <div className="container text-center" style={{margin: "30px"}}>
    <h3>Sistema de Ventas</h3>
    </div>
            <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Dirección</th>
                <th scope="col">Telefono</th>
                <th >
                    <td classNAme= "text-center">
                        <div></div>
                    </td>
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((users, indice) => (
                        <tr key={indice}>
                        <th scope="row">{users.id}</th>
                        <td>{users.firstName}</td>
                        <td>{users.lastName}</td>
                        <td>{users.address}</td>
                        <td>{users.phone}</td>
                        <td className= 'text-Center'>
                            <div>
                            <Link to={`/editar/${users.id}`}
                            className= 'btn btn-warning btn-sm me-3'>Editar</Link>
                            <button 
                            onClick={() => deleteUser(users.id)}
                            className='btn btn-danger btn-sm'
                            >Eliminar</button>
                            </div>
                        </td>
                        </tr>    
                    ))
                    }
            </tbody>
            </table>
    </div>
  )
}
