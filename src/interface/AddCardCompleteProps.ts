import {CardInfoProps} from "./CardInfoProps.ts";

export interface AddCardCompleteProps extends CardInfoProps {
    cardExpireDate: string
    cardAlias: string
}