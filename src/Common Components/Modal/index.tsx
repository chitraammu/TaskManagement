import React, { Children } from "react";
import { useNavigate } from "react-router";
import './modal.scss';
import CloseIcon from '../../assets/close.png';


type ModalProps ={
    children:React.ReactNode;
    header?:string ;
    imagePath?:any;
    action?:string;
    onAction?:()=>void;
    onClose?:()=>void;
    actionButtons:React.ReactNode;
}
const Modal =({children,
    header,
    imagePath,
    action,
    onAction,
    onClose,actionButtons}:ModalProps) =>{
    const navigate=useNavigate()
  return(
    <div className="tm-modal-overlay">
        <div className="tm-modal-container">
          {/* <img src={imagePath} alt='' width="15" height="15"/> */}
          <header>
            <h5>{header}</h5>
            <div className="top-close" onClick={()=>navigate(-1)}>
              <img src={imagePath ? imagePath : CloseIcon} alt='' width="15" height="15"/>
            </div>
          </header>
          <div className="children-body">{children}</div>
          <footer>{actionButtons}</footer>
        </div>
    </div>
  )
}

export default Modal;