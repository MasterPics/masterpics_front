import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./router/Navigation";
import Footer from "./router/Footer";
import ContactMain from "./router/Contact/ContactMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/">
          <Navigation />
        </Route>
        <Route path="/contact" exact>
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
