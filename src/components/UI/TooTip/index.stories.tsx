import { ComponentMeta } from '@storybook/react';

import ToolTip, { useToolTip } from '.';

export default {
  title: 'Components/UI/ToolTip',
  component: ToolTip,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ToolTip>;

export const Default = () => {
  const {
    open: openToolTip,
    onOpen: onOpenToolTip,
    onClose: onCloseToolTip,
  } = useToolTip();

  return (
    <>
      <input onFocus={onOpenToolTip} onBlur={onCloseToolTip} />
      <ToolTip
        open={openToolTip}
        onOpen={onOpenToolTip}
        message="tooltip message"
      >
        Click here
      </ToolTip>
    </>
  );
};
