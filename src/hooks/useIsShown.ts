import { useState } from "react";

const useIsShown = (initialState = false): [boolean, () => void, () => void] => {
  const [isShown, setIsShown] = useState(initialState);

  const show = () => setIsShown(true);
  const hide = () => setIsShown(false);

  return [isShown, show, hide];
};

export default useIsShown;
