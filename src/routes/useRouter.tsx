import { useNavigate } from 'react-router-dom';

type RoutePath = '/alias' | '/form' | '/';

const useRouter = () => {
  const navigate = useNavigate();

  const back = (step = 1) => {
    navigate(-step);
  };

  const push = (path: RoutePath) => {
    navigate({
      pathname: path,
    });
  };
  return { back, push };
};

export default useRouter;
