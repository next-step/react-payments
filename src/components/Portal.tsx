import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';
//
import type { ChildrenProps } from 'components';

const PortalContext = createContext<HTMLDivElement | null>(null);

const Portal = {
  Provider: ({ children }: ChildrenProps) => {
    const [portalRef, setPortalRef] = useState<HTMLDivElement | null>(null);
    return (
      <PortalContext.Provider value={portalRef}>
        {children}
        <div
          id="portal-container"
          ref={($elem) => {
            if (portalRef !== null || $elem === null) {
              return;
            }

            setPortalRef($elem);
          }}
        />
      </PortalContext.Provider>
    );
  },
  Consumer: ({ children }: ChildrenProps) => {
    return (
      <PortalContext.Consumer>
        {(portalRef) => {
          if (portalRef === null) {
            return null;
          }

          return createPortal(children, portalRef);
        }}
      </PortalContext.Consumer>
    );
  },
};

export default Portal;
