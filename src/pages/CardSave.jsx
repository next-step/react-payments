import Card from '../components/Card';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';
import { usePaymentContext } from '../Context';

const CardSave = ({ onSave, onChange }) => {
  const { cardInfo } = usePaymentContext();
  return (
    <main className="flex-column-center">
      <Card cardInfo={cardInfo} size="big" />
      <div className="input-container flex-center w-100">
        <Input
          id="nickname"
          type="text"
          placeholder="카드의 별칭을 입력해주세요.(선택)"
          className="input-underline w-75"
          maxLength={10}
          value={cardInfo.nickname}
          onChange={onChange}
        />
      </div>
      <Button className="button-box button" children="다음" onClick={onSave} />
    </main>
  );
};

export default CardSave;
