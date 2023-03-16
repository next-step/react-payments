import React, { PropsWithChildren, HTMLAttributes } from 'react';

import themes, { Themes } from '@/theme/theme';

interface ThemeSetterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: Themes;
}

export function ThemeSetter({ className, theme, children, ...props }: PropsWithChildren<ThemeSetterProps>) {
  return (
    <div {...props} className={`${className} ${theme ? themes[theme] : ''}`}>
      {children}
    </div>
  );
}
