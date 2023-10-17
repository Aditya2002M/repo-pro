import React, { useState } from 'react';
import axios from 'axios';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Sidebar from './Sidebar';

const Target = () => {
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);

  const apiKey = 'YOUR_SPOONACULAR_API_KEY';

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByNutrients?apiKey=2f570a74f5234f65a8633fcbd019c909&maxCalories=${calories}`
      );
      setMeals(response.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  return (
    <div>
         <Sidebar></Sidebar>
    <div className="bg-gray-100 min-h-screen py-10" >
       
      <div className="container mx-auto p-4 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Meal Finder</h1>
        <div className="mb-4">
          <label className="text-lg">Enter maximum calories:</label>
          <input
            type="number"
            value={calories}
            onChange={handleCaloriesChange}
            className="w-24 p-2 border rounded ml-2"
          />
        </div>
        <button
          onClick={fetchMeals}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Find Meals
        </button>
        <ul className="mt-4">
          {meals.map((meal) => (
            <li key={meal.id} className="mb-4 p-4 bg-gray-200 rounded">
              <h3 className="text-xl font-semibold">{meal.title}</h3>
              <p>Calories: {meal.calories}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Target;
