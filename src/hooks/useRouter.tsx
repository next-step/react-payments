import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const go = useCallback(
    (path: string) => {
      navigate({ pathname: path });
    },
    [navigate]
  );

  return {
    back,
    go,
  };
};
