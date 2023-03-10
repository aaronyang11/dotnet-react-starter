import React from "react"
import { useNavigate } from "react-router-dom"

function Product() {
  const navigate = useNavigate()
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
    </div>
  )
}

export default Product
