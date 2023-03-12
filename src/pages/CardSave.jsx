import Card from '../components/Card';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';
import { usePaymentContext } from '../Context';
import styled from 'styled-components';

const UnderLineInput = styled(Input)`
  background: none;
  outline: none;
  margin: 16px 0;
  padding: 4px 0;
  border: none !important;
  border-bottom: 1px solid #383838 !important;
`;

const CardSave = ({ onSave, onChange }) => {
  const { cardInfo } = usePaymentContext();
  return (
    <main className="flex-column-center">
      <Card cardInfo={cardInfo} size="big" />
      <div className="input-container flex-center w-100">
        <UnderLineInput
          id="nickname"
          type="text"
          placeholder="카드의 별칭을 입력해주세요.(선택)"
          className="w-75"
          maxLength={10}
          value={cardInfo.nickname}
          onChange={onChange}
        />
      </div>
      <Button children="다음" onClick={onSave} />
    </main>
  );
};

export default CardSave;
