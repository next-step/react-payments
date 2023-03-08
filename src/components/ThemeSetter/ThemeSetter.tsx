import React, { PropsWithChildren, HTMLAttributes } from 'react';

import themes, { Themes } from '@/theme/theme';

interface ThemeSetterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: Themes;
}

function ThemeSetter(props: PropsWithChildren<ThemeSetterProps>) {
  const { className, theme, children, ...rest } = props;
  return (
    <div {...rest} className={`${className} ${theme ? themes[theme] : ''}`}>
      {children}
    </div>
  );
}

export { ThemeSetter };
