import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import "./styles/globals.css";

function App() {
  const [producto, setProducto] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setProducto={setProducto} />} />
          <Route
            path="/Producto/:product"
            element={<Product producto={producto} />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
