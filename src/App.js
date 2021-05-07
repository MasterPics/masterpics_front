import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/reset.css";
import "./css/App.css";
import { ConstantsContext, Constants } from "./context/ConstantContext";
import GNB from "./router/GNB";
import Footer from "./router/Footer";
import Main from "./router/Main";
import ContactMain from "./router/contact/ContactMain";
import PortfolioMain from "./router/portfolio/PortfolioMain";
import ProfileLayout from "./router/profile/ProfileLayout";
import AccountsLayout from "./router/accounts/AccountsLayout";
import ChatLayout from "./router/chat/ChatLayout";
import ReferenceLayout from "./router/reference/ReferenceLayout";
import PlaceMain from "./router/place/PlaceMain";

function App() {
  return (
    <div className="App">
      <ConstantsContext.Provider value={Constants}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route path="/">
            <GNB />
          </Route>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/contact" component={ContactMain} />
            <Route path="/portfolio" component={PortfolioMain} />
            <Route path="/profile/:id" component={ProfileLayout} />
            <Route path="/accounts" component={AccountsLayout} />
            <Route path="/reference">
              <ReferenceLayout />
            </Route>
            <Route path="/place" component={PlaceMain} />
            <Route path="/chat">
              <ChatLayout />
            </Route>
          </Switch>
          <Route path="/">{/* <Footer /> */}</Route>
        </BrowserRouter>
      </ConstantsContext.Provider>
    </div>
  );
}

export default App;
