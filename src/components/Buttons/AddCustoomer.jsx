import React from "react";

const AddCustoomer = ({svg,text}) => {
  return (
    <div className="w-[13rem] ">
  <div className="bg-gradient-to-r from-[#57BC90] to-[#004B40] p-2 flex rounded shadow-lg overflow-hidden justify-center">
    {svg &&svg?
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
:null}

        <button className="text-xl ml-6 truncate md:text-base text-white">
          {text?text:'Add New Customer'}
        </button>
        {/* <button className="ml-6 truncate md:text-base text-white">
        <span className="text-[13px]">
          ADD NEW CUSTOMER
          </span>

        </button> */}
      </div>
    </div>
  );
};

export default AddCustoomer;
