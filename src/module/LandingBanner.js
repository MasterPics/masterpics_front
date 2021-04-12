import "../css/module/LandingBanner.css";

function LandingBanner() {
  return (
    <div className="LandingBanner">
      <div className="text_container">
        <h1 className="logo">MasterPic's</h1>
        <h5>Find everything for your Masterpiece</h5>
        <h3>개인작업을 위한 컨택트 및 포트폴리오 공유 서비스</h3>
      </div>

      <div className="background_container">
        <div className="box-gray" id="center-box"></div>
        <div className="circle-blue" id="top-left-circle"></div>
        <div className="categories">
          <div draggable className="category photographer">
            Photographer
          </div>
          <div draggable className="category stylist">
            Stylist
          </div>
          <div draggable className="category model">
            Model
          </div>
          <div draggable className="category hair-makeup">
            Hair&makeup
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
