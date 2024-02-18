import ".././7-2page-Project/project.css";
import "../../../public/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
export default function Progect() {
  return (
    <>
      <div className="ParenProgect ">
        <h1 className="text-center fw-bold">Recent Projects</h1>
        <div className="mx-4 mt-5 d-flex flex-row gap-2 row">
          <div className="Frist col-md-10 flex-grow-1 col-lg-5  ">
            <div className="child-frist">
              <Link to={"/SecondProj"}>
                <h2>57 Cameron Street</h2>
              </Link>
            </div>
            <div className="child"></div>
            <Slide left>
              <img
                className="w-100 h-100"
                src="/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682.jpg"
                alt=""
              />
            </Slide>
          </div>
          <div className="Frist flex-grow-1 col-lg-5 col-md-10">
            <div className="child-frist">
              <Link to={"/FourProject"}>
                <h2>Muskoka Living Project</h2>
              </Link>
            </div>
            <div className="child"></div>
            <Slide right>
              <img
                className="w-100 h-100  "
                src="/smpl-design-muskoka-project-top-1024x576.jpg"
                alt="smpl-design-muskoka-project-top-1024x576"
              />
            </Slide>
          </div>
          <div className="Frist flex-grow-1 col-lg-5 col-md-10">
            <div className="child-frist">
              <Link to={"/ThreeProject"}>
                <h2>OAKVILLE 2030 Project</h2>
              </Link>
            </div>
            <div className="child"></div>
            <Slide left>
              <img
                className="w-100 h-100 "
                src="/3358-guildwood-burlington-1024x684 (1).webp"
                alt="smpl-design-donessle-hero-1024x542"
              />
            </Slide>
          </div>
          <div className=" Frist flex-grow-1  col-lg-5   col-md-10">
            <div className="child-frist">
              <Link to={"/FirstProject"}>
                <h2>3358 Guildwood</h2>
              </Link>
            </div>
            <div className="child"></div>
            <Slide right>
              <img
                className="w-100 h-100 "
                src="/smpl-design-2030-project-hero-1024x631.webp"
                alt="smpl-design-2030-project-hero-1024x631"
              />
            </Slide>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center m-5  All-progect">
          <Link
            className="d-flex justify-content-end align-items-center m-5  progect"
            to={"/Project"}
          >
            <h2> View All Projects</h2>
            <div className="  icon-arrow-right2" />
          </Link>
        </div>
      </div>
    </>
  );
}
