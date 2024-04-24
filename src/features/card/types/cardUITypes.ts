import { CARD_BOX_TYPE, CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';

export type CardBoxType = (typeof CARD_BOX_TYPE)[keyof typeof CARD_BOX_TYPE];
export type CardChipSize = (typeof CARD_CHIP_SIZE)[keyof typeof CARD_CHIP_SIZE];
