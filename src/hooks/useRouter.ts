import { useLocation, useNavigate } from 'react-router-dom';

const useRouter = <T>() => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as T;

  const goBack = () => {
    navigate(-1);
  };

  return {
    navigate,
    locationState,
    goBack,
  };
};

export default useRouter;
