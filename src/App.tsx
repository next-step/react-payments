import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import NextStep from "./Components/NextStep";

const App = () => {
  return (
    <>
      <NextStep>
        <Page1 />
      </NextStep>
      <NextStep>
        <Page2 />
      </NextStep>
      <NextStep>
        <Page3 />
      </NextStep>
      <NextStep>
        <Page4 />
      </NextStep>
      <NextStep>
        <Page5 />
      </NextStep>
    </>
  );
};
export default App;
