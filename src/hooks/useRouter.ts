import { useLocation, useNavigate } from 'react-router-dom';

const useRouter = <T>() => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as T;

  return {
    navigate,
    locationState,
  };
};

export default useRouter;
