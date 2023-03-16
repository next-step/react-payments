import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faM, faRemove, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export const FontAwesomeIcons = {
  arrowLeft: faAngleLeft,
  remove: faRemove,
  modify: faM,
  help: faCircleQuestion,
};

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export type IconButtonPropsType = {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const IconButton = ({ onClick, className, name, size, color }: IconButtonPropsType) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={FontAwesomeIcons[name]} size={size} color={color}></FontAwesomeIcon>
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.16);
  }
`;

export default IconButton;
