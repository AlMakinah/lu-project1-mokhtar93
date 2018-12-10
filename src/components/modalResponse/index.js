import React from "react";
import IconImage from '../iconImage'
import heart from '../impression-buttons/Heart.png'
const ModalResponse = () => {
  return (
    <div>
     <div >
     
      <h4> User Name</h4>
      </div>
      <p>
        {" "}
        I like what you did with this place, I like what you did with this
        place, I’m not sure what to do about that part. Whay do you think?{" "}
      </p>
      <span>
     
        <time dateTime="2018-08-20">August 20, 2018</time>
    
      <span
        className="modal__descrption-heart"
        type="button">
        <img className='modal__descrption-heartImage' src={heart}/>
        12
      </span>
      </span>
    </div>
  );
};

export default ModalResponse;

