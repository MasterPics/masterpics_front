import "../css/module/AboutUs.css";
import React from "react";
import AboutUsMainContent from "../module/AboutUsMainContent.js";

const aboutUsList = [
  {
    title: "Contact",
    desc: "작업을 위한 시안 기반의 컨택트를 진행해보세요.",
    link: "/contact",
  },
  {
    title: "Portfolio",
    desc: "다양한 아티스트들과 작업물을 공유해보세요.",
    link: "/portfolio",
  },
  {
    title: "Reference",
    desc: "다양한 키워드의 레퍼런스를 통해 영감을 얻어보세요.",
    link: "/reference",
  },
  {
    title: "Place",
    desc: "원하는 무드의 키워드로 촬영을 위한 공간을 탐색하세요.",
    link: "/place",
  },
];

function AboutUs(props) {
  return (
    <div className="AboutUs">
      <div className="title-content">
        <h1>ABOUT US</h1>

        <div className="goal">
          마스터픽스는 촬영 관련 직군의 아티스트들이 인지도나 지인 기반이 아닌,
          <br />
          시안 및 포트폴리오를 기반으로 컨택트 할 수 있도록 도와주는
          서비스입니다.
          <br />
          상호무페이의 개인작업을 권장하며, 아티스트들 간의 성장 과정을 함께하는
          것을 목표로 하고 있습니다.
          <br />
        </div>
      </div>
      <div className="main-content">
        {aboutUsList.map((aboutUs, index) => {
          return <AboutUsMainContent {...aboutUs} key={index} />;
        })}
      </div>
    </div>
  );
}
export default AboutUs;
