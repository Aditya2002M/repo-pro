import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


const Login=(props)=>{

    
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);


    const [FormData,setFormData] =useState({
        name:"",
        password:"",
        email:"",
    })

    function handleChange(event) {
        setFormData([
            (prev) => [
                {
                    ...prev,
                    [event.target.name]: event.target.value,
                },
            ],
        ]);
    }

    function handlesubmit(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }

    return (
        <div>
            
            <div>
                <h1>
                    LOGIN
                </h1>
            </div>


            <div>
                <form onSubmit={handlesubmit}
                className="flex flex-col w-full gap-y-4 mt-6">

                    <label>
                        <p className="">
                                Username
                                <sup >*</sup>
                        </p>
                        <input type="text" required value={FormData.name} placeholder="Enter username" name="username" onChange={handleChange}
                        ></input>
                    </label>


                    <label>
                        <p className="">
                                Email Address
                                <sup >*</sup>
                        </p>
                        <input type="email" required  value={FormData.email} placeholder="Enter email address" name="email" onChange={handleChange}
                        ></input>
                    </label>


                    <label>

                        <p className="">
                            Password
                            <sup >*</sup>
                        </p>
                        <input type={showPassword ? "text" : "password"} required value={FormData.email} placeholder="Enter password" name="password" onChange={handleChange}
                        ></input>
                        

                    </label>

                    <button >Sign in</button>

                </form>
            </div>

            <div>
                Not Register <span>  ?</span>
                <Link to="/signup">
                    Register Here..
                </Link>
            </div>



        </div>
    );
}
export default Login;