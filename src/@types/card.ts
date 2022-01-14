const CARD_TYPES = ["POCO", "JUN", "GONG_WON", "BRAN", "LLOYD", "DOBY", "COLIN", "SUN"] as const;
const CARD_SIZE = ["SMALL", "BIG"] as const;

type CardNumber = [string, string, string, string];

type CardType = typeof CARD_TYPES[number];

type CardSize = typeof CARD_SIZE[number];

interface CardExpiration {
  month?: string;
  year?: string;
}

interface CardSizeContent {
  WIDTH: string;
  HEIGHT: string;
  PADDING: string;
  CHIP_WIDTH: string;
  CHIP_HEIGHT: string;
  FONT_SIZE: string;
}

export { CardNumber, CardType, CardSize, CardExpiration, CardSizeContent };
