import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "./styles/css-variables.css";

import Router from "./router";
import NoiseOverlay from "./components/NoiseOverlay";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router />
    {/* Global noise overlay (applies to whole page) */}
    <NoiseOverlay opacity={0.7} scanlines={true} scanlineThickness={4} blendMode="screen" intensity={0.05} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
