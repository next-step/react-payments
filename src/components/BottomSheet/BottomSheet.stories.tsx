import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useContext } from 'react';
import { ModalContext } from 'src/contexts/ModalContext';
import '../../styles.css';
import BottomSheet from './BottomSheet';

export default {
  title: 'BottomSheet',
  component: BottomSheet,
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = args => {
  const { isOpen, handleOpen } = useContext(ModalContext);
  return (
    <main>
      <button type="button" onClick={() => handleOpen(!isOpen)}>
        Toggle Bottom Sheet
      </button>
      <BottomSheet {...args}>
        <div>Bottom Sheet</div>
      </BottomSheet>
    </main>
  );
};

export const Default = Template.bind({});

Default.args = {
  isBackgroundToggle: true,
};
