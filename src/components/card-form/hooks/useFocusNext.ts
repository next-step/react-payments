import { useEffect } from "react";

interface IProps {
  invalid: boolean;
  focusNext: () => void;
}

export default function useFocusNext({ invalid, focusNext }: IProps) {
  useEffect(() => {
    if (!invalid) {
      focusNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalid]);
}
