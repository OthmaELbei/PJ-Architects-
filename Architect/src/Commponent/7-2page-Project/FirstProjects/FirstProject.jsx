import image from "/smpl-design-2030-project-hero-1024x631.webp";

import ".././project.css";

import PjMeun from "./PjMeun";

import Work from "./Work";
import DisyinAr from "./DisyinAr";

import Image from "./Image";
import Pargraf from "./Pargraf";
import MyData from "../../../DataProje/DataOnePage.json";
import TowImage from "./TowImage";
import ImageText from "./ImageText";
import ImageParllax from "./ImageParllax";

import Fotter from "../../6-Fotter/Fotter";

export default function FirstProject() {
  const Data = MyData.Data;
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <ImageParllax Image={image} />
        <PjMeun
          Img2={"/smpl-2030-project-final-sketch.svg"}
          Img={"/smpl-design-2030-Project-1.webp"}
          NamePj2={Data.NameProjeOne}
          Adres={Data.AdresOne}
          text={Data.POne}
        />
        <Work />
        <DisyinAr
          Image1={"/smpl-design-2030-site-plan.webp"}
          Image2={"/smpl-design-2030-project-floor-plan-3.webp"}
          Image4={"/smpl-design-2030-project-floor-plan-2.webp"}
          Image3={"/smpl-design-2030-project-floor-plan-1.webp"}
        />
        <Image Img={"/smpl-design-2030-Project-2.webp"} />

        <ImageText
          Imag={"/smpl-design-2030-Project-4.webp"}
          text={Data.textImageSecend}
        />
        <TowImage
          FirstImage={"smpl-design-2030-Project-7.webp"}
          secendImage={"smpl-design-2030-Project-5.webp"}
        />
        <ImageText
          Imag={"/smpl-design-2030-Project-8.webp"}
          text={Data.textImageSecend}
        />
        <Image Img={"/smpl-design-2030-Project-9.webp"} />
        <Pargraf prgrafs={Data.prgrafFirstProjeects} />
        <TowImage
          FirstImage={"smpl-design-2030-Project-3.webp"}
          secendImage={"smpl-design-2030-Project-10.webp"}
        />
        <Fotter />
      </div>
    </>
  );
}
