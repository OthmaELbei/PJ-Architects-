import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Slide from "react-reveal/Slide";

export default function Contact() {
  return (
    <div className="Prenet-project">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gap-2 " columnsCount={4}>
          <Slide left>
            {" "}
            <img className="p-2" src="/brick.jpg" alt="" />
          </Slide>

          <Slide left>
            {" "}
            <img className="p-2" src="/Cladding.webp" alt="" />
          </Slide>

          <Slide left>
            {" "}
            <img className="p-2" src="/Courtyards.jpg" alt="" />
          </Slide>

          <Slide left>
            {" "}
            <img className="p-2" src="/featured-1-1024x576.jpg" alt="" />
          </Slide>

          <Slide left>
            {" "}
            <img
              className="p-2"
              src="/Hero2023.02.15-1024-Lake-Dr._2-1024x576.jpg"
              alt=""
            />
          </Slide>

          <Slide left>
            {" "}
            <img
              className="p-2"
              src="/hero22023.04.20-85-high-res_9-1024x576.jpg"
              alt=""
            />
          </Slide>

          <Slide left>
            {" "}
            <img className="p-2" src="/house-1477041_640.jpg" alt="" />
          </Slide>

          <Slide left>
            <img className="p-2" src="/house-1836070_640.jpg" alt="" />
          </Slide>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
