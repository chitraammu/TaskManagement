import './App.scss';
import React from 'react';
import {BrowserRouter,Route,Routes,Outlet,useNavigate} from 'react-router-dom';
import Login from './Pages/Login/index';
import TaskManagement from './Pages/TaskManagement';
import Register from './Pages/Register';
import Backlog from './Pages/TaskManagement/Planning/Backlog';
import Planning from './Pages/TaskManagement/Planning';
import CreateIssue from './Pages/TaskManagement/Planning/CreateIssue';
function App() {

  
  return (
    <div className="App">
     <BrowserRouter basename={'/'}>
       <Routes>
          <Route index element={<Login />} /> 
          <Route path='login' element={<Login />} /> 
          <Route path='register' element={<Register />} /> 
          <Route path='taskmanagement' element={<TaskManagement />}>
            <Route path='planning' element={<Planning />}>
              <Route path='backlog' element={<Backlog />}>
                 <Route path='create-issue' element={<CreateIssue />} />
              </Route>
            </Route>
          </Route>  
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
