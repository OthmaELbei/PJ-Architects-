import Header from "../1-Header/Header";
import Menu from "../1-Header/Menu";
import Fotter from "../6-Fotter/Fotter";

export default function Time() {
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <Header />
        <Menu />
        <div className="py-5 mx-5">
          <p className="fs-4 py-5 ">
            Our diverse and experienced team has grown to 20+ members since the
            companys’ establishment in 2010. Architectural and Interior design,
            permit and conservation specialists, drafters, and a structural
            engineer come together to create and collaborate in our office,
            located in downtown Hamilton.
          </p>
          <div className="row mx-5 py-5  gap-2 ">
            <div className="col w-100 h-100  ">
              <img className=" w-100 h-100" src="/smpl-Blank.jpg" alt="" />
              <h6 className="fs-4 py-4">
                Lindsey Bruce Director of Operations
              </h6>
            </div>

            <div className="col w-100 h-100 ">
              <img className=" w-100 h-100" src="/smpl-Blank.jpg" alt="" />
              <h6 className="fs-4 py-4">
                Lindsey Bruce Director of Operations
              </h6>
            </div>

            <div className="col w-100 h-100  ">
              <img className=" w-100 h-100" src="/smpl-Blank.jpg" alt="" />
              <h6 className=" fs-4 py-4">
                Lindsey Bruce Director of Operations
              </h6>
            </div>
          </div>
        </div>
        <Fotter />
      </div>
    </>
  );
}
