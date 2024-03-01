import '../styles/index.css';
import AddCard from './components/templates/AddCard';
import CardList from './components/templates/CardList';
import SaveCard from './components/templates/SaveCard';

function App() {
  return (
    <div className="root">
      <CardList />
      <AddCard />
      <SaveCard />
    </div>
  );
}

export default App;
