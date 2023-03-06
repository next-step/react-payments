import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardAddForm } from '@/context/CardAddForm';

export default function CardAliasFields() {
  const {
    cardForm: { cardAlias },
    handleChangeCardForm,
  } = useCardAddForm();

  return (
    <Box display="flex" justify="center" align="center" className="w-100">
      <Input
        styleType="underline"
        className="w-75"
        type="text"
        value={cardAlias}
        onChange={handleChangeCardForm}
        placeholder={CARD.ALIAS.PLACEHOLDER}
        maxLength={CARD.ALIAS.LENGTH}
        data-type={CARD.ALIAS.TYPE}
      />
    </Box>
  );
}
