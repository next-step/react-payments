import React, { useCallback, useState } from 'react';
import { TVirtualNumPad } from './types';
import { CARD_VIRTUAL_KEYBOARD } from '../../constants';
import { TVirtualNumberPad } from './VirtualNumberPad';

const { CLICK_TRACING_DELAY, ACTIVE_BUTTON_CLASSNAME } = CARD_VIRTUAL_KEYBOARD;

type THookVirtualNumPad = {
  keys: TVirtualNumberPad;
} & TVirtualNumPad;

export default ({ onClick, keys }: THookVirtualNumPad) => {
  const [buffer, setBuffer] = useState('');

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      const { currentTarget: parent, target } = event;
      const childNodes = Array.from(parent?.childNodes || []);

      const index = childNodes.indexOf(target as ChildNode);
      const newValue = buffer + keys[index];
      setBuffer(() => newValue);
      onClick?.(newValue);

      const randomIndexes = childNodes
        .map((_, idx) => idx)
        .filter((_, idx) => idx !== index)
        .sort(() => Math.random() - 0.5);

      [index, randomIndexes[0]].forEach((idx) => {
        const node = parent?.childNodes[idx] as HTMLElement;
        node.classList.add(ACTIVE_BUTTON_CLASSNAME);

        setTimeout(() => {
          node.classList.remove(ACTIVE_BUTTON_CLASSNAME);
        }, CLICK_TRACING_DELAY);
      });
    },
    [buffer]
  );

  return { handleClick };
};
