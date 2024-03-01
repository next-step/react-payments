import { ComponentProps } from 'react';

interface IconProps extends ComponentProps<'img'> {
  size: number;
}

function Icon({ alt = '', size, src, className, ...rest }: IconProps) {
  return <img loading="lazy" src={src} alt={alt} width={size} height={size} className={className} {...rest} />;
}

export default Icon;
