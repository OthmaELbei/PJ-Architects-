import "./progect.css";
import "../../../public/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Progect() {
  return (
    <>
      <div className="ParenProgect ">
        <h1 className="text-center fw-bold">Recent Projects</h1>
        <div className="mx-4 mt-5 d-flex flex-row gap-2 row">
          <div className="Frist col-md-10 flex-grow-1 col-lg-5  ">
            <div className="child-frist">
              <h2>57 Cameron Street</h2>
            </div>
            <div className="child"></div>
            <img
              className="w-100 h-100"
              src="/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682.jpg"
              alt="SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682"
            />
          </div>
          <div className="Frist flex-grow-1 col-lg-5 col-md-10">
            <div className="child-frist">
              <h2>Muskoka Living Project</h2>
            </div>
            <div className="child"></div>
            <img
              className="w-100 h-100  "
              src="/smpl-design-muskoka-project-top-1024x576.jpg"
              alt="smpl-design-muskoka-project-top-1024x576"
            />
          </div>
          <div className="Frist flex-grow-1 col-lg-5 col-md-10">
            <div className="child-frist">
              <h2>OAKVILLE 2030 Project</h2>
            </div>
            <div className="child"></div>
            <img
              className="w-100 h-100 "
              src="/smpl-design-donessle-hero-1024x542.webp"
              alt="smpl-design-donessle-hero-1024x542"
            />
          </div>
          <div className=" Frist flex-grow-1  col-lg-5   col-md-10">
            <div className="child-frist">
              <h2>3358 Guildwood</h2>
            </div>
            <div className="child"></div>
            <img
              className="w-100 h-100 "
              src="/smpl-design-2030-project-hero-1024x631.webp"
              alt="smpl-design-2030-project-hero-1024x631"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center m-5  All-progect">
          <h2> View All Projects</h2>
          <div className="  icon-arrow-right2" />
        </div>
      </div>
    </>
  );
}
