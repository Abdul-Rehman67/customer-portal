import React from "react";
import AddCustoomer from "../Buttons/AddCustoomer";
import Card from "../Card";
import BaseModal from "../Modal/BaseModal";
import { useState } from "react";
import AddModal from "../Modal/AddModal";
import Topbar from "../TopBar/TopBar";
const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  return (
    <>
<div className="-bg-red-600 w-full h-fit">
  <Topbar/>

  <div className="px-8">
      <div className="mt-5 -bg-red-300 " onClick={handleOpenModal}>
        <AddCustoomer svg={true} />
      </div>
      
      <div className="mt-5">
        <Card />
      </div>
      </div>
      </div>
      <BaseModal isOpen={isOpen} onClose={handleCloseModal} topImage={true} heading={"Add New Customer"}>
      <AddModal onClose={handleCloseModal}/>
      </BaseModal>
      
    </>
  );
};

export default Main;
