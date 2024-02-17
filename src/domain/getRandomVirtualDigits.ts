export const getRandomVirtualDigits = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return [...array, '', 'Delete']
}
