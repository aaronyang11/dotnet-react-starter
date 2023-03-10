import React from "react"
import { useNavigate, Link, Navigate } from "react-router-dom"
import { useState } from "react"

function Product() {
  const navigate = useNavigate()
  const [goToProduct, setGoToProduct] = useState(() => {
    return false
  })
  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("create")
        }}
      >
        Add Product
      </button>
      <Link to="details/5">
        <button>Navigate to Product Detail - 5</button>
      </Link>
      {goToProduct && <Navigate to="details/3" />}
      <button onClick={() => setGoToProduct({ goToProduct: true })}>
        Navigate to Product Detail - 3
      </button>
    </div>
  )
}

export default Product
