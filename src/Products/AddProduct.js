import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function AddProduct() {

  let Navegacion = useNavigate();

  const [Products, setProducts] = useState({
    productName:"",
    productPrice:Number(),
    productStock:Number(),
  })
  

  const {productName,productPrice,productStock} = Products

    const onInputChange = (e) => {
      setProducts({...Products, [e.target.name] : e.target.value})
  }

  const onsubmit = async (e) => {
      e.preventDefault();
      const urlBase = "http://localhost:8080/products"
      await axios.post(urlBase, Products);
      //redirigir a la pagina 
      Navegacion("/productos");

  } 

  return (
    <div className='container'>
        <div className='container text-center' Style={{margin:"30 px"}}>
            <h3>Agregar Producto</h3>
        </div>
        <form onSubmit={ (e) => onsubmit(e)} >
  <div className="mb-3">
    <label htmlFor="productName" className="form-label">Nombre</label>
    <input type="text" className="form-control" 
    id="productName" name= "productName" required = {true}
    value={productName} onChange={(e) => onInputChange(e)}/>
    </div>
  <div className="mb-3">
    <label htmlFor="productPrice" 
        className="form-label">Precio</label>
        <input type="number" className="form-control" 
        id="productPrice" name= "productPrice" 
        value={productPrice} onChange={(e) => onInputChange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="productStock" 
        className="form-label">Stock</label>
        <input type="number" className="form-control" 
        id="productStock" name= "productStock" 
        value={productStock} onChange={(e) => onInputChange(e)} />
  </div>
  <div className='text-Center'>
  <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
  <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
  </div>
</form>
    </div>
  )
}
