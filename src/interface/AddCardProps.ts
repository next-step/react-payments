import {CardInfoProps} from "./CardInfoProps.ts";

export interface AddCardProps extends CardInfoProps {
    expireDate: { month: string, year: string }
}