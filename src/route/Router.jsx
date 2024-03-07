import AddCard from '../components/templates/AddCard';
import CardList from '../components/templates/CardList';
import SaveCard from '../components/templates/SaveCard';

export function Router(props) {
  const {
    step,
    data,
    goToPreviousStep,
    goToNextStep,
  } = props;

  switch (step) {
    case 0:
      return <CardList goToNextStep={goToNextStep} />;
    case 1:
      return (
        <AddCard
          goToPreviousStep={goToPreviousStep}
          goToNextStep={goToNextStep}
        />
      );
    case 2:
      return <SaveCard data={data} />;
    default:
      break;
  }
}

export default Router;
