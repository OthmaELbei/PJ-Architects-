// import { useState } from "react";
// // import { Input } from "antd";
// import Menu from "../1-Header/Menu";
// import Header from "../1-Header/Header";
// import Places from "./Places";

// import TextArea from "antd/es/input/TextArea";

export default function Contect() {
  return (
    <>
      {/* <div style={{ backgroundColor: "#fcffeb" }}>
        <Menu />
        <Header />
        <div className="row py-5 mx-2">
          {/* <div className="col">
            <TextArea
              placeholder="Autosize height based on content lines"
              autoSize
            />
            <div
              style={{
                margin: "24px 10px",
                border: "none",
              }}
            />
            <TextArea
              placeholder="Autosize height with minimum and maximum number of lines"
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
            />
            <div
              style={{
                margin: "24px 0",
              }}
            />
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Controlled autosize"
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
          </div> */}
      {/* <div className="col w-50 h-100">
            <img className=" w-100 h-100" src="/smpl-contact-01.jpg" alt="" />
          </div>
        </div> */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53379.77285349089!2d-7.622173844308379!3d33.26031852921742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63ce8fa04c5cf%3A0xc1041e48089e20f!2sBerrchid!5e0!3m2!1sfr!2sma!4v1708197206474!5m2!1sfr!2sma"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Responsive gooogle Map"
        ></iframe>
      </div>
      {/* </div> */}
    </>
  );
}
