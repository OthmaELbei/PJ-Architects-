import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Slide from "react-reveal/Slide";
export default function OurInterer() {
  return (
    <div className="Prenet-project">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gap-2 " columnsCount={4}>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home1.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home2.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home3.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home4.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home5.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home6.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home7.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home8.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home9.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home11.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home12.jpg" alt="" />
          </Slide>
          <Slide left>
            {" "}
            <img className="p-2" src="/IN-Home13.jpg" alt="" />
          </Slide>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
