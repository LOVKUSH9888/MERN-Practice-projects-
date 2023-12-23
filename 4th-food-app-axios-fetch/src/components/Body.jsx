import React, { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  //Hooks

  //Functions
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((data) => {
        console.log("Fetched Successfully", data);
      })
      .catch((error) => {
        console.log("Fetched Error", error);
      });
  }, []);

  //Returns
  return <div>This is the body component</div>;
};

export default Body;
