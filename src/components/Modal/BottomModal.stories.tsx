import React, { useEffect, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomModal from './BottomModal';

export default {
  title: 'BottomModal',
  component: BottomModal,
} as ComponentMeta<typeof BottomModal>;

const ModalStoryWrapper = ({ isOpen }: { isOpen: boolean }) => {
  const [_isOpen, setIsOpen] = useState(isOpen);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>
      <BottomModal onClose={handleClose} isOpen={_isOpen}>
        <div>안녕하세요</div>
      </BottomModal>
    </>
  );
};

const Template: ComponentStory<typeof ModalStoryWrapper> = (args) => (
  <ModalStoryWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {};
