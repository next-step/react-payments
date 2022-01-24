import ReactDOM from "react-dom";
import { Global } from "@emotion/react";

import App from "./App";
import globalCss from "./globalCss";

ReactDOM.render(
  <>
    <Global styles={globalCss} />
    <App />
  </>,
  document.querySelector("#app")
);
