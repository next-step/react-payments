import { ChangeEvent } from 'react';
import { useCardInfoContext } from '@/context/CardInfo';
import HStack from '@components/atoms/HStack/HStack';
import VStack from '@components/atoms/VStack/VStack';
import Box from '@components/atoms/Box/Box';
import Button from '@components/atoms/Button/Button';
import { Input } from '@components/molecules/Input/Input';
import Header from '@components/organisms/Header/Header';
import CardDisplay from '@components/organisms/CardDisplay/CardDisplay';

type AddCardCompletedProps = {
  onNext: () => void;
};

export default function AddCardCompleted({ onNext }: AddCardCompletedProps) {
  const { cardInfo, setCardInfo, updateCard } = useCardInfoContext();

  const handleCardAliasChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      [name]: value,
    }));

    updateCard(name, value ?? cardInfo.cardCompany.name, cardInfo);
  };

  return (
    <div className='flex-column-center'>
      <HStack>
        <Header className='mb-10'>카드등록이 완료되었습니다.</Header>
      </HStack>

      <CardDisplay size='big' cardInfo={cardInfo} />

      <Input.Container size='w-100'>
        <VStack>
          <Input.Underline
            className='w-75'
            type='text'
            placeholder='카드의 별칭을 입력해주세요.(선택)'
            maxLength={10}
            autoFocus
            name='cardAlias'
            value={cardInfo.cardAlias}
            onChange={handleCardAliasChange}
          />
          <div className='input-flex-end w-75'>
            <Input.Title>{`${cardInfo.cardAlias.length}/${10}`}</Input.Title>
          </div>
        </VStack>
      </Input.Container>

      <Box className='mt-50'>
        <Button
          className='button-text button-success button-active'
          onClick={onNext}
        >
          완료
        </Button>
      </Box>
    </div>
  );
}
