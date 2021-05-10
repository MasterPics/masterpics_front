import "../css/router/Main.css";
import AboutUs from "../module/AboutUs";
import LandingBanner from "../module/LandingBanner";
import RandomMagazine from "../module/RandomMagazine";
import React from "react";
import useGNBColorChange from "../hooks/useGNBColorChange";

function Main() {
  useGNBColorChange();
  return (
    <div className="Main">
      <LandingBanner ver={1} />
      <AboutUs />

      <RandomMagazine />
      <div className="more">
        <div>
          View more <br />
          MasterPic’s Artists
        </div>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </div>
  );
}

export default Main;
