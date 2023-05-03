import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";

export default function App() {
  const [products, setProducts] = useState([]);

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              convertPrice={convertPrice}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<Product convertPrice={convertPrice} />}
        />
        <Route path="/cart" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}
