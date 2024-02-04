import { useState } from "react";
import { Drawer, Radio, Space } from "antd";
import "./header.css";
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
          onClick={closeDrawer}
          className=" Menu-closeIcon d-flex justify-content-center align-items-center "
        >
          Menu <div className="mx-3 icon-x"></div>
        </div>
        <div className="content d-flex  justify-content-center align-items-center mt-4 pt-4 row px-1 gap-2 ">
          <div className=" colom col-lg-7 col-md-7 col-12 me-5">
            <h1>Home</h1>
            <h1>Projects</h1>
            <h1>About</h1>
            <div className="d-flex">
              <h3>Team</h3> <h3>Blog</h3> <h3>Contact</h3>
            </div>
          </div>
          <div className="colom ml-5 col-lg-4 col-md-5 col-12">
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
