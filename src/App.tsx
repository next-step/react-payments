import { CardEdit, CardList } from "./pages";
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
              {page.startsWith(Pages.CARD_EDIT) && (
                <CardStateProvider>
                  <CardEdit />
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
