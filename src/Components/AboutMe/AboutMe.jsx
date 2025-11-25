import React from "react";
import { Landmark , GraduationCap,School} from "lucide-react";

const AboutMe = () => {
  return (
    <>
      <div className="about-container px-[16px] py-[48px]  flex-col items-center justify-items-center bg-[#0d0d0d] text-[#fff] ">
        <div className="about-card w-full py-[48px] px-[56px] max-w-6xl bg-[#ffffff0a] rounded-2xl shadow-[0_0_25px_#00ffc814] animate-about">
          <h2
            className="section-title text-3xl mt-10 mb-7 font-bold text-[#00b4ff]
             "
          >
            About Me
          </h2>
          <p className="about-text my-[17.6px] text-[17px] leading-7.5 text-[#ffffffd9] text-justify ">
            Hi, I’m <strong>Ashutosh Maran</strong> — an aspiring{" "}
            <strong>Artificial Intelligence</strong> Engineer and{" "}
            <strong>Machine Learning enthusiast</strong> who loves turning ideas
            into intelligent systems. I’m deeply fascinated by how data and
            algorithms can shape the future of healthcare, automation, and
            creativity in technology.
          </p>

          <p className="about-text my-[17.6px] text-[17px] leading-7.5 text-[#ffffffd9] text-justify ">
            Beyond code, I enjoy exploring design, experimenting with motion and
            interaction, and blending artistic creativity with{" "}
            <strong>technical precision</strong>. My goal is to build solutions
            that not only perform — but also inspire.
          </p>

          <p className="about-text my-[17.6px] text-[17px] leading-7.5 text-[#ffffffd9] text-justify ">
            4th-year B.Tech AI Engineering student with hands-on experience in
            ML & DL Projects. Proficient in Python, scikit-learn, PyTorch,
            TensorFlow and data preprocessing. Seeking internship opportunities
            to contribute to impactful AI solutions.
          </p>

          <div className="education-section animate-list">
            <h3 className="section-subtitle my-[58px] text-[25.6px] font-semibold text-[#00b4ff]">
              Education
            </h3>
            <div className="education-list flex flex-col gap-[19.2px]">
              <div className="edu-card flex items-center gap-5 py-[24px] px-[32px] bg-[#ffffff0d] rounded-2xl  border border-[rgba(255,255,255,0.08)] shadow-[0_0_15px_#00ffc80d] hover:animate-card  ">
                <div className="icon ">
                  <Landmark size={40} color="#00b4ff" />
                </div>
                <div className="edu-details  ">
                  <h4 className="edu-title text-[#00b4ff] text-xl font-semibold mt-6 mb-2 ">
                    B.Tech in Computer Science Engineering 
                  </h4>
                  <p className="edu-sub text-[16px] text-[#ffffffd9] mt-[16px] mb-[3.2px]">
                    <strong>IES Collage Of Technology</strong> — Bhopal,
                    Madhya Pradesh
                  </p>
                  <p className="edu-info my-[14.4px] text-sm text-[#ffffffb3]">
                    3rd Year (Pursuing) | GPA: 9.0
                  </p>
                  <p className="edu-info  my-[14.4px] text-sm text-[#ffffffb3]">
                    2023 – 2027
                  </p>
                </div>
              </div>



              <div className="edu-card flex items-center gap-5 py-[24px] px-[32px] bg-[#ffffff0d] rounded-2xl  border border-[rgba(255,255,255,0.08)] shadow-[0_0_15px_#00ffc80d] hover:animate-card  ">
                <div className="icon ">
                   <GraduationCap  size={40} color="#00b4ff" />
                </div>
                <div className="edu-details ">
                  <h4 className="edu-title text-[#00b4ff] text-xl font-semibold mt-6 mb-2 ">
                    Higher Secondary Education (12th)
                  </h4>
                  <p className="edu-sub text-[16px] text-[#ffffffd9] mt-[16px] mb-[3.2px]">
                    <strong>Sagar Vidhya Niketan</strong> — Bhopal
                    
                  </p>
                  <p className="edu-info my-[14.4px] text-sm text-[#ffffffb3]">
                  Percentage: 78%
                  </p>
                  <p className="edu-info  my-[14.4px] text-sm text-[#ffffffb3]">
                   Completed in 2023
                  </p>
                </div>
              </div>



              <div className="edu-card flex items-center gap-5 py-[24px] px-[32px] bg-[#ffffff0d] rounded-2xl  border border-[rgba(255,255,255,0.08)] shadow-[0_0_15px_#00ffc80d] hover:animate-card ">
                <div className="icon ">
           <School size={40} color="#00b4ff"/>    
                </div>
                <div className="edu-details  ">
                  <h4 className="edu-title text-[#00b4ff] text-xl font-semibold mt-6 mb-2 ">
                   Secondary Education (10th)
                  </h4>
                  <p className="edu-sub text-[16px] text-[#ffffffd9] mt-[16px] mb-[3.2px]">
                    <strong>Sagar Vidhya Niketan</strong> — Bhopal
                  </p>
                  <p className="edu-info my-[14.4px] text-sm text-[#ffffffb3]">
                    Percentage: 69%
                  </p>
                  <p className="edu-info  my-[14.4px] text-sm text-[#ffffffb3]">
                   Completed in 2021
                  </p>
                </div>
              </div>

          

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
