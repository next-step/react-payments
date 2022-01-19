import { InputProps } from './type';

const useInputProps = ({
  defaultValue,
  value,
  onChange,
  ...props
}: InputProps): InputProps => {
  const defaultProps: InputProps = {
    type: 'text',
    variant: 'basic',
    ...(typeof onChange === 'function'
      ? {
          value: value || '',
          onChange,
        }
      : {
          defaultValue: defaultValue || '',
        }),
  };

  return {
    ...defaultProps,
    ...props,
  };
};

export default useInputProps;
