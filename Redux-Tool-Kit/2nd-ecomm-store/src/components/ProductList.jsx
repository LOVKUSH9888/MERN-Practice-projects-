import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert("Item added to cart");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Product List</h2>
            <Link to="/cart">Go to Cart</Link>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          ) : (
            products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <Card
                  style={{ width: "18rem", height: "100%" }}
                  className="m-3 p-2"
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                  </Card.Body>
                  <Button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
