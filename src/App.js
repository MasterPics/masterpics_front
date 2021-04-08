import { BrowserRouter, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/App.css";
import GNB from "./router/GNB";
import Footer from "./router/Footer";
import Main from "./router/Main";
import ContactMain from "./router/contact/ContactMain";
import PortfolioMain from "./router/portfolio/PortfolioMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/">
          <GNB />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/contact" exact>
          <ContactMain />
        </Route>
        <Route path="/portfolio" exact>
          <PortfolioMain />
        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
