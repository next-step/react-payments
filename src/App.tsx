import { CardAdd, CardList } from "./containers";
import { Pages, RouteProvider } from "./providers";

function App() {
  return (
    <div className="root">
      <RouteProvider>
        {(page) => (
          <>
            {page === Pages.CARD_LIST && <CardList />}
            {page === Pages.CARD_ADD && <CardAdd />}
          </>
        )}
      </RouteProvider>
    </div>
  );
}

export default App;
