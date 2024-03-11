import { Box, Button, Container, Text } from '@/components/atoms';
import { Header, TextField } from '@/components/molecules';
import { CreditCard } from '@/components/organisms';
import { CardFormFields, CardFormOptions } from '@/components/pages/CardForm/CardFormContext';
import { useCardInput } from '@/components/pages/CardForm/useCardInput';
import { useCardOption } from '@/components/pages/CardForm/useCardOption';
import chevronLeft from '@assets/icon/chevron_left_24.svg';

interface Props {
  onPrev: () => void;
  onSubmit: (card: CardFormFields & CardFormOptions) => () => void;
}

export default function CardRegistrationSuccess({ onPrev, onSubmit }: Props) {
  const { fields } = useCardInput();
  const { options, handleCardNicknameInputChange } = useCardOption();

  return (
    <Container className="flex flex-col">
      <Header>
        <Button onClick={onPrev} aria-label="뒤로가기 버튼">
          <img src={chevronLeft} alt="" loading="lazy" width={24} height={24} />
        </Button>
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
        <Button
          className="block ml-auto"
          disabled={false}
          onClick={onSubmit({
            ...fields,
            ...options,
            cardNickname: options.cardNickname ? options.cardNickname : options.cardCompany,
          })}
        >
          확인
        </Button>
      </Box>
    </Container>
  );
}
