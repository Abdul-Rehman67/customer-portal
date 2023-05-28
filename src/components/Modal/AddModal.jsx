import AddCustoomer from "../Buttons/AddCustoomer";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem } from "../../store/Slice/AddItem";

const AddModal = ({ selectedItem, isEdit }) => {
  console.log(selectedItem);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    upload: "",
  });
  const handleInputChange = (e) => {
    console.log(e.target);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.files ? e.target.files[0] : e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      formData.upload = imageUrl;
    }
  };
  const handleEdit = (e) => {
    alert(
      "this will not update the localstorage because its comes from api and not present in storage you can check implementation and store also"
    );
    dispatch(updateItem(selectedItem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further processing with formData
    console.log(formData);
    dispatch(addItem(formData));
    alert("customer added in storage through store successfully!")
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <input
            type="text"
            id="name"
            className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Customer Name"
            value={selectedItem ? selectedItem.name : formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="email"
            className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            value={selectedItem ? selectedItem.email : formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <label
          htmlFor="upload"
          className="inline-flex items-center text-green-500 underline cursor-pointer ml-5"
        >
          Upload Photo
        </label>
        <input
          type="file"
          id="upload"
          className="hidden"
          onChange={handleFileChange}
        />

        <div
          className="flex justify-center mt-5 mb-5"
          onClick={!isEdit ? handleSubmit : handleEdit}
        >
         {isEdit? <AddCustoomer svg={false} text="Edit Customer" isEdit={true} />:<AddCustoomer svg={false}  isEdit={true} />}
        </div>
      </form>
    </>
  );
};

export default AddModal;
