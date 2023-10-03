import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState,useAppDispatch } from "../../../../app/store";
import { useState } from "react";
import './backlog.scss';
import Draggable from "react-draggable";
import { Outlet, useNavigate } from "react-router-dom";
import CreateIssue from "../CreateIssue";
import { setTicketId, storeBacklogData } from "../../../../Features/Backlog/backlogSlice";
import EditIcon from '../../../../assets/Edit.png';
import DeleteIcon from '../../../../assets/delete.png';
import checkedIcon from '../../../../assets/checked.png';
import uncheckedIcon from '../../../../assets/unchecked.png';

const Backlog =() => {
  const { backlogData } = useSelector((state:RootState) => state.backlog);
  const [searchedValue,setSearchedValue]=useState('');
  const [data , showData] = useState(backlogData);
  const [iscreateIssue,setCreateIssue] = useState(false);
  const [isChecked,setCheck] =useState(false);
  const navigate=useNavigate();
  const dispatch=useAppDispatch();

  function getBacklogData(){
    fetch('https://run.mocky.io/v3/8bea8446-6d78-4ff8-b712-d906a7e7246f')
    .then((res)=>(res.json()))
    .then((data)=>{
      let response= JSON.parse(JSON.stringify(data))
      dispatch(storeBacklogData(response)) 
     })
  }

  useEffect(()=>{
    // let val = data.filter((data)=>{
    //   return (data.ticketNo.indexOf(searchedValue) > -1 || data.title.indexOf(searchedValue) > -1);
    // })
    showData(backlogData);
  },[backlogData]);

   useEffect(()=>{
       getBacklogData()
    },[])

  const deleteTask =(id:number)=>{
   let removedData= backlogData.filter((val)=>{
         return val.id !== id
    })
    dispatch(storeBacklogData(removedData))
  }  

  const changeStatus =(id:number , status:boolean)=>{

    let data=backlogData
  //   data.map((val)=>{
  //   if(val.id === id){
  //       val = {...val,isChecked:status}
  //       console.log(val)
  //       // val = d;
  //       // console.log(val)
  //   }
  //  })
  //  console.log(backlogData)
  //    dispatch(storeBacklogData(data))
  //Find index of specific object using findIndex method.    
// let objIndex = data.findIndex((obj => obj.id == id));
// let d:any= data && data.find((obj => obj.id == id));
// //Log object to Console.
// console.log("Before update: ", data[objIndex])



// //Log object to console again.
// let clonedObject = {...data[objIndex]}
// clonedObject = {...clonedObject, isChecked: status}

// d = clonedObject;
// Object.assign(d,{isChecked: status});
// console.log("After update: ", backlogData)
let newArr = [...backlogData];
let key = 'isChecked'
const newForm = newArr.map(item => {
  if(item.id === id){
  return {...item , [key]: status}
  }
  else{
    return {...item}
  }
});

dispatch(storeBacklogData(newForm))
showData(newForm) ;
  }
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
         data ? data.map((val:any,index:number)=>{
                return(
                  <Draggable>
                  <div className="tm-ticket-each-box" key={index} >
                    <span>
                      <span className="tm-ticket-number">{val.ticketNo}</span>
                      <span className="tm-ticket-title">{val.title}</span>
                      <span className="tm-ticket-created-date">{val.createDate}</span>
                    </span>
                    <span>
                        <img src={EditIcon} alt='edit' onClick={()=>{
                        dispatch(setTicketId(val.id))
                        navigate('create-issue')}
                       }/>
                        <img src={DeleteIcon} alt='delete' onClick={()=>{
                        deleteTask(val.id)}
                       }/>
                          <img src={val.isChecked ? checkedIcon : uncheckedIcon} alt='checkox' className="checkbox-img"
                          onClick={()=>{
                            if(val.isChecked){
                               changeStatus(val.id,false)}
                            else{
                              changeStatus(val.id,true)}
                           
                      }
                       }/>
                       
                        <span className="tm-ticket-tag">{val.tag}</span>
                    </span>
                   
                  </div>
                  </Draggable>
                )
          }) :
          <div>
            No Task Created
          </div>
        }
        <Outlet />
        </div>
    </div>
  )
}

export default Backlog;