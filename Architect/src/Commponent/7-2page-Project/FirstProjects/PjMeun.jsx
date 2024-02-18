import Slide from "react-reveal/Slide";

export default function PjMeun(P) {
  return (
    <>
      <div
        style={{ borderBottom: " 1px solid black" }}
        className="  row  gap-3 mx-2 py-5  "
      >
        <div className="col-lg-5 mx-3 prje col-md-6 col-12">
          <Slide left>
            <img className="py-5" src={P.Img2} alt="" />
          </Slide>
          <Slide left>
            <h6 className="py-3 fs-4"> {P.NamePj2} </h6>
          </Slide>
          <Slide left>
            <h1 className="py-2 fs-1"> {P.Adres} </h1>
          </Slide>
          <Slide left>
            <p className="py-5 fs-4 font-weight-lighter">{P.text}</p>
          </Slide>
        </div>
        <div className="imgss col-lg-5 mx-5 col-md-6 col-12">
          <div style={{ width: "100%", height: "100%" }}>
            <Slide right>
              <img
                style={{ width: "100%", height: "100%" }}
                src={P.Img}
                alt=""
              />
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}
