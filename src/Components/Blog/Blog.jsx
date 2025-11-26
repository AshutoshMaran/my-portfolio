import React from "react";
import { ThumbsUp ,ThumbsDown} from "lucide-react";

const Blog = () => {
  return (
    <>
      <div className="blog-section bg-[#0d0d0d] w-full py-[48px] px-[101px] text-[#fff] text-center">
        <h2 className="blog-title text-[32px] font-semibold mt-[26.5px] mb-[3.2px] animate-myblog">📝My Blog</h2>
        <p className="blog-sub text-[15px] mt-[16px] mb-[32px] text-[#ccc]">
          Personal thoughts, experiences, and reflections — feel free to react!
        </p>
        <div className="blog-grid grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center  gap-[32px] animate-about">


          <div className="blog-post p-[28.8px] w-full bg-[#ffffff0d] rounded-2xl hover:bg-[#141928e6] hover:border border-[#4c7bff]  transition-transform duration-1000 ease-in-out hover:scale-102 shadow-[0_0_15px_#00ffc80d]  ">
            <h3 className="post-title mt-[19.2px] mb-[16.8px] text-[19.2px] font-semibold text-left">Why I Love Building AI Projects</h3>
            <p className="post-text mt-[15px] mb-[25px] text-[#ccc] text-[15px] text-justify text-base/6  ">
              Working on AI-based systems like mammogram cancer detection has taught me how impactful technology can be when applied to healthcare. Combining deep learning with real-world problems is my favorite way to innovate.
            </p>
            <div className="vote-container flex  align-center justify-center gap-3">
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#00ff8226] text-[#00ff82] shadow-[0_0_10px_#00ff8266] rounded-full  transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsUp /></button>
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#ffffff0d] text-[#ddd] shadow-[0_0_8px_#ffffff0d] rounded-full   transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsDown /></button>
            </div>
          </div>


          <div className="blog-post p-[28.8px] w-full bg-[#ffffff0d] rounded-2xl hover:bg-[#141928e6] hover:border border-[#4c7bff]  transition-transform duration-1000 ease-in-out hover:scale-102 shadow-[0_0_15px_#00ffc80d]  ">
            <h3 className="post-title mt-[19.2px] mb-[16.8px] text-[19.2px] font-semibold text-left">My Thoughts on Design & Aesthetics</h3>
            <p className="post-text mt-[15px] mb-[25px] text-[#ccc] text-[15px] text-justify text-base/6  ">
            I believe design should be a balance between functionality and emotion. Dark themes with minimalist layouts always inspire me to create something that feels personal and futuristic.
            </p>
            <div className="vote-container flex  align-center justify-center gap-3">
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#00ff8226] text-[#00ff82] shadow-[0_0_10px_#00ff8266] rounded-full  transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsUp /></button>
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#ffffff0d] text-[#ddd] shadow-[0_0_8px_#ffffff0d] rounded-full   transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsDown /></button>
            </div>
          </div>


          <div className="blog-post p-[28.8px] w-full bg-[#ffffff0d] rounded-2xl hover:bg-[#141928e6] hover:border border-[#4c7bff]  transition-transform duration-1000 ease-in-out hover:scale-102 shadow-[0_0_15px_#00ffc80d]  ">
            <h3 className="post-title mt-[19.2px] mb-[16.8px] text-[19.2px] font-semibold text-left">Balancing Tech and Creativity</h3>
            <p className="post-text mt-[15px] mb-[25px] text-[#ccc] text-[15px] text-justify text-base/6  ">
           As someone who codes and dances, I’ve realized creativity isn’t limited to art — it also lives in algorithms. Each project is like choreography for the mind.
            </p>
          <div className="vote-container flex  align-center justify-center gap-3">
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#00ff8226] text-[#00ff82] shadow-[0_0_10px_#00ff8266] rounded-full  transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsUp /></button>
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#ffffff0d] text-[#ddd] shadow-[0_0_8px_#ffffff0d] rounded-full   transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsDown /></button>
            </div>
          </div>

          <div className="blog-post p-[28.8px] w-full bg-[#ffffff0d] rounded-2xl hover:bg-[#141928e6] hover:border border-[#4c7bff]  transition-transform duration-1000 ease-in-out hover:scale-102 shadow-[0_0_15px_#00ffc80d]  ">
            <h3 className="post-title mt-[19.2px] mb-[16.8px] text-[19.2px] font-semibold text-left">The Beauty of Simple Code</h3>
            <p className="post-text mt-[15px] mb-[25px] text-[#ccc] text-[15px] text-justify text-base/6  ">
Clean code isn’t just about fewer lines — it’s about clarity. Elegance in code feels like poetry to me — each function should have rhythm and purpose.
            </p>
            <div className="vote-container flex  align-center justify-center gap-3">
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#00ff8226] text-[#00ff82] shadow-[0_0_10px_#00ff8266] rounded-full  transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsUp /></button>
              <button  className="w-[45.58px] h-[45.58px] align-center justify-items-center bg-[#ffffff0d] text-[#ddd] shadow-[0_0_8px_#ffffff0d] rounded-full   transition-transform duration-500 ease-in-out hover:scale-108" ><ThumbsDown /></button>
            </div>
          </div>




       


         
        
        </div>
      </div>
    </>
  );
};

export default Blog;
