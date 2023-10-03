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
    const [errorMessage,setErrorMessage]=useState('');
    const { userData } = useSelector((state:RootState) => state.auth);
    const navigate=useNavigate();
    const dispatch=useAppDispatch();;
    
    const handleRegister=()=>{    
    
      if(validateEmail(useremail) === false || userpassword !== confirmpassword){
            if(validateEmail(useremail) === false){
              setError(true);
              setErrorMessage('Please provide a valid email address')
            }
            if(userpassword !== confirmpassword){
                setError(true);
                setErrorMessage("Both Password didn't match")
            }
          }
           else{
            setError(false);
            dispatch(setuserData({
              emailId:useremail,
              password:userpassword
            }))
            alert('Registered successfully')
            navigate('/login');
           }
    }

    const validateEmail=(email:string)=> {
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
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
                <div className="error-text">{errorMessage}</div>
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