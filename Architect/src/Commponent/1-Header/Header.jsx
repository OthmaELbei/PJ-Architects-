import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { useState } from "react";

import MyData from "../../DataProje/DataOnePage.json";
import Menu from "./Menu";
import "../../../public/style.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const change = () => {
    setOpen(!open);
  };
  const data = MyData.Data;
  return (
    <>
      <nav className="sticky-top d-flex mx-5 justify-content-center align-items-center header  bck-Header  navbar navbar-expand-lg  ">
        <div
          // style={open ? { color: "black" } : { color: "#ecf39e" }}
          style={open ? { color: "black" } : { color: "#f3ff70" }}
          className="   container-fluid"
        >
          {data.logo}

          <Menu change={open} setOpen={setOpen} />
          <div
            className=" Menu-icon d-flex justify-content-center align-items-center "
            style={open ? { opacity: "0" } : { opacity: "1" }}
            onClick={change}
          >
            Menu <div className="mx-3 icon-plus1"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
