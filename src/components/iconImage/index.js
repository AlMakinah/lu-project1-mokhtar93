import React, { Component } from "react";
import ReactDOM from "react-dom";
import icon from '../../assests/icon.png'
import "../../styles.css";
const IconImage = () => {
  return (
    <img className = 'modal__header-icon' src={icon} alt='icon'/>

  );
};
export default IconImage;