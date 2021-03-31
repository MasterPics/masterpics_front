import React from "react";
import "./ClickDropdown.css";

class ClickDropdown extends React.Component {
  state = {
    sort: "",
  };
  render() {
    return (
      <div class="sort">
        <select name="" id="" class="form-control sort ">
          <option value="recent" selected>
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
