export const checkAllMasking = (text: string, number: number) => {
  let maskingVal = ''
  const regx = new RegExp(`[0-9\*]{1,${number}}`, 'g')
  if (!text.match(regx)) return

  const masking = [text].map((value, _) => {
    return (maskingVal = value.replace(value, '*'.repeat(value.length)))
  })
  return masking
}
