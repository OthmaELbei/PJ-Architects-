import { Image } from "antd";
import { Slide } from "react-reveal";

export default function TowImage(p) {
  return (
    <>
      <div className="row mx-2  d-flex  justify-content-end align-items-center">
        <Slide top>
          <div className="col-lg-5  w-50 py-5 h-100 col-md-5 col-12">
            <Image
              className="w-100 h-100"
              src={p.FirstImage}
              alt="smpl-design-2030-Project-4"
            />
          </div>
        </Slide>
        <Slide top>
          <div className="col-lg-5  w-50 py-5 h-100 col-md-5 col-12">
            <Image
              className="w-100 h-100"
              src={p.secendImage}
              alt="smpl-design-2030-Project-4"
            />
          </div>
        </Slide>
      </div>
    </>
  );
}
