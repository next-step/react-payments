export type CardType = {
    cardName: string,
    cardNumber: { first: string, second: string, third: string, fourth: string },
    name: string,
    cardExpireDate: string,
    cardAlias?: string
}