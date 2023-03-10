import React from "react"
import { useNavigate, Link } from "react-router-dom"

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
      <Link to="details/5">
        <button>Navigate to Product Detail - 5</button>
      </Link>
    </div>
  )
}

export default Product
