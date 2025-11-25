import React from "react";

const Home = () => {
  return (
    <>
<section className="text-white grid gap-y-25
bg-black 
bg-[radial-gradient(circle_at_30%_30%,_rgba(0,255,200,0.08),_transparent_80%)]
justify-items-center pt-12 px-8 pb-4 min-h-screen">

        <div className="home-top flex flex-row items-center  w-full justify-center gap-8 ">
          <div className="photo-container w-sm h-[310px] flex items-center flex-[0_10_380px] justify-evenly animate-slidephoto ">
            <div 
            className="photo-ring border border-dashed  border-2 border-cyan-400/60  w-[300px] h-[300px] absolute rounded-full animate-round  mt-[23px]">
            </div>
            <div className="w-[600px] left-5 h-[270px] bg-cyan-600/30 rounded-full blur-3xl absolute"></div>
            <div className="photo-frame animaton animate-wiggle ">
                <img
                  className="rounded-full w-[270px] h-[270px] border-3 border-[#00b4ff] animate-image"
                  src="../public\Images\profile.jpg"
                />
              </div>
          </div>
          <div className="home-info w-[792px] animate-slidetitle ">
            <h1 className="home-title text-5xl font-bold mt-[15px] mb-[10px] ">
              Hi, I'm<span className="tracking-wide"> Ashutosh Maran</span>
            </h1>
            <p
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRight: "3px solid white",
                animation: "typing 2s steps(30) forwards, blink .7s infinite",
              }}

              className="text-[20px] text-[#ffffffd9] mt-[7px] mb-[20px] "
            >
              Computer Science Engineer | Frontend Developer | Tech Explorer
            </p>
            <div className="proffession-tags text-[#ffffffd9]  text-[15px] gap-x-4 gap-y-4  mt-[18.4px] flex flex-wrap  ">
              <div className="px-[16px] py-[8px]  bg-[#ffffff0d] border border-[#00b4ff] rounded-full  transition-transform  duration-200  hover:scale-110 hover:bg-linear-to-r from-[#00b4ff] to-[#00ffe0]">
                AI Enthusiast
              </div>
              <div className="px-[16px] py-[8px] bg-[#ffffff0d] border border-[#00b4ff] rounded-full  transition-transform  duration-200  hover:scale-110 hover:bg-linear-to-r from-[#00b4ff] to-[#00ffe0]">
                Machine Learning Engineer
              </div>
              <div className="px-[16px] py-[8px] bg-[#ffffff0d] border border-[#00b4ff] rounded-full  transition-transform  duration-200  hover:scale-110 hover:bg-linear-to-r from-[#00b4ff] to-[#00ffe0] ">
                Deep Learning Expert
              </div>
              <div className="px-[16px] py-[8px] bg-[#ffffff0d] border border-[#00b4ff] rounded-full  transition-transform  duration-200  hover:scale-110 hover:bg-linear-to-r from-[#00b4ff] to-[#00ffe0]">
                Computer Vision Researcher
              </div>
              <div className="px-[16px] py-[8px] bg-[#ffffff0d] border border-[#00b4ff] rounded-full  transition-transform  duration-200  hover:scale-110 hover:bg-linear-to-r from-[#00b4ff] to-[#00ffe0]">
                Developer
              </div>
            </div>

            <div className="info-cards flex flex-wrap mt-[19.2px] gap-5  ">
              <div className="min-w-[180px] min-h-[87.99px] px-[18px] py-[12px] grid place-items-center bg-[#ffffff0d] rounded-xl  shadow-[1px_1px_10px_#00ffc814] 
             hover:animate-exp ">
                <strong>📍 Location</strong>
                <p className="text-[14.4px] text-[#ffffffb3]">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

              <div className="min-w-[180px] min-h-[87.99px] px-[18px] py-[12px] grid place-items-center bg-[#ffffff0d] rounded-xl shadow-[1px_1px_10px_#00ffc814]  hover:animate-exp">
                <strong>💼 Expertise</strong>
                <p className="text-[14.4px] text-[#ffffffb3]">
                  AI/ML, Problem Solving
                </p>
              </div>
              <div className="min-w-[180px]min-h-[87.99px]  px-[18px] py-[12px] grid place-items-center bg-[#ffffff0d] rounded-xl shadow-[1px_1px_10px_#00ffc814]  hover:animate-exp ">
                <strong>📧 Contact</strong>
                <p className="text-[14.4px] text-[#ffffffb3]  ">
                  ashutoshmaran35@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-links w-[516px] h-[134.18px] mt-[16px]  place-items-center ">
          <h2 className="quick-links-title mt-[19px] mb-[8px] pb-[10px] text-[23px] font-medium tracking-tight ">Connect with me</h2>
          <div className="quick-links-list flex flex-row gap-x-[24px]">
            <a  className="p-[8px] w-[66px] h-[66px]  " href="#"><img className="w-[50px] h-[50px] rounded-full transition-transform duration-100 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:shadow-[0_0_20px_3px_#00b4ff]
  " src="./public\Images\gitimage.png"></img></a>
            <a className="p-[8px]  w-[66px] h-[66px]" href="#"><img className="w-[50px] h-[50px] rounded-full transition-transform duration-100 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:shadow-[0_0_20px_3px_#00b4ff]" src="./public\Images\LinkedInimage.png"></img></a>
            <a className="p-[8px]  w-[66px] h-[66px]" href="#"><img className="w-[50px] h-[50px] rounded-full  transition-transform duration-100 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:shadow-[0_0_20px_3px_#00b4ff]" src="./public\Images\mailImage.png"></img></a>
            <a className="p-[8px]  w-[66px] h-[66px]" href="#"><img className="w-[50px] h-[50px] rounded-full   transition-transform duration-100 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:shadow-[0_0_20px_3px_#00b4ff]" src="./public\Images\WhatsappImage.png"></img></a>
            <a className="p-[8px]  w-[66px] h-[66px]" href="#"><img className="w-[49px] h-[49px]  rounded-full transition-transform duration-100 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:shadow-[0_0_20px_3px_#00b4ff]" src="./public\Images\InstaImage.png"></img></a>
            <a className="p-[8px]  w-[66px] h-[66px]" href="#"><img className="w-[50px] h-[50px] rounded-full transition-transform duration-100 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:shadow-[0_0_20px_3px_#00b4ff]" src="./public\Images\facebookImage.png"></img></a>
          </div>
        </div>
      </section>
      <style>
        {`
      @keyframes typing {
        from { width: 0 }
        to { width: 85% }
      }
      @keyframes blink {
        0%, 100% { border-color: transparent }
        50% { border-color: #00b4ff }
      }
    `}
      </style>



          <style>
        {`
      @keyframes moveY {

        0%{
            transform:translateY(0);
        }
            50%{
                 transform:translateY(20px);
            }

            100%{
                transform:translateY(0);
            }
      }
    `}
      </style>
    </>
  );
};

export default Home;
