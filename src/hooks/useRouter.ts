import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';

import { PATHS } from 'constants/router';
import { ValueOf } from 'types/utils';

type Paths = ValueOf<typeof PATHS>;

const useRouter = <T>() => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as T;

  const goBack = () => {
    navigate(-1);
  };

  const go = (to: Paths, options?: NavigateOptions) => {
    navigate(to, options);
  };

  const replace = (to: Paths, options?: NavigateOptions) => {
    navigate(to, { replace: true, ...options });
  };

  return {
    navigate,
    locationState,
    goBack,
    go,
    replace,
  };
};

export default useRouter;
