import { Box, Button, Container, Text } from '@/components/atoms';
import { Header, TextField } from '@/components/molecules';
import { CreditCard } from '@/components/organisms';
import { CardFormFields, CardFormOptions } from '@/components/pages/CardCreate/CardFormContext';
import { useCardInput } from '@/components/pages/CardCreate/useCardInput';
import { useCardOption } from '@/components/pages/CardCreate/useCardOption';
import chevronLeft from '@assets/icon/chevron_left_24.svg';

interface Props {
  onPrev: () => void;
  onSubmit?: (card: CardFormFields & CardFormOptions) => void;
  onEdit?: (cardNickname: string) => void;
}

export default function CardRegistrationSuccess({ onPrev, onSubmit, onEdit }: Props) {
  const { fields } = useCardInput();
  const { options, handleCardNicknameInputChange } = useCardOption();

  const handleConfirmClick = () => {
    if (onSubmit) {
      return onSubmit({
        ...fields,
        ...options,
        cardNickname: options.cardNickname ? options.cardNickname : options.cardCompany,
      });
    }
    if (onEdit) {
      return onEdit(options.cardNickname);
    }
  };

  return (
    <Container className="flex flex-col">
      <Header>
        <Button onClick={onPrev} aria-label="뒤로가기 버튼">
          <img src={chevronLeft} alt="" loading="lazy" width={24} height={24} />
        </Button>
        <Text size="xl">수정하기</Text>
      </Header>

      <Box className="flex flex-col items-center flex-1 mt-20 ">
        <Text size="xl" className="mb-10">
          카드 등록이 완료되었습니다.
        </Text>
        <Box className="flex flex-col gap-4">
          <CreditCard
            cardNumber={fields.cardNumber}
            expirationMonth={fields.expirationMonth}
            expirationYear={fields.expirationYear}
            ownerName={fields.ownerName}
            cardCompany={options.cardCompany}
          />
          <TextField
            variant="underline"
            placeholder="카드 별칭을 입력해주세요."
            type="text"
            value={options.cardNickname}
            onChange={handleCardNicknameInputChange}
            name="cardNickname"
            lengthLimit={{ maxLength: 10 }}
          />
        </Box>
      </Box>

      <Box className="w-full">
        <Button className="block ml-auto" disabled={false} onClick={handleConfirmClick}>
          확인
        </Button>
      </Box>
    </Container>
  );
}
