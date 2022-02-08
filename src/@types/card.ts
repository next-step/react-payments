const CARD_TYPES = ["NONE", "POCO", "JUN", "GONG_WON", "BRAN", "LLOYD", "DOBY", "COLIN", "SUN"] as const;
const CARD_SIZE = ["SMALL", "BIG"] as const;

type CardNumber = [string, string, string, string];

type CardType = typeof CARD_TYPES[number];

type CardSize = typeof CARD_SIZE[number];

interface CardExpiration {
  month: string;
  year: string;
}

interface CardSizeContent {
  WIDTH: string;
  HEIGHT: string;
  PADDING: string;
  CHIP_WIDTH: string;
  CHIP_HEIGHT: string;
  FONT_SIZE: string;
}

interface Card {
  id: string;
  createdAt: number;
  cardName: string;
  cardType: CardType;
  cardNumber: CardNumber;
  cardExpiration: CardExpiration;
  cardUserName: string;
  cardSecurityCode: string;
  cardPassword: string;
}

type CardMap = {
  [Id in Card["id"]]: Card;
};

interface PendingCard extends Omit<Card, "id" | "createdAt"> {}

interface CardFormField extends Omit<PendingCard, "cardName"> {}

export { CardNumber, CardType, CardSize, CardExpiration, CardSizeContent, Card, CardMap, PendingCard, CardFormField };
