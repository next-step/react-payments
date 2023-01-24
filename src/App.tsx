import { CardAdd, CardList } from "./pages";
import {
  CardStateProvider,
  MyCardsProvider,
  Pages,
  RouteProvider,
} from "./providers";

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
