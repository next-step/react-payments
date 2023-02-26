import Card from '../components/Card';
import Button from '../components/Common/Button';
import { PATH } from '../Constant';

const CardList = ({ cardList }) => (
  <main className="flex-column-center">
    <Button to={PATH.REGIST} children="+" className="empty-card button-box" />
    {cardList.map((cardInfo) => (
      <Card isRegistered={true} cardInfo={cardInfo} key={cardInfo.number} />
    ))}
  </main>
);

export default CardList;
