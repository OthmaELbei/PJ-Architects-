import Header from "../1-Header/Header";
import Menu from "../1-Header/Menu";

import Fotter from "../6-Fotter/Fotter";
import "./project.css";
import { Link, Outlet } from "react-router-dom";
// import Allproject from "./Allproject";

export default function Project() {
  return (
    <>
      <div className="parent">
        <Header />

        <Menu />

        <nav className="links">
          <ul>
            <li>
              <Link className="Link" to="/Project">
                All
              </Link>
            </li>
            <li>
              <Link className="Link" to=":postId">
                Cottage
              </Link>
            </li>
            <li>
              <Link className="Link" to="contact">
                Rural
              </Link>
            </li>
            <li>
              <Link className="Link" to="OurInterer">
                OUR INTERIORS
              </Link>
            </li>
            <li>
              <Link className="Link" to="contact">
                Waterfront
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />

        <Fotter />
      </div>
    </>
  );
}
