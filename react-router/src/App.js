import { BrowserRouter, Link } from "react-router-dom";
import './App.css';
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
        <br />
      </div>
      <Router />

    </BrowserRouter>
  );
}

export default App;
