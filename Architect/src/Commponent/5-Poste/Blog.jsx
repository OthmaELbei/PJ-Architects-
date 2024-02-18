import { Menu } from "antd";
import Header from "../1-Header/Header";
import Fotter from "../6-Fotter/Fotter";

export default function Blog() {
  return (
    <>
      <div className="Prenet-Blog">
        <Header />
        <Menu />
        <div className="Contener">
          <h3>Archives</h3>
          <div className="py-3">
            <h2>Courtyards</h2>

            <img
              className="py-2"
              style={{ width: "100%", height: "600px" }}
              src="/house-1477041_640.jpg"
              alt="house-1477041_640"
            />
            <p>
              Courtyards are a design intervention that have been around for
              centuries, and are typically an open, outdoor space surrounded by
              walls. Traditional houses don’t usually include this feature, so
              why would you want to include one in the design of your custom
              home, cottage, or modern renovation/addition? Using the smpl
              method, we can help to […]
            </p>
          </div>
          <div className="py-3">
            <h2>2030 Project, Oakville Ontario</h2>

            <img
              className="py-2"
              style={{ width: "100%", height: "600px" }}
              src="/smpl-design-donessle-hero-1024x542.webp"
              alt="smpl-design-donessle-hero-1024x542"
            />
            <p>
              A strong set of forms clad in two opposing materials, which come
              together to create a stunning and unique single family home that
              was built with passive home standards at the forefront of its
              roots. Super insulated walls, Triple Pane energy efficient
              windows, and a large photovoltaic array on the roof, and 95%
              recycled material […]
            </p>
          </div>
          <div className="py-3">
            <h2>2030 Project, Oakville Ontario</h2>

            <img
              className="py-2"
              style={{ width: "100%", height: "600px" }}
              src="/SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682 (1).jpg"
              alt="SMPL-Design-Studio-57-Cameron-Street-Town-of-the-Blue-Mountains-Exterior-8-1024x682 (1)"
            />
            <p>
              A strong set of forms clad in two opposing materials, which come
              together to create a stunning and unique single family home that
              was built with passive home standards at the forefront of its
              roots. Super insulated walls, Triple Pane energy efficient
              windows, and a large photovoltaic array on the roof, and 95%
              recycled material […]
            </p>
          </div>
        </div>
        <Fotter />
      </div>
    </>
  );
}
