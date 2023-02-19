import { useCallback, useContext } from 'react';
import routerContext from '../../context/routerContext';

const useNavigate = () => {
  const { path, changePath } = useContext(routerContext);

  const navigate = useCallback(
    (nextPath: string) => {
      if (path === nextPath) {
        return;
      }

      changePath(nextPath);
    },
    [path, changePath]
  );

  return navigate;
};

export default useNavigate;
