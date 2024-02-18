import Header from "../1-Header/Header";
import Menu from "../1-Header/Menu";
import MyData from "../../DataProje/DataOnePage.json";
import TxtImgAbout from "./TxtImgAbout";
import ImgTextAbout from "./ImgTextAbout";
import Fotter from "../6-Fotter/Fotter";
export default function About() {
  const Data = MyData.Data;
  return (
    <>
      <div style={{ backgroundColor: "#fcffeb" }}>
        <Header />
        <Menu />
        <TxtImgAbout
          Imag="/About-1.jpg"
          text={Data.teaxtAbout2}
          text2={Data.teaxtAbout}
        />
        <ImgTextAbout
          Imag={"/Img-About-2.jpg"}
          text={Data.teaAb2}
          text2={Data.teaxtAbout}
        />
        <TxtImgAbout
          Imag={"/3-About.jpg"}
          text={Data.teaxtt2}
          text2={Data.teaxtAbout}
        />
        <ImgTextAbout
          Imag={"/4-About.jpg"}
          text={Data.teaxtAbout2}
          text2={Data.teaxtAbout}
        />
        <Fotter />
      </div>
    </>
  );
}
