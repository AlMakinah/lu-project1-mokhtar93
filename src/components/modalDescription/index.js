import React from "react";
import ModalResponse from "../modalResponse";
const ModalDescription = () => {
  return (
    <div className="row row--3">
      <div className="col--2">
        <p>
          Hey guys, here’s a sneak peak of my work in progress I was happy
          everyone got to see my last work and commented so much. </p>
           <p>I'll be sure to keep you updated
        </p>
        <hr />
        <h4>Responses </h4>
         <div className='modal__response'>
        <ModalResponse />
        <hr/>
        <ModalResponse />
        </div>
      </div>
      <div className="col">
        <span className='modal__description-copy'> copy link </span>
        <div className='modal__description-actions'>
        <p> 333 views</p>
        <p> 444 likes</p>
        <p> 55 saves</p>
        </div>
        <hr/>

 
      </div>
    </div>
  );
};

export default ModalDescription;
