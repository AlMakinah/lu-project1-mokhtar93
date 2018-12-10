import React, { Component } from "react";
import ReactDOM from "react-dom";

import icon from '../../assests/icon.png'
const ModalHeader = () => {
  return (
    <header className='modal__header'>
      <div className="row row--3">
        <div className="col--2">
        <span>
        <img className = 'modal__header-icon' src={icon} alt='icon'/>
     
<div className = 'modal__header-title'>
          <div className='modal__header--line'> Pay Junction - Paper Receipts</div>
          <div> by <a>Eddie Lobanivsjky</a> on  <time dateTime="2018-08-30">August 30, 2018</time></div>
          </div>
          </span>
        </div>
     
     
        <div className="col ">
          <button className='modal__header-btns'>Save </button>
          <button className='modal__header-btns'> Like</button>
        </div>
        </div>
    </header>
  );
};
export default ModalHeader;