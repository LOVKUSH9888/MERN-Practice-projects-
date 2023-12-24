import React, { useEffect, useState } from "react";
import axios from "axios";

const MealCards = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        setMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {meals.map((meal) => (
          <div className="col-md-4" key={meal.idMeal}>
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text">
                  {meal.strInstructions.slice(0, 100)}...
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCards;
