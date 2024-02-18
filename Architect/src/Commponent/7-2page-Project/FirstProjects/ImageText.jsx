import { Image } from "antd";
import { Slide } from "react-reveal";

export default function ImageText(p) {
  return (
    <>
      <div className=" row mx-5  d-flex  justify-content-end align-items-center">
        <Slide top>
          <div className="col-lg-4  w-25 py-5 h-100 col-md-4 col-12">
            <Image
              className="w-100 h-100"
              src={p.Imag}
              alt="smpl-design-2030-Project-4"
            />
          </div>
        </Slide>
        <Slide top>
          <div className="col-lg-8 px-5 mx-5 flex-grow-1 py-5 h-50 col-md-8 col-12">
            <p className="fs-3 text-stert">{p.text}</p>
          </div>
        </Slide>
      </div>
    </>
  );
}
