import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Spinner } from "react-bootstrap";

const Body = () => {
  // Hooks
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  // Functions
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log("Fetched Successfully", res.data.meals);
        setFood(res.data.meals); // Set the fetched meals to the 'food' state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.log("Fetched Error", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  // Returns
  return (
    <>
      <h1 className="text-center mb-4">Here are the Fetched Meals</h1>
      {loading ? (
        // Display loading spinner while data is being fetched
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        </div>
      ) : (
        // Display fetched data once loading is complete
        <Row>
          {food.map((meal) => (
            <Col key={meal.idMeal} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                  <Card.Title>{meal.strMeal}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Body;
