// import DisyinAr from "../FirstProjects/DisyinAr";
import ImageParllax from "../FirstProjects/ImageParllax";
import PjMeun from "../FirstProjects/PjMeun";
import Work from "../FirstProjects/Work";
import ImageText from "../FirstProjects/ImageText";

import Pargraf from "../FirstProjects/Pargraf";
import Fotter from "../../6-Fotter/Fotter";
import MyData from "../../../DataProje/DataOnePage.json";
import image2 from "/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682 (1).jpg";
import Image from "../FirstProjects/Image";

export default function SecondProj() {
  const Data = MyData.Data;
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <ImageParllax Image={image2} />
        <PjMeun
          Img={
            "/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Interior-2-scaled.jpg"
          }
          Img2={"/57-Cameron-St.svg"}
          NamePj2={Data.NameProgeSecnd}
          Adres={Data.AdresSecend}
          text={Data.Pscend}
        />
        <Work />
        {/* <DisyinAr /> */}
        <Image
          Img={
            "/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Interior-2-scaled.jpg"
          }
        />
        <Pargraf prgrafs={Data.FirstPargrafImageSecend} />

        <Image Img={"/Image-tow-Secend.jpg"} />

        <Pargraf prgrafs={Data.SecenPargrafImageSecend} />
        <Image Img={"/Three-Image.jpg"} />

        <ImageText
          Imag={"/Image-Tecxt-Secend.jpg"}
          text={Data.ImageSecendTEXTE}
        />
        <Image
          Img={
            "/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Interior-11-2048x1366.jpg"
          }
        />
        <Image
          Img={
            "SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Interior-10-2048x1366.jpg"
          }
        />
        <Fotter />
      </div>
    </>
  );
}
