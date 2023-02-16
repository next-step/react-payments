import { isAllowedNumberKeys } from '../../util/inputKey';

export function onNumericKeyDownOnly(event: React.KeyboardEvent<HTMLInputElement>) {
  if (!isAllowedNumberKeys(event.key)) event.preventDefault();
}
