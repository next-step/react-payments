import { CardExpirationDateInput } from './CardExpirationDateInput';
import { CardNumberInput } from './CardNumberInput';
import { CardOwnerNameInput } from './CardOwnerNameInput';
import { CardPasswordInput } from './CardPasswordInput';
import { CardSecurityCodeInput } from './CardSecurityCodeInput';

export const CardInput = () => <></>;

CardInput.Number = CardNumberInput;
CardInput.ExpirationDate = CardExpirationDateInput;
CardInput.OwnerName = CardOwnerNameInput;
CardInput.SecurityCode = CardSecurityCodeInput;
CardInput.Password = CardPasswordInput;
