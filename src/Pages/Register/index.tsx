import React, { useState } from "react";
import './register.scss';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { setuserData } from "../../Features/Login/authSlice";

function Register(){
    const [useremail , setuserEmail]=useState('');
    const [userpassword , setuserPassword]=useState('');
    const [confirmpassword , setconfirmPassword]=useState('');
    const [isError , setError]=useState(false);
    const { userData } = useSelector((state:RootState) => state.auth);
    const navigate=useNavigate();
    const dispatch=useAppDispatch();;
    
    const handleRegister=()=>{    
      
            if(userpassword === confirmpassword){
                setError(false);
                dispatch(setuserData({
                  emailId:useremail,
                  password:userpassword
                }))
                alert('Registered successfully')
                navigate('/login');
            }
           else{
            setError(true)
           }
    }
return(
    <div className="tm-register-wrapper">
        <div className="tm-register-center-wrapper">
            <input 
              className="register-input-box"
              value={useremail}
              placeholder="Enter your EmailId"
              type="email"
              onChange={(e)=>setuserEmail(e.target.value)}
            />
             <input 
              className="register-input-box"
              value={userpassword}
              placeholder="Create New Password"
              type="password"
              onChange={(e)=>setuserPassword(e.target.value)}
            />
             <input 
              className="register-input-box"
              value={confirmpassword}
              placeholder="Confirm New Password"
              type="password"
              onChange={(e)=>setconfirmPassword(e.target.value)}
            />
            {
                isError && 
                <div className="error-text">Both Password didn't match</div>
            }
            <button 
            className="register-button"
            onClick={()=>{
              handleRegister()}}
            >
                Submit
            </button>
        </div>
    </div>
)
}
export default Register;