import React from 'react'
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <center>
      <h1>Detail page about Product {productId}</h1>
    </center>
  )
}

export default ProductDetail
