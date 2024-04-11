import type { CardState } from '@/card/types';
import { styleToken } from '@/shared';

export enum CardBrandName {
  '레냥카드' = '레냥카드',
  '블냥카드' = '블냥카드',
  '초냥카드' = '초냥카드',
  '자냥카드' = '자냥카드',
  '로냥카드' = '로냥카드',
  '골냥카드' = '골냥카드',
  '깜냥카드' = '깜냥카드',
  '신냥카드' = '신냥카드',
}

export const CARD_BRANDS: Pick<CardState, 'label' | 'color'>[] = [
  { label: CardBrandName['레냥카드'], color: styleToken.color.crimson },
  { label: CardBrandName['블냥카드'], color: styleToken.color.azure },
  { label: CardBrandName['초냥카드'], color: styleToken.color.mint },
  { label: CardBrandName['자냥카드'], color: styleToken.color.fuchsia },
  { label: CardBrandName['로냥카드'], color: styleToken.color.rose },
  { label: CardBrandName['골냥카드'], color: styleToken.color.gold },
  { label: CardBrandName['깜냥카드'], color: styleToken.color.black },
  { label: CardBrandName['신냥카드'], color: styleToken.color.teal200 },
];
