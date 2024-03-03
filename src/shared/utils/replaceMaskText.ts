export const replaceMaskText = (text: string, maskChar?: string) => text.replace(/\d/g, maskChar || '●');
