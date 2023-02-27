import React, { PropsWithChildren } from 'react';

import themes from './theme';

interface ThemeProviderProps extends PropsWithChildren {
  className?: string;
  theme?: string;
}

// 테마를 주입해주는 역할
function ThemeProvider({ className, theme, children }: ThemeProviderProps) {
  // FIXME: STEP2에서 Context Provider를 제공해주는 것으로 변환
  return <div className={`${className} ${theme === 'red' ? themes[theme] : ''}`}>{children}</div>;
}

export { ThemeProvider };
