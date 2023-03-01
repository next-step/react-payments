import { useRef } from 'react';
/**
 *
 * @param formData
 * @param key
 * @returns
 */
export const handleInputChange = <T extends object>(
  formData: React.MutableRefObject<T>,
  key: string
) => {
  return (value: unknown) => {
    formData.current = {
      ...formData.current,
      [key]: value,
    };
  };
};

export default function useFormData(initialData = {}) {
  const formData = useRef(initialData);
  const getFormData = () => formData;

  return {
    getFormData,
    handleInputChange,
  };
}
