import ErrorBoundary from "pages/error/ErrorBoundary";
import { PaymentsProvider } from "pages/payments/modules/payments/PaymentsContext";
import { RouterProvider } from "react-router";
import router from "routes";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PaymentsProvider>
          <RouterProvider router={router} />
        </PaymentsProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
