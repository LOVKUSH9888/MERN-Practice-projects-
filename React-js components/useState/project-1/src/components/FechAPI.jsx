import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    try {
      const response1 = await axios.get("https://fakestoreapi.com/products/1");
      const response2 = await axios.get("https://fakestoreapi.com/products");

      const singleProductData = [response1.data]; // Data from the first URL
      const multipleProductsData = response2.data; // Data from the second URL

      setGetData([...singleProductData, ...multipleProductsData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Shown</h1>
      <ul>
        {getData.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;
