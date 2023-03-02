import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const AddFoodForm = ({ añadirComida }) => {
  const [food, setFood] = useState({ name: '', image: '', calories: '', servings: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFood((prevFood) => ({ ...prevFood, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    añadirComida(food);
    setFood({ name: '', image: '', calories: '', servings: '' });
  };

  return (

    <Form onSubmit={handleSubmit}>

      <Form.Item label="Name">

        <Input name="name" value={food.name} onChange={handleChange} />

      </Form.Item>

      <Form.Item label="Image">

        <Input name="image" value={food.image} onChange={handleChange} />

      </Form.Item>

      <Form.Item label="Calories">

        <Input name="calories" value={food.calories} onChange={handleChange} />

      </Form.Item>

      <Form.Item label="Servings">

        <Input name="servings" value={food.servings} onChange={handleChange} />

      </Form.Item>

      
      <Button onClick={handleSubmit}>
        Add Food
      </Button>
    </Form>
  );
};

export default AddFoodForm;
