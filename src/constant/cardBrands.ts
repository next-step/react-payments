import { styleToken } from '@/shared/styles';
import { CardState } from '@/type';

export const CARD_BRANDS: Pick<CardState, 'label' | 'color'>[] = [
  { label: '레냥카드', color: styleToken.color.crimson },
  { label: '블냥카드', color: styleToken.color.azure },
  { label: '초냥카드', color: styleToken.color.mint },
  { label: '자냥카드', color: styleToken.color.fuchsia },
  { label: '로냥카드', color: styleToken.color.rose },
  { label: '골냥카드', color: styleToken.color.gold },
  { label: '깜냥카드', color: styleToken.color.black },
  { label: '신냥카드', color: styleToken.color.teal200 },
];
