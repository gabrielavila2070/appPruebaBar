import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Users() {

const urlBase = "http://localhost:8080/products";
const[products, setProducts] = useState([]);

useEffect(() => {
    loadProducts();
}, []);

const loadProducts = async () => {
    const resultado = await axios.get(urlBase);
    console.log("Resultado de cargar Productos");
    console.log(resultado.data);
    setProducts(resultado.data);
}

const deleteProducts = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    loadProducts();
}

  return (
    <div className='container'>
    <div className="container text-center" style={{margin: "30px"}}>
    <h3>Lista de Productos</h3>
    <Link to={`/AgregarProducto`}
                            className= 'btn btn-success'>Agregar Producto</Link>
    </div>
            <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th >
                    <td classNAme= "text-center">
                        <div></div>
                    </td>
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((products, indice) => (
                        <tr key={indice}>
                        <th scope="row">{products.productId}</th>
                        <td>{products.productName}</td>
                        <td>{products.productPrice}</td>
                        <td>{products.productStock}</td>
                        <td className= 'text-Center'>
                            <div>
                            <Link to={`/editarProductos/${products.productId}`}
                            className= 'btn btn-warning btn-sm me-3'>Editar</Link>
                            <button 
                            onClick={() => deleteProducts(products.productId)}
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
