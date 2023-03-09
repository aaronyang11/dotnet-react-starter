import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Product from "./Pages/Product"
import CreateProduct from "./Pages/CreateProduct"
import ProductDetails from "./Pages/ProductDetails"
import ProductList from "./Pages/ProductList"
import NotFound from "./NotFound"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="product">
          <Route index element={<Product />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="details" element={<ProductDetails />}></Route>
          <Route path="list" element={<ProductList />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
