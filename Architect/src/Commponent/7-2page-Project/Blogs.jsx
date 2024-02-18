// import Header from "../1-Header/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Slide from "react-reveal/Slide";
export default function Blogs() {
  return (
    <>
      <div className="Prenet-project">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="gap-2 " columnsCount={4}>
            <Slide left>
              {" "}
              <img className="p-2" src="/452-Winnett-03-c.jpg" alt="" />
            </Slide>

            <Slide left>
              <img
                className="p-2"
                src="/3358-guildwood-burlington-1024x684 (1).webp"
                alt=""
              />
            </Slide>

            <Slide left>
              <img className="p-2" src="/architecture-2256489_640.jpg" alt="" />
            </Slide>

            <Slide left>
              {" "}
              <img className="p-2" src="/brick.jpg" alt="" />
            </Slide>

            <Slide left>
              <img className="p-2" src="/house-1836070_640.jpg" alt="" />
            </Slide>

            <Slide left>
              {" "}
              <img
                className="p-2"
                src="/SMPL_Deyncourt-Low-Res-15-1024x712.jpg"
                alt=""
              />
            </Slide>

            <Slide left>
              {" "}
              <img
                className="p-2"
                src="/smpl-design-2030-project-hero-1024x631.webp"
                alt=""
              />
            </Slide>

            <Slide left>
              <img
                className="p-2"
                src="/smpl-design-donessle-hero-1024x542.webp"
                alt=""
              />
            </Slide>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
