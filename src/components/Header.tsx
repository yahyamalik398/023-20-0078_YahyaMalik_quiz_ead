import { FunctionComponent } from "react";
import "./Header.css";

const Header: FunctionComponent = () => {
  return (
    <div className="group-div">
      <div className="group-child3" />
      <div className="group-parent">
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="menu">Menu</div>
          <div className="about-us1">About Us</div>
          <div className="contact">Contact</div>
        </div>
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      </div>
    </div>
  );
};

export default Header;
