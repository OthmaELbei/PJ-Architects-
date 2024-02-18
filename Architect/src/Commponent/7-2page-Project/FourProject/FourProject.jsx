import ImageParllax from "../FirstProjects/ImageParllax";
import PjMeun from "../FirstProjects/PjMeun";
import Image from "../FirstProjects/Image";
import Work from "../FirstProjects/Work";

import Pargraf from "../FirstProjects/Pargraf";
import TowImage from "../FirstProjects/TowImage";

import Fotter from "../../6-Fotter/Fotter";
import MyData from "../../../DataProje/DataOnePage.json";
import image from "/smpl-design-muskoka-project-top-1024x576.jpg";
export default function FourProject() {
  const Data = MyData.Data;
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <ImageParllax Image={image} />
        <PjMeun
          Img2={"/muskoka-living-project-sketch.svg"}
          Img={"/FourProject.webp"}
          NamePj2={Data.NameProjeFour}
          Adres={Data.AdresFour}
          text={Data.PFour}
        />
        <Work />
        <Image Img={"/2-fourPreje.webp"} />

        <Image Img={"/4-fourProje.webp"} />
        <TowImage
          FirstImage={"/5-FOURproje.webp"}
          secendImage={"/6-fourPorjje.webp"}
        />
        <Pargraf prgrafs={Data.guildwoodburlington2} />

        <Image Img={"/7-FourProject.webp"} />

        <Fotter />
      </div>
    </>
  );
}
