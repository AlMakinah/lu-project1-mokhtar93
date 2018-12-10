import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalHeader from "../modalHeader";
import ModalDescription from "../modalDescription";
const root = document.createElement("div");
root.id = "modalRoot";
class Modal extends Component {
  static PropTypes = {
    visible: PropTypes.boolean,
    onClose: PropTypes.onClose,
    img: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    views: PropTypes.number
  };

  static defaultProps = {
    visible: false,
    onClose: () => null,
    img: "",
    likes: 0,
    comments: 0,
    views: 0
  };

  componentWillUnmount() {
    root.remove();
    this.unsubscribe();
  }

  componentDidMount() {
    document.body.appendChild(root);
  }

  render() {
    const { visible, onClose, img, likes, comments, views } = this.props;
    if (!visible) {
      return null;
    }
    return ReactDOM.createPortal(
      <>
        <div className="modal__hover">
          <div className="card-details__container">
          <button className='btn-close' onClick={onClose}>      X </button>
            <ModalHeader />
            <div className='modal__details-container'>
              <img className='modal__details-img' src={img} alt="modalImage" />
            </div>
            <div className='modal__description'>
              <ModalDescription />
            </div>
           
          </div>
        </div>
      </>,
      root
    );
  }
}

export default Modal;
