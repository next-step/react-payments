export function ellipsis(str: string, size: number) {
  return str.length <= size ? str : str.substring(0, size) + '...';
}

export function convertToEncryptedChars(s = '') {
  return '∙'.repeat(s.length);
}
