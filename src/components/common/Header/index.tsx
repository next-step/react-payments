import React, { memo, ReactNode } from "react";

import { HeaderEl, StartDecoratorWrapper } from "./header.style";

interface HeaderProps {
  startDecorator?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default memo(function Header({
  startDecorator,
  children,
  className,
}: HeaderProps) {
  return (
    <HeaderEl className={className}>
      {startDecorator && (
        <StartDecoratorWrapper>{startDecorator}</StartDecoratorWrapper>
      )}
      {children}
    </HeaderEl>
  );
});
