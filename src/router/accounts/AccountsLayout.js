import "../../css/router/accounts/AccountsLayout.css";
import { Switch, Route } from "react-router-dom";
import AccountsSignIn from "./AccountsSignIn";
import AccountsSignUp from "./AccountsSignUp";

function AccountsLayout({ match }) {
  console.log(match);
  return (
    <div className="AccountsLayout">
      <Switch>
        <Route path={`${match.path}/signin`} component={AccountsSignIn} />
        <Route path={`${match.path}/signup`} component={AccountsSignUp} />
      </Switch>
    </div>
  );
}

export default AccountsLayout;
