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
          backgroundColor: "#ecf39e",
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
          <div className="  col ">
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>
            <Link to={"/Project"}>
              <h1>Projects</h1>
            </Link>
            <Link to={"/About"}>
              <h1>About</h1>
            </Link>
            <div className="d-flex">
              <Link to={"/Time"}>
                <h3>Team</h3>
              </Link>
              <Link to={"/Blog"}>
                <h3>Blog</h3>
              </Link>
              <Link to={"/Contect"}>
                <h3>Contact</h3>
              </Link>
            </div>
          </div>
          <div className=" col ">
            <h5 className="my-5">STUDIO</h5>
            <h4>
              15 Colbourne Street Hamilton,
              <br /> Ontario L8R 2G2
            </h4>
            <h5 className="my-5">CONTACT</h5>
            <h4>
              905.529.SMPL (7675) <br /> contact@smpldesignstudio.com
            </h4>
            <h5 className="my-5">SOCIAL</h5>
            <h4>
              Instagram <br /> Facebook
            </h4>
          </div>
        </div>
        <div className="row justify-content-center  pt-5">
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
