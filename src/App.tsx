import { PaymentsProvider } from "pages/payments/modules/payments/PaymentsContext";
import { RouterProvider } from "react-router";
import router from "routes";

function App() {
  return (
    <div className="App">
      <PaymentsProvider>
        <RouterProvider router={router} />
      </PaymentsProvider>
    </div>
  );
}

export default App;
