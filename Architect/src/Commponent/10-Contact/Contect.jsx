// import { useState } from "react";

import Menu from "../1-Header/Menu";
import Header from "../1-Header/Header";
import Contec from "./Contec";
import Fotter from "../6-Fotter/Fotter";

// import TextArea from "antd/es/input/TextArea";

export default function Contect() {
  return (
    <>
      <section>
        <div className="" style={{ backgroundColor: "#fcffeb" }}>
          <Menu />
          <Header />
          <div className=" row py-5 mx-3  ">
            <Contec />
            <div className="col-lg-6 col-md-6 flex-grow-1 col-12 w-50 h-100">
              <img className=" w-100 h-100" src="/smpl-contact-01.jpg" alt="" />
            </div>
          </div>
          <div>
            <iframe
              className="py-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53379.77285349089!2d-7.622173844308379!3d33.26031852921742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63ce8fa04c5cf%3A0xc1041e48089e20f!2sBerrchid!5e0!3m2!1sfr!2sma!4v1708197206474!5m2!1sfr!2sma"
              width="100%"
              height="600px"
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Responsive gooogle Map"
            ></iframe>
          </div>
          <Fotter />
        </div>
      </section>
    </>
  );
}
