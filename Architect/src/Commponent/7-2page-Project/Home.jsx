import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Slide from "react-reveal/Slide";
export default function Home() {
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

            <Slide left>
              {" "}
              <img
                className="p-2"
                src="/SMPL_Deyncourt-Low-Res-15-1024x712.jpg"
                alt=""
              />
            </Slide>

            <Slide left>
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
            <Slide left>
              {" "}
              <img
                className="p-2"
                src="/smpl-design-muskoka-project-top-1024x576.jpg"
                alt=""
              />
            </Slide>

            <Slide left>
              <img
                className="p-2"
                src="/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682 (1).jpg"
                alt=""
              />
            </Slide>

            <Slide left>
              <img
                className="p-2"
                src="/MNP-PSLD-10MOR-069-1024x767.jpg"
                alt=""
              />
            </Slide>

            <Slide left>
              <img className="p-2" src="/hero-1024x576.jpg" alt="" />
            </Slide>

            <Slide left>
              <img
                className="p-2"
                src="/574-Mountain-Brow-01-1024x576.jpg"
                alt=""
              />
            </Slide>

            <Slide left>
              {" "}
              <img
                className="p-2"
                src="/SMPL_Weirs_Web-Res-12-1024x654.jpg"
                alt=""
              />
            </Slide>

            <Slide left>
              {" "}
              <img
                className="p-2"
                src="/featuredesmpl-Design-Studio-thevillainhouse-Selwyn-Smaller-Files-6-1024x684.jpg"
                alt=""
              />
            </Slide>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
