import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/reset.css";
import "./css/App.css";
import GNB from "./router/GNB";
import Footer from "./router/Footer";
import Main from "./router/Main";
import ContactMain from "./router/contact/ContactMain";
import PortfolioMain from "./router/portfolio/PortfolioMain";
import ProfileLayout from "./router/profile/ProfileLayout";
import AccountsLayout from "./router/accounts/AccountsLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/">
          <GNB />
        </Route>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/contact" component={ContactMain} />
          <Route path="/portfolio" component={PortfolioMain} />
          <Route path="/profile" component={ProfileLayout} />
          <Route path="/accounts" component={AccountsLayout} />
        </Switch>
        <Route path="/">
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
