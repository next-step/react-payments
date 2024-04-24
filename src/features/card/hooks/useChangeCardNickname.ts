import { ChangeEvent, useCallback } from 'react';

import { useCard } from '@/features/card/providers/CardProvider';

export const useChangeCardNickname = () => {
  const { onChange } = useCard();

  const onChangeNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;

      onChange('nickname', value);
    },
    [onChange],
  );

  return { onChangeNickname };
};
