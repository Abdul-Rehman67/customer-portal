import React from 'react'
import CrossIcon from '../../images/Shape (1).svg'
import DeleteIcon from "../../images/delete.svg"
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/Slice/AddItem'


const DeleteModal = ({isOpen,onClose,children,deletedItem}) => {



    const modalClasses = isOpen
    ? 'fixed inset-0 flex items-center justify-center z-10'
    : 'hidden';
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        console.log(deleteItem)
        alert(
          "this will not update the localstorage because its comes from api and not present in storage you can check implementation and store also"
        );
        dispatch(deleteItem(deletedItem));
        onClose()
      };



  return (
    <div className={modalClasses}>
      <div className=""></div>

      <div className="bg-[#FBFCFC] rounded-lg relative w-11/12 sm:w-4/12 h-[25rem] sm:h-auto  max-w-screen-sm mx-auto pb-6">
        <button className="absolute top-0 right-1 p-2 text-[#00000]" onClick={onClose}>
          <img src={CrossIcon} alt="" />
        </button>
        <div className="relative">
          <div className="w-full flex justify-center mt-10">
            <img src={DeleteIcon} alt="" />
          </div>
          <div>
            <div className="w-full text-center text-2xl font-medium mt-5">Are you sure?</div>
            <div className="w-full text-center text-lg font-medium mt-5">Do you really want to delete this customer?</div>
            <div className="w-full text-center text-lg font-medium">This process cannot be undone.</div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#A5A5AF] w-[10rem] p-4 text-white rounded"onClick={onClose}>Cancel</button>
            <button className="bg-[#D80000] w-[10rem] p-4 text-white rounded ml-4"onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DeleteModal