import "../../css/router/profile/ProfileLayout.css";
import ProfileCard from "../../module/ProfileCard";
import ProfileMain from "./ProfileMain";
import ProfileEdit from "./ProfileEdit";
import { Switch, Route } from "react-router-dom";

function ProfileLayout({ match }) {
  const user = {
    is_valid: true,
    username: "Nagi",
    email: "demon0315@naver.com",
    category: "other use",
    phone: "010-2030-9131",
    instagram: "bagjiin471",
    portfolio_count: 10,
    contact_count: 5,
    desc:
      "Nunc at erat viverra, consequat est ullamcorper, luctus mauris. Suspendisse commodo tortor ut lectus porta aliquam. Sed eu posuere purus. Mauris in tortor vehicula, consectetur neque quis, pharetra diam. Nullam luctus sapien risus, vitae posuere turpis venenatis a. Quisque ex magna, convallis ac congue sed, commodo sed purus.",
  };

  return (
    <div className="ProfileLayout">
      <ProfileCard user={user} />

      <div className="content_container">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => <ProfileMain user={user} />}
          />
          <Route
            exact
            path={`${match.path}/edit`}
            render={() => <ProfileEdit />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default ProfileLayout;
