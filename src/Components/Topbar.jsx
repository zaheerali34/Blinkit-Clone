import React from 'react';
import TopbarImg from '../assets/topbar.webp';
import Img1 from '../assets/b1.avif';
import Img2 from '../assets/b2.avif';
import Img3 from '../assets/b3.avif';
import Img4 from '../assets/b4.avif';

function Topbar() {
  return (
    <div className='w-full py-2 px-22 max-lg:px-4 flex flex-col gap-4'>
       <img src={TopbarImg} alt="topbar" className='w-full h-full object-cover'/>
        
        <div className='w-[100%] flex items-center gap-4 px-5 overflow-hidden'>
            <img src={Img1} alt="" className='w-[30%] h-full object-cover cursor-pointer'/>
            <img src={Img2} alt="" className='w-[30%] h-full object-cover cursor-pointer'/>
            <img src={Img3} alt="" className='w-[30%] h-full object-cover cursor-pointer'/>
            <img src={Img4} alt="" className='w-[30%] h-full object-cover cursor-pointer'/>
        </div>
    </div>
  )
}

export default Topbar