import { CardAdd, CardList } from "./pages";
import { Pages, RouteProvider } from "./providers";
import { MyCardsProvider } from "./providers/my-cards";

function App() {
  return (
    <div className="root">
      <MyCardsProvider>
        <RouteProvider>
          {(page) => (
            <>
              {page === Pages.CARD_LIST && <CardList />}
              {page === Pages.CARD_ADD && <CardAdd />}
            </>
          )}
        </RouteProvider>
      </MyCardsProvider>
    </div>
  );
}

export default App;
