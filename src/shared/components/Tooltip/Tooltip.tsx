import { PropsWithChildren, ReactNode, useState } from 'react';
import { Box, Typography } from '@/shared/components';
import { styleToken } from '@/shared/styles';

type Direction = 'top' | 'bottom' | 'left' | 'right';

const getTooltipPosition = (direction: Direction) => {
  switch (direction) {
    case 'top':
      return { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' };
    case 'bottom':
      return { top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' };
    case 'left':
      return { right: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' };
    case 'right':
      return { left: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' };
    default:
      return { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' };
  }
};

const getArrowPosition = (direction: Direction) => {
  switch (direction) {
    case 'top':
      return { bottom: '-4px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
    case 'bottom':
      return { top: '-4px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
    case 'left':
      return { right: '-4px', top: '50%', transform: 'translateY(-50%) rotate(45deg)' };
    case 'right':
      return { left: '-4px', top: '50%', transform: 'translateY(-50%) rotate(45deg)' };
    default:
      return { bottom: '-4px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
  }
};

type TooltipProps = {
  message: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  icon: ReactNode;
};

export const Tooltip = ({ message, direction = 'top', icon }: PropsWithChildren<TooltipProps>) => {
  const [opened, setOpened] = useState(false);

  return (
    <Box
      position="relative"
      display="inline-block"
      onClick={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      {icon}
      {opened && (
        <Box
          width="max-content"
          position="absolute"
          backgroundColor={styleToken.color.teal200}
          padding="8px"
          borderRadius="4px"
          zIndex={styleToken.zIndex.tooltip}
          whiteSpace="nowrap"
          {...getTooltipPosition(direction)}
        >
          <Typography variant="caption" color={styleToken.color.white}>
            {message}
          </Typography>
          <Box
            position="absolute"
            width="8px"
            height="8px"
            backgroundColor={styleToken.color.teal200}
            {...getArrowPosition(direction)}
          />
        </Box>
      )}
    </Box>
  );
};

Tooltip.displayName = 'Tooltip';
