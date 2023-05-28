import React from 'react'
import Customer from '../Buttons/Customer'
import logo from '../../images/images.png'
const SideBar = () => {
  return (
    <div className='w-4/12 sm:block hidden h-[100vh] bg-[#015249]  rounded-r-lg '>
        <div className='w-full justify-center flex mt-5'>
<img src={logo} alt="logo" className='' />

        </div>
        <div className='mt-10'>

        <Customer/>
        </div>
  </div>
  )
  
}

export default SideBar
{/* <div className=" w-full bg-[#015249]  rounded-r-lg border-r-2 px-12">

</div> */}