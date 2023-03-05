import Card from '../components/Card';
import Button from '../components/Common/Button';
import { PATH } from '../Constant';

const CardList = ({ cardList, movePage, setCardInfo }) => {
  const handleEdit = (evt) => {
    const clickedElement = evt.currentTarget;
    const { number } = clickedElement.dataset;
    cardList.forEach((cardInfo) => {
      if (cardInfo.number === number) {
        setCardInfo(cardInfo);
      }
    });
    movePage(PATH.SAVE);
  };
  return (
    <main className="flex-column-center">
      <Button
        onClick={() => movePage(PATH.REGIST)}
        children="+"
        className="empty-card button-box"
      />
      {cardList.map((cardInfo) => (
        <Card cardInfo={cardInfo} key={cardInfo.number} onClick={handleEdit} />
      ))}
    </main>
  );
};

export default CardList;
