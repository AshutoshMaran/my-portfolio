import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Layout/Layout";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Certificates from "./Components/Certificates/Certificates";
import Blog from "./Components/Blog/Blog";
import AboutMe from "./Components/AboutMe/AboutMe";


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
       <Route   path="/home" element={<Home/>}/>
       <Route path="/projects" element={<Projects/>} />
       <Route path="/gallery" element={<Gallery/>} />
       <Route path="/skills" element={<Skills/>}/>
       <Route path="/resume" element={<Resume/>}/>
       <Route path="certificates" element={<Certificates/>}/>
       <Route path="/blog" element={<Blog/>} />
       <Route path="/resume" element={<Resume/>} />
       <Route path="/about"    element={<AboutMe/>}/>
       <Route path="/contact"    element={<Contact/>}/>
      </Route>
    </Routes>

    </>
  )
}
export default App
