import AddCard from './pages/card-add/AddCard';
import CardInfoProvider from './provider/CardInfoProvider';

const App = () => (
  <div className="root">
    <div className="app">
      <CardInfoProvider>
        <AddCard />
      </CardInfoProvider>
    </div>
  </div>
);

export default App;
