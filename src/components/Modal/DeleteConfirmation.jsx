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
          
          <div>
            {children}
            </div>
        </div>
      </div>
    );
  };

export default BaseModal