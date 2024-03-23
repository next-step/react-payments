export interface AddCardProps {
    cardName: string
    cardNumber: { first: string, second: string, third: string, fourth: string }
    name: string
    expireDate: { month: string, year: string }
}