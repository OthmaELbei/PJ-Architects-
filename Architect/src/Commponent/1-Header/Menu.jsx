import { useState } from "react";
import { Drawer, Radio, Space } from "antd";
import "./header.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Menu = ({ change, setOpen }) => {
  // const [open, setOpen] = useState(true);
  const [placement, setPlacement] = useState("top");

  const closeDrawer = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space className="hj">
        <Radio.Group value={placement} onChange={onChange}>
          {/* <Radio value="top">top</Radio> */}
        </Radio.Group>
      </Space>
      <Drawer
        style={{
          backgroundColor: "#d8dda4",
          height: "100vh",
          position: "relative",
          zIndex: "1234567",
          transition: "0.6s",
        }}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={change}
        key={placement}
      >
        <div
          style={{ transition: "0.6s" }}
          onClick={closeDrawer}
          className=" Menu-closeIcon d-flex justify-content-center align-items-center "
        >
          Menu <div className="mx-3 icon-x"></div>
        </div>
        <div className="row contente d-flex ">
          <div className=" Links-Menu d-flex py-5 flex-column col ">
            <Link className="Link-Menu" to={"/"}>
              Home
            </Link>
            <Link className="Link-Menu" to={"/Project"}>
              Projects
            </Link>
            <Link className="Link-Menu" to={"/About"}>
              About
            </Link>
            <div className="d-flex">
              <Link className="Link-M" to={"/Time"}>
                Team
              </Link>
              <Link className="Link-M" to={"/Blog"}>
                Blog
              </Link>
              <Link className="Link-M" to={"/Contect"}>
                Contact
              </Link>
            </div>
          </div>
          <div className=" col py-5 Content-Menu ">
            <h3 style={{ fontWeight: "300", marginLeft: "0" }} className="my-5">
              STUDIO
            </h3>
            <h2 style={{ fontWeight: "100" }} className="fst-normal">
              15 Colbourne Street Hamilton,
              <br /> Ontario L8R 2G2
            </h2>
            <h3 style={{ fontWeight: "300", marginLeft: "0" }} className="my-5">
              CONTACT
            </h3>
            <h2 style={{ fontWeight: "100" }}>
              905.529.SMPL (7675) <br /> contact@smpldesignstudio.com
            </h2>
            <h3 style={{ fontWeight: "300", marginLeft: "0" }} className="my-5">
              SOCIAL
            </h3>
            <h2 style={{ fontWeight: "100" }}>
              Instagram <br /> Facebook
            </h2>
          </div>
        </div>
        <div className="row justify-content-center  ">
          <div className="col-lg-3 col-md-6 col-12">
            ALL RIGHTS RESERVED SMPL DESIGN STUDIO.
          </div>
          <div className="col-lg-3 col-md-6 col-12">PRIVACY POLICY</div>
          <div className="col-lg-3 col-md-6 col-12">#GNARLYDESIGNS</div>
          <div className="col-lg-3 col-md-6 col-12">
            DESIGNED BY THRILLHOUSE STUDIOS
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Menu;
