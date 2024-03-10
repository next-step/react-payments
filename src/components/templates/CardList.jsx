import Title from '../atoms/Title';
import CardItem from '../molecules/CardItem';
import EmptyCard from '../molecules/EmptyCard';
import { LABEL_USER_CARD } from '../../constants/labels';

function CardList(props) {
  const { goToNextStep } = props;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Title extraClassName="mb-10" title={LABEL_USER_CARD} />
      </div>
      <CardItem />
      <div className="card-box" onClick={goToNextStep}>
        <EmptyCard mode="list" />
      </div>
    </div>
  );
}

export default CardList;
