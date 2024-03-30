export type CardType = {
    id: number,
    cardCompanyName: string,
    cardNumber: { first: string, second: string, third: string, fourth: string },
    userName: string,
    cardExpireDate: string,
    cardAlias?: string
}