import Input from '../atoms/Input';
import Text from '../atoms/Text';

function CardHolder(props) {
  const { name } = props;

  return (
    <>
      <Text className="input-title" text="카드 소유자 이름(선택)" />
      <Input
        className="input-basic"
        type="type"
        value={name}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </>
  );
}

export default CardHolder;
