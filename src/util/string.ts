export function ellipsis(str: string, size: number) {
  return str.length <= size ? str : str.substring(0, size) + '...';
}

export const convertToEncryptedChars = (s = '') => '∙'.repeat(s.length);
