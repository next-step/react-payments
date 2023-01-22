import { CardAdd, CardList } from "./pages";
import { Pages, RouteProvider } from "./providers";
import { MyCardsProvider } from "./providers/my-cards";
import { CardStateProvider } from "./pages/card-add/providers";

function App() {
  return (
    <div className="root">
      <MyCardsProvider>
        <RouteProvider>
          {(page) => (
            <>
              {page === Pages.CARD_LIST && <CardList />}
              {page === Pages.CARD_ADD && (
                <CardStateProvider>
                  <CardAdd />
                </CardStateProvider>
              )}
            </>
          )}
        </RouteProvider>
      </MyCardsProvider>
    </div>
  );
}

export default App;
