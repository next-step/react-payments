import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddCard from "../src/pages/AddCard";
import AddedCardList from "../src/pages/AddedCardList";
import AddedCard from "../src/pages/AddedCard";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddCard></AddCard>,
  },
  {
    path: "AddedCardList",
    element: <AddedCardList />,
  },
  {
    path: "AddedCard",
    element: <AddedCard />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
