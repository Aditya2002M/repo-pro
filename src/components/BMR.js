import React, { useState } from 'react';
import Sidebar from './Sidebar';

function BMR(props) {

  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMR = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    setResult(bmr.toFixed(2) + ' calories per day');
  };

  return (

   
    <div>
       <Sidebar></Sidebar>

      { 
        !isLoggedIn &&
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">BMR Calculator</h1>
        <p className="mb-4">Calculate your Basal Metabolic Rate (BMR) based on your gender, age, weight, and height.</p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Age (years):</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="button"
            onClick={calculateBMR}
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200"
          >
            Calculate BMR
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your Basal Metabolic Rate (BMR) is:</h2>
          <p className="text-xl font-bold" id="result">
            {result}
          </p>
        </div>
      </div>
    </div>
    }
    </div>
  );
}

export default BMR;
