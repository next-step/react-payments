import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardAliasContext } from '@/context/CardAlias';

export default function CardAliasFields() {
  const { cardAlias, handleChangeCardAlias } = useCardAliasContext();

  return (
    <Box display="flex" justify="center" align="center" className="w-100">
      <Input
        styleType="underline"
        className="w-75"
        type="text"
        value={cardAlias}
        onChange={handleChangeCardAlias}
        placeholder={CARD.ALIAS.PLACEHOLDER}
        maxLength={CARD.ALIAS.LENGTH}
      />
    </Box>
  );
}
