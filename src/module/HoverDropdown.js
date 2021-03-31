import "./HoverDropdown.css";

function HoverDropdown() {
  return (
    <div class="dropdown">
      <div class="dropbtn">
        <div class="btn">
          <span class="noselect">
            <a href="javascript:void(0)" onclick="onClickLink('all')">
              Category
            </a>
          </span>
        </div>
      </div>
      <div class="dropdown-content">
        <a href="javascript:void(0)" onclick="onClickLink('photographer')">
          Photographer
        </a>
        <a href="javascript:void(0)" onclick="onClickLink('model')">
          Model
        </a>
        <a href="javascript:void(0)" onclick="onClickLink('HairMakeup')">
          Hair/makeup
        </a>
        <a href="javascript:void(0)" onclick="onClickLink('stylist')">
          Stylist
        </a>
        <a href="javascript:void(0)" onclick="onClickLink('otheruse')">
          Other use
        </a>
      </div>
    </div>
  );
}

export default HoverDropdown;
