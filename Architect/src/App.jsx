import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnePage from "./Page/OnePage";
import Project from "./Commponent/7-2page-Project/Project";

import Home from "./Commponent/7-2page-Project/Home";
import Blogs from "./Commponent/7-2page-Project/Blogs";
import NotFound from "./Commponent/7-2page-Project/NotFond";
import Contact from "./Commponent/7-2page-Project/Contact";
import OurInterer from "./Commponent/7-2page-Project/OurInterer";
import Blog from "./Commponent/5-Poste/Blog";
import FirstProject from "./Commponent/7-2page-Project/FirstProjects/FirstProject";
import SecondProj from "./Commponent/7-2page-Project/SecendProject/SecondProj";
import ThreeProject from "./Commponent/7-2page-Project/ThreeProject/ThreeProject";
import FourProject from "./Commponent/7-2page-Project/FourProject/FourProject";
import About from "./Commponent/8-about/About";
import Time from "./Commponent/9Time/Time";
import Contect from "./Commponent/10-Contact/Contect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnePage />} />
          <Route path="/About" element={<About />} />

          <Route path="/Blog" element={<Blog />} />
          <Route path="/FirstProject" element={<FirstProject />} />
          <Route path="/Time" element={<Time />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/SecondProj" element={<SecondProj />} />
          <Route path="/FourProject" element={<FourProject />} />
          <Route path="/ThreeProject" element={<ThreeProject />} />
          <Route path="/Project" element={<Project />}>
            <Route index element={<Home />} />
            <Route path=":postId" element={<Blogs />} />

            <Route path="contact" element={<Contact />} />
            <Route path="OurInterer" element={<OurInterer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
