import React from "react";
import { useRouter } from "next/router";

const ProductReview = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <center>
      <h1>
        Review {reviewId} for Product {productId}
      </h1>
    </center>
  );
};

export default ProductReview;
