import React from 'react'

const Resume = () => {
  return (
    <div className='container'>
    <div className='card'>
        <h2>📄 Resume</h2>
      <p>A quick glance at my journey.</p>
      <div className='sub1'>
        <div className='name'>
          <h3>👨‍💻 ASHUTOSH MARAN</h3>
          <p>3rd Year B.Tech — Computer Science and Engineering (CSE) | IES Collage Of Technology </p>
          <p>📍 Jahangirpura, Surat, Gujarat</p>
          <p>✉️ kunjd2803@gmail.com | 📞 +91 8758209508</p>
        </div>
        <div className='summary'>
          <strong>Professional Summary:</strong>
          <p>4th-year B.Tech AI student experienced in ML, DL, and computer vision. Skilled in Python, TensorFlow, PyTorch, and Scikit-learn. Passionate about building impactful AI systems and seeking opportunities to contribute to real-world AI projects.</p>
        </div>
      </div>
      <div className='education'>
        <h4>🎓 Education</h4>
        <ul>
          <li>
            <strong>B.Tech in Artificial Intelligence & Data Science</strong>
            — S.C.E.T (Sarvajanik University), 2022–2026
            <br></br>
            <span>GPA: 9.0</span>
          </li>
          <li>
            <strong>12th Board — R.S.M. Poonawala Experimental School </strong>
            (Gujarat Board, 2022)
            <br></br>
            <span>Percentage: 78%</span>
          </li>
          <li>
            <strong>10th Board — Ambika Niketan School</strong>
             (Gujarat Board, 2020)
            <br></br>
            <span>Percentage: 85%</span>
          </li>
          
        </ul>
      </div>
      <div className='projects'>
        
        <h4>💼 Projects</h4>
        <ul>
          <li>1️⃣ Breast Cancer Detection from Mammograms using YOLO & CNN</li>
          <li>2️⃣ DocuChat: Document Q&A Chatbot (Gemini API)</li>
          <li>3️⃣ Indian Sign Language Interpreter (In Progress)</li>
          <li>4️⃣ Mental Health Analyzer</li>
        </ul>
      </div>
      <div className='skills'>
        <h4>⚙️ Skills</h4>
        <div className='skills_name'>
          <span>C</span>
          <span>C++</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>Problem Solving</span>
          <span>Teamwork</span>
          <span>Adaptability</span>
          <span>Creativity</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Resume