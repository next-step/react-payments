import CardBox from './CardBox';
import CardForm from './CardForm';

interface EmptyCardProps {
  onClick: () => void;
}
const EmptyCard = ({ onClick }: EmptyCardProps) => {
  return (
    <CardBox onClick={onClick}>
      <CardForm status="empty">
        <div>+</div>
      </CardForm>
    </CardBox>
  );
};

export default EmptyCard;
