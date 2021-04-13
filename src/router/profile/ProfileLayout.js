import "../../css/router/profile/ProfileLayout.css";
import ProfileCard from "../../module/ProfileCard";
import ProfileMain from "./ProfileMain";
import ProfileEdit from "./ProfileEdit";
import { Route, Switch } from "react-router";

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
      "Nunc at erat viverra, consequat est ullamcorper, luctus mauris. Suspendisse commodo tortor ut lectus porta aliquam. Sed eu posuere purus. Mauris in tortor vehicula, consectetur neque quis, pharetra diam. Nullam luctus sapien risus, vitae posuere turpis venenatis a. Quisque ex magna, convallis ac congue sed, commodo sed purus. Integer euismod, ligula eget volutpat hendrerit, risus tortor eleifend tortor, in commodo augue magna cursus neque. Vestibulum congue massa lacus, sit amet aliquam metus facilisis aliquet.",
  };

  return (
    <div className="ProfileLayout">
      <ProfileCard user={user} />

      <Switch>
        <Route
          path={`${match.path}/:id`}
          render={() => {
            <ProfileMain user={user} />;
          }}
        />
        <Route path={`${match.path}/:id/edit/`} component={ProfileEdit} />
      </Switch>
    </div>
  );
}

export default ProfileLayout;
