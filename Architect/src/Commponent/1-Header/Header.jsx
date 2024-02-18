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
          style={open ? { color: "black" } : { color: "#ecf39e" }}
          className="   container-fluid"
        >
          {data.logo}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ transition: "0.6s" }}
            className="d-flex d-md-none ml-5 ObchenPage d-xs-none justify-content-end collapse  navbar-collapse"
            id="navbarSupportedContent"
          >
            <Menu change={open} setOpen={setOpen} />
            <div
              className=" Menu-icon d-flex justify-content-center align-items-center "
              style={open ? { opacity: "0" } : { opacity: "1" }}
              onClick={change}
            >
              Menu <div className="mx-3 icon-plus1"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
