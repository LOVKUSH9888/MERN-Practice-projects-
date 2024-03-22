// ProductDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      {productDetails && (
        <div>
          <h3>{productDetails.title}</h3>
          <p>{productDetails.description}</p>
          <p>Price: ${productDetails.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
