import "../../css/router/accounts/AccountsLayout.css";
import { Switch, Route } from "react-router-dom";
import AccountsSignIn from "./AccountsSignIn";
import AccountsSignUp from "./AccountsSignUp";
import AccountsForget from "./AccountsForget";
import AccountsChange from "./AccountsChange";

function AccountsLayout({ match }) {
  return (
    <div className="AccountsLayout">
      <Switch>
        <Route path={`${match.path}/signin`} component={AccountsSignIn} />
        <Route path={`${match.path}/signup`} component={AccountsSignUp} />
        <Route path={`${match.path}/forget`} component={AccountsForget} />
        <Route path={`${match.path}/change`} component={AccountsChange} />
      </Switch>
    </div>
  );
}

export default AccountsLayout;
