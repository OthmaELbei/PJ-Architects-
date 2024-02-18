import { Image } from "antd";
import { Slide } from "react-reveal";

export default function TxtImgAbout(p) {
  return (
    <>
      {" "}
      <div className=" row mx-2  d-flex ">
        <Slide top>
          <div className="col-lg-4 px-2 mx-5 w-50 py-5 h-50 col-md-5 col-12">
            <p className="fs-3 text-stert">{p.text}</p>
            <p className="fs-5 text-stert">{p.text2}</p>
          </div>
        </Slide>
        <Slide top>
          <div className="col-lg-5 py-5 h-100 col-md-5 col-12">
            <Image
              className="w-100 h-100"
              src={p.Imag}
              alt="smpl-design-2030-Project-4"
            />
          </div>
        </Slide>
      </div>
    </>
  );
}
