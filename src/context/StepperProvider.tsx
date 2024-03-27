import { PropsWithChildren, createContext, useReducer } from 'react';
import AddCardForm from '../components/card-add/AddCardForm';
import CardList from '../components/card-list/CardList';
import CompletedCard from '../components/card-complete/CompletedCardForm';

const initState = {};

export const StepperContext = createContext({
  state: initState,
  dispatch: () => null,
});

export default function StepperProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(StepperReducer, initState);

  return (
    <StepperContext.Provider value={{ state, dispatch }}>
      {children}
    </StepperContext.Provider>
  );
}

function StepperReducer(state, action) {
  switch (action.type) {
    case 0:
      return <CardList />;
    case 1:
      return <AddCardForm />;
    case 2:
      return <CompletedCard />;
    default:
      return state;
  }
}

// const steps = [
//   { path: '/', element: <CardList /> },
//   { path: '/add', element: <AddCardForm /> },
//   { path: `/add/complete/:id`, element: <CompletedCard /> },
// ];
