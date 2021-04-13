import "../../css/router/profile/ProfileMain.css";

function ProfileMain({ user }) {
  user = {
    is_valid: true,
    username: "Nagi",
    email: "demon0315@naver.com",
    category: "other use",
    desc:
      "Nunc at erat viverra, consequat est ullamcorper, luctus mauris. Suspendisse commodo tortor ut lectus porta aliquam. Sed eu posuere purus. Mauris in tortor vehicula, consectetur neque quis, pharetra diam. Nullam luctus sapien risus, vitae posuere turpis venenatis a. Quisque ex magna, convallis ac congue sed, commodo sed purus. Integer euismod, ligula eget volutpat hendrerit, risus tortor eleifend tortor, in commodo augue magna cursus neque. Vestibulum congue massa lacus, sit amet aliquam metus facilisis aliquet.",
  };

  return <div className="ProfileMain">ProfileMain</div>;
}

export default ProfileMain;
