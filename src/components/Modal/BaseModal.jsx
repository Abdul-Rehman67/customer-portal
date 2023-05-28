import React from 'react'
import ModalHeader from '../../images/Mask Group 1.png'
import CrossIcon from '../../images/Shape.svg';

const BaseModal = ({ isOpen, onClose, children,heading }) => {

    console.log("on close",onClose)
    const modalClasses = isOpen
      ? 'fixed inset-0 flex items-center justify-center z-10'
      : 'hidden';
  
    return (
        <div className={modalClasses}>
        <div className=""></div>
      
        <div className="bg-[#FBFCFC] rounded-lg relative">
          <div className="relative">
            <img src={ModalHeader} alt="" />
            <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl px-4 py-2 bg-opacity-75 rounded">
            { heading}
            </h2>
            <button
              className="absolute top-0 right-1 p-2 text-white "
              onClick={onClose}
            >
             <img src={CrossIcon} alt="" />
            </button>
          </div>
          <div>
            {children}
            </div>
        </div>
      </div>
    );
  };

export default BaseModal