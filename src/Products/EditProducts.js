import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function EditProduct() {

const urlBase = "http://localhost:8080/products"

  let Navegacion = useNavigate();

  const {id} = useParams();

  const [products, setProducts] = useState({
    productName:"",
    productPrice:Number(),
    productStock:Number(),
  })
  

  const {productName,productPrice,productStock} = products

  useEffect(() => {loadProducts();  },[])
  const loadProducts = async () => {
    const result = await axios.get(`${urlBase}/${id}`)
    setProducts(result.data);
  }

  const onInputChange = (e) => {
      setProducts({...products, [e.target.name] : e.target.value})
  }

  const onsubmit = async (e) => {
      e.preventDefault();
      await axios.put(`${urlBase}/${id}`, products);
      //redirigir a la pagina 
      Navegacion("/productos");

  }

  return (
    <div className='container'>
        <div className='container text-center' Style={{margin:"30 px"}}>
            <h3>Editar Producto</h3>
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
  <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
  <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
  </div>
</form>
    </div>
  )
}
