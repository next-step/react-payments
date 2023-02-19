export const useNumberKeyInterceptor = () => {
  const keyPressInterceptor = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (Number.isNaN(Number(key)) && key !== 'Backspace') {
      e.preventDefault();
    }
  };
  return keyPressInterceptor;
};
