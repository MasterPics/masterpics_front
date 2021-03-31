import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./router/Navigation";
import Footer from "./router/Footer";
import ContactMain from "./router/Contact/ContactMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <Navigation />
        </Route>
        <Route path="/contact">
          <ContactMain />
        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
