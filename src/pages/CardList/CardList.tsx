import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import AddNewCard from './components/AddNewCard';
import CloseButton from '../../components/CloseButton/CloseButton';
import { CardContext } from '../../App';

interface Props {
  onNext: () => void;
  onEdit: (id: string) => void;
}

const CardList = ({ onNext, onEdit }: Props) => {
  const cardList = CardContext.useSelector(({ context }) => context.cardList);
  const { send } = CardContext.useActorRef();

  const deleteCard = (id: string) => {
    send({ type: 'cardList.deleteCard', value: id });
  };

  return (
    <>
      <Header className='mb-10'>
        <span>보유카드</span>
      </Header>

      <AddNewCard onNext={onNext} />

      <div className='flex-column-center'>
        {cardList?.map((card) => {
          return (
            <div key={card.id} className='relative-box'>
              <CloseButton
                id={card.id}
                style={{ right: 5, top: 24 }}
                onClick={() => deleteCard(card.id)}
              />
              <div className='card-box'>
                <Card {...card} onClick={() => onEdit(card.id)} />
              </div>

              <div className='flex-center '>
                <span className='card-nickname'>{card.nickname}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
