import React from "react"
import { useParams } from "react-router-dom"

function ProductDetails() {
  const { productId } = useParams()
  return (
    <div>
      <div>ProductDetails</div>
      <p>Product Id: {productId}</p>
    </div>
  )
}

export default ProductDetails
