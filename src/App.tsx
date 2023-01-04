import { CardAdd, CardList } from "./containers";
import { useState } from "react";
import { Pages, RouteProvider } from "./providers";

function App() {
  const [page, setPage] = useState(Pages.CARD_LIST);

  return (
    <div className="root">
      <RouteProvider page={page} setPage={setPage}>
        {page === Pages.CARD_LIST && <CardList />}
        {page === Pages.CARD_ADD && <CardAdd />}
      </RouteProvider>
    </div>
  );
}

export default App;
