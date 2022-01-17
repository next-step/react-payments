export const checkLength = (value: string, min: number, max: number) => value.length >= min && value.length <= max
export const checkNumberString = (value: string) => /^[0-9]{0,}$/.test(value)
