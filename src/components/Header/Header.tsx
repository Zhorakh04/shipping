import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Ui/Icons/Logo";
import FlagUS from "../Ui/Icons/FlagUS";
import SelectSvg from "../Ui/Icons/SelectSvg";
import { useEffect, useState } from "react";
import CloseIcon from "../Ui/Icons/CloseIcon";
import NavMenuIcon from "../Ui/Icons/NavMenuIcon";

const Header = ({ ...props }: any) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.split("/");

  const clickHandler = () => {
    setActive(!active);
  };

  useEffect(() => {
    // if(window.scrollY){

    // }
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);

  return (
    <header className={`header ${path[path.length - 1]}`}>
      <div className="container">
        <Logo />
        <nav>
          {!active ? (
            <NavMenuIcon onClick={clickHandler} />
          ) : (
            <CloseIcon onClick={clickHandler} />
          )}

          <ul
            className={`header_nav_ul ${active ? "active" : ""} ${
              path[path.length - 1]
            }`}
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/product"}>
                Auction <SelectSvg />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Log In</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FlagUS />
                Eng
                <SelectSvg />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <time>05:07</time>
                <SelectSvg />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Contac Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
