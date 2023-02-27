import { isAllowedNumberKeys } from '../../util/input';

export function onNumericKeyDownOnly(event: React.KeyboardEvent<HTMLInputElement>) {
  if (!isAllowedNumberKeys(event.key)) event.preventDefault();
}
