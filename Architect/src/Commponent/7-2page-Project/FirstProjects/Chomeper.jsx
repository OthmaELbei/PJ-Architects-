import { Image } from "antd";
import Slide from "react-reveal/Slide";

export default function Chomeper() {
  return (
    <>
      <div className=" row mx-2  d-flex  justify-content-end align-items-center">
        <Slide top>
          <div className="col-lg-4  w-25 py-5 h-100 col-md-4 col-12">
            <Image
              className="w-100 h-100"
              src="smpl-design-2030-Project-4.webp"
              alt="smpl-design-2030-Project-4"
            />
          </div>
        </Slide>
        <Slide top>
          <div className="col-lg-8 px-5 mx-5 flex-grow-1 py-5 h-50 col-md-8 col-12">
            <p className="fs-3 text-stert">
              Super insulated walls, Triple Pane energy efficient windows, and a
              large photovoltaic array on the roof, and 95% recycled material
              siding are just the start of the list of details that make up this
              tremendous home in Bronte.
            </p>
          </div>
        </Slide>
      </div>
    </>
  );
}
