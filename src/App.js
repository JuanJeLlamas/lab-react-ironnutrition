import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from "./components/Foodbox"
import AddForm from "./components/AddForm"


function App() {

  const [food, setFood] = useState(foods)
  
  
  const handleAddfood = (setFood) => {
    setFood((prevFoods)=>
    [...prevFoods, food])
  }

  return (
    <div className="App">
     <AddForm añadirComida={handleAddfood}/>
     {food.map((eachFood) => {
  return (
    <FoodBox key={eachFood.name} food={eachFood} />
  );
})}
  <div>
   



  </div>





    </div>
  );
}

export default App;
