import CardList from './components/card-list/CardList';
import AddCardForm from './components/card-add/AddCardForm';
import CompletedCard from './components/card-complete/CompletedCardForm';

const routes = [
  {
    children: [
      { path: '/', element: <CardList /> },
      { path: '/add', element: <AddCardForm /> },
      { path: '/add/complete', element: <CompletedCard /> },
    ],
  },
];

export default routes;
