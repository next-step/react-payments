export function getNumberKeys() {
  return Array.from({ length: 10 }, (_, idx) => String(idx));
}

export function getAllowedSpecialKeys() {
  return ['Tab', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
}

export function isAllowedNumberKeys(key: string, containSpecialKeys = true) {
  const allowedKeys = containSpecialKeys ? [...getNumberKeys(), ...getAllowedSpecialKeys()] : getNumberKeys();
  return allowedKeys.includes(key);
}

export function setFocus(element: HTMLInputElement) {
  element?.focus();
  element?.setSelectionRange(element.value.length, element.value.length);
}
