import { Children, isValidElement, ReactElement, ReactNode } from 'react';

export const findComponentsInChildren = (children: ReactNode, targetComponentName: string) =>
  Children.toArray(children).flatMap((child): ReactElement<{ index: number }>[] => {
    if (isValidElement(child) && typeof child.type !== 'string') {
      const componentName = (child.type as any)?.name;
      if (componentName === targetComponentName) {
        return [child as ReactElement<{ index: number }>];
      }
      if (isValidElement(child) && child.props?.children) {
        return findComponentsInChildren(child.props.children, targetComponentName);
      }
    }
    return [];
  });
