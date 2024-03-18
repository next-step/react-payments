import { HFlex, Text, VFlex } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { TYPOGRAPHY_SIZE_MAP } from '@/styles/guide';
import { ComponentProps, useId } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

type Variant = 'solid' | 'underline';

export interface TextFieldProps extends ComponentProps<'div'> {
  value: string;
  name: string;
  onChange: NonNullable<ComponentProps<'input'>['onChange']>;
  type: NonNullable<ComponentProps<'input'>['type']>;
  variant?: Variant;
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
  variant = 'solid',
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
        className={twMerge(
          'focus:outline-none h-[45px] px-4',
          twJoin(variant === 'underline' && 'border-b border-black'),
          twJoin(variant === 'solid' && 'bg-[#ecebf1] rounded-md'),

          inputProps?.className
        )}
      />
    </VFlex>
  );
}

interface HelperTextProps extends TextProps {
  error?: boolean;
}

const HelperText = ({ children, error, size = 'base', className, ...rest }: HelperTextProps) => (
  <Text size={size} className={twMerge(twJoin(error ? 'text-red-600' : 'text-[#525252]'), className)} {...rest}>
    {children}
  </Text>
);

TextField.HelperText = HelperText;
