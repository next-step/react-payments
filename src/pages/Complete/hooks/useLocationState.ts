import { useLocation, useParams } from 'react-router-dom';

import type { Location } from 'react-router-dom';

interface UseLocationState<T> extends Location {
  state: T;
}

function useLocationState<T>() {
  const location = useLocation();
  const { id } = useParams();

  return {
    id,
    ...(location.state as UseLocationState<T>['state']),
  };
}

export default useLocationState;
