import type { ButtonHTMLAttributes } from 'react';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faM, faRemove, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';

export interface IconButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
}

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export const FontAwesomeIcons = {
  arrowLeft: faAngleLeft,
  remove: faRemove,
  modify: faM,
  help: faCircleQuestion,
  keyboard: faKeyboard,
};
