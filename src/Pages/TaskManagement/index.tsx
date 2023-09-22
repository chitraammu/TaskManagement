import React from "react";
import { Outlet, useNavigate } from "react-router";
import './taskmanagement.scss';
import LogoutIcon from '../../assets/logout.png';
import LogoIcon from '../../assets/logo.png';

function TaskManagement(){
    const navigate=useNavigate();
    const mail=localStorage.getItem('userEmail')
  return(
    <div className="taskmanagement-outer-wrapper">
      <div className="top-header-bar">
        <span className="tm-logo-wrapper">       
           <img src={LogoIcon} alt='logout' width='30' height='30'/>
           <p className="tm-logo">TASK</p>
        </span>
        <span>
         <span className='logout' onClick={()=>{
          localStorage.removeItem('userEmail');
          navigate('/login');
          }}>
            <img src={LogoutIcon} alt='logout' width='24' height='24'/>
            Logout
            </span>
         <span className="top-mail">{mail}</span>
         </span>
      </div>
      <div className="tm-login-bottom-bar">
       <div className="tm-left-side-pannel">
           <div className="left-panel-side-connent">
              <p>PLANNING</p>
              <span className='selected' onClick={()=>navigate('/taskmanagement/planning/backlog')}>Backlog</span>
           </div>
           <div className="left-panel-side-connent">
            <p>DEVELOPMENT</p>
           </div>
           <div className="left-panel-side-connent">
            <p>DEPLOYMENT</p>
           </div>
       </div>
       <div className="tm-right-side-pannel">
       <Outlet />
       </div>
       </div>
    </div>
  )
}

export default TaskManagement;