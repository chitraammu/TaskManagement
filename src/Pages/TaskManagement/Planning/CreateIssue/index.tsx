import React, { useEffect, useState } from "react";
import Modal from "../../../../Common Components/Modal";
import { useNavigate } from "react-router";
import './createissue.scss';
import { RootState, useAppDispatch } from "../../../../app/store";
import { setBacklogData, storeBacklogData } from "../../../../Features/Backlog/backlogSlice";
import { useSelector } from "react-redux";


function CreateIssue(){
  const navigate= useNavigate();
  const dispatch=useAppDispatch();
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const { backlogData,saveTicketId } = useSelector((state:RootState) => state.backlog);

const createNewIssue =()=>{
   let id=backlogData.length;
   let storeData:any=[];
   let data;
  //  var select = document.getElementById("mySelect");
  //  var selectedValue =  select && select.value;
  //  alert(selectedValue);
    // saveTicketId 
      backlogData.map((val,index)=>{
         if(val.id === saveTicketId){
          data={...val,title:title,description:description}
          val=data;
          console.log(val);
          }
          storeData.push(val)
       }) 
    saveTicketId ?
      dispatch(storeBacklogData(storeData)) 
       :
    dispatch(setBacklogData({
      title: title,
      description:description ,
      storypoints:"",
      tag:"PLANNED",
      id: (id + 1),
      assignee:"",
      profileUrl:"",
      ticketNo:"TM-"+ (id + 1),
      createDate:"",
      label:"",
      epic:"",
      version:"",
     }
     ))
 
  navigate(-1);
}

useEffect(()=>{
  saveTicketId &&
  backlogData.map((val,index)=>{
    if(val.id === saveTicketId){
         setTitle(val.title);
         setDescription(val.description);
        }
     })
},[saveTicketId])
  return(
    <div className="tm-create-issue-wrapper">
        <Modal
          header='create Issue'
          actionButtons={
          <>
          <button disabled={title ? false : true} className="create-issue-button" onClick={()=>createNewIssue()}>{saveTicketId ? "Save" :"Create"}</button>
          <button className='create-issue-button' onClick={()=> navigate(-1)}>Close</button>
          </>
          }
        >
          <div className="ci-each-box">
            <span>Summary</span>
            <input 
             autoFocus
             className="create-issue-input-box"
             value={title}
             onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>
          <div className="ci-each-box">
            <span>Description</span>
            <textarea 
             autoFocus
             className="create-issue-description-input-box"
             value={description}
             onChange={(e)=>{setDescription(e.target.value)}}
            />

          </div>
          {/* <div className="ci-each-box">
            <span>Status</span>
            <div className="custom-select" style={{width:"200px"}}>
            <select id="SelectStatus">
                <option value="0">SIT/UAT Testing</option>
                <option value="1">Under Dev Progress</option>
                <option value="2" selected>Planned</option>
            </select>
            </div>
          </div> */}

        </Modal>
    </div>
  )
}

export default CreateIssue;