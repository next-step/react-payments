import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TextInput from '@/components/common/Input';
import {
  Button,
  ColumnLayout,
  CreditCard,
  InputContainer,
  Text,
  TopNavigation,
} from '@/components/UI';
import useFormData from '@/hooks/formHook';
import { useRouter } from '@/hooks/useRouter';
import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData, CardKey } from '@/types';

export const CardDetailPage = () => {
  const params = useParams();
  const { go } = useRouter();

  const [card, setCard] = useState<CardData | undefined>(undefined);

  const { getFormData, handleFormInput } = useFormData();
  const formData = getFormData();
  const haveCard = card && Object.values(card).every(Boolean);

  useEffect(() => {
    const cards = getItem(StorageKey.CARD_LIST) as CardData[];
    const selectedCard = cards.find((card) => card.UID == params.cardId);
    setCard(selectedCard);
  }, []);

  if (!haveCard) {
    return (
      <ColumnLayout css={{ height: '100%' }}>
        <Text>카드가 존재하지 않습니다.</Text>
        <Button
          css={{ marginTop: '$3', width: '$10' }}
          onClick={() => go('/list')}
        >
          카드 목록
        </Button>
      </ColumnLayout>
    );
  }

  return (
    <ColumnLayout css={{ gap: '$3' }}>
      <TopNavigation>카드 별칭 수정하기</TopNavigation>
      <CreditCard size="small" cardInfo={card} />
      <InputContainer>
        <TextInput
          type="text"
          placeholder="카드 별칭을 입력해주세요."
          value={card.NICK_NAME}
          autoFocus
          onChange={handleFormInput(formData, CardKey.NICK_NAME)}
        />
        <Button
          css={{ width: '$10' }}
          onClick={handleSave(getFormData, card, () => go('/list'))}
        >
          설정
        </Button>
      </InputContainer>
    </ColumnLayout>
  );
};

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

function handleSave(
  formData: () => React.MutableRefObject<any>,
  card: CardData,
  callback?: () => void
) {
  return () => {
    const data = formData().current;
    const nickName = data['nickName'];
    const errorMessage = getErrorMessage(CardKey.NICK_NAME);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const cards = getItem(StorageKey.CARD_LIST) as CardData[];

    setItem(StorageKey.CARD_LIST, [
      ...cards.filter(({ UID }) => UID != card.UID),
      { ...card, nickName },
    ]);

    callback?.();
  };
}
