import React, { PropsWithChildren } from 'react';

import themes, { Themes } from '@/theme/theme';

interface ThemeProviderProps extends PropsWithChildren {
  className?: string;
  theme?: Themes;
}

// 테마를 주입해주는 역할
function ThemeProvider({ className, theme, children }: ThemeProviderProps) {
  return <div className={`${className} ${theme ? themes[theme] : ''}`}>{children}</div>;
}

export { ThemeProvider };
