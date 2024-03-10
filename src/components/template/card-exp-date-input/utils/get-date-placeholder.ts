export const getRepeatedPlaceholder = (char: string, repeat: number) => {
  return Array.from({ length: repeat }).fill(char).join('')
}
