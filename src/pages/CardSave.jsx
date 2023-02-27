import Card from '../components/Card';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';

const CardSave = ({ cardInfo, onSave, onChange }) => {
  return (
    <main className="flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card isRegistered={true} cardInfo={cardInfo} size="big" />
      <div className="input-container flex-center w-100">
        <Input
          id="nickname"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          className="input-underline w-75"
          value={cardInfo.nickname}
          onChange={onChange}
        />
      </div>
      <Button
        className="button-box registor-button"
        children="다음"
        onClick={onSave}
      />
    </main>
  );
};

export default CardSave;
