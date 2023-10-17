import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BMR from './BMR';
import { Link } from 'react-router-dom';



const Sidebar = (props) => {

  const setIsLoggedIn = props.setIsLoggedIn;
  const isLoggedIn = props.isLoggedIn;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      {sidebarOpen &&  (
        <div className="w-1/4 h-full bg-gray-800 fixed top-0 left-0 p-4 z-50" id="mySidebar">
          <button className="text-white text-2xl" onClick={closeSidebar}>
            Close &times;
          </button>
          

          <Link to="/BMR" className="text-white block py-2" onClick={closeSidebar}>
            Basal Metabolic Rate
          </Link>

          <Link to="/Target" className="text-white block py-2" onClick={closeSidebar}>
            Find Meal
          </Link>

          <Link to="/BMR" className="text-white block py-2" onClick={closeSidebar}>
            Meal recipes
          </Link>

          
        </div>
      )}
      <button className="bg-gray-800 text-white p-2 " onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} /> Open Sidebar
      </button>
    </div>
  );
};
export default Sidebar;
