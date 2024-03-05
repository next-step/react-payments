import { HFlex, Text, VFlex } from '@/components/atoms';
import { TYPOGRAPHY_SIZE_MAP } from '@/styles/guide';
import { ComponentProps, useId } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextFieldProps extends ComponentProps<'div'> {
  value: string;
  name: string;
  onChange: NonNullable<ComponentProps<'input'>['onChange']>;
  type: NonNullable<ComponentProps<'input'>['type']>;
  placeholder?: string;
  lengthLimit?: {
    show?: boolean;
    maxLength: number;
  };

  label?: string;
  inputProps?: ComponentProps<'input'>;
}

export default function TextField({
  value,
  name,
  onChange,
  label,
  placeholder,
  inputProps,
  lengthLimit,
  ...restProps
}: TextFieldProps) {
  const id = useId();

  return (
    <VFlex {...restProps}>
      {label && (
        <HFlex className="justify-between">
          <label className={`mb-1 text-[#525252] ${TYPOGRAPHY_SIZE_MAP['xs']}`} htmlFor={label + id}>
            {label}
          </label>
          {lengthLimit?.show && (
            <Text size="xs">
              {value?.toString().length}/{lengthLimit.maxLength}
            </Text>
          )}
        </HFlex>
      )}
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={label + id}
        placeholder={placeholder}
        maxLength={lengthLimit?.maxLength}
        {...inputProps}
        className={twMerge('focus:outline-none bg-[#ecebf1] h-[45px] rounded-md px-4', inputProps?.className)}
      />
    </VFlex>
  );
}
