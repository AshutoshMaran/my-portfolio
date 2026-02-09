import React from 'react'
import { useState } from 'react'

const Gallery = () => {

  const [show,setShow]=useState("personal");


  return (
    <>
    <div className='gallery-container py-[5px] px-[20px] bg-[#0b0b0b] text-[#f0f0f0] min-h-screen flex flex-col items-center '>
      <h2 className='gallery-title text-[#f5f5f5] text-[28px] font-semibold tracking-[2px] mt-[24px] mb-[20px] ] animate-gallery_text'>GALLERY</h2>
     
      <div className='tab-buttons   flex gap-x-2 mb-[30px] animate-gallery_text2'>
        <button onClick={()=>setShow("personal")} className='active-tab py-[1px] px-[18px] text-[14.4px] bg-[#1f1f1f] text-[#fff] border border-[#666] rounded-4xl transition-transform duration-300 ease-in-out hover:scale-105'>Personal</button>
        <button onClick={()=>setShow("project")} className='tab py-[8px] px-[18px] text-[14.4px]    border border-[#666] rounded-4xl  transition-transform duration-300 ease-in-out hover:scale-105  hover:bg-[#1f1f1f]'>Projects</button>
        <button onClick={()=>setShow("achivements")} className='tab py-[8px] px-[18px] text-[14.4px]     border border-[#666] rounded-4xl transition-transform duration-300 ease-in-out hover:scale-105  hover:bg-[#1f1f1f]'>Achivements</button>
      </div>


      {(show=="personal")? <div className='post-feed grid grid-cols-2 gap-4 animate-gallery_up'>


        <div className='post-card bg-[#121212] p-[16px]  rounded-2xl shadow-[0_0_10px_#ffffff0d] hover:shadow-[0_0_15px_#ffffff14] transition-all duration-300   ease-linear hover:animate-gallery'>
          <p className='caption text-[14.4px] text-[#aaaaaa] text-base/6 block mt-[16px] mb-[16px]'>Lost in the beauty of the misty forest 🌲🌫️</p>
          <div className='photo-grid multi  flex gap-[8px]'  >
            <div className='photo-item'><img   className='w-[273px] h-[192px] object-cover cursor-pointer rounded-xl' src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
            <div className='photo-item'><img   className='w-[273px] h-[192px] object-cover cursor-pointer rounded-xl' src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
          </div>
        </div>

        <div className='post-card   bg-[#121212] p-[16px] rounded-2xl  shadow-[0_0_10px_#ffffff0d] hover:shadow-[0_0_15px_#ffffff14] transition-all duration-300   ease-linear hover:animate-gallery'>
          <p className='caption text-[14.4px] text-[#aaaaaa] text-base/6 block mt-[16px] mb-[16px]'>Weekend getaway to clear my head 🌄 Sometimes inspiration strikes when you’re away from the screen.</p>
          <div className='photo-grid multi  flex gap-[8px]'>
            <div className='photo-item '><img   className='w-[273px]  h-[371px] object-cover cursor-pointer rounded-xl' src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
            <div className='photo-item  '><img  className='w-[273px]  h-[371px] object-cover cursor-pointer rounded-xl' src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
         
          </div>
        </div>

      </div>:""}

{(show=="project")?<div className='project-main flex flex-row '>
  <div className='project-left'>
    <p className='caption text-[14px]'>It’s an AI-powered tool that understands what someone might be feeling based on their words.</p>
    <div className='post-card  flex flex-row gap-3'>
      <div className='photo-item '><img className="h-20 w-50"  src='..\public\Images\leaves-green-spring-5k-4480x2520-1225.jpg'></img></div>
      <div className='photo-item '><img className="h-20 w-50"  src='..\public\Images\leaves-green-spring-5k-4480x2520-1225.jpg'></img></div>
    </div>
  </div>
  <div className='project-right'>
    <p className='caption '>📂ProfileX - Smart Data Profiler + Preprocessor</p>
     <div className='post-card  flex flex-row gap-3'>
      <div className='photo-item '><img className="h-20 w-50" src='..\public\Images\leaves-green-spring-5k-4480x2520-1225.jpg'></img></div>
      <div className='photo-item  '><img className="h-20 w-50" src='..\public\Images\leaves-green-spring-5k-4480x2520-1225.jpg'></img></div>
    </div>
  </div>
</div>:""}

{(show=="achivements")?<div>achive</div>:""}

    </div>
    </>
  )
}

export default Gallery