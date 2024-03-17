export interface CardProps {
    cardName?: string
    cardNumber?: { first: string, second: string, third: string, fourth: string }
    name?: string
    cardExpireDate?: { month: string, year: string }
    onClick?: () => void
}
