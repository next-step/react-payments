import { createContext } from 'react';

const routerContext = createContext({
  path: '초깃값',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  changePath: (to: string) => {},
});
routerContext.displayName = 'RouterContext';

export default routerContext;
