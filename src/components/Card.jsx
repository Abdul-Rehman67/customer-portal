import React, { useEffect, useState } from "react";
import { getUser } from "../api/ApiFunctions";
import { v4 as uuidv4 } from "uuid";
import sortIcon from "../images/arrowsort.svg";
import AddModal from "./Modal/AddModal";
import BaseModal from "./Modal/BaseModal";
import DeleteModal from "./Modal/DeleteModal"

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [userData, setUserData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleOpenModal = (item) => {

    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleDelete = (item) => {
    setIsDelete(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsDelete(false);
  };

  // Get user data
  const getUserData = async () => {
    try {
      let res = await getUser();
      if (res.status === 200) {
        const users = res?.data.results.map((user) => ({
          id: uuidv4(),
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          profilePic: user.picture.medium,
        }));
        setUserData(users);
      }
    } catch (e) {
      alert(e);
    }
  };

  const sortData = (field) => {
    let sortedArray = [...userData];
    if (field === "id") {
      sortedArray.sort((a, b) =>
        sortOrder === "asc"
          ? a.id.localeCompare(b.id)
          : b.id.localeCompare(a.id)
      );
    } else if (field === "name") {
      sortedArray.sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (field === "email") {
      sortedArray.sort((a, b) =>
        sortOrder === "asc"
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email)
      );
    }
    setUserData(sortedArray);
  };

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    sortData(field);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="w-full h-[5vh] bg-[#8ac9ad] rounded xs:none">
        <div className="flex justify-between items-center h-full">
          <span className="text-[#015249] ml-2">Profile</span>

          <div className="flex cursor-pointer" onClick={() => handleSort("id")}>
            <span className="text-[#015249]">ID</span>
            <img src={sortIcon} alt="" />
          </div>
          <div
            className="flex cursor-pointer"
            onClick={() => handleSort("name")}
          >
            <span className="text-[#015249]">Name</span>
            <img src={sortIcon} alt="" />
          </div>

          <div
            className="flex cursor-pointer"
            onClick={() => handleSort("email")}
          >
            <span className="text-[#015249]">Email</span>
            <img src={sortIcon} alt="" />
          </div>

          <span className="text-[#015249] mr-10">Actions</span>
        </div>
      </div>

      <div className="h-[75vh] w-full overflow-y-scroll mt-5">
        {userData.length>0 ? (
          userData.map((item) => (
            <div
              className="w-full -sm:w-11/12 bg-white shadow rounded p-6 items-center mb-2"
              key={item?.id}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <img
                    src={item.profilePic}
                    alt="Customer Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="text-black font-bold mb-1 justify-center flex">
                  {item?.id}
                </div>
                <div className="text-gray-600">{item?.name}</div>
                <div className="text-gray-600">{item.email}</div>
                <div className="flex space-x-2">
                  <button
                    className="text-[#008212] bg-[#8ac9ad] p-2 w-[8rem] rounded"
                    onClick={() => handleOpenModal(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 bg-[#f09595] p-2 w-[8rem] rounded"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">Please wait...</div>
        )}
      </div>

      {/* AddModal and DeleteModal components */}
      <BaseModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        heading="Edit New Customer"
      >
        <AddModal selectedItem={selectedItem} isEdit={true} onClose={handleCloseModal} />
      </BaseModal>

      <DeleteModal   isOpen={isDelete}
        onClose={handleCloseModal}>
        {/* <h1>hi delete</h1> */}

      </DeleteModal>
    </>
  );
};

export default Card;
