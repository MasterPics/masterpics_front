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
          <option value="save">저장순</option>
          <option value="pay">가격순</option>
        </select>
      </div>
    );
  }
}

export default ClickDropdown;
