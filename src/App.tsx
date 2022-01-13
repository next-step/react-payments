import { Global } from "@emotion/react";

import globalCss from "./globalCss";

const App = () => {
  return (
    <>
      <Global styles={globalCss} />
      <div>hello</div>
    </>
  );
};

export default App;
