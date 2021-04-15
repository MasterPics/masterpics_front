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
    profile_img:
      "https://images.unsplash.com/photo-1618308178796-f4dc0a03bab6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
            render={() => <ProfileEdit user={user} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default ProfileLayout;
