import { TextInput } from '@/components/common';
import { Button, InputContainer } from '@/components/UI';
import useFormData from '@/hooks/formHook';
import { updateNickNameByCardUID } from '@/storage/service';
import { CardData, CardKey } from '@/types';
type Props = {
  card: CardData;
};

const CardNickNameForm = ({ card }: Props) => {
  const { getFormData, handleFormInput } = useFormData();
  const formData = getFormData();

  const onSuccess = () => {
    alert('카드 별칭이 설정되었습니다.');
  };

  return (
    <InputContainer>
      <TextInput
        type="text"
        placeholder="카드 별칭을 입력해주세요.(선택)"
        value={card.NICK_NAME}
        autoFocus
        onChange={handleFormInput(formData, CardKey.NICK_NAME)}
      />
      <Button
        css={{ width: '$10' }}
        onClick={handleSave(getFormData, card, onSuccess)}
      >
        설정
      </Button>
    </InputContainer>
  );
};

export default CardNickNameForm;

const MAX_NICK_NAME_LENGTH = 10;
const ERROR_MESSAGE = {
  EMPTY_INPUT: '별칭을 입력해주세요.',
  OVER_LIMITED_TEXT: `별칭은 ${MAX_NICK_NAME_LENGTH}글자까지 입력할 수 있습니다.`,
};

const getErrorMessage = (nickname: string) => {
  if (nickname.length === 0) {
    return ERROR_MESSAGE.EMPTY_INPUT;
  }
  if (nickname.length > MAX_NICK_NAME_LENGTH) {
    return ERROR_MESSAGE.OVER_LIMITED_TEXT;
  }
};

const handleSave = (
  formData: () => React.MutableRefObject<any>,
  card: CardData,
  callback?: () => void
) => {
  return () => {
    const data = formData().current;
    const nickName = data[CardKey.NICK_NAME];
    const errorMessage = getErrorMessage(CardKey.NICK_NAME);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    updateNickNameByCardUID(card, nickName);
    callback?.();
  };
};
