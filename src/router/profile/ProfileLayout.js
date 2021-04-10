import "../../css/router/profile/ProfileLayout.css";
import ProfileMain from "./ProfileMain";
import HoverDropdown from "../../module/HoverDropdown";

function ProfileLayout({ user }) {
  user = {
    is_valid: true,
    username: "Nagi",
    email: "demon0315@naver.com",
    category: "other use",
    desc:
      "Nunc at erat viverra, consequat est ullamcorper, luctus mauris. Suspendisse commodo tortor ut lectus porta aliquam. Sed eu posuere purus. Mauris in tortor vehicula, consectetur neque quis, pharetra diam. Nullam luctus sapien risus, vitae posuere turpis venenatis a. Quisque ex magna, convallis ac congue sed, commodo sed purus. Integer euismod, ligula eget volutpat hendrerit, risus tortor eleifend tortor, in commodo augue magna cursus neque. Vestibulum congue massa lacus, sit amet aliquam metus facilisis aliquet.",
  };

  return (
    <div className="ProfileLayout">
      <div className="tabs">
        <HoverDropdown name="My Profile" />
        <HoverDropdown
          name="My Posts"
          items={[{ name: "Contact" }, { name: "Portfolio" }]}
        />
        <HoverDropdown
          name="My Saves"
          items={[{ name: "Contact" }, { name: "Portfolio" }]}
        />
      </div>

      <div>
        <ProfileMain />
      </div>
    </div>
  );
}

export default ProfileLayout;
