import { ComponentMeta } from '@storybook/react';

import { useBooleanState } from '@/hooks/useBooleanState';

import ToolTip from '.';

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
  const [isOpenToolTip, openToolTip, closeToolTip] = useBooleanState();

  return (
    <>
      <input onFocus={openToolTip} onBlur={closeToolTip} />
      <ToolTip
        open={isOpenToolTip}
        onOpen={openToolTip}
        message="tooltip message"
      >
        Click here
      </ToolTip>
    </>
  );
};
