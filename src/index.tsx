import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "./styles/css-variables.css";

import Router from "./router";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
