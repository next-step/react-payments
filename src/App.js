import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddCard from "../src/pages/AddCard";
import AddedCardList from "../src/pages/AddedCardList";
import AddedCard from "../src/pages/AddedCard";

import "./styles/index.css";

// TODO : 컴포넌트명 명시화
// TODO : Span도 컴포넌트화 하는게 의미가 있을까? 컴포넌트 당 한 가지 기능 단위로 생각한다면?
// TODO : formatted data 제어 (구분자 포함)
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
