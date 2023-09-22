import React, { useState } from "react";
import './login.scss';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Login(){
    const [useremail , setuserEmail]=useState('');
    const [userpassword , setuserPassword]=useState('');
    const [isError , setError]=useState(false);
    const { userData } = useSelector((state:RootState) => state.auth);
    const navigate=useNavigate()
    const handleLogin=()=>{
        
        userData.map((val)=>{
            if(val.emailId === useremail && val.password === userpassword){
                setError(false)
                alert('LoggedIn successfully');
                localStorage.setItem('userEmail',useremail)
                navigate('/taskmanagement/planning/backlog');
            }
           else{
            setError(true)
           }
        })
        // navigate('/register')
    }
return(
    <div className="tm-login-wrapper">
        <div className="tm-login-center-wrapper">
            <input 
               className="login-input-box"
              value={useremail}
              placeholder="Enter a Email"
              type="email"
              onChange={(e)=>setuserEmail(e.target.value)}
            />
             <input 
               className="login-input-box"
              value={userpassword}
              placeholder="Enter a Password"
              type="password"
              onChange={(e)=>setuserPassword(e.target.value)}
            />
            {
                isError && 
                <div className="error-text">EmailId/Password is incorrect</div>
            }
            <button 
            className="login-button"
            onClick={()=>{handleLogin()}}
            >
                Login
            </button>
            <button 
            className="login-button"
            onClick={()=>{navigate('/register')}}
            >
                Register
            </button>
        </div>
    </div>
)
}
export default Login;