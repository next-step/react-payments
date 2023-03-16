import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faM, faRemove, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export type IconButtonPropsType = {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export const FontAwesomeIcons = {
  arrowLeft: faAngleLeft,
  remove: faRemove,
  modify: faM,
  help: faCircleQuestion,
};
