export interface CardInfoProps {
    id: number
    cardCompanyName: string
    cardNumber: { first: string, second: string, third: string, fourth: string }
    userName: string
}