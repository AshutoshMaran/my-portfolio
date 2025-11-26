import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className='gallery-container py-[5px] px-[20px] bg-[#0b0b0b] text-[#f0f0f0] min-h-screen flex flex-col items-center '>
      <h2 className='gallery-title text-[#f5f5f5] text-[28px] font-semibold tracking-[2px] mt-[24px] mb-[20px] ]'>GALLERY</h2>
      <div className='tab-buttons   flex gap-x-2 mb-[30px]'>
        <button className='active-tab py-[1px] px-[18px] text-[14.4px] bg-[#1f1f1f] text-[#fff] border border-[#666] rounded-4xl transition-transform duration-300 ease-in-out hover:scale-105'>Personal</button>
        <button className='tab py-[8px] px-[18px] text-[14.4px]    border border-[#666] rounded-4xl  transition-transform duration-300 ease-in-out hover:scale-105  hover:bg-[#1f1f1f]'>Projects</button>
        <button className='tab py-[8px] px-[18px] text-[14.4px]     border border-[#666] rounded-4xl transition-transform duration-300 ease-in-out hover:scale-105  hover:bg-[#1f1f1f]'>Achivements</button>
      </div>
      <div className='post-feed'>


        <div className='post-card bg-[#121212] p-[16px] flex '>
          <p className='caption text-[14.4px] text-[#aaaaaa] text-base/6 block mt-[16px] mb-[16px]'>Lost in the beauty of the misty forest 🌲🌫️</p>
          <div className='photo-grid multi'>
            <div className='photo-item'><img   className='w-[273px] h-[192px] object-cover cursor-pointer rounded-xl' src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
            <div className='photo-item'><img   className='w-[273px] h-[192px] object-cover cursor-pointer rounded-xl' src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
          </div>
        </div>

        <div className='post-card'>
          <p className='caption'>Lost in the beauty of the misty forest 🌲🌫️</p>
          <div className='photo-grid multi'>
            <div className='photo-item'><img src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
            <div className='photo-item'><img src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
         
          </div>
        </div>



        <div className='post-card'>
          <p className='caption'>Lost in the beauty of the misty forest 🌲🌫️</p>
          <div className='photo-grid multi'>
            <div className='photo-item'><img src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
            <div className='photo-item'><img src='../public\Images\leaves-green-spring-5k-4480x2520-1225.jpg' /></div>
         
          </div>
        </div>



      </div>
    </div>
    </>
  )
}

export default Gallery