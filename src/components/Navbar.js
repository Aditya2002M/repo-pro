import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";



function Navbar(props){

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;

    const [selectedOption, setSelectedOption] = useState("Option 1");

    const handleChange = (event) => {
    setSelectedOption(event.target.value);
    };
   

    return (
        <div className="">

            <nav className=" bg-indigo-700 shodow-lg">
                <div className="container mx-auto">
                    <div className="sm:flex justify-evenly">

                       
                        

                        <a href="#" className="text-white text-3xl font-bold p-3 ">NAVBAR</a>

                        <ul className="flex text-gray-400 sm:self-center text-xl border-t sm:border-none">
                        {!isLoggedIn && <li className="p-3 hover:text-white cursor-pointer">Home</li>}
                        {isLoggedIn && <li className="p-3 hover:text-white cursor-pointer">Dashboard</li>}

                        
                        { isLoggedIn &&
                            <Link to="/foodNews">
                                <button
                                onClick={() => {
                                setIsLoggedIn(false);
                                }}>
                                <li className="p-3 hover:text-white cursor-pointer">News</li>
                                </button>
                            </Link>
                        }
                        <li className="p-3 hover:text-white cursor-pointer">About</li>


                            



                            <div className="p-3 hover:text-white cursor-pointer">

                                <div className="">
                                    { !isLoggedIn &&(
                                    <Link to="/login">
                                        <button >
                                            login
                                        </button>
                                    </Link>
                                    )}
                                    {/* { isLoggedIn &&
                                    <Link to="/foodNews">
                                        <button
                                        onClick={() => {
                                        setIsLoggedIn(false);
                                        }}>
                                            News
                                        </button>
                                    </Link>
                                    } */}
                                    {isLoggedIn && (
                                        <Link to="/Home">
                                            <button
                                                onClick={() => {
                                                setIsLoggedIn(false);
                                                toast.success("Logout Sucessfully");
                                                }}>
                                                Log Out
                                            </button>
                                        </Link>
                                    )}


                                    
                                </div>
                      
                            </div>
                        </ul>

                    </div>

                </div>
            </nav>
                    
        </div>
    );
}

export default Navbar;