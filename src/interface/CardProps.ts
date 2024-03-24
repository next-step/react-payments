import {CardInfoProps} from "./CardInfoProps.ts";

export interface CardProps extends CardInfoProps{
    cardExpireDate?: { month: string, year: string }
    onClick?: () => void
}
