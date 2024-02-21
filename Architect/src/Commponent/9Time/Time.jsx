import { Slide } from "react-reveal";
import Header from "../1-Header/Header";
import Menu from "../1-Header/Menu";
import Fotter from "../6-Fotter/Fotter";
import "./Stiyle.css";

export default function Time() {
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <Header />
        <Menu />
        <div className="py-5 mx-5">
          <Slide left>
            <p className="py-5  Pargraf">
              Our diverse and experienced team has grown to 20+ members since
              the companys’ establishment in 2010. Architectural and Interior
              design, permit and conservation specialists, drafters, and a
              structural engineer come together to create and collaborate in our
              office, located in downtown Hamilton.
            </p>
          </Slide>
          <div className="row mx-3 d-flex flex-wrap">
            <div className=" col-lg-4 flex-grow-1 ">
              <img className=" w-100" src="/smpl-Blank.jpg" alt="" />
              <h6 className=" py-4">Lindsey Bruce Director of Operations</h6>
            </div>

            <div className=" col-lg-4 flex-grow-1   ">
              <img className="w-100 " src="/smpl-Blank.jpg" alt="" />
              <h6 className=" py-4">Lindsey Bruce Director of Operations</h6>
            </div>

            <div className=" col-lg-4  flex-grow-1 ">
              <img className=" w-100 " src="/smpl-Blank.jpg" alt="" />
              <h6 className="  py-4">Lindsey Bruce Director of Operations</h6>
            </div>
          </div>
        </div>
        <Fotter />
      </div>
    </>
  );
}
