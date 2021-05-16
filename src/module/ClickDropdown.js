import React from "react";
import "../css/module/ClickDropdown.css";

class ClickDropdown extends React.Component {
  state = {
    sort: "",
  };
  render() {
    return (
      <div className="sort">
        <select name="" id="" className="form-control sort ">
          <option value="recent" defaultValue>
            최신순
          </option>
          <option value="like">좋아요순</option>
          <option value="low-pay">낮은 가격순</option>
          <option value="high-pay">높은 가격순</option>
        </select>
      </div>
    );
  }
}

export default ClickDropdown;
