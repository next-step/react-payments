import { useCallback, useMemo } from 'react';

export default function useFilter() {
  const filterCardNumber = useCallback((cardNumber: string): string => (
    useMemo(() => (
      cardNumber?.match(/[0-9*]{1,4}/g)?.flatMap((item, index) => {
        if (!item.length) return [];
        if (index > 1) return item.replace(/[0-9]/g, '*');

        return item;
      }).join('-')
    ), [cardNumber])
  ), []);

  const filterExpiredDate = useCallback((expiredDate: string) => (
    useMemo(() => (
      expiredDate?.match(/[0-9]{1,2}/g)?.join(' / ')
    ), [expiredDate])
  ), []);

  const onlyNumber = useCallback((text: string) => (
    text.replace(/[^0-9]/g, '')
  ), []);

  const onlyString = useCallback((text: string) => (
    text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, '')
  ), []);

  const formToArray = useCallback((data: object): string[] => (
    Object.values(data).map((item) => item.value)
  ), []);

  return {
    filterCardNumber,
    filterExpiredDate,
    onlyNumber,
    onlyString,
    formToArray,
  };
}