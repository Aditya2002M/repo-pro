import Navbar from './components/Navbar';
import Popular from './components/Popular';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import BMR from './components/BMR';
import Target from './components/Target';
import FoodNews from './pages/FoodNews';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>

        <Route path="/" element={<Home ></Home>}></Route>

        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}> </Route>

        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>

        <Route path='/dashboard' element={<Dashboard setIsLoggedIn={setIsLoggedIn}></Dashboard>}></Route>

        <Route path='/BMR' element={<BMR setIsLoggedIn={setIsLoggedIn}></BMR>}></Route>
      
        <Route path='/Target' element={<Target setIsLoggedIn={setIsLoggedIn}></Target>}></Route>

        <Route path='/FoodNews' element={<FoodNews setIsLoggedIn={setIsLoggedIn}></FoodNews>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
