import "./Footer.css";
import Facebook from "../Ui/Icons/Facebook";
import LInkedIn from "../Ui/Icons/LInkedIn";
import Instagram from "../Ui/Icons/Instagram";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");

  return (
    <footer className={path[path.length - 1]}>
      <div className="footer_icons">
        <div>
          <Facebook />
        </div>
        <div>
          <Instagram />
        </div>
        <div>
          <LInkedIn />
        </div>
      </div>
      <p>Terms and Conditions</p>
      <div className="footer_info">
        <p>©Global Shipping Powered by ShellLogix</p>
      </div>
    </footer>
  );
};

export default Footer;
