import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users/Users";
import Navegacion from "./plantilla/Navegacion";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import AddProduct from "./Products/AddProduct";
import Products from "./Products/Products";
import EditProduct from "./Products/EditProducts";

function App() {
  return (
    <div className="container">
<BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route exact path="/"element= {<Users/>}/>
      <Route exact path="/agregar" element = {<AddUser/>}/>
      <Route exact path='/editar/:id' element = {<EditUser/>}/>
    </Routes>
    <Routes>
    <Route exact path="/productos" element = {<Products/>}/>
    <Route exact path="/agregarProducto" element = {<AddProduct/>}/>
    <Route exact path='/editarProductos/:id' element = {<EditProduct/>}/>
    </Routes>
    
</BrowserRouter>
    </div>
    
  
  );
}

export default App;
