import Fotter from "../../6-Fotter/Fotter";
import DisyinAr from "../FirstProjects/DisyinAr";
import Image from "../FirstProjects/Image";
import ImageParllax from "../FirstProjects/ImageParllax";
import ImageText from "../FirstProjects/ImageText";
import Pargraf from "../FirstProjects/Pargraf";
import PjMeun from "../FirstProjects/PjMeun";
import TowImage from "../FirstProjects/TowImage";
import Work from "../FirstProjects/Work";
import MyData from "../../../DataProje/DataOnePage.json";
import image from "/3358-guildwood-burlington-1024x684 (1).webp";

export default function ThreeProject() {
  const Data = MyData.Data;
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <ImageParllax Image={image} />
        <PjMeun
          Img2={"/3358-guildwood-burlington-full-sketch.svg"}
          Img={"/3358-guildwood-burlington-4.webp"}
          NamePj2={Data.NameProjeThree}
          Adres={Data.AdresThree}
          text={Data.PThree}
        />
        <Work />
        <Image Img={"/3358-guildwood-burlington-5.webp"} />
        <DisyinAr
          Image1={"/3358-guildwood-burlington-site-plan.webp"}
          Image2={"/3358-guildwood-burlington-floor-plan-3.webp"}
          Image4={"/3358-guildwood-burlington-floor-plan-2.webp"}
          Image3={"/3358-guildwood-burlington-floor-plan-1.webp"}
        />
        <Image Img={"/3358-guildwood-burlington-4.webp"} />

        <Pargraf prgrafs={Data.guildwoodburlington} />

        <TowImage
          FirstImage={"/3358-guildwood-burlington-sq-1.webp"}
          secendImage={"/3358-guildwood-burlington-sq-5.webp"}
        />

        <Image Img={"/3358-guildwood-burlington-1.webp"} />

        <Pargraf prgrafs={Data.guildwoodburlington2} />

        <Image Img={"/3358-guildwood-burlington-2.webp"} />
        <TowImage
          FirstImage={"/3358-guildwood-burlington-sq-4.webp"}
          secendImage={"/3358-guildwood-burlington-sq-2.webp"}
        />
        <ImageText
          Imag={"/3358-guildwood-burlington-sq-3.webp"}
          text={Data.textImageSecend}
        />
        <Image Img={"/3358-guildwood-burlington-3.webp"} />

        <Fotter />
      </div>
    </>
  );
}
