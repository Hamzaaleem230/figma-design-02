export const metadata = {
  title: "Contacts"
};

import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

const page = () => {
  return (
    <div className='w-[1440px] h-[1500px]'>
      <h1 className='heading'>
      Contact
      </h1>
      <h1 className='head'>
        Information
      </h1>
      <h1 className='company'>
        Company Name
      </h1>
      <p className='parah'>1234 Sample Street Austin Texas 76401</p>
      <h1 className='numbers'>
      512.333.2222
      </h1>
      {/* <a href="#!" className='mail'>sampleemail@gmail.com</a> */}
      <a href="mailto:sampleemail@gmail.com" className='mail'>
                        <AiOutlineMail className='size'/>
                        sampleemail@gmail.com</a>
                        <button className='click'><a href="#!"><h1 className='centered-button'>Contact Us</h1></a></button>
                        <img className='map' src="/image 14.png" alt="map" />
    </div>
  )
}

export default page