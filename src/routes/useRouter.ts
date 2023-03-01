import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type RoutePath = '/card-list' | '/card-name-input' | '/card-registration';

const useRouter = () => {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      back(step = 1) {
        navigate(-step);
      },
      push(path: RoutePath) {
        navigate({
          pathname: path,
        });
      },
    };
  }, [navigate]);
};

export default useRouter;
