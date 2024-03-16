import CardBox from './parts/CardBox';
import CardForm from './parts/CardForm';

type EmptyCardProps = {
  onClick: () => void;
};
const EmptyCard = ({onClick}: EmptyCardProps) => (
  <CardBox onClick={onClick}>
    <CardForm status='empty'>
      <div>+</div>
    </CardForm>
  </CardBox>
);

export default EmptyCard;
