import { CARD_BRANDS } from '@/constants/card';

export type CardBrand = (typeof CARD_BRANDS)[number]['name'];
