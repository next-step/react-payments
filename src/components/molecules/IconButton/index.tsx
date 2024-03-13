import { Icon } from '@/components/atoms';
import { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
  src: string;
  alt: string;
  size: number;
  iconProps?: ComponentProps<'img'>;
}

export default function IconButton({
  onClick,
  className,
  size,
  src,
  alt = '',
  iconProps,
  ...restProps
}: IconButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className} aria-label={alt} {...restProps}>
      <Icon src={src} size={size} {...iconProps} />
    </button>
  );
}
