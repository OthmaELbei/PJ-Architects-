import Header from "../../1-Header/Header";
import Menu from "../../1-Header/Menu";
import { Parallax } from "react-parallax";
export default function ImageParllax(p) {
  return (
    <>
      <Parallax
        strength={600}
        bgImage={p.Image}
        bgImageStyle={{ width: "1600px", height: "100vh" }}
      >
        <Header />
        <Menu />
        <div className="content"></div>
      </Parallax>
    </>
  );
}
