import React, { PropsWithChildren } from 'react';

interface ConditionalComponentWrapperProps extends PropsWithChildren {
  isRender: boolean;
}

function ConditionalComponentWrapper({ isRender, children }: ConditionalComponentWrapperProps) {
  if (!isRender || !children) return null;

  return children as React.ReactElement;
}

export { ConditionalComponentWrapper };
