export interface CardProps {
    cardNumber?: { first: string, second: string, third: string, fourth: string }
    name?: string
    cardExpireDate?: { month: string, year: string }
}
