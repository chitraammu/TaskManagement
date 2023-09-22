import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState,useAppDispatch } from "../../../../app/store";
import { useState } from "react";
import './backlog.scss';
import Draggable from "react-draggable";
import { Outlet, useNavigate } from "react-router-dom";
import CreateIssue from "../CreateIssue";
import { setTicketId } from "../../../../Features/Backlog/backlogSlice";
import EditIcon from '../../../../assets/Edit.png';

const Backlog =() => {
  const { backlogData } = useSelector((state:RootState) => state.backlog);
  const [searchedValue,setSearchedValue]=useState('');
  const [data , showData] = useState(backlogData);
  const [iscreateIssue,setCreateIssue] = useState(false);
  const navigate=useNavigate();
  const dispatch=useAppDispatch();
  useEffect(()=>{
    // let val = data.filter((data)=>{
    //   return (data.ticketNo.indexOf(searchedValue) > -1 || data.title.indexOf(searchedValue) > -1);
    // })
    showData(backlogData);
    console.log(backlogData)
  },[backlogData])

  const handleSearchValue=(e:any)=>{
    var filteredData:any;

    if(e.keyCode === 13){
      filteredData = data.filter((val,index)=>{
          return (val.ticketNo.toLowerCase().indexOf(searchedValue) > -1 || val.title.toLowerCase().indexOf(searchedValue) > -1);
    })
      }
      showData(filteredData ? filteredData : backlogData) ;
      console.log(filteredData)
  }
  return(
    <div className="backlog-parent-wrapper">
      <div className="backlog-header">
        <h1>Backlog</h1>
        <div>
          <span>
          {/* <input 
              className="search-bar-input"
              value={searchedValue}
              placeholder="Search"
              type="text"
              onChange={(e)=>setSearchedValue(e.target.value)}
              onKeyUp={(e)=>{handleSearchValue(e)}}
            /> */}
          </span>
          <div>
          <button className="create-issue-button" onClick={()=>{
            dispatch(setTicketId(0))
            navigate('create-issue')
            }}>+ Create Issue</button></div>
        </div>
      </div>
      <div className="backlog-body">
        {
         data && data.map((val:any,index:number)=>{
                return(
                  <Draggable>
                  <div className="tm-ticket-each-box" key={index} >
                    <span>
                      <span className="tm-ticket-number">{val.ticketNo}</span>
                      <span className="tm-ticket-title">{val.title}</span>
                    </span>
                    <span>
                        <img src={EditIcon} alt='edit' onClick={()=>{
                        dispatch(setTicketId(val.id))
                        navigate('create-issue')}
                    }/>
                        <span className="tm-ticket-tag">{val.tag}</span>
                    </span>
                  </div>
                  </Draggable>
                )
          })
        }
        <Outlet />
        </div>
    </div>
  )
}

export default Backlog;