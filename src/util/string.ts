export function getShorteningString(str: string, size: number) {
  return str.length <= size ? str : str.substring(0, size) + '...';
}
