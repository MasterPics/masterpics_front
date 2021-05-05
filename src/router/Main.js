import "../css/router/Main.css";
import AboutUs from "../module/AboutUs";
import LandingBanner from "../module/LandingBanner";
import MainSection from "../module/MainSection";

const sections = [
  {
    name: "Contact",
    kr: "사진 및 영상작업을 위한 시안 기반의 컨택트",
    en: "with photographer, model, hair&makeup, stylist",
    link: "/contact",
    images: [
      "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    name: "Reference",
    kr: "다양한 키워드의 시안 레퍼런스를 통해 영감을 얻어보세요",
    en: "for your creative inspiration",
    link: "/reference",
    images: [
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    name: "Place",
    kr: "원하는 무드의 키워드 색다른 촬영 공간을 탐색해보세요",
    en: "Search whatever you want with keyword",
    link: "/place",
    images: [
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    name: "Portfolio",
    kr: "다양한 아티스트들과 당신의 작업물을 공유해보세요",
    en: "share your portfolio with other artists",
    link: "/portfolio",
    images: [
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
  },
];

function Main() {
  return (
    <div className="Main">
      <LandingBanner ver={1} />
      <br />
      <LandingBanner ver={2} />
      <AboutUs />
      {sections.map((section, index) => {
        return (
          <MainSection {...section} reverse={index % 2 === 1} key={index} />
        );
      })}
    </div>
  );
}

export default Main;
