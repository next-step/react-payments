import { RouterProvider } from "react-router-dom";
import { PaymentsProvider } from "store/context";
import router from "./router";

import "../src/styles/index.css";

function App() {
  return (
    <PaymentsProvider>
      <RouterProvider router={router} />
    </PaymentsProvider>
  );
}

export default App;
