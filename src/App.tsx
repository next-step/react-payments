import Routes from './Routes';
import Portal from './components/Portal';

export default function App() {
  return (
    <Portal.Provider>
      <Routes />
    </Portal.Provider>
  );
}
